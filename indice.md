# Indice proposto {.unnumbered}

Propongo qui la struttura della relazione finale «ChatCart: agente conversazionale con interfaccia generativa», per capitoli e sezioni. Sotto ogni voce scrivo in breve cosa intendo raccontare e con quali illustrazioni. I titoli sono provvisori, e alcune sezioni del capitolo 3 si preciseranno durante la stesura.

## Parti iniziali {.unnumbered .unlisted}

Sommario, convenzioni tipografiche, indice generale, elenco delle figure e delle tabelle. Nelle convenzioni spiego che i termini in lingua straniera sono in corsivo e che la prima volta che uso un termine tecnico ne do una definizione essenziale nel testo, lasciando al glossario solo l'approfondimento.

## 1 Halue: consulenza tecnologica per il commercio digitale {.unnumbered .unlisted}

### 1.1 Come ho conosciuto Halue {.unnumbered .unlisted}

Prima di descrivere l'azienda dichiaro le mie fonti e quanto le ritengo affidabili. Distinguo ciò che ho visto di persona (i giorni in sede, le riunioni quotidiane con il team, il racconto dei processi interni che mi ha fatto il tutor, l'incontro finale con il fondatore) da ciò che mi è stato riferito (il colloquio conoscitivo, le risposte scritte del tutor alle mie domande) e da ciò che l'azienda dichiara in pubblico (il sito, i profili LinkedIn, i progetti pubblicati).

### 1.2 Profilo dell'azienda {.unnumbered .unlisted}

Descrivo chi è Halue: una società di consulenza nata nel 2022, di dieci persone, Società Benefit dal 2024, con i ruoli presenti nel team. Presento le linee di attività in ordine di peso, dall'*e-commerce* su Shopify e Salesforce ai servizi di intelligenza artificiale, e chiarisco che Halue lavora su progetti per i clienti, senza prodotti propri.

### 1.3 Clienti e modo di lavorare con loro {.unnumbered .unlisted}

Descrivo il tipo di clientela: aziende private medio-grandi di moda, sport, *retail* e cosmetica, che vendono su più mercati. Cito solo i clienti e i progetti che Halue rende pubblici sul proprio sito. Spiego come arrivano i progetti e con quali formule contrattuali, e il ruolo della *partnership* con Shopify Plus.

### 1.4 Tecnologie {.unnumbered .unlisted}

Presento le tecnologie ricorrenti nei progetti di Halue: l'ecosistema Shopify (temi Liquid, API GraphQL, Hydrogen, app personalizzate), la suite Salesforce, i CMS *headless* e il *cloud*. Spiego cosa cambia nei progetti con l'intelligenza artificiale, dove i modelli linguistici si collegano ai dati del negozio tramite strumenti costruiti in azienda. Una tabella riassume tecnologie e ambiti d'uso.

### 1.5 Processi interni {.unnumbered .unlisted}

Descrivo come Halue porta un progetto dalla richiesta del cliente al rilascio: la raccolta dei requisiti in *ticket*, il doppio *refinement*, le stime, lo Scrum adattato a un'agenzia con i suoi ruoli, le convenzioni sul codice, i test, il rilascio su tre ambienti, la manutenzione, la documentazione con gli ADR e le retrospettive. Un diagramma mostra il ciclo di vita di un *ticket*.

### 1.6 Propensione all'innovazione {.unnumbered .unlisted}

Chiudo il capitolo con il rapporto di Halue con l'innovazione: lo *scouting* tecnologico, la quota di tempo che l'azienda dichiara di dedicare alla ricerca e sviluppo, e soprattutto l'uso quotidiano dell'intelligenza artificiale nello sviluppo, nella documentazione e nella gestione dei progetti, con la regola che l'IA propone e la persona decide. Questa sezione prepara il capitolo 2.

## 2 Oltre la chat testuale {.unnumbered .unlisted}

### 2.1 Gli stage in Halue {.unnumbered .unlisted}

Descrivo il rapporto di Halue con gli stage: quanti ne ospita, da dove vengono gli stagisti, e il doppio scopo di esplorare temi che in produzione non avrebbe tempo di studiare e di conoscere persone con cui lavorare. Spiego come nasce un progetto di stage e cosa succede al lavoro dopo, e lego gli stage alla propensione all'innovazione vista nel §1.6.

### 2.2 Il problema: chat che rispondono solo con testo {.unnumbered .unlisted}

Presento il problema che lo stage affronta. I *chatbot* dei negozi *online* rispondono quasi sempre solo con testo, che serve a poco quando il cliente deve scoprire prodotti, confrontarli o scegliere una taglia. Descrivo le alternative sul mercato (*chatbot* generici e strumenti come Shopify Sidekick, pensato per il commerciante) e perché le soluzioni pronte si adattano male all'identità del marchio e al suo catalogo.

### 2.3 La strategia di Halue {.unnumbered .unlisted}

Inserisco lo stage nella strategia dell'azienda: costruire competenza sul commercio agentico, in cui un agente di intelligenza artificiale accompagna il cliente fino all'acquisto. Descrivo cosa c'era prima (l'esperienza su Shopify Plus e sull'IA) e cosa Halue vuole farne dopo: proporre questo tipo di soluzione ai clienti come servizio.

### 2.4 Il progetto proposto {.unnumbered .unlisted}

Racconto come è nato il progetto: Halue mi ha proposto due temi, l'interfaccia generativa e la gestione del contesto, e io ho scelto il primo proponendo l'idea di un agente che sceglie e popola componenti dell'interfaccia. Presento l'architettura su due livelli prevista dal piano di lavoro, gli obiettivi obbligatori, desiderabili e facoltativi in una tabella, la ripartizione delle ore e i vincoli: otto settimane, lavoro in parte da remoto, un solo negozio di sviluppo, un prototipo di ricerca e non un prodotto.

### 2.5 Perché ho scelto questo stage {.unnumbered .unlisted}

Spiego onestamente la mia scelta. Da marzo 2026 lavoro come sviluppatore Shopify in proprio, ma avevo lavorato solo su temi Liquid, mai su applicazioni: per questo ho scelto Halue appena l'ho vista tra le proposte, senza confrontare altre offerte. L'idea del progetto viene da un bisogno reale di un mio cliente, che cercava un *chatbot* collegato al negozio capace di mostrare prodotti e non solo testo.

## 3 Lo sviluppo di ChatCart {.unnumbered .unlisted}

### 3.1 Metodo di lavoro {.unnumbered .unlisted}

#### 3.1.1 Pianificazione e rapporto con il tutor {.unnumbered .unlisted}

Confronto le modalità di interazione previste dal piano con quelle reali: le riunioni quotidiane, i resoconti di fine giornata su Slack, la riunione settimanale, le chiamate al bisogno, i giorni in sede. Racconto le difficoltà iniziali di allineamento, dovute anche alla mia poca iniziativa nel chiedere chiarimenti in tempo, e come le ho superate. Descrivo i resoconti settimanali al relatore e la svolta della terza settimana: con gli obiettivi obbligatori già coperti, io e il tutor abbiamo deciso di dedicare il resto dello stage alla sperimentazione.

#### 3.1.2 Organizzazione personale e tracciamento {.unnumbered .unlisted}

Descrivo come ho organizzato il lavoro da remoto: il *brain dump* quotidiano da cui ricavavo le attività e le loro priorità, le liste di cose da fare nel *repository*, gli appunti, i *commit* con un formato convenzionale, i documenti di progettazione che scrivevo prima delle modifiche più grandi.

#### 3.1.3 Strumenti di lavoro, intelligenza artificiale compresa {.unnumbered .unlisted}

Presento gli strumenti che ho usato per sviluppare, verificare e rilasciare. Tra questi metto gli assistenti di programmazione basati su modelli linguistici, Claude Code e OpenCode, che in Halue mi hanno presentato come uno strumento come gli altri, da usare in modo consapevole. Spiego come li ho usati: per sperimentare, validare un'idea in fretta e provare una funzionalità in giornata, scrivendo poi a mano l'implementazione finale; e per il lavoro di contorno, come i dati di prova e gli script di valutazione.

### 3.2 Studio dell'ecosistema e analisi {.unnumbered .unlisted}

#### 3.2.1 Studio dell'ecosistema Shopify {.unnumbered .unlisted}

Racconto la prima fase dello stage: lo studio di come funziona un'applicazione Shopify (autenticazione, *app proxy*, estensioni del tema, differenza tra Storefront API e Admin API) e degli strumenti per costruire agenti. Spiego cosa sapevo già dal mio lavoro sui temi Liquid e cosa ho dovuto imparare da zero.

#### 3.2.2 Requisiti che evolvono con il prototipo {.unnumbered .unlisted}

Spiego perché, d'accordo con il tutor, non ho fatto un'analisi dei requisiti completa all'inizio: il progetto era esplorativo, senza un cliente che li dettasse, e requisiti fissati a priori sarebbero diventati presto inutili. Descrivo come li ho definiti invece: sono partito dagli obiettivi del piano, ho abbozzato i casi d'uso principali, con un diagramma, e ne ho ricavato requisiti che ho rivisto a ogni iterazione. Una tabella riporta i requisiti con un identificativo, raggruppati per area, e li uso nel §3.7.2 per misurarne la copertura.

<!-- DA DEFINIRE: i casi d'uso iniziali e come raggruppare i requisiti (utente, agente, app...). Base possibile: la specifica cancellata il 15/10 in chat-cart. -->

### 3.3 Progettazione dell'architettura {.unnumbered .unlisted}

Descrivo l'architettura di ChatCart con un diagramma: il *widget* nel negozio (*app layer*), il *server* con l'agente (*agent layer*), la *dashboard* del commerciante e i servizi esterni. Mi soffermo sul contratto tra agente e *widget*: un unico elenco di strumenti, distinti tra strumenti che leggono dati e strumenti che mostrano componenti, da cui ricavo i tipi condivisi dai due lati. Spiego la scelta di uno stile funzionale invece che a oggetti, la scelta di non anticipare astrazioni prima che servissero e i *design pattern* che ho introdotto quando sono serviti.

### 3.4 Sviluppo {.unnumbered .unlisted}

<!-- DA RIVEDERE: confermare la divisione del §3.4 dopo. -->

#### 3.4.1 L'agente {.unnumbered .unlisted}

Descrivo come l'agente costruisce una risposta: il ciclo in cui il modello chiama gli strumenti per leggere il catalogo, finché non sceglie un componente da mostrare. Spiego come ho diviso il controllo del comportamento tra le istruzioni al modello e le regole fisse nel codice, come ho generato i tre messaggi suggeriti e come ho scelto il modello e il suo livello di ragionamento, confrontando velocità e accuratezza. Un diagramma di sequenza segue un messaggio dall'utente alla risposta.

#### 3.4.2 Il *widget* nel negozio {.unnumbered .unlisted}

Descrivo il *widget*: i componenti (schede prodotto con scelta della variante, schede con le risposte del negozio, collegamenti alle collezioni), il supporto a più lingue e valute, e soprattutto la sincronizzazione del carrello con il tema del negozio. Qui spiego perché ogni tema Shopify si comporta in modo diverso e come l'ho risolto con un *adapter* per tema e una soluzione di riserva.

#### 3.4.3 Metriche e analisi delle conversazioni {.unnumbered .unlisted}

Descrivo gli eventi che il *widget* registra, il *funnel* che la *dashboard* mostra al commerciante e l'analisi automatica delle conversazioni con Jev, un modello più veloce che assegna a ogni conversazione un punteggio e delle etichette.

### 3.5 Le strade abbandonate {.unnumbered .unlisted}

Dedico una sezione alle funzionalità che ho provato e poi tolto, perché mostrano la direzione di ricerca presa dalla terza settimana: i messaggi di invito mostrati prima che il cliente apra la chat, i tre tentativi di adattare l'aspetto del *widget* al tema del negozio, l'uso di Jev per scegliere i componenti, il pannello a tutto schermo su *desktop*. Per ognuna spiego cosa mi aspettavo, cosa ho osservato e perché l'ho abbandonata.

### 3.6 Verifica e validazione {.unnumbered .unlisted}

Spiego la mia strategia di verifica: test automatici concentrati sui punti in cui ChatCart incontra sistemi esterni che non controllo, su una base di dati reale e senza simulare i moduli interni. Descrivo i limiti dei test classici su un agente che non risponde mai due volte allo stesso modo, e le valutazioni in cui un secondo modello giudica il comportamento dell'agente su scenari dati. Chiudo con la validazione insieme al tutor e con il rilascio dell'applicazione *online*.

### 3.7 Risultati {.unnumbered .unlisted}

#### 3.7.1 Il prodotto visto dall'utente {.unnumbered .unlisted}

Mostro ChatCart dal lato di chi lo usa, con una sequenza di schermate: un cliente che cerca un prodotto, lo confronta, lo aggiunge al carrello e arriva al pagamento; poi il commerciante che legge il *funnel* e le conversazioni nella *dashboard*. Dichiaro anche i limiti noti del prototipo.

#### 3.7.2 Risultati quantitativi {.unnumbered .unlisted}

Riporto i numeri del progetto in tabelle: la copertura dei requisiti del §3.2.2, la copertura dei test con le scelte che la spiegano, le righe di codice per parte dell'applicazione, il numero di *commit* e di documenti prodotti.

## 4 Bilancio dello stage {.unnumbered .unlisted}

### 4.1 Obiettivi raggiunti {.unnumbered .unlisted}

Valuto, sulla base di dati di fatto, il grado di soddisfacimento degli obiettivi del §2: una tabella riporta ogni obiettivo del piano, da OB1 a FA2, con il suo stato e la prova. Discuto gli scostamenti, come gli obiettivi scartati d'accordo con il tutor e i limiti delle metriche raccolte, e valuto anche i miei obiettivi personali.

### 4.2 Cosa mi ha dato lo stage {.unnumbered .unlisted}

Descrivo la mia maturazione professionale per conoscenze (l'ecosistema delle applicazioni Shopify, la costruzione di agenti) e per abilità (lavorare da remoto, comunicare con il tutor, gestire il mio tempo, decidere cosa tagliare). Rifletto su cosa ho imparato usando l'intelligenza artificiale per programmare, il tema su cui si è concentrato l'incontro finale con il fondatore.

### 4.3 Corso di studi e mondo del lavoro {.unnumbered .unlisted}

Confronto le competenze che lo stage mi ha richiesto con quelle che mi ha dato il corso di studi: cosa mi è servito e cosa mi è mancato, per esempio la costruzione di agenti e la verifica di sistemi non deterministici, rispetto allo stage e a quello che immagino del mondo del lavoro.

## Appendici {.unnumbered .unlisted}

Glossario, con l'approfondimento dei termini definiti in breve nel testo, e riferimenti alle fonti citate.
