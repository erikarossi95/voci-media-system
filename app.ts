// Interface ITrainingProgram
interface ITrainingProgram {
    title: string;
    description: string;
    specializationArea: string;
    duration: string;
    participants: IMediaProfessional[];

    addParticipant(professional: IMediaProfessional): void;
}

// Interface IMediaProfessional
interface IMediaProfessional {
    firstName: string;
    lastName: string;
    specialization: string; // e.g., journalism, directing, production
    experienceYears: number; // years of experience
    interests: string[];

    enrollInProgram(program: ITrainingProgram): void;
}

// Interface IPlatform
interface IPlatform {
    name: string;
    type: 'print' | 'online' | 'audiovisual';
    description: string;
    contentCategories: string[];

    publishContent(professional: IMediaProfessional, content: string): void;
}

// Class MediaProfessional
class MediaProfessional implements IMediaProfessional {
    firstName: string;
    lastName: string;
    specialization: string;
    experienceYears: number;
    interests: string[];

    constructor(firstName: string, lastName: string, specialization: string, experienceYears: number, interests: string[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.specialization = specialization;
        this.experienceYears = experienceYears;
        this.interests = interests;
    }

    enrollInProgram(program: ITrainingProgram): void {
        console.log(`${this.firstName} ${this.lastName} is enrolling in the program: ${program.title}`);
        program.addParticipant(this);
    }
}

// Class TrainingProgram
class TrainingProgram implements ITrainingProgram {
    title: string;
    description: string;
    specializationArea: string;
    duration: string;
    participants: IMediaProfessional[];

    constructor(title: string, description: string, specializationArea: string, duration: string) {
        this.title = title;
        this.description = description;
        this.specializationArea = specializationArea;
        this.duration = duration;
        this.participants = [];
    }

    addParticipant(professional: IMediaProfessional): void {
        // Check if the professional is already enrolled to avoid duplicates
        if (!this.participants.some(p => p.firstName === professional.firstName && p.lastName === professional.lastName)) {
            this.participants.push(professional);
            console.log(`${professional.firstName} ${professional.lastName} has been added to the program "${this.title}".`);
        } else {
            console.log(`${professional.firstName} ${professional.lastName} is already enrolled in the program "${this.title}".`);
        }
    }
}

// Class Platform
class Platform implements IPlatform {
    name: string;
    type: 'print' | 'online' | 'audiovisual';
    description: string;
    contentCategories: string[];

    constructor(name: string, type: 'print' | 'online' | 'audiovisual', description: string, contentCategories: string[]) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.contentCategories = contentCategories;
    }

    publishContent(professional: IMediaProfessional, content: string): void {
        console.log(`The platform "${this.name}" (${this.type}) has published content by ${professional.firstName} ${professional.lastName}.`);
        console.log(`Content: "${content}"`);
        console.log(`Professional's specialization: ${professional.specialization}`);
        console.log('---');
    }
}


// --- Instantiation and Testing ---

console.log("--- Starting 'Voci' Simulation Test ---");

// 1. Instantiate MediaProfessionals
const mediaProfessional1 = new MediaProfessional("Giulia", "Rossi", "Journalism", 5, ["investigative reports", "interviews", "environment"]);
const mediaProfessional2 = new MediaProfessional("Laura", "Bianchi", "Directing", 8, ["documentaries", "short films", "social issues"]);
const mediaProfessional3 = new MediaProfessional("Sara", "Verdi", "Production", 3, ["podcasts", "events", "technology"]);

console.log("\nMedia Professionals created:");
console.log(mediaProfessional1);
console.log(mediaProfessional2);
console.log(mediaProfessional3);

// 2. Instantiate TrainingPrograms
const mentorshipProgram = new TrainingProgram(
    "Mentorship for New Voices",
    "One-to-one mentorship program with industry experts.",
    "Career Development",
    "6 months"
);

const technicalProgram = new TrainingProgram(
    "Advanced Digital Storytelling Course",
    "Practical training on storytelling techniques for digital platforms.",
    "Technical Skills",
    "3 months"
);

console.log("\nTraining Programs created:");
console.log(mentorshipProgram);
console.log(technicalProgram);

// 3. Instantiate Platforms
const blogPlatform = new Platform(
    "Voci Blog",
    "online",
    "Main platform for articles and in-depth analyses.",
    ["current affairs", "society", "culture"]
);

const youtubePlatform = new Platform(
    "VociTV YouTube Channel",
    "audiovisual",
    "Channel dedicated to videos, interviews, and documentaries.",
    ["interviews", "analysis", "success stories"]
);

const magazinePlatform = new Platform(
    "Women Today Magazine",
    "print",
    "Partner print magazine for in-depth articles.",
    ["fashion", "lifestyle", "work"]
);

console.log("\nPlatforms created:");
console.log(blogPlatform);
console.log(youtubePlatform);
console.log(magazinePlatform);

// 4. Verify Connection Logic

console.log("\n--- Connection Logic ---");

// Professionals enroll in programs
mediaProfessional1.enrollInProgram(mentorshipProgram);
mediaProfessional2.enrollInProgram(technicalProgram);
mediaProfessional3.enrollInProgram(mentorshipProgram); // Sara also enrolls in the mentorship program

// Attempt to add the same professional (should print an already enrolled message)
mediaProfessional3.enrollInProgram(mentorshipProgram);


console.log("\nProgram status after enrollments:");
console.log(mentorshipProgram);
console.log(technicalProgram);

// Platforms publish content from professionals
blogPlatform.publishContent(
    mediaProfessional1,
    "Article: 'The Impact of Women in Italian Investigative Journalism'."
);

youtubePlatform.publishContent(
    mediaProfessional2,
    "Video Interview: 'Emerging Female Directors: Challenges and Opportunities in Independent Cinema'."
);

magazinePlatform.publishContent(
    mediaProfessional3,
    "Feature: 'The Role of Women in Successful Podcast Production'."
);

console.log("--- End 'Voci' Simulation Test ---");