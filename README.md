# ChatCart: agente conversazionale con interfaccia generativa

Relazione finale di *stage* di Edoardo De Piccoli presso Halue S.r.l., per la laurea in Informatica all’Università di Padova.

## Struttura della tesi

1. **Halue e il commercio digitale**: contesto aziendale, tecnologie e processi di lavoro.
2. **Oltre la conversazione testuale**: motivazioni, obiettivi e vincoli del progetto.
3. **Progetto e sviluppo di ChatCart**: analisi, architettura, realizzazione e verifica.
4. **Valutazione retrospettiva**: risultati rispetto agli obiettivi e maturazione professionale.

Il documento comprende inoltre sommario, acronimi, glossario e riferimenti.

La versione corrente è in [`tesi.pdf`](tesi.pdf); i sorgenti sono in LaTeX, con un file per capitolo in [`capitoli/`](capitoli/).

## Scrittura e compilazione

Con [mise](https://mise.jdx.dev/) installato, dalla radice del repository:

```sh
mise trust
mise install
mise run anteprima  # build/tesi.pdf, per la scrittura
mise run pdf        # aggiorna anche tesi.pdf, per la revisione
mise run diagrammi  # rigenera SVG e PDF dei diagrammi Mermaid in figure/
```

L'unico strumento di compilazione è Tectonic; al primo utilizzo scarica i pacchetti LaTeX necessari. I diagrammi sono già esportati in PDF: solo per modificarli servono Node.js e Google Chrome. Ogni comando compila l'intero documento e risolve automaticamente indice e rimandi.

L'ordine dei contenuti è in [`tesi.tex`](tesi.tex), i dati del frontespizio in [`config/dati.tex`](config/dati.tex) e la formattazione in [`config/stile.tex`](config/stile.tex). La [guida alla scrittura](CONTRIBUTING.md) descrive struttura, figure, tabelle, glossario e configurazione dell'editor.
