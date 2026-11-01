# Lo sviluppo di ChatCart

## Metodo di lavoro

### Pianificazione e rapporto con il tutor

Confronto le modalità di interazione previste dal piano con quelle reali: le riunioni quotidiane, i resoconti di fine giornata su Slack, la riunione settimanale, le chiamate al bisogno, i giorni in sede. Racconto le difficoltà iniziali di allineamento, dovute anche alla mia poca iniziativa nel chiedere chiarimenti in tempo, e come le ho superate. Descrivo i resoconti settimanali al relatore e la svolta della terza settimana: con gli obiettivi obbligatori già coperti, io e il tutor abbiamo deciso di dedicare il resto dello stage alla sperimentazione.

### Organizzazione personale e tracciamento

Descrivo come ho organizzato il lavoro da remoto: il *brain dump* quotidiano da cui ricavavo le attività e le loro priorità, le liste di cose da fare nel *repository*, gli appunti, i *commit* con un formato convenzionale, i documenti di progettazione che scrivevo prima delle modifiche più grandi.

### Strumenti di lavoro, intelligenza artificiale compresa

Presento gli strumenti che ho usato per sviluppare, verificare e rilasciare. Tra questi metto gli assistenti di programmazione basati su modelli linguistici, Claude Code e OpenCode, che in Halue mi hanno presentato come uno strumento come gli altri, da usare in modo consapevole. Spiego come li ho usati: per sperimentare, validare un'idea in fretta e provare una funzionalità in giornata, scrivendo poi a mano l'implementazione finale; e per il lavoro di contorno, come i dati di prova e gli script di valutazione.

## Studio dell'ecosistema e analisi

### Studio dell'ecosistema Shopify

Racconto la prima fase dello stage: lo studio di come funziona un'applicazione Shopify (autenticazione, *app proxy*, estensioni del tema, differenza tra Storefront API e Admin API) e degli strumenti per costruire agenti. Spiego cosa sapevo già dal mio lavoro sui temi Liquid e cosa ho dovuto imparare da zero.

### Requisiti che evolvono con il prototipo

Spiego perché, d'accordo con il tutor, non ho fatto un'analisi dei requisiti completa all'inizio: il progetto era esplorativo, senza un cliente che li dettasse, e requisiti fissati a priori sarebbero diventati presto inutili. Descrivo come li ho definiti invece: sono partito dagli obiettivi del piano, ho abbozzato i casi d'uso principali, con un diagramma, e ne ho ricavato requisiti che ho rivisto a ogni iterazione. Una tabella riporta i requisiti con un identificativo, raggruppati per area, e li uso nel §3.7.2 per misurarne la copertura.

<!-- DA DEFINIRE: i casi d'uso iniziali e come raggruppare i requisiti (utente, agente, app...). Base possibile: la specifica cancellata il 15/10 in chat-cart. -->

## Progettazione dell'architettura

Descrivo l'architettura di ChatCart con un diagramma: il *widget* nel negozio (*app layer*), il *server* con l'agente (*agent layer*), la *dashboard* del commerciante e i servizi esterni. Mi soffermo sul contratto tra agente e *widget*: un unico elenco di strumenti, distinti tra strumenti che leggono dati e strumenti che mostrano componenti, da cui ricavo i tipi condivisi dai due lati. Spiego la scelta di uno stile funzionale invece che a oggetti, la scelta di non anticipare astrazioni prima che servissero e i *design pattern* che ho introdotto quando sono serviti.

## Sviluppo

<!-- DA RIVEDERE: confermare la divisione del §3.4 dopo. -->

### L'agente

Descrivo come l'agente costruisce una risposta: il ciclo in cui il modello chiama gli strumenti per leggere il catalogo, finché non sceglie un componente da mostrare. Spiego come ho diviso il controllo del comportamento tra le istruzioni al modello e le regole fisse nel codice, come ho generato i tre messaggi suggeriti e come ho scelto il modello e il suo livello di ragionamento, confrontando velocità e accuratezza. Un diagramma di sequenza segue un messaggio dall'utente alla risposta.

### Il *widget* nel negozio

Descrivo il *widget*: i componenti (schede prodotto con scelta della variante, schede con le risposte del negozio, collegamenti alle collezioni), il supporto a più lingue e valute, e soprattutto la sincronizzazione del carrello con il tema del negozio. Qui spiego perché ogni tema Shopify si comporta in modo diverso e come l'ho risolto con un *adapter* per tema e una soluzione di riserva.

### Metriche e analisi delle conversazioni

Descrivo gli eventi che il *widget* registra, il *funnel* che la *dashboard* mostra al commerciante e l'analisi automatica delle conversazioni con Jev, un modello più veloce che assegna a ogni conversazione un punteggio e delle etichette.

## Le strade abbandonate

Dedico una sezione alle funzionalità che ho provato e poi tolto, perché mostrano la direzione di ricerca presa dalla terza settimana: i messaggi di invito mostrati prima che il cliente apra la chat, i tre tentativi di adattare l'aspetto del *widget* al tema del negozio, l'uso di Jev per scegliere i componenti, il pannello a tutto schermo su *desktop*. Per ognuna spiego cosa mi aspettavo, cosa ho osservato e perché l'ho abbandonata.

## Verifica e validazione

Spiego la mia strategia di verifica: test automatici concentrati sui punti in cui ChatCart incontra sistemi esterni che non controllo, su una base di dati reale e senza simulare i moduli interni. Descrivo i limiti dei test classici su un agente che non risponde mai due volte allo stesso modo, e le valutazioni in cui un secondo modello giudica il comportamento dell'agente su scenari dati. Chiudo con la validazione insieme al tutor e con il rilascio dell'applicazione *online*.

## Risultati

### Il prodotto visto dall'utente

Mostro ChatCart dal lato di chi lo usa, con una sequenza di schermate: un cliente che cerca un prodotto, lo confronta, lo aggiunge al carrello e arriva al pagamento; poi il commerciante che legge il *funnel* e le conversazioni nella *dashboard*. Dichiaro anche i limiti noti del prototipo.

### Risultati quantitativi

Riporto i numeri del progetto in tabelle: la copertura dei requisiti del §3.2.2, la copertura dei test con le scelte che la spiegano, le righe di codice per parte dell'applicazione, il numero di *commit* e di documenti prodotti.
