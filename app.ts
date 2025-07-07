// Interfaccia IProgrammaFormazione
interface IProgrammaFormazione {
    titolo: string;
    descrizione: string;
    ambitoSpecializzazione: string;
    durata: string;
    elencoPartecipanti: IProfessionistaMedia[];

    aggiungiPartecipante(professionista: IProfessionistaMedia): void;
}

// Interfaccia IProfessionistaMedia
interface IProfessionistaMedia {
    nome: string;
    cognome: string;
    specializzazione: string; // es. giornalismo, regia, produzione
    esperienza: number; // anni di esperienza
    interessi: string[];

    partecipaProgramma(programma: IProgrammaFormazione): void;
}

// Interfaccia IPiattaforma
interface IPiattaforma {
    nome: string;
    tipo: 'stampato' | 'online' | 'audiovisivo';
    descrizione: string;
    categorieContenuto: string[];

    pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string): void;
}

// Classe ProfessionistaMedia
class ProfessionistaMedia implements IProfessionistaMedia {
    nome: string;
    cognome: string;
    specializzazione: string;
    esperienza: number;
    interessi: string[];

    constructor(nome: string, cognome: string, specializzazione: string, esperienza: number, interessi: string[]) {
        this.nome = nome;
        this.cognome = cognome;
        this.specializzazione = specializzazione;
        this.esperienza = esperienza;
        this.interessi = interessi;
    }

    partecipaProgramma(programma: IProgrammaFormazione): void {
        console.log(`${this.nome} ${this.cognome} si sta iscrivendo al programma: ${programma.titolo}`);
        programma.aggiungiPartecipante(this);
    }
}

// Classe ProgrammaFormazione
class ProgrammaFormazione implements IProgrammaFormazione {
    titolo: string;
    descriptive: string; // Renamed to avoid conflict with 'description' property
    ambitoSpecializzazione: string;
    durata: string;
    elencoPartecipanti: IProfessionistaMedia[];

    constructor(titolo: string, descrizione: string, ambitoSpecializzazione: string, durata: string) {
        this.titolo = titolo;
        this.descriptive = descrizione;
        this.ambitoSpecializzazione = ambitoSpecializzazione;
        this.durata = durata;
        this.elencoPartecipanti = [];
    }

    aggiungiPartecipante(professionista: IProfessionistaMedia): void {
        if (!this.elencoPartecipanti.some(p => p.nome === professionista.nome && p.cognome === professionista.cognome)) {
            this.elencoPartecipanti.push(professionista);
            console.log(`${professionista.nome} ${professionista.cognome} è stato aggiunto al programma "${this.titolo}".`);
        } else {
            console.log(`${professionista.nome} ${professionista.cognome} è già iscritto al programma "${this.titolo}".`);
        }
    }
}

// Classe Piattaforma
class Piattaforma implements IPiattaforma {
    nome: string;
    tipo: 'stampato' | 'online' | 'audiovisivo';
    descriptive: string; // Renamed to avoid conflict with 'description' property
    categorieContenuto: string[];

    constructor(nome: string, tipo: 'stampato' | 'online' | 'audiovisivo', descrizione: string, categorieContenuto: string[]) {
        this.nome = nome;
        this.tipo = tipo;
        this.descriptive = descrizione;
        this.categorieContenuto = categorieContenuto;
    }

    pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string): void {
        console.log(`La piattaforma "${this.nome}" (${this.tipo}) ha pubblicato un contenuto di ${professionista.nome} ${professionista.cognome}.`);
        console.log(`Contenuto: "${contenuto}"`);
        console.log(`Specializzazione della professionista: ${professionista.specializzazione}`);
        console.log('---');
    }
}


// --- Istanziazione e Test ---

console.log("--- Inizio Test Simulazione 'Voci' ---");

// 1. Istanzia ProfessionisteMedia
const professionista1 = new ProfessionistaMedia("Giulia", "Rossi", "Giornalismo", 5, ["inchieste", "interviste", "ambiente"]);
const professionista2 = new ProfessionistaMedia("Laura", "Bianchi", "Regia", 8, ["documentari", "cortometraggi", "sociale"]);
const professionista3 = new ProfessionistaMedia("Sara", "Verdi", "Produzione", 3, ["podcast", "eventi", "tecnologia"]);

console.log("\nProfessioniste create:");
console.log(professionista1);
console.log(professionista2);
console.log(professionista3);

// 2. Istanzia ProgrammiFormazione
const programmaMentorship = new ProgrammaFormazione(
    "Mentorship per Nuove Voci",
    "Programma di mentorship one-to-one con esperte del settore.",
    "Sviluppo Carriera",
    "6 mesi"
);

const programmaTecnico = new ProgrammaFormazione(
    "Corso Avanzato di Storytelling Digitale",
    "Formazione pratica su tecniche di storytelling per piattaforme digitali.",
    "Competenze Tecniche",
    "3 mesi"
);

console.log("\nProgrammi di formazione creati:");
console.log(programmaMentorship);
console.log(programmaTecnico);

// 3. Istanzia Piattaforme
const piattaformaBlog = new Piattaforma(
    "Blog di Voci",
    "online",
    "Piattaforma principale per articoli e approfondimenti.",
    ["attualità", "società", "cultura"]
);

const piattaformaYouTube = new Piattaforma(
    "Canale YouTube VociTV",
    "audiovisivo",
    "Canale dedicato a video, interviste e documentari.",
    ["interviste", "analisi", "storie di successo"]
);

const piattaformaRivista = new Piattaforma(
    "Rivista 'Donne Oggi'",
    "stampato",
    "Rivista cartacea partner per articoli di approfondimento.",
    ["moda", "lifestyle", "lavoro"]
);

console.log("\nPiattaforme create:");
console.log(piattaformaBlog);
console.log(piattaformaYouTube);
console.log(piattaformaRivista);

// 4. Verifica Logica di Collegamento

console.log("\n--- Logica di Collegamento ---");

// Professioniste si iscrivono ai programmi
professionista1.partecipaProgramma(programmaMentorship);
professionista2.partecipaProgramma(programmaTecnico);
professionista3.partecipaProgramma(programmaMentorship); // Sara si iscrive anche al mentorship

// Tentativo di aggiungere la stessa professionista (dovrebbe stampare un messaggio di già iscritta)
professionista3.partecipaProgramma(programmaMentorship);


console.log("\nStato dei programmi dopo le iscrizioni:");
console.log(programmaMentorship);
console.log(programmaTecnico);

// Piattaforme pubblicano contenuti delle professioniste
piattaformaBlog.pubblicaContenuto(
    professionista1,
    "Articolo: 'L'impatto delle donne nel giornalismo d'inchiesta italiano'."
);

piattaformaYouTube.pubblicaContenuto(
    professionista2,
    "Video Intervista: 'Registe emergenti: sfide e opportunità nel cinema indipendente'."
);

piattaformaRivista.pubblicaContenuto(
    professionista3,
    "Servizio: 'Il ruolo delle donne nella produzione di podcast di successo'."
);

console.log("--- Fine Test Simulazione 'Voci' ---");
