# ChatCart: agente conversazionale con interfaccia generativa

Relazione finale di *stage* di Edoardo De Piccoli presso Halue S.r.l., per la laurea in Informatica all’Università di Padova.

La versione corrente è [`tesi.pdf`](tesi.pdf).

## Struttura

```text
tesi.tex      documento principale: l'ordine delle parti
tesi.pdf      la tesi compilata
stile.tex     dati del frontespizio, impaginazione, comandi
capitoli/     una parte per file, nell'ordine del documento
assets/       figure finite (PDF e immagini), incluse così come sono
```

1. **Halue e il commercio digitale**: contesto aziendale, tecnologie e processi di lavoro.
2. **Oltre la conversazione testuale**: motivazioni, obiettivi e vincoli del progetto.
3. **Progetto e sviluppo di ChatCart**: analisi, architettura, realizzazione e verifica.
4. **Valutazione retrospettiva**: risultati rispetto agli obiettivi e maturazione professionale.

## Compilazione

Con [mise](https://mise.jdx.dev/) installato, dalla radice del repository:

```sh
mise install
mise run anteprima  # build/tesi.pdf
mise run pdf        # aggiorna anche tesi.pdf
```

L'unico strumento di compilazione è Tectonic, che al primo utilizzo scarica i pacchetti LaTeX necessari.
