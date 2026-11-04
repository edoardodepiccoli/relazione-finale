# Halue e il commercio digitale

Presento Halue S.r.l., l'azienda presso cui ho svolto lo *stage*, descrivendone le attività, i clienti, le tecnologie, i processi e il rapporto con l'innovazione. Mi baso sulle otto settimane di lavoro, sulle conversazioni con i colleghi e sulle risposte scritte del *tutor* aziendale, Antonio Cavestro, integrate dal sito dell'azienda[^sito]. Le risposte hanno confermato quanto ho osservato e completato il quadro sugli aspetti che non ho seguito direttamente, come contratti e gestione dei progetti; per questi aspetti riporto informazioni riferite, mentre distinguo le dichiarazioni del sito dalle mie osservazioni.

## Profilo aziendale e linee di attività

[^sito]: Halue S.r.l., sito istituzionale, <https://halue.com/it>, pagine «Chi siamo», «Approccio» e «Progetti», consultate il 4 novembre 2026.

Halue è una società di consulenza tecnologica nata nel 2022, con sede legale a Parma e sede operativa ad Abano Terme, in provincia di Padova, all'interno di un centro di *coworking*. Dal 2024 è una [Società Benefit~G~](#glossario-societa-benefit): una forma giuridica, introdotta in Italia nel 2015, per le società che oltre al profitto perseguono obiettivi di beneficio comune dichiarati nello statuto e ne rendono conto ogni anno in una relazione d'impatto.

Oggi l'azienda conta dieci persone, con i seguenti ruoli:

- [*Founder & Senior Consultant*~G~](#glossario-founder-senior-consultant): il fondatore Valentino Baraldo, che svolge anche attività di consulenza;
- [*Solution & Technical Architect*~G~](#glossario-solution-technical-architect): definisce le soluzioni e l'architettura tecnica;
- [*Senior Project Manager*~G~](#glossario-senior-project-manager) e [*Project Management Assistant*~G~](#glossario-project-management-assistant): due persone dedicate alla gestione dei progetti;
- [*Senior Software Engineer*~G~](#glossario-senior-software-engineer), [*Software Engineer*~G~](#glossario-software-engineer) e [*Junior Developer*~G~](#glossario-junior-developer): cinque sviluppatori con diversi livelli di esperienza;
- [*UX/UI Digital Consultant*~G~](#glossario-ux-ui-digital-consultant): cura la progettazione dell'esperienza utente e dell'interfaccia.

Halue è nata come società di consulenza sull'[*e-commerce*~G~](#glossario-e-commerce) e sui sistemi di [*Customer Relationship Management* (CRM)~G~](#glossario-crm), con Shopify e Salesforce come piattaforme di riferimento. Il primo ambito riguarda la vendita di prodotti e servizi tramite canali digitali; il secondo, la gestione delle relazioni di un'azienda con i propri clienti. L'interesse per l'intelligenza artificiale è nato dal lavoro quotidiano su cataloghi, contenuti e flussi d'acquisto complessi. In questi contesti un [modello linguistico di grandi dimensioni (LLM)~G~](#glossario-llm), addestrato a elaborare e generare testo, può assistere il cliente usando i dati del negozio.

La @fig:halue-attivita riassume le linee di attività dell'azienda, in ordine di peso:

1. l'*e-commerce* su Shopify e su Salesforce Commerce Cloud, sia verso il consumatore finale ([B2C~G~](#glossario-b2c)) sia verso altre aziende ([B2B~G~](#glossario-b2b)), che è l'attività principale;
2. l'integrazione di sistemi, cioè il collegamento del negozio con i gestionali aziendali ([ERP~G~](#glossario-erp)), la logistica e i servizi di terze parti, punto a punto o tramite piattaforme di integrazione ([iPaaS~G~](#glossario-ipaas));
3. i servizi di intelligenza artificiale, dalla valutazione di quanto un'azienda sia pronta ad adottarla fino allo sviluppo di agenti su misura;
4. i sistemi CRM su Salesforce;
5. la formazione;
6. la progettazione dell'interfaccia e dell'esperienza utente.

![Le linee di attività di Halue, in ordine di peso dall'*e-commerce* alla progettazione dell'interfaccia. La consulenza tecnologica e l'intelligenza artificiale le attraversano tutte.](segnaposto.pdf){#fig:halue-attivita width=80%}

<!-- FIGURA DA REALIZZARE: le sei linee di attività in ordine di peso, con due fasce trasversali (consulenza tecnologica, IA). -->

La figura mostra due elementi trasversali. La consulenza tecnologica accompagna tutte le linee, dalla valutazione iniziale alla scelta dei sistemi. L'intelligenza artificiale è insieme una linea a sé e, sempre di più, una competenza che entra nei progetti di *e-commerce* e di integrazione.

Halue lavora su commessa: non vende prodotti propri, come applicazioni pubblicate sullo Shopify App Store, ma costruisce soluzioni su misura per i singoli clienti. Anche ChatCart segue questa impostazione: descrivo nella @sec:ecosistema-applicazioni come lo integro nel singolo negozio, anziché distribuirlo come applicazione pubblica.

## Clientela e modalità di ingaggio

Halue lavora soltanto con aziende private, per lo più di medie e grandi dimensioni, e non con la pubblica amministrazione. Sono marchi strutturati della moda, dello sport, del commercio al dettaglio e della cosmetica professionale, che vendono *online* su più mercati, con lingue e valute diverse. La maggior parte dei clienti è italiana, ma ci sono anche marchi esteri.

Il sito di Halue cita alcuni di questi clienti. La @tbl:progetti riporta i quattro progetti che descrive; oltre a questi, il sito mostra i marchi di Piazza Italia, Velasca, Davines e Comfort Zone.

| Cliente | Settore | Piattaforma | Intervento |
| ---------------------- | ------------------------ | -------------------------- | ---------------------------- |
| Dainese | Abbigliamento e protezioni per la moto | Salesforce Commerce Cloud | Nuova architettura per gestire più marchi |
| Philippe Model Paris | Calzature e moda | Shopify Plus | Migrazione da Adobe Commerce |
| Colnago | Biciclette | Shopify Plus | Configuratore 3D dei prodotti su misura |
| Gruppo Rossignol | Attrezzatura per gli sport invernali | Salesforce Commerce Cloud | Negozi dei marchi Dynastar e Lange |

: I progetti per i clienti che Halue pubblica sul proprio sito, con il settore del cliente, la piattaforma e il tipo di intervento. {#tbl:progetti}

La tabella mostra che la clientela si divide tra le due piattaforme principali, Shopify e Salesforce, e che gli interventi vanno dalla migrazione di un intero negozio a funzionalità molto specifiche, come un configuratore tridimensionale.

I progetti arrivano soprattutto per passaparola, da clienti e contatti che segnalano l'azienda, e in parte da gare e bandi. Le formule contrattuali sono tre: a tempo e materiali, in cui il cliente paga il tempo effettivamente impiegato; a corpo, con un prezzo fissato in anticipo, per i progetti dal perimetro ben definito; e i contratti di manutenzione e assistenza per i negozi già in produzione. Halue è inoltre *partner* di Shopify per Shopify Plus, il piano della piattaforma rivolto ai commercianti più grandi, sia per i negozi B2C sia per quelli B2B.

Due caratteristiche di questa clientela ritornano nel resto della relazione. La prima è la vendita su più mercati: per questo il supporto a più lingue e valute è diventato uno degli obiettivi del mio progetto (@sec:obiettivi). La seconda è che ogni cliente ha un'identità visiva propria, che vuole vedere rispettata anche negli strumenti che aggiunge al negozio: ne discuto nella @sec:limiti-assistenti e nella @sec:sperimentazioni.

## Ecosistema tecnologico

Gli [*storefront*~G~](#glossario-storefront), cioè le interfacce dei negozi Shopify rivolte ai clienti, possono seguire due modalità di sviluppo. La prima usa i temi della piattaforma: Shopify genera le pagine a partire da modelli scritti in [Liquid~G~](#glossario-liquid), il suo linguaggio di *template*, combinandoli con i dati del negozio. La seconda adotta un'architettura [*headless*~G~](#glossario-headless), in cui l'interfaccia è un'applicazione separata che accede alle funzioni commerciali tramite [API~G~](#glossario-api), interfacce di comunicazione tra programmi. Per questa modalità Shopify offre [Hydrogen~G~](#glossario-hydrogen), un *framework* basato su React, e Oxygen, il servizio che ospita l'applicazione; Hydrogen non è però l'unico strumento possibile per costruire uno *storefront headless*.

Le Admin API permettono alle applicazioni di gestire i dati e le operazioni del negozio; le Storefront API espongono catalogo, carrello e altre funzioni dell'esperienza d'acquisto. Entrambe offrono interfacce [GraphQL~G~](#glossario-graphql), un linguaggio di interrogazione con cui chi invia una richiesta specifica i campi da ottenere. I temi Liquid accedono invece ai dati anche tramite gli oggetti che Shopify rende disponibili durante la generazione delle pagine: non richiedono necessariamente chiamate esplicite a queste API. Per aggiungere funzionalità, Halue sviluppa applicazioni personalizzate in Node.js e TypeScript, integrabili con entrambe le modalità.

La @tbl:tecnologie distingue l'ambito di utilizzo delle tecnologie ricorrenti in Halue dal loro impiego nel progetto di *stage*.

<!-- DA RIVEDERE: l'ecosistema tecnologico, prima di confermare questa sezione. -->

| Tecnologia | Ambito di utilizzo | Utilizzo nel progetto di *stage* |
| ---------------------------- | ------------------------------------------ | ------------------------------ |
| Shopify e Shopify Plus | Gestione di negozi *e-commerce* B2C e B2B | Negozio Shopify di sviluppo |
| Temi Liquid | Generazione delle pagine del negozio | Inserimento di ChatCart nel tema |
| Admin API e Storefront API | Gestione del negozio e funzioni di acquisto tramite GraphQL | Accesso al catalogo con Storefront API |
| Node.js e TypeScript | Sviluppo di applicazioni personalizzate | Implementazione di ChatCart |
| Hydrogen e Oxygen | Sviluppo e pubblicazione di *storefront headless* | Non utilizzati |
| Salesforce | Commercio digitale, CRM, assistenza e campagne commerciali | Non utilizzato |
| Storyblok e Sanity | Gestione dei contenuti separata dalla loro presentazione | Non utilizzati |
| Heroku, Google Cloud e AWS | Esecuzione di applicazioni e servizi in infrastrutture *cloud* | Non utilizzati; rilascio su Vercel |

: Le tecnologie ricorrenti nei progetti di Halue e il loro utilizzo nel progetto di *stage*. {#tbl:tecnologie}

Per il mio progetto ho scelto i temi Liquid per la loro maggiore diffusione rispetto agli *storefront* costruiti con Hydrogen. Questa scelta permette di integrare ChatCart nei negozi esistenti senza sostituirne l'interfaccia.

Nei progetti di intelligenza artificiale cambia soprattutto l'architettura. Halue collega un LLM, di solito Claude, ai dati del negozio tramite [MCP~G~](#glossario-mcp), un protocollo aperto che collega applicazioni basate su modelli linguistici a strumenti e dati esterni, e affianca al modello strumenti e istruzioni sviluppati internamente. Segue inoltre i nuovi protocolli per il commercio agentico, come [UCP~G~](#glossario-ucp), pensati per permettere a un agente di completare un acquisto per conto dell'utente. Questa preferenza per strumenti propri l'ho vissuta direttamente: quando abbiamo definito il progetto, il *tutor* mi ha consigliato di non affidarmi al *server* MCP di Shopify, che considerava ancora troppo semplice, e di sviluppare una ricerca nel catalogo su misura. È la scelta da cui nasce il contratto tra agente e *widget* che descrivo nella @sec:contratto.

## Processi di sviluppo e gestione dei progetti

Ho partecipato al coordinamento quotidiano del *team*, ma ho lavorato su un progetto interno, senza seguire l'intero ciclo di una commessa per un cliente.

### Organizzazione del lavoro e gestione dei progetti {#sec:organizzazione-halue}

La cosa che mi ha colpito di più è il contrasto tra le dimensioni dell'azienda e il suo metodo. Halue ha dieci persone, ma adotta *framework* di lavoro molto strutturati, che di solito si associano ad aziende più grandi; allo stesso tempo mantiene la velocità di decisione di un'azienda piccola.

Il metodo di riferimento è [Scrum~G~](#glossario-scrum), un *framework* per organizzare il lavoro in cicli brevi, adattato al lavoro di un'agenzia. Il lavoro procede per [*sprint*~G~](#glossario-sprint), cicli brevi al termine dei quali il *team* presenta i risultati al cliente in una *sprint review* e ne discute internamente in una retrospettiva. Nella gestione operativa Halue distingue il [*team lead*~G~](#glossario-team-lead), che cura l'analisi funzionale, le stime per il cliente e il coordinamento tecnico, dal [*project/service manager*~G~](#glossario-project-service-manager), che pianifica le attività e la capacità del *team*. A questi si affiancano gli sviluppatori e chi progetta l'interfaccia. Nella mia lettura, l'adattamento sta soprattutto qui: non compaiono le figure canoniche di Scrum, il *Product Owner* e lo *Scrum Master*, e le loro responsabilità si distribuiscono tra il *team lead* e il *project/service manager*. È una scelta coerente con un'agenzia, in cui lo stesso gruppo di persone lavora per più clienti nello stesso periodo.

Per la stessa ragione le persone non sono assegnate a un progetto in modo stabile. Ogni mese un *demand planning* condiviso ripartisce il *team* sui clienti, e l'avanzamento di ciascun progetto si segue sulla *board* di Jira e con un rapporto sullo [stato di avanzamento dei lavori (SAL)~G~](#glossario-sal), che riporta con un semaforo lo stato del progetto, le scadenze, i rischi e i punti aperti. La @fig:ritmi mette in fila questi momenti, dal più frequente al più raro.

![I momenti di coordinamento del lavoro in Halue, ordinati per frequenza: la riunione quotidiana, le attività di ogni *sprint*, la pianificazione mensile delle persone sui clienti e i rapporti di avanzamento e le retrospettive di ogni progetto.](segnaposto.pdf){#fig:ritmi width=80%}

<!-- FIGURA DA REALIZZARE: quattro scale temporali (giorno, sprint, mese, progetto) con i rispettivi momenti di coordinamento. -->

Il primo livello della figura è l'unico che ho vissuto ogni giorno. Ogni mattina tutto il *team* si collega su Google Meet per una riunione di allineamento: ciascuno dice su cosa ha lavorato il giorno prima e su cosa lavorerà quel giorno. La riunione dura di solito tra i quindici e i venti minuti, al massimo mezz'ora. Ho partecipato anch'io, con lo stesso formato degli altri.

Gli orari e il luogo di lavoro sono flessibili. Da quello che ho osservato, i colleghi lavorano in sede per circa il 70% del tempo e da remoto per il resto, ma ognuno gestisce la propria presenza in autonomia. Io sono stato in sede in media un giorno a settimana, come previsto dal piano di lavoro, e ho lavorato da remoto negli altri giorni.

La @tbl:strumenti elenca gli strumenti di lavoro del *team* e distingue quelli che ho utilizzato da quelli che ho visto usare o che non ho impiegato direttamente.

| Strumento | Uso in Halue | Come lo conosco |
| ------------------------- | ---------------------------------------- | ----------------------------------- |
| Slack | Comunicazione interna e canali dedicati ai clienti | Usato, in un canale con il *tutor* |
| Google Meet | Riunioni quotidiane e *call* | Usato |
| Jira | Tracciamento delle unità di lavoro ([*ticket*~G~](#glossario-ticket)), *board* e stime | Visto, spiegato da un collega |
| Confluence | Documentazione e procedure | Visto |
| GitHub e Bitbucket | Versionamento del codice | GitHub usato, Bitbucket riferito |
| Figma | Progetto grafico e passaggio agli sviluppatori | Visto |
| Granola | Appunti automatici delle *call* | Visto |
| Postman | Prova delle API | Riferito |

: Gli strumenti di lavoro di Halue, con il loro uso e il modo in cui li conosco: usati durante lo *stage*, visti usare dai colleghi o soltanto riferiti dal *tutor*. {#tbl:strumenti}

Con i clienti il *team* comunica su canali Slack dedicati a ciascun marchio, nelle *sprint review* con dimostrazioni del lavoro svolto e con rapporti periodici di avanzamento; i rapporti sulle attività e le variazioni contrattuali passano invece per *email*. La conoscenza interna sta su Confluence e su Google Drive. Una persona nuova parte dalla documentazione e dalle procedure e comincia con *ticket* piccoli su un progetto reale, con l'affiancamento di un collega. Il mio inserimento è stato diverso, perché lavoravo su un progetto mio: ho imparato i processi dell'azienda facendo domande e ascoltando le riunioni, più che lavorandoci dentro.

### Dal *ticket* al rilascio

Le richieste arrivano da *call*, *email* o *workshop* e diventano *ticket* su Jira, di quattro tipi: *Epic* per gli insiemi di funzionalità, *Story* per le singole funzionalità, *Change Request* per le modifiche chieste a progetto avviato e *Bug* per i difetti. Ogni *ticket* passa per due fasi di approfondimento: il *refinement* funzionale, che ne valuta la completezza e la fattibilità, e il *refinement* tecnico, svolto dagli sviluppatori. I *bug* di norma saltano il secondo passaggio.

Le stime sono due, perché servono a due destinatari. Per il *team* si usano gli [*story point*~G~](#glossario-story-point), una misura della complessità relativa espressa con i numeri di Fibonacci da 1 a 13: servono a pianificare lo *sprint*, e un *ticket* che supera 13 va spezzato in *ticket* più piccoli. Per il cliente si stimano invece le ore, con un metodo interno che pesa quattro dimensioni: la complessità, la chiarezza della richiesta, il *team* coinvolto e la confidenza nella stima.

Il progetto grafico arriva da Figma, collegato al *ticket*, sempre in versione per dispositivi mobili e per *desktop*. Il passaggio agli sviluppatori avviene in Figma stesso, con le specifiche e con un confronto diretto con il *designer* sui punti meno chiari, e il *designer* rivede l'implementazione prima del rilascio. Ogni marchio ha il proprio [*design system*~G~](#glossario-design-system), cioè l'insieme di componenti e stili che rende coerenti le sue pagine: è il motivo per cui, nel mio progetto, adattare l'aspetto del *widget* al negozio si è rivelato così difficile (@sec:sperimentazioni).

Nello sviluppo ogni *ticket* corrisponde a una [*pull request*~G~](#glossario-pull-request), una proposta di integrazione delle modifiche al codice, e i nomi dei *branch* e i messaggi di *commit* riportano la chiave del *ticket*, così che ogni modifica al codice si possa ricondurre alla richiesta da cui nasce. ESLint e Prettier controllano lo stile del codice, e le versioni seguono il [versionamento semantico (SemVer)~G~](#glossario-semver), che distingue modifiche incompatibili, nuove funzionalità e correzioni, con *tag* e *release* su GitHub. La verifica combina *test* automatici, di unità e di integrazione, e *test* manuali; non c'è una copertura minima prefissata. Il controllo di qualità lo svolgono gli sviluppatori durante lo sviluppo, e poi il cliente nel collaudo.

Il rilascio attraversa tre ambienti: sviluppo, un ambiente di collaudo ([*staging*~G~](#glossario-staging) o *preview*) e produzione. Il *deploy* è automatizzato e segue una procedura scritta, ma il passaggio in produzione lo esegue sempre una persona del *team*. Dopo la consegna, i difetti e le richieste di modifica passano per i contratti di manutenzione: le segnalazioni arrivano su Jira, sul canale Slack del cliente o per *email*, e le priorità si concordano con il cliente caso per caso, senza livelli di servizio formali.

Le decisioni di architettura nascono nel *refinement* funzionale e si consolidano in quello tecnico. Quelle che riguardano un singolo *ticket* restano scritte nel *ticket*, dove chi sviluppa le trova; quelle che valgono per tutto il progetto diventano [ADR~G~](#glossario-adr), documenti brevi che registrano il contesto, la scelta e la sua motivazione. Il ciclo si chiude con le retrospettive, a fine *sprint* e alla chiusura di un progetto o di una *release* importante, per portare le correzioni nei progetti successivi.

La @fig:ticket riassume questo percorso, dalla richiesta del cliente al rilascio in produzione e alla manutenzione, mostrando i passaggi di analisi, sviluppo e verifica.

![Il ciclo di vita di un *ticket* in Halue: dalla richiesta del cliente al *ticket* su Jira, attraverso i due *refinement*, la stima, lo sviluppo con *pull request* e *test*, il collaudo in *staging*, fino al rilascio in produzione e alla manutenzione.](segnaposto.pdf){#fig:ticket width=80%}

<!-- FIGURA DA REALIZZARE: diagramma di attività del ciclo di vita di un ticket, con la scorciatoia dei bug che saltano il tech refinement. -->

Da questo quadro ricavo una lettura del metodo di Halue: la struttura è rigida dove si ripaga sempre, cioè nella tracciabilità dalla richiesta al codice e nelle stime, e flessibile dove i clienti sono diversi tra loro, come la copertura dei *test* o i livelli di servizio, che si decidono progetto per progetto. Ho trovato la stessa impostazione nel mio *stage*, per esempio nella scelta di concentrare i *test* automatici dove servivano davvero (@sec:verifica).

## Innovazione e intelligenza artificiale {#sec:innovazione}

L'azienda dichiara sul proprio sito di fare uno *scouting* tecnologico continuo, di ridurre il debito tecnico allungando la vita delle piattaforme e di dedicare oltre il 10% del tempo a progetti di ricerca e sviluppo, tra cui quelli di intelligenza artificiale. Non ho verificato la percentuale, ma ho visto quanto tempo i colleghi dedicano a studiare: lo considerano un modo per crescere come professionisti, non soltanto come dipendenti dell'azienda. Halue organizza inoltre una formazione interna sui metodi agili, sulle piattaforme e sulla tecnologia, e ogni anno qualche evento formativo per i clienti.

L'intelligenza artificiale è lo strumento in cui questa propensione si vede di più. Il *team* usa ampiamente strumenti di sviluppo basati sull'IA e segue da vicino tutto ciò che esce nel settore: ho visto *workflow* di *code review* automatica, la lettura dei *changelog* delle tecnologie in uso, *routine* ricorrenti con Claude Cowork e Claude Code, e ho sentito parlare di prove con altri agenti, come Codex di OpenAI. L'uso quotidiano dell'IA comprende anche la scrittura della documentazione e dei *ticket*, la gestione dei progetti, per i rapporti e le stime, e il progetto grafico. Per i processi ricorrenti l'azienda ha scritto [*skill*~G~](#glossario-skill) interne, istruzioni riusabili che codificano un processo per un assistente basato su IA.

La regola di fondo è che l'IA propone e la persona decide. L'azienda riscontra una riduzione dei tempi, ma non dispone ancora di misure precise su questo beneficio e sull'impatto sulla qualità. Ho percepito anche un'opinione condivisa nel *team*, che la mia esperienza conferma: nelle mani di un programmatore esperto l'IA è un buon programmatore *junior*, ma non sostituisce un *senior*, e chi sa cosa sta facendo ottiene risultati migliori di quelli dell'IA da sola. Torno su questo punto nella @sec:maturazione.

Nei progetti di IA per i clienti Halue adotta alcune regole che ho ritrovato nel mio progetto. I dati vengono sempre dal catalogo reale, tramite strumenti e ricerca, e mai dalla memoria del modello; le azioni con effetti esterni restano sotto controllo umano; la qualità delle risposte si valuta con *test* manuali su casi d'uso reali; il modello si sceglie in base al compito, e i consumi di *token* si tengono sotto controllo.

Questa propensione all'innovazione passa anche dagli *stage*, che Halue usa per esplorare temi che i progetti per i clienti non lasciano il tempo di approfondire. Approfondisco questo ruolo nella @sec:stage-strategia.
