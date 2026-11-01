# Progettazione e realizzazione di ChatCart

## Metodo di lavoro

### Pianificazione e interazione con il tutor aziendale

Confronto le modalità di interazione previste dal piano di lavoro con quelle effettive: le riunioni quotidiane, i resoconti di fine giornata su Slack, la riunione settimanale, i confronti su richiesta e le giornate in sede. Discuto le difficoltà di allineamento della fase iniziale, dovute anche alla mia scarsa iniziativa nel chiedere chiarimenti tempestivamente, e il modo in cui le ho superate. Descrivo infine i resoconti settimanali al relatore e la svolta della terza settimana: con gli obiettivi obbligatori già soddisfatti, io e il tutor abbiamo deciso di dedicare il resto dello stage alla sperimentazione.

### Organizzazione del lavoro e tracciamento delle attività

Illustro come ho organizzato il lavoro da remoto: il *brain dump* quotidiano, da cui ricavavo le attività e ne stabilivo le priorità, gli elenchi di attività nel *repository*, gli appunti, i *commit* in un formato convenzionale e i documenti di progettazione che redigevo prima delle modifiche più estese.

### Strumenti di sviluppo e assistenti basati sull'intelligenza artificiale

Presento gli strumenti che ho impiegato per lo sviluppo, la verifica e il rilascio. Tra questi includo gli assistenti di programmazione basati su modelli linguistici, Claude Code e OpenCode, che in Halue considerano strumenti come gli altri, il cui valore dipende da un uso consapevole. Descrivo il ruolo che hanno avuto nel mio lavoro: la sperimentazione e la validazione rapida delle idee, fino a prototipi funzionanti nell'arco di una giornata, a cui seguiva l'implementazione definitiva scritta a mano; e le attività di supporto, come la generazione dei dati di prova e degli script di valutazione.

## Studio preliminare e analisi

### L'ecosistema delle applicazioni Shopify

Descrivo la fase iniziale dello stage, dedicata allo studio del funzionamento di un'applicazione Shopify (autenticazione, *app proxy*, estensioni del tema, differenze tra Storefront API e Admin API) e degli strumenti per la costruzione di agenti. Distinguo le conoscenze che avevo già acquisito lavorando sui temi Liquid da quelle che ho dovuto costruire per la prima volta.

### Un'analisi dei requisiti iterativa {#sec:requisiti}

Motivo la scelta, condivisa con il tutor, di non svolgere un'analisi dei requisiti completa all'inizio del progetto: il lavoro aveva carattere esplorativo, nessun cliente ne dettava i requisiti, e una specifica fissata a priori sarebbe diventata presto obsoleta. Descrivo il procedimento che ho seguito: a partire dagli obiettivi del piano ho abbozzato i casi d'uso principali, rappresentati in un diagramma, e ne ho ricavato requisiti che ho rivisto a ogni iterazione. Una tabella riporta i requisiti con un identificativo, raggruppati per area; ne misuro la copertura nella @sec:quantitativi.

<!-- DA DEFINIRE: i casi d'uso iniziali e come raggruppare i requisiti (utente, agente, app...). Base possibile: la specifica cancellata il 15/10 in chat-cart. -->

## Architettura del sistema

Illustro l'architettura di ChatCart con un diagramma: il *widget* nel negozio (*app layer*), il *server* che ospita l'agente (*agent layer*), la *dashboard* del commerciante e i servizi esterni. Approfondisco il contratto tra agente e *widget*: un unico elenco di strumenti, distinti tra strumenti che leggono dati e strumenti che mostrano componenti, da cui derivo i tipi condivisi tra le due parti. Motivo infine la scelta di uno stile funzionale anziché orientato agli oggetti, la decisione di non introdurre astrazioni prima che fossero necessarie e i *design pattern* che ho adottato quando lo sono diventate.

## Realizzazione

<!-- DA RIVEDERE: confermare la divisione di questa sezione dopo. -->

### L'agente conversazionale

Descrivo il processo con cui l'agente costruisce una risposta: un ciclo in cui il modello invoca gli strumenti per consultare il catalogo, finché non seleziona un componente da mostrare. Discuto come ho ripartito il controllo del comportamento tra le istruzioni al modello e le regole fisse nel codice, come ho generato i tre messaggi suggeriti e come ho scelto il modello e il livello di ragionamento, confrontandone velocità e accuratezza. Un diagramma di sequenza segue il percorso di un messaggio dall'utente alla risposta.

### Il *widget* e l'integrazione con il tema del negozio

Presento il *widget*: i componenti (schede prodotto con selezione della variante, schede con le risposte tratte dalle pagine del negozio, collegamenti alle collezioni), il supporto a più lingue e valute e, in particolare, la sincronizzazione del carrello con il tema del negozio. Analizzo perché ogni tema Shopify gestisce il carrello in modo diverso e come ho affrontato il problema con un *adapter* per ciascun tema e una soluzione di ripiego.

### Metriche di utilizzo e analisi delle conversazioni

Descrivo gli eventi che il *widget* registra, il *funnel* che la *dashboard* presenta al commerciante e l'analisi automatica delle conversazioni con Jev, un modello più rapido che assegna a ciascuna conversazione un punteggio e alcune etichette.

## Sperimentazioni abbandonate

Dedico questa sezione alle funzionalità che ho sperimentato e poi abbandonato, perché documentano l'orientamento alla ricerca che io e il tutor abbiamo dato al progetto dalla terza settimana: i messaggi di invito che comparivano prima dell'apertura della chat, i tre tentativi di adattare l'aspetto del *widget* al tema del negozio, l'impiego di Jev nella scelta dei componenti, il pannello a tutto schermo su *desktop*. Per ciascuna espongo l'ipotesi di partenza, l'esito che ho osservato e le ragioni dell'abbandono.

## Verifica e validazione

Illustro la mia strategia di verifica: test automatici concentrati sui punti in cui ChatCart interagisce con sistemi esterni che non controllo, eseguiti su una base di dati reale e senza simulare i moduli interni. Discuto i limiti dei test tradizionali applicati a un agente che non risponde mai due volte nello stesso modo, e le valutazioni in cui un secondo modello giudica il comportamento dell'agente su scenari predefiniti. Concludo con la validazione svolta insieme al tutor e con il rilascio dell'applicazione *online*.

## Risultati

### Il prodotto dal punto di vista dell'utente

Presento ChatCart dal punto di vista di chi lo utilizza, attraverso una sequenza di schermate: un cliente che cerca un prodotto, lo confronta con altri, lo aggiunge al carrello e raggiunge il pagamento; poi il commerciante che consulta il *funnel* e le conversazioni nella *dashboard*. Dichiaro inoltre i limiti noti del prototipo.

### Risultati quantitativi {#sec:quantitativi}

Riporto in tabelle i dati quantitativi del progetto: la copertura dei requisiti definiti nella @sec:requisiti, la copertura dei test con le scelte che la motivano, le righe di codice per ciascuna parte dell'applicazione, il numero di *commit* e di documenti prodotti.
