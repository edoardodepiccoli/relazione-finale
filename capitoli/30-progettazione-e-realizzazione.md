# Progetto e sviluppo di ChatCart

Racconto lo *stage* come un piccolo progetto a sé stante: il metodo di lavoro, l'analisi, la progettazione, la realizzazione, le sperimentazioni, la verifica e i risultati.

## Metodo di lavoro

### Pianificazione e interazione con il *tutor* aziendale

Confronto le modalità di interazione previste dal piano di lavoro con quelle effettive: le riunioni quotidiane, i resoconti di fine giornata su Slack, la riunione settimanale, i confronti su richiesta e le giornate in sede. Discuto le difficoltà della fase iniziale e il modo in cui le ho superate. Descrivo infine i resoconti settimanali al relatore e la svolta della terza settimana: con gli obiettivi obbligatori già soddisfatti, io e il *tutor* abbiamo deciso di dedicare il resto dello *stage* alla sperimentazione. Un diagramma temporale mette a confronto la pianificazione originaria del piano di lavoro con il modo in cui ho usato davvero il tempo, attività per attività.

### Organizzazione del lavoro e tracciamento delle attività

Illustro come ho organizzato il mio lavoro, svolto in gran parte da remoto: come individuavo le attività e ne stabilivo le priorità, come ne tenevo traccia e come preparavo le modifiche più estese prima di realizzarle.

### Strumenti e assistenti di programmazione

Presento gli strumenti che ho impiegato per lo sviluppo, la verifica e il rilascio, tra cui gli assistenti di programmazione basati su modelli linguistici. Di questi descrivo l'uso che ne ho fatto: la sperimentazione e la validazione rapida delle idee, fino a prototipi funzionanti nell'arco di una giornata, a cui seguiva l'implementazione definitiva scritta a mano; la stesura dei documenti di progettazione, per individuare in anticipo i casi limite e i *test* necessari; le attività di supporto, come la generazione dei dati di prova. Ciò che ho imparato da questo uso lo discuto nella @sec:maturazione.

## Studio preliminare e analisi

### L'ecosistema delle applicazioni Shopify {#sec:ecosistema-applicazioni}

Descrivo la fase iniziale dello *stage*, dedicata allo studio del funzionamento di un'applicazione Shopify (autenticazione, *app proxy*, estensioni del tema, differenze tra Storefront API e Admin API) e degli strumenti per la costruzione di agenti. Distinguo le conoscenze che avevo già acquisito lavorando sui temi Liquid da quelle che ho dovuto costruire per la prima volta.

### Un'analisi dei requisiti iterativa {#sec:requisiti}

Motivo la scelta, condivisa con il *tutor*, di non svolgere un'analisi dei requisiti completa all'inizio del progetto: il lavoro aveva carattere esplorativo, nessun cliente ne dettava i requisiti, e una specifica fissata a priori sarebbe diventata presto obsoleta. Descrivo il procedimento che ho seguito: a partire dagli obiettivi del piano ho abbozzato i casi d'uso principali e ne ho ricavato i requisiti, che ho rivisto a ogni iterazione insieme al prodotto. Un diagramma mostra i casi d'uso nella loro forma finale e una tabella riporta i requisiti a cui sono arrivato, raggruppati per area, ciascuno con un identificativo e l'obiettivo del piano da cui deriva; ne misuro la copertura nella @sec:quantitativi.

<!-- DA DEFINIRE: prima i casi d'uso iniziali, poi come raggruppare i requisiti (utente, agente, app...). Solo dopo valutare se partire dalla specifica cancellata il 15/10 in chat-cart. -->

## Architettura del sistema

### Visione d'insieme

Illustro l'architettura di ChatCart con un diagramma: il *widget* nel negozio (*app layer*), il *server* che ospita l'agente (*agent layer*), la *dashboard* del commerciante e i servizi esterni. Motivo la scelta di uno stile funzionale anziché orientato agli oggetti, la decisione, su indicazione del *tutor*, di non introdurre astrazioni prima che fossero necessarie e i *design pattern* che ho adottato quando lo sono diventate.

### Il contratto tra agente e *widget* {#sec:contratto}

Approfondisco la scelta su cui si regge l'interfaccia generativa: un unico elenco di strumenti, condiviso tra agente e *widget*, che distingue gli strumenti che leggono i dati del negozio da quelli che mostrano un componente e chiudono la risposta. Spiego come da questo elenco derivo i tipi condivisi tra le due parti, così che il *widget* sappia sempre disegnare ciò che l'agente sceglie.

## Realizzazione

### L'agente conversazionale

Descrivo il processo con cui l'agente costruisce una risposta: un ciclo in cui il modello invoca gli strumenti per consultare il catalogo, finché non seleziona un componente da mostrare. Discuto come ho ripartito il controllo del comportamento tra le istruzioni al modello e le regole fisse nel codice, come ho generato i tre messaggi suggeriti e come ho scelto il modello e il livello di ragionamento, confrontandone velocità e accuratezza. Un diagramma di sequenza segue il percorso di un messaggio dall'utente alla risposta. Questa parte risponde agli obiettivi OB2 e OB3.

### Il *widget* e l'integrazione con il tema del negozio

Presento il *widget*: i componenti (schede prodotto con selezione della variante, schede con le risposte tratte dalle pagine del negozio, collegamenti alle collezioni), il supporto a più lingue e valute e, in particolare, la sincronizzazione del carrello con il tema del negozio. Analizzo perché ogni tema Shopify gestisce il carrello in modo diverso e come ho affrontato il problema con un *adapter* per ciascun tema e una soluzione di ripiego. Questa parte risponde agli obiettivi OB1, OB4 e DE1.

### Metriche di utilizzo e analisi delle conversazioni

Descrivo gli eventi che il *widget* registra, il *funnel* che la *dashboard* presenta al commerciante e l'analisi delle conversazioni con Jev, un modello decisionale di TypeSafe AI uscito durante lo *stage*: a differenza di un modello linguistico generativo, non produce testo ma restituisce decisioni tipizzate con la loro probabilità. Da qui apro il confronto tra i due tipi di modello nei compiti decisionali. Questa parte risponde all'obiettivo OB5.

## Sperimentazioni e sviluppi futuri {#sec:sperimentazioni}

Dedico questa sezione alle funzionalità che ho sperimentato senza portarle nel prodotto finale, perché documentano l'orientamento alla ricerca che io e il *tutor* abbiamo dato al progetto dalla terza settimana: i messaggi di invito che comparivano prima dell'apertura della chat, i tre tentativi di adattare l'aspetto del *widget* al tema del negozio, l'impiego di Jev nella scelta dei componenti, il pannello a tutto schermo su *desktop*. Per ciascuna espongo l'ipotesi di partenza, l'esito che ho osservato e le ragioni per cui io e il *tutor* abbiamo deciso di non inserirla nel prodotto consegnato. Da queste prove ricavo infine le strade lungo cui ChatCart potrebbe evolvere in futuro.

<!-- DA CONFERMARE: quali strade di evoluzione indicare. -->

## Verifica e validazione {#sec:verifica}

Illustro la mia strategia di verifica: *test* automatici concentrati sui punti in cui ChatCart interagisce con sistemi esterni che non controllo, eseguiti su una base di dati reale e senza simulare i moduli interni, e le ragioni di questa scelta. Discuto i limiti dei *test* tradizionali applicati a un agente che non risponde mai due volte nello stesso modo. Concludo con la validazione svolta insieme al *tutor* e con il rilascio dell'applicazione *online*.

## Risultati

### Il prodotto dal punto di vista dell'utente

Presento ChatCart dal punto di vista di chi lo utilizza, attraverso una sequenza di schermate: un cliente che cerca un prodotto, lo confronta con altri, lo aggiunge al carrello e raggiunge il pagamento; poi il commerciante che consulta il *funnel* e le conversazioni nella *dashboard*. Dichiaro inoltre i limiti noti del prototipo.

### Risultati quantitativi {#sec:quantitativi}

Riporto in tabelle i dati quantitativi del progetto: la copertura dei requisiti definiti nella @sec:requisiti, la copertura dei *test* con le scelte che la motivano, le righe di codice per ciascuna parte dell'applicazione e i documenti che ho consegnato al *team*.
