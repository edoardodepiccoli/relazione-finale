# Halue e il commercio digitale

In questo capitolo presento Halue S.r.l., l'azienda presso cui ho svolto lo *stage*: chi è, per quali clienti lavora, con quali tecnologie e con quali processi, e come si rapporta all'innovazione e all'intelligenza artificiale. Molti dei tratti che descrivo qui spiegano scelte del progetto che racconto nei capitoli successivi.

## Profilo aziendale e linee di attività

Prima di descrivere l'azienda dichiaro da dove vengono le informazioni e quanto le ritengo affidabili. La fonte principale è ciò che ho visto nelle otto settimane di *stage*: le riunioni quotidiane con tutto il *team*, le giornate in sede, in media una a settimana, e le domande che ho fatto ai colleghi mentre lavoravo. A metà *stage* ho inviato al *tutor* aziendale, Antonio Cavestro, un elenco di domande sull'azienda e sul suo metodo di lavoro, a cui ha risposto per iscritto. Dove ho potuto confrontarle con la mia esperienza, le sue risposte l'hanno confermata e completata; per gli aspetti che non ho potuto osservare, come i contratti con i clienti o le stime dei progetti, le ritengo affidabili ma le riporto come informazioni riferite. Completano il quadro il colloquio conoscitivo che ho avuto ad agosto con il fondatore e con il *tutor*, e il sito dell'azienda[^sito], di cui riporto le affermazioni come dichiarazioni, perché non ho modo di verificarle.

[^sito]: Halue S.r.l., sito istituzionale, <https://halue.com/it>, pagine «Chi siamo», «Approccio» e «Progetti», consultate il 4 novembre 2026.

Halue è una società di consulenza tecnologica nata nel 2022, con sede legale a Parma e sede operativa ad Abano Terme, in provincia di Padova, all'interno di un centro di *coworking*. Dal 2024 è una Società Benefit~G~: una forma giuridica, introdotta in Italia nel 2015, per le società che oltre al profitto perseguono obiettivi di beneficio comune dichiarati nello statuto e ne rendono conto ogni anno in una relazione d'impatto.

Oggi l'azienda conta dieci persone. Il fondatore, Valentino Baraldo, lavora anche come consulente; accanto a lui ci sono un architetto delle soluzioni tecniche, due persone dedicate alla gestione dei progetti, cinque sviluppatori con diversi livelli di esperienza e un consulente per la progettazione dell'interfaccia e dell'esperienza utente. Il mio *tutor* è uno degli sviluppatori più esperti.

Halue è nata come società di consulenza sul commercio elettronico, o *e-commerce*~G~, e sui sistemi di *Customer Relationship Management* (CRM)~G~, cioè i sistemi con cui un'azienda gestisce le relazioni con i propri clienti, costruiti sulle piattaforme Shopify e Salesforce. Secondo il *tutor*, l'interesse per l'intelligenza artificiale è nato dal lavoro quotidiano: i progetti ruotano attorno a cataloghi, contenuti e flussi d'acquisto complessi, che sono proprio i punti in cui un modello linguistico collegato ai dati del negozio porta un vantaggio concreto.

La @fig:halue-attivita riassume le linee di attività dell'azienda, nell'ordine di peso che mi ha indicato il *tutor*:

1. l'*e-commerce* su Shopify e su Salesforce Commerce Cloud, sia verso il consumatore finale (B2C~G~) sia verso altre aziende (B2B~G~), che è l'attività principale;
2. l'integrazione di sistemi, cioè il collegamento del negozio con i gestionali aziendali (ERP~G~), la logistica e i servizi di terze parti, punto a punto o tramite piattaforme di integrazione (iPaaS~G~);
3. i servizi di intelligenza artificiale, dalla valutazione di quanto un'azienda sia pronta ad adottarla fino allo sviluppo di agenti su misura;
4. i sistemi CRM su Salesforce;
5. la formazione;
6. la progettazione dell'interfaccia e dell'esperienza utente.

![Le linee di attività di Halue, in ordine di peso dall'*e-commerce* alla progettazione dell'interfaccia. La consulenza tecnologica e l'intelligenza artificiale le attraversano tutte. Fonte: elaborazione mia dalle risposte scritte del *tutor*.](segnaposto.pdf){#fig:halue-attivita width=80%}

<!-- FIGURA DA REALIZZARE: le sei linee di attività in ordine di peso, con due fasce trasversali (consulenza tecnologica, IA). -->

La figura mostra due elementi trasversali. La consulenza tecnologica accompagna tutte le linee, dalla valutazione iniziale alla scelta dei sistemi. L'intelligenza artificiale è insieme una linea a sé e, sempre di più, una competenza che entra nei progetti di *e-commerce* e di integrazione.

Halue lavora su commessa: non vende prodotti propri, come applicazioni pubblicate sullo Shopify App Store, ma costruisce soluzioni su misura per i singoli clienti. Questo tratto ritorna nel capitolo 3, perché anche ChatCart è pensato per essere installato e adattato negozio per negozio, non distribuito a chiunque.

## Clientela e modalità di ingaggio

Le informazioni sui clienti vengono dalle risposte del *tutor* e dal sito dell'azienda. Non ho lavorato su progetti per i clienti, ma alle riunioni quotidiane, in cui ciascuno dice su cosa sta lavorando, ho sentito ogni giorno il *team* dividersi tra progetti di clienti diversi.

<!-- DA CONFERMARE: alle riunioni si parla dei progetti dei singoli clienti. -->

Halue lavora soltanto con aziende private, per lo più di medie e grandi dimensioni, e non con la pubblica amministrazione. Sono marchi strutturati della moda, dello sport, del commercio al dettaglio e della cosmetica professionale, che vendono *online* su più mercati, con lingue e valute diverse. La maggior parte dei clienti è italiana, ma ci sono anche marchi esteri.

Cito soltanto i clienti che Halue rende pubblici sul proprio sito: fin dalla stesura del piano di lavoro il *tutor* mi ha chiesto di non nominare gli altri, perché avrebbe dovuto verificarne gli accordi di riservatezza. La @tbl:progetti riporta i quattro progetti che il sito descrive. Oltre a questi, il sito mostra i marchi di Piazza Italia, Velasca, Davines e Comfort Zone.

| Cliente | Settore | Piattaforma | Intervento |
| --- | --- | --- | --- |
| Dainese | Abbigliamento e protezioni per la moto | Salesforce Commerce Cloud | Nuova architettura per gestire più marchi |
| Philippe Model Paris | Calzature e moda | Shopify Plus | Migrazione da Adobe Commerce |
| Colnago | Biciclette | Shopify Plus | Configuratore 3D dei prodotti su misura |
| Gruppo Rossignol | Attrezzatura per gli sport invernali | Salesforce Commerce Cloud | Negozi dei marchi Dynastar e Lange |

: I progetti per i clienti che Halue pubblica sul proprio sito, con il settore del cliente, la piattaforma e il tipo di intervento. Fonte: elaborazione mia dalla pagina «Progetti» del sito di Halue. {#tbl:progetti}

La tabella mostra che la clientela si divide tra le due piattaforme principali, Shopify e Salesforce, e che gli interventi vanno dalla migrazione di un intero negozio a funzionalità molto specifiche, come un configuratore tridimensionale.

Secondo il *tutor*, i progetti arrivano soprattutto per passaparola, da clienti e contatti che segnalano l'azienda, e in parte da gare e bandi. Le formule contrattuali sono tre: a tempo e materiali, in cui il cliente paga il tempo effettivamente impiegato; a corpo, con un prezzo fissato in anticipo, per i progetti dal perimetro ben definito; e i contratti di manutenzione e assistenza per i negozi già in produzione. Halue è inoltre *partner* di Shopify per Shopify Plus, il piano della piattaforma rivolto ai commercianti più grandi, sia per i negozi B2C sia per quelli B2B.

Due caratteristiche di questa clientela ritornano nel resto della relazione. La prima è la vendita su più mercati: per questo il supporto a più lingue e valute è diventato uno degli obiettivi del mio progetto (@sec:obiettivi). La seconda è che ogni cliente ha un'identità visiva propria, che vuole vedere rispettata anche negli strumenti che aggiunge al negozio: ne discuto nel capitolo 2 e nella @sec:sperimentazioni.

## Ecosistema tecnologico

Delle tecnologie di Halue ho usato in prima persona soltanto quelle dell'ecosistema Shopify che servivano al mio progetto; le altre le conosco dalle risposte del *tutor* e dai racconti dei colleghi. La @tbl:tecnologie riassume le tecnologie ricorrenti nei progetti e distingue quelle che ho usato durante lo *stage*.

<!-- DA RIVEDERE: l'ecosistema tecnologico, prima di confermare questa sezione. -->

| Tecnologia | Che cos'è e a cosa serve | Nello *stage* |
| --- | --- | --- |
| Shopify Plus | Piattaforma di *e-commerce* per i commercianti più grandi | Sì, su un negozio di sviluppo |
| Temi Liquid | Il linguaggio di *template* con cui Shopify compone le pagine del negozio | Sì, per inserire il *widget* nel tema |
| Admin API e Storefront API | Le interfacce GraphQL per gestire il negozio e per leggerne il catalogo | Sì |
| Applicazioni personalizzate | Applicazioni Node.js e TypeScript che estendono il negozio | Sì, ChatCart è una di queste |
| Hydrogen e Oxygen | Il *framework* React di Shopify per i negozi *headless* e il servizio che li ospita | No |
| Salesforce | Commerce Cloud, Platform, Service Cloud e Marketing Cloud | No |
| CMS *headless* | Storyblok e Sanity, per gestire i contenuti separati dal negozio | No |
| Piattaforme *cloud* | Heroku, Google Cloud e AWS, per ospitare applicazioni e servizi | No, ho usato Vercel |

: Le tecnologie ricorrenti nei progetti di Halue, con il loro ambito d'uso e l'indicazione di quelle che ho usato durante lo *stage*. Fonte: elaborazione mia dalle risposte scritte del *tutor* e dal codice di ChatCart. {#tbl:tecnologie}

Su Shopify i progetti seguono due strade. La più comune è il tema Liquid~G~, in cui le pagine del negozio sono generate dalla piattaforma a partire da modelli che il commerciante può personalizzare. L'altra è il negozio *headless*~G~, in cui l'interfaccia è un'applicazione separata, costruita con Hydrogen~G~, che legge i dati dalla piattaforma tramite le sue API~G~. In entrambi i casi i dati passano dalle API GraphQL~G~ di Shopify: la Admin API per gestire il negozio, la Storefront API per leggere il catalogo dal lato del cliente. Quando serve una funzionalità che la piattaforma non offre, Halue sviluppa un'applicazione personalizzata in Node.js e TypeScript. Il *tutor* mi ha spiegato fin dall'inizio che Hydrogen permette di riusare gli stessi componenti React dell'interfaccia, ma resta una tecnologia di minoranza rispetto a Liquid: per questo il mio progetto è partito dai temi Liquid.

Nei progetti di intelligenza artificiale, secondo il *tutor*, cambia soprattutto l'architettura. Halue collega un modello linguistico di grandi dimensioni (LLM)~G~, di solito Claude, ai dati del negozio tramite MCP~G~, un protocollo aperto con cui un modello accede a strumenti e dati esterni, e affianca al modello strumenti e istruzioni sviluppati internamente. Segue inoltre i nuovi protocolli per il commercio agentico, come UCP~G~, pensati per permettere a un agente di completare un acquisto per conto dell'utente. Questa preferenza per strumenti propri l'ho vissuta direttamente: quando abbiamo definito il progetto, il *tutor* mi ha consigliato di non affidarmi al *server* MCP di Shopify, che considerava ancora troppo semplice, e di sviluppare una ricerca nel catalogo su misura. È la scelta da cui nasce il contratto tra agente e *widget* che descrivo nella @sec:contratto.

## Processi di sviluppo e gestione dei progetti

Sui processi le mie fonti sono di due tipi. La parte quotidiana del lavoro l'ho vista di persona: le riunioni del mattino, i canali di comunicazione, gli strumenti in uso. In ufficio facevo domande su ciò che non capivo: un collega, per esempio, mi ha mostrato come usano Jira mentre lavorava, e il *tutor* mi ha spiegato i processi in alcune conversazioni di formazione, e poi li ha descritti per iscritto nelle risposte alle mie domande. Il ciclo completo di un progetto per un cliente, invece, non l'ho vissuto, perché ho lavorato su un progetto interno: lo ricostruisco da queste spiegazioni.

### Organizzazione del lavoro e gestione dei progetti

La cosa che mi ha colpito di più è il contrasto tra le dimensioni dell'azienda e il suo metodo. Halue ha dieci persone, ma adotta *framework* di lavoro molto strutturati, che di solito si associano ad aziende più grandi; allo stesso tempo mantiene la velocità di decisione di un'azienda piccola.

Il metodo di riferimento è Scrum~G~, adattato al lavoro di un'agenzia. Il lavoro procede per *sprint*~G~, cicli brevi al termine dei quali il *team* presenta i risultati al cliente in una *sprint review* e ne discute internamente in una retrospettiva. Il *tutor* mi ha descritto tre ruoli: il *team lead*, che cura l'analisi funzionale, le stime per il cliente e la gestione tecnica del *team*; il *project manager*, che pianifica le attività e la capacità del *team*; gli sviluppatori e i *designer*. Nella mia lettura, l'adattamento sta soprattutto qui: non compaiono le figure canoniche di Scrum, il *Product Owner* e lo *Scrum Master*, e le loro responsabilità si distribuiscono tra il *team lead* e il *project manager*. È una scelta coerente con un'agenzia, in cui lo stesso gruppo di persone lavora per più clienti nello stesso periodo.

Per la stessa ragione le persone non sono assegnate a un progetto in modo stabile. Ogni mese un *demand planning* condiviso ripartisce il *team* sui clienti, e l'avanzamento di ciascun progetto si segue sulla *board* di Jira e con un rapporto sullo stato di avanzamento dei lavori (SAL)~G~, che riporta con un semaforo lo stato del progetto, le scadenze, i rischi e i punti aperti. La @fig:ritmi mette in fila questi momenti, dal più frequente al più raro.

![I momenti di coordinamento del lavoro in Halue, ordinati per frequenza: la riunione quotidiana, le attività di ogni *sprint*, la pianificazione mensile delle persone sui clienti e i rapporti di avanzamento e le retrospettive di ogni progetto. Fonte: elaborazione mia da ciò che ho visto e dalle risposte scritte del *tutor*.](segnaposto.pdf){#fig:ritmi width=80%}

<!-- FIGURA DA REALIZZARE: quattro scale temporali (giorno, sprint, mese, progetto) con i rispettivi momenti di coordinamento. -->

Il primo livello della figura è l'unico che ho vissuto ogni giorno. Ogni mattina tutto il *team* si collega su Google Meet per una riunione di allineamento: ciascuno dice su cosa ha lavorato il giorno prima e su cosa lavorerà quel giorno. La riunione dura di solito tra i quindici e i venti minuti, al massimo mezz'ora. Ho partecipato anch'io, con lo stesso formato degli altri.

Gli orari e il luogo di lavoro sono flessibili. Da quello che ho osservato, i colleghi lavorano in sede per circa il 70% del tempo e da remoto per il resto, ma ognuno gestisce la propria presenza in autonomia. Io sono stato in sede in media un giorno a settimana, come previsto dal piano di lavoro, e ho lavorato da remoto negli altri giorni.

La @tbl:strumenti elenca gli strumenti che il *team* usa ogni giorno, con l'indicazione di come li conosco.

| Strumento | Uso in Halue | Come lo conosco |
| --- | --- | --- |
| Slack | Comunicazione interna e canali dedicati ai clienti | Usato, in un canale con il *tutor* |
| Google Meet | Riunioni quotidiane e *call* | Usato |
| Jira | *Ticket*, *board* e stime | Visto, spiegato da un collega |
| Confluence | Documentazione e procedure | Visto |
| GitHub e Bitbucket | Versionamento del codice | GitHub usato, Bitbucket riferito |
| Figma | Progetto grafico e passaggio agli sviluppatori | Visto |
| Granola | Appunti automatici delle *call* | Visto |
| Postman | Prova delle API | Riferito |

: Gli strumenti di lavoro di Halue, con il loro uso e il modo in cui li conosco: usati durante lo *stage*, visti usare dai colleghi o soltanto riferiti dal *tutor*. Fonte: elaborazione mia. {#tbl:strumenti}

Con i clienti il *team* comunica su canali Slack dedicati a ciascun marchio, nelle *sprint review* con dimostrazioni del lavoro svolto e con rapporti periodici di avanzamento; i rapporti sulle attività e le variazioni contrattuali passano invece per *email*. La conoscenza interna sta su Confluence e su Google Drive. Una persona nuova, secondo il *tutor*, viene affiancata da un collega, parte dalla documentazione e dalle procedure e comincia con *ticket* piccoli su un progetto reale. Il mio inserimento è stato diverso, perché lavoravo su un progetto mio: ho imparato i processi dell'azienda facendo domande e ascoltando le riunioni, più che lavorandoci dentro.

### Dal *ticket* al rilascio

La @fig:ticket segue il percorso di una richiesta del cliente, dal momento in cui arriva al rilascio in produzione e alla manutenzione.

![Il ciclo di vita di un *ticket* in Halue: dalla richiesta del cliente al *ticket* su Jira, attraverso i due *refinement*, la stima, lo sviluppo con *pull request* e *test*, il collaudo in *staging*, fino al rilascio in produzione e alla manutenzione. Fonte: elaborazione mia dalle risposte scritte del *tutor*.](segnaposto.pdf){#fig:ticket width=80%}

<!-- FIGURA DA REALIZZARE: diagramma di attività del ciclo di vita di un ticket, con la scorciatoia dei bug che saltano il tech refinement. -->

Le richieste arrivano da *call*, *email* o *workshop* e diventano *ticket*~G~ su Jira, cioè unità di lavoro tracciate, di quattro tipi: *Epic* per gli insiemi di funzionalità, *Story* per le singole funzionalità, *Change Request* per le modifiche chieste a progetto avviato e *Bug* per i difetti. Ogni *ticket* passa per due fasi di approfondimento: il *refinement* funzionale, che ne valuta la completezza e la fattibilità, e il *refinement* tecnico, svolto dagli sviluppatori. I *bug* di norma saltano il secondo passaggio.

Le stime sono due, perché servono a due destinatari. Per il *team* si usano gli *story point*~G~, una misura della complessità relativa espressa con i numeri di Fibonacci da 1 a 13: servono a pianificare lo *sprint*, e un *ticket* che supera 13 va spezzato in *ticket* più piccoli. Per il cliente si stimano invece le ore, con un metodo interno che pesa quattro dimensioni: la complessità, la chiarezza della richiesta, il *team* coinvolto e la confidenza nella stima.

Il progetto grafico arriva da Figma, collegato al *ticket*, sempre in versione per dispositivi mobili e per *desktop*. Il passaggio agli sviluppatori avviene in Figma stesso, con le specifiche e con un confronto diretto con il *designer* sui punti meno chiari, e il *designer* rivede l'implementazione prima del rilascio. Ogni marchio ha il proprio *design system*~G~, cioè l'insieme di componenti e stili che rende coerenti le sue pagine: è il motivo per cui, nel mio progetto, adattare l'aspetto del *widget* al negozio si è rivelato così difficile (@sec:sperimentazioni).

Nello sviluppo ogni *ticket* corrisponde a una *pull request*~G~, e i nomi dei *branch* e i messaggi di *commit* riportano la chiave del *ticket*, così che ogni modifica al codice si possa ricondurre alla richiesta da cui nasce. ESLint e Prettier controllano lo stile del codice, e le versioni seguono il versionamento semantico (SemVer)~G~, con *tag* e *release* su GitHub. La verifica combina *test* automatici, di unità e di integrazione, e *test* manuali; non c'è una copertura minima prefissata. Il controllo di qualità lo svolgono gli sviluppatori durante lo sviluppo, e poi il cliente nel collaudo.

Il rilascio attraversa tre ambienti: sviluppo, un ambiente di collaudo (*staging*~G~ o *preview*) e produzione. Il *deploy* è automatizzato e segue una procedura scritta, ma il passaggio in produzione lo esegue sempre una persona del *team*. Dopo la consegna, i difetti e le richieste di modifica passano per i contratti di manutenzione: le segnalazioni arrivano su Jira, sul canale Slack del cliente o per *email*, e le priorità si concordano con il cliente caso per caso, senza livelli di servizio formali.

Le decisioni di architettura nascono nel *refinement* funzionale e si consolidano in quello tecnico. Quelle che riguardano un singolo *ticket* restano scritte nel *ticket*, dove chi sviluppa le trova; quelle che valgono per tutto il progetto diventano ADR~G~, documenti brevi che registrano il contesto, la scelta e la sua motivazione. Il ciclo si chiude con le retrospettive, a fine *sprint* e alla chiusura di un progetto o di una *release* importante, per portare le correzioni nei progetti successivi.

Da questo quadro ricavo una lettura del metodo di Halue: la struttura è rigida dove si ripaga sempre, cioè nella tracciabilità dalla richiesta al codice e nelle stime, e flessibile dove i clienti sono diversi tra loro, come la copertura dei *test* o i livelli di servizio, che si decidono progetto per progetto. Ho trovato la stessa impostazione nel mio *stage*, per esempio nella scelta di concentrare i *test* automatici dove servivano davvero (@sec:verifica).

## Innovazione e intelligenza artificiale {#sec:innovazione}

Sul rapporto di Halue con l'innovazione ho più osservazioni dirette che sugli altri temi, perché si vede nel lavoro di ogni giorno.

L'azienda dichiara sul proprio sito di fare uno *scouting* tecnologico continuo, di ridurre il debito tecnico allungando la vita delle piattaforme e di dedicare oltre il 10% del tempo a progetti di ricerca e sviluppo, tra cui quelli di intelligenza artificiale. La percentuale non ho modo di verificarla, ma ho visto quanto tempo i colleghi dedicano a studiare: lo considerano un modo per crescere come professionisti, non soltanto come dipendenti dell'azienda. Secondo il *tutor*, l'azienda organizza inoltre una formazione interna sui metodi agili, sulle piattaforme e sulla tecnologia, e ogni anno qualche evento formativo per i clienti.

L'intelligenza artificiale è lo strumento in cui questa propensione si vede di più. Il *team* usa ampiamente strumenti di sviluppo basati sull'IA e segue da vicino tutto ciò che esce nel settore: ho visto *workflow* di *code review* automatica, la lettura dei *changelog* delle tecnologie in uso, *routine* ricorrenti con Claude Cowork e Claude Code, e ho sentito parlare di prove con altri agenti, come Codex di OpenAI. Il *tutor* conferma l'uso quotidiano dell'IA in tutte le attività: lo sviluppo e la revisione del codice, la scrittura della documentazione e dei *ticket*, la gestione dei progetti, per i rapporti e le stime, e il progetto grafico. Per i processi ricorrenti l'azienda ha scritto *skill*~G~ interne, istruzioni riusabili che codificano un processo per un assistente basato su IA.

La regola di fondo è che l'IA propone e la persona decide. Secondo il *tutor* l'effetto sui tempi è già evidente, mentre è ancora presto per misurarlo con precisione, insieme all'impatto sulla qualità. Ho percepito anche un'opinione condivisa nel *team*, che la mia esperienza conferma: nelle mani di un programmatore esperto l'IA è un buon programmatore *junior*, ma non sostituisce un *senior*, e chi sa cosa sta facendo ottiene risultati migliori di quelli dell'IA da sola. Torno su questo punto nella @sec:maturazione.

Nei progetti di IA per i clienti, infine, il *tutor* mi ha descritto alcune regole che ho ritrovato nel mio progetto. I dati vengono sempre dal catalogo reale, tramite strumenti e ricerca, e mai dalla memoria del modello; le azioni con effetti esterni restano sotto controllo umano; la qualità delle risposte si valuta con *test* manuali su casi d'uso reali; il modello si sceglie in base al compito, e i consumi di *token* si tengono sotto controllo.

Questa propensione all'innovazione passa anche dagli *stage*, che Halue usa per esplorare temi che i progetti per i clienti non lasciano il tempo di approfondire. È da qui che parte il capitolo 2.
