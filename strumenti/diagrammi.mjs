// Genera SVG e PDF vettoriale di ogni diagramma Mermaid (.mmd) in figure/.
// Pele produce l'SVG; Chrome headless lo stampa in un PDF grande quanto il disegno.
// Uso: mise run diagrammi [-- figure/01-halue/ticket.mmd ...]
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { basename, dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { PeleError, render } from "pele";

const CARTELLA_FIGURE = "figure";
const CARTELLA_TEMPORANEA = "build/diagrammi";
const CHROME =
	process.env.CHROME ??
	"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const FONT = "Helvetica, Arial, sans-serif";

// Colori in tinta con le tabelle della tesi (config/stile.tex).
const TEMA = {
	bg: "#ffffff",
	fg: "#1f2328",
	muted: "#59636e",
	line: "#59636e",
	surface: "#f3f4f6",
	"surface-alt": "#e2e5e9",
	border: "#bfbfbf",
	accent: "#8c1c2b",
};

// Pele legge i colori dalle variabili --pele-*: uno <style> in testa all'SVG
// le fissa, così il file resta uguale ovunque venga aperto.
function conTema(svg) {
	const variabili = Object.entries(TEMA)
		.map(([nome, valore]) => `--pele-${nome}:${valore}`)
		.join(";");
	return svg.replace(
		/^<svg[^>]*>/,
		(apertura) =>
			`${apertura}<style>.pele{${variabili};background:${TEMA.bg}}</style>`,
	);
}

async function trovaDiagrammi(cartella) {
	const voci = await readdir(cartella, { withFileTypes: true });
	const file = [];
	for (const voce of voci) {
		const percorso = join(cartella, voce.name);
		if (voce.isDirectory()) file.push(...(await trovaDiagrammi(percorso)));
		else if (voce.name.endsWith(".mmd")) file.push(percorso);
	}
	return file.sort();
}

async function stampaPdf(svg, larghezza, altezza, destinazione) {
	const html = join(
		CARTELLA_TEMPORANEA,
		`${basename(destinazione, ".pdf")}.html`,
	);
	await writeFile(
		html,
		`<!doctype html><meta charset="utf-8"><style>
@page { size: ${larghezza}px ${altezza}px; margin: 0 }
html, body { margin: 0; padding: 0 }
svg { display: block; width: ${larghezza}px; height: ${altezza}px }
</style>${svg}`,
	);
	execFileSync(
		CHROME,
		[
			"--headless",
			"--disable-gpu",
			"--no-pdf-header-footer",
			`--print-to-pdf=${resolve(destinazione)}`,
			pathToFileURL(resolve(html)).href,
		],
		{ stdio: "ignore" },
	);
}

async function main() {
	if (!existsSync(CHROME)) {
		console.error(`Chrome non trovato in ${CHROME}: imposta la variabile CHROME.`);
		process.exit(1);
	}
	const argomenti = process.argv.slice(2);
	const diagrammi = argomenti.length
		? argomenti
		: await trovaDiagrammi(CARTELLA_FIGURE);
	await mkdir(CARTELLA_TEMPORANEA, { recursive: true });

	for (const file of diagrammi) {
		const sorgente = await readFile(file, "utf8");
		const base = join(dirname(file), basename(file, ".mmd"));
		try {
			const { svg, width, height } = render(sorgente, {
				fontFamily: FONT,
				padding: 16,
				autoDirection: false,
			});
			const svgTematizzato = conTema(svg);
			await writeFile(`${base}.svg`, `${svgTematizzato}\n`);
			await stampaPdf(
				svgTematizzato,
				Math.ceil(width),
				Math.ceil(height),
				`${base}.pdf`,
			);
			console.log(`${file} → ${base}.svg, ${base}.pdf`);
		} catch (errore) {
			if (!(errore instanceof PeleError)) throw errore;
			console.error(`${file}:${errore.line}:${errore.column} ${errore.message}`);
			process.exitCode = 1;
		}
	}
	await rm(CARTELLA_TEMPORANEA, { recursive: true, force: true });
}

main().catch((errore) => {
	console.error(errore);
	process.exitCode = 1;
});
