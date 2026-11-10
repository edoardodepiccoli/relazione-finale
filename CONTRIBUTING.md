# Scrivere e impaginare la relazione

## Dove lavorare

```text
tesi.tex            ordine di inclusione dei contenuti
config/
  dati.tex          titolo, autore, matricola, relatore, anno accademico
  stile.tex         pagina, caratteri, spaziatura, colori, tabelle e codici
  comandi.tex       rimandi e voci di glossario
preliminari/        frontespizio e sommario
capitoli/
  01-halue.tex      titolo e sommario del capitolo, poi una riga \input per sezione
  01-halue/         un file per sezione, numerato nell'ordine del capitolo
finali/             acronimi, glossario e riferimenti
figure/
  comuni/           sigillo dell'università e segnaposto
  01-halue/         diagrammi TikZ del capitolo 1
  02-ragioni/       figure del capitolo 2
modelli/            esempi da copiare: capitolo, sezione, figura, tabella
build/              anteprima, log e SyncTeX, esclusi da Git
tesi.pdf            copia compilata destinata alla revisione
```

Le cartelle delle figure dei singoli capitoli si creano quando servono.
Il documento contiene anche le sezioni ancora da scrivere: i paragrafi di intento restano al loro posto finché vengono sostituiti dal testo.

## Capitoli e sezioni

Ogni capitolo ha un file in `capitoli/` con il titolo e il breve sommario che precede la prima sezione, seguiti da una riga `\input{capitoli/capitolo/sezione}` per ogni sezione. Ogni sezione sta in un file a sé nella cartella del capitolo, con un numero che ne ricorda la posizione (`02-clientela.tex`); le sottosezioni restano nel file della sezione. Usa `\chapter`, `\section` e `\subsection`; lascia allo stile comune dimensioni, numerazione e spaziature. Scrivi in UTF-8, con le lettere accentate direttamente nel testo. Separa i paragrafi con una riga vuota e usa il tab per indentare gli ambienti.

Per aggiungere una sezione, crea il file nella cartella del capitolo e aggiungi il suo `\input` al file del capitolo, nella posizione voluta. Per aggiungere un capitolo, copia `modelli/capitolo.tex` in `capitoli/`, crea la cartella delle sue sezioni e aggiungi il relativo `\include{capitoli/nome}` in `tesi.tex`. La compilazione non cerca automaticamente i file delle cartelle: un esempio o una bozza non entrano nel documento per errore. Tutti i percorsi partono dalla radice del repository.

## Rimandi e glossario

Assegna identificativi descrittivi e stabili, senza numeri di pagina o di sezione:

```latex
\section{Obiettivi e vincoli del progetto}
\label{sec:obiettivi}

Descrivo gli obiettivi nella \secref{sec:obiettivi}.
```

Usa `\figref{fig:nome}`, `\tabref{tbl:nome}` e `\codref{lst:nome}` per gli altri inserti. Il comando include il nome italiano e il numero, entrambi cliccabili. Dopo una didascalia, inserisci sempre il relativo `\label`.

Alla prima occorrenza di un termine del glossario, mantieni la definizione essenziale nel testo e usa:

```latex
\gloss{e-commerce}{\emph{e-commerce}}
```

Il termine e il pedice G rimandano insieme alla voce. Nelle occorrenze successive scrivi il termine normalmente. Aggiorna `finali/acronimi.tex` e aggiungi l'approfondimento dentro l'ambiente `description` di `finali/glossario.tex`:

```latex
\voceglossario{e-commerce}{\emph{E-commerce}}{
	Commercio di prodotti o servizi attraverso canali digitali.
}
```

`\rimandoglossario{chiave}{testo}` crea lo stesso collegamento senza aggiungere il pedice, per esempio nell'elenco degli acronimi. Il corsivo si applica esplicitamente con `\emph` ai termini stranieri.

## Figure, tabelle e codice

Conserva ogni figura nella cartella del capitolo, per esempio `figure/01-halue/ticket.tex`. Usa PNG o JPEG per le immagini raster. Non servono conversioni o comandi esterni durante la compilazione.

Tutti i diagrammi si scrivono in TikZ, in un file `.tex` nella cartella del capitolo, largo quanto il testo, e si includono con `\input` dentro l'ambiente `figure`, dopo `\setstretch{1}`. `config/stile.tex` definisce ciò che hanno in comune: i colori `FiguraTesto`, `FiguraTenue`, `FiguraBordo` e `FiguraAccento`, il carattere `\FiguraSeminero` per i titoli, gli stili `partizione`, `intestazione`, `titolo` e `freccia` e il comando `\voce{titolo}{dettaglio}` per le voci con un titolo e un dettaglio grigio. I modelli sono in `figure/01-halue/`: `ticket.tex` per un diagramma di attività, `attivita.tex` e `ritmi.tex` per schemi più semplici.

I *mockup* di interfaccia, che mostrano solo il layout con barre grigie al posto del testo, si scrivono in HTML nella cartella del capitolo e si esportano in PDF vettoriale con Chrome senza interfaccia; il comando è nel commento in testa al file, per esempio `figure/02-ragioni/confronto.html`. Si includono con `\includegraphics[width=\textwidth]`.

Copia l'ambiente di `modelli/figura.tex` e modifica percorso, didascalia e identificativo. Cita e spiega ogni inserto nel testo; indica nella didascalia la fonte delle immagini non originali. Il sigillo dell'università resta nel solo frontespizio.

Le didascalie stanno sempre sotto figure, tabelle e codici sorgente. Per le tabelle copia `modelli/tabella.tex`. L'ambiente `tabellatesi` riceve colonne, didascalia e identificativo, applica lo stile comune e mette la didascalia sotto la tabella. Una tabella non si spezza mai tra due pagine: se non entra nello spazio rimasto passa intera alla pagina successiva, quindi deve stare in una pagina. Lo stesso vale per elenchi, figure e codici: nessun inserto va diviso tra due pagine, e dopo ogni compilazione controlla che non succeda. Le colonne `P{0.4}P{0.6}` occupano rispettivamente il 40% e il 60% della larghezza: le frazioni devono sommare a 1. Righe alternate, colori, spaziatura e dimensione del carattere si modificano in `config/stile.tex`.

Per un frammento di codice con didascalia ed elenco automatico (lo stile mette la didascalia sotto il codice, ovunque sia scritta):

```latex
\begin{codelisting}
	\caption{Descrizione del frammento.}
	\label{lst:esempio}
	\begin{lstlisting}[language=Java]
// codice
	\end{lstlisting}
\end{codelisting}
```

I riferimenti sono raccolti in `finali/riferimenti.tex`; le fonti già presenti e la nota a piè di pagina rimangono esplicite. Al momento non è necessario un programma separato per la bibliografia.

## Anteprima e revisione

`mise run anteprima` compila in `build/tesi.pdf` e conserva `build/tesi.log` e i dati SyncTeX. Apri il PDF nel tuo lettore durante la scrittura. Se la compilazione fallisce, correggi il primo errore nel log: l'anteprima eventualmente già presente può appartenere alla compilazione precedente.

Per VS Code sono incluse la raccomandazione di LaTeX Workshop e una ricetta Tectonic: dopo aver installato l'estensione, il salvataggio di un sorgente ricompila l'anteprima. Il comando dell'estensione «View LaTeX PDF» apre il lettore integrato. Serve che `mise` sia disponibile nel `PATH` dell'editor. Puoi anche usare un altro editor LaTeX e mantenere i comandi da terminale.

Prima di una revisione esegui `mise run pdf`: aggiorna `tesi.pdf` soltanto dopo una compilazione riuscita. Controlla visivamente frontespizio, indice, tabelle, didascalie e rimandi, quindi includi sorgenti e PDF nello stesso commit. La compilazione non esegue commit, tag o push.

La formattazione comune vive in `config/`: evita di correggere i singoli capitoli con spazi verticali o interruzioni di pagina aggiunti soltanto per sistemare una particolare versione del testo.
