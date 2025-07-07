Voci: Sistema di Modellazione Aziendale in TypeScript
Un progetto TypeScript per modellare la struttura operativa di "Voci", un media online impegnato nella promozione della parità di genere e della diversità.

Descrizione del Progetto
Questo progetto sviluppa un sistema in TypeScript che modella la struttura operativa di "Voci", un media online ipotetico ma realistico. L'obiettivo principale è rappresentare le interazioni tra professioniste dei media, programmi di formazione e piattaforme di pubblicazione, evidenziando come la tecnologia possa facilitare la promozione della parità di genere e la diversità nel panorama mediatico.

Il sistema è stato progettato attraverso la definizione di interfacce e l'implementazione di classi che rappresentano i vari componenti chiave dell'azienda: IProfessionistaMedia, IProgrammaFormazione e IPiattaforma.

Struttura del Progetto
Il progetto è articolato attorno a tre interfacce principali e le relative classi che le implementano:

Interfacce
IProfessionistaMedia: Rappresenta le donne che lavorano o aspirano a lavorare nei media.

Proprietà: nome, cognome, specializzazione, esperienza, interessi.

Metodo: partecipaProgramma(programma: IProgrammaFormazione): void per iscriversi a un programma di formazione.

IProgrammaFormazione: Rappresenta i programmi di formazione, mentorship e sviluppo professionale offerti da "Voci".

Proprietà: titolo, descriptive, ambitoSpecializzazione, durata, elencoPartecipanti (IProfessionistaMedia[]).

Metodo: aggiungiPartecipante(professionista: IProfessionistaMedia): void per aggiungere una professionista all'elenco dei partecipanti.

IPiattaforma: Rappresenta le piattaforme di pubblicazione (tradizionali o digitali) che collaborano con "Voci" per promuovere contenuti inclusivi.

Proprietà: nome, tipo, descriptive, categorieContenuto.

Metodo: pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string): void per pubblicare il lavoro di una professionista media.

Classi
ProfessionistaMedia: Implementa IProfessionistaMedia. Gestisce le informazioni sulle professioniste dei media e la loro partecipazione ai programmi di formazione.

ProgrammaFormazione: Implementa IProgrammaFormazione. Gestisce i dettagli dei programmi di formazione e gli iscritti. Include una logica per evitare l'aggiunta di partecipanti duplicati.

Piattaforma: Implementa IPiattaforma. Rappresenta le piattaforme di pubblicazione e permette la pubblicazione dei contenuti delle professioniste.

Logica di Collegamento
Le entità del sistema interagiscono per simulare i flussi di lavoro di "Voci":

Il metodo partecipaProgramma della classe ProfessionistaMedia consente alle professioniste di iscriversi ai programmi di formazione offerti.

Il metodo aggiungiPartecipante della classe ProgrammaFormazione facilita l'aggiunta di nuove professioniste ai programmi di sviluppo, garantendo che non ci siano duplicati.

Il metodo pubblicaContenuto della classe Piattaforma permette alle piattaforme di collaborare con le professioniste dei media per pubblicare lavori che promuovono la parità di genere e la diversità nei contenuti.

Questa interconnessione dimostra come il sistema può modellare le relazioni e i flussi di lavoro all'interno dell'organizzazione, facilitando la promozione della parità di genere attraverso la formazione e la visibilità delle professioniste.

Scelte Progettuali
Le decisioni architetturali e di implementazione sono state guidate da principi di chiarezza, robustezza e scalabilità:

Architettura basata su Interfacce: L'adozione di interfacce prima delle classi concrete ha permesso di definire un contratto chiaro per ogni entità, migliorando la leggibilità, la manutenibilità e la flessibilità del codice. Questo approccio favorisce il polimorfismo e rende il sistema più facile da estendere in futuro.

Incapsulamento nelle Classi: Ogni classe incapsula i dati (proprietà) e la logica (metodi) relativi alla propria entità, promuovendo una buona organizzazione del codice e riducendo le dipendenze esterne.

Robustezza del Sistema: L'implementazione di controlli specifici, come la prevenzione di iscrizioni duplicate in ProgrammaFormazione, aumenta la stabilità e l'affidabilità del sistema.

Vantaggi di TypeScript: L'uso di TypeScript ha garantito una forte tipizzazione, permettendo il rilevamento precoce di errori in fase di sviluppo, migliorando la qualità del codice e facilitando la collaborazione in team.

Chiarezza dei Log: L'utilizzo estensivo di console.log() è stato fondamentale per visualizzare il flusso delle operazioni e convalidare il corretto funzionamento della logica di collegamento durante lo sviluppo e il testing.

Come Eseguire il Codice
Il progetto è stato sviluppato in TypeScript e può essere eseguito e visualizzato facilmente online tramite CodePen.

Visualizzazione su CodePen
Puoi vedere una demo interattiva del progetto e l'output in console al seguente link:

👉 https://codepen.io/erikarossi95/pen/JodgeNZ

Esecuzione Locale (Opzionale)
Se desideri eseguire il codice localmente, segui questi passaggi:

Clona il repository:

Bash

git clone https://github.com/erikarossi95/voci-media-system.git
cd voci-media-system
Installa TypeScript (se non lo hai già):

Bash

npm install -g typescript
Compila il codice TypeScript:

Bash

tsc app.ts
(Assicurati che il tuo file principale sia chiamato app.ts o adatta il comando)

Esegui il codice JavaScript compilato:

Bash

node app.js
L'output del programma sarà visibile nella tua console.

Autore
Erika Rossi