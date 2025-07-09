Voci: Enterprise Modeling System in TypeScript
A TypeScript project to model the operational structure of "Voci," an online media committed to promoting gender equality and diversity.

Project Description
This project develops a TypeScript system that models the operational structure of "Voci," a hypothetical yet realistic online media. The main goal is to represent the interactions between media professionals, training programs, and publishing platforms, highlighting how technology can facilitate the promotion of gender equality and diversity in the media landscape.

The system has been designed through the definition of interfaces and the implementation of classes that represent the various key components of the organization: IMediaProfessional, ITrainingProgram, and IPlatform.

Project Structure
The project is structured around three main interfaces and their corresponding implementing classes:

Interfaces
IMediaProfessional: Represents women who work or aspire to work in media.

Properties: firstName, lastName, specialization, experienceYears, interests.

Method: enrollInProgram(program: ITrainingProgram): void to enroll in a training program.

ITrainingProgram: Represents the training, mentorship, and professional development programs offered by "Voci."

Properties: title, description, specializationArea, duration, participants (IMediaProfessional[]).

Method: addParticipant(professional: IMediaProfessional): void to add a professional to the list of participants.

IPlatform: Represents publishing platforms (both traditional and digital) that collaborate with "Voci" to promote inclusive content.

Properties: name, type ('print' | 'online' | 'audiovisual'), description, contentCategories.

Method: publishContent(professional: IMediaProfessional, content: string): void to publish a media professional's work.

Classes
MediaProfessional: Implements IMediaProfessional. Manages information about media professionals, including their participation in training programs.

TrainingProgram: Implements ITrainingProgram. Manages the details of training, mentorship, and professional development programs, including enrolled participants. Includes logic to prevent duplicate participant additions.

Platform: Implements IPlatform. Represents publishing platforms and allows for the publication of content by professionals.

Connection Logic
The system entities interact to simulate "Voci"'s workflows:

The enrollInProgram method of the MediaProfessional class allows professionals to enroll in the training programs offered.

The addParticipant method of the TrainingProgram class facilitates the addition of new professionals to development programs, ensuring no duplicates.

The publishContent method of the Platform class enables platforms to collaborate with media professionals to publish works that promote gender equality and diversity in content.

This interconnection demonstrates how the system can model relationships and workflows within the organization, facilitating the promotion of gender equality through training and visibility for professionals.

Design Choices
Architectural and implementation decisions were guided by principles of clarity, robustness, and scalability:

Interface-Based Architecture: Adopting interfaces before concrete classes allowed for defining a clear contract for each entity, improving code readability, maintainability, and flexibility. This approach promotes polymorphism and makes the system easier to extend in the future.

Encapsulation in Classes: Each class encapsulates data (properties) and logic (methods) related to its entity, promoting good code organization and reducing external dependencies.

System Robustness: The implementation of specific controls, such as preventing duplicate enrollments in TrainingProgram, enhances system stability and reliability.

Benefits of TypeScript: The use of TypeScript ensured strong typing, enabling early detection of errors during development, improving code quality, and facilitating team collaboration.

Clear Logs: Extensive use of console.log() was fundamental for visualizing the flow of operations and validating the correct functioning of the connection logic during development and testing.

How to Run the Code
The project was developed in TypeScript and can be easily run and viewed online via CodePen.

View on CodePen
You can see an interactive demo of the project and the console output at the following link:

👉 https://codepen.io/erikarossi95/pen/JodgeNZ

Local Execution (Optional)
If you wish to run the code locally, follow these steps:

Clone the repository:

git clone https://github.com/erikarossi95/voci-media-system.git
cd voci-media-system

Install TypeScript (if you haven't already):

npm install -g typescript

Compile the TypeScript code:

tsc app.ts

(Ensure your main file is named app.ts or adjust the command accordingly)

Execute the compiled JavaScript code:

node app.js

The program's output will be visible in your console.

Author
Erika Rossi