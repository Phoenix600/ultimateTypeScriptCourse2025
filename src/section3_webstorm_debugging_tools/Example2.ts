// A comprehensive TypeScript program for learning debugging tools (No async code)

/**
 * Represents a student with basic information and records.
 *
 * @interface Student
 * @property {number} id - Unique identifier for the student.
 * @property {string} name - Full name of the student.
 * @property {number} age - Age of the student.
 * @property {boolean} enrolled - Indicates if the student is currently enrolled.
 * @property {number[]} scores - Array of scores achieved by the student.
 */
interface Student {
    id: number;
    name: string;
    age: number;
    enrolled: boolean;
    scores: number[];
}

/**
 * Represents a Course with its basic details.
 *
 * @interface Course
 * @property {number} id - The unique identifier for the course.
 * @property {string} title - The title or name of the course.
 * @property {number} credits - The number of credit hours assigned to the course.
 */
interface Course {
    id: number;
    title: string;
    credits: number;
}

const students: Student[] = [
    { id: 1, name: "Alice", age: 20, enrolled: true, scores: [88, 76, 92] },
    { id: 2, name: "Bob", age: 22, enrolled: false, scores: [65, 70, 58] },
    { id: 3, name: "Charlie", age: 19, enrolled: true, scores: [95, 90, 85] },
    { id: 4, name: "David", age: 21, enrolled: true, scores: [null, 81, 79] as any }, // intentional bug
];

const courses: Course[] = [
    { id: 101, title: "Mathematics", credits: 3 },
    { id: 102, title: "Physics", credits: 4 },
    { id: 103, title: "Chemistry", credits: 2 },
];

// Find Student by ID
function getStudentById(id: number): Student | undefined {
    return students.find(s => s.id === id);
}

// Calculate average score
function calculateAverage(scores: number[]): number {
    if (scores.length === 0) return 0;
    let sum = 0;
    for (let score of scores) {

        sum += score;
    }
    return Math.round((sum / scores.length) * 100) / 100;
}

// Print Full Report of a student
function printStudentReport(studentId: number): void {
    const student = getStudentById(studentId);
    if (!student) {
        console.error(`Student with ID ${studentId} not found.`);
        return;
    }

    console.log(`\n--- Report for ${student.name} ---`);
    console.log(`Age: ${student.age}`);
    console.log(`Enrolled: ${student.enrolled ? "Yes" : "No"}`);
    console.log(`Scores: ${student.scores.join(", ")}`);
    const avg = calculateAverage(student.scores);
    console.log(`Average Score: ${avg}`);
}

// Enroll a student
function enrollStudent(id: number): void {
    const student = getStudentById(id);
    if (student) {
        student.enrolled = true;
        console.log(`${student.name} has been enrolled.`);
    } else {
        console.log(`No student found with ID ${id}`);
    }
}

// Drop a student
function dropStudent(id: number): void {
    const student = getStudentById(id);
    if (student) {
        student.enrolled = false;
        console.log(`${student.name} has been dropped.`);
    } else {
        console.log(`No student found with ID ${id}`);
    }
}

// Get total course credits
function getTotalCourseCredits(): number {
    let total = 0;
    for (let course of courses) {
        total += course.credits;
    }
    return total;
}

// Intentional logic bug for debugging
function getYoungestStudent(): Student {
    let youngest = students[0];
    for (let i = 1; i < students.length; i++) {
        if (students[i].age > youngest.age) { // Bug: should be <
            youngest = students[i];
        }
    }
    return youngest;
}

// Entry point
function main(): void {
    console.log("\n=== Student Management Debugging ===");

    printStudentReport(1);
    printStudentReport(2);

    enrollStudent(2);
    dropStudent(1);

    printStudentReport(2);
    printStudentReport(1);
    printStudentReport(4); // Has a score bug

    const totalCredits = getTotalCourseCredits();
    console.log("\nTotal course credits:", totalCredits);

    const youngest = getYoungestStudent(); // Has a bug
    console.log("Youngest student is:", youngest.name, "with age", youngest.age);

    const unknownStudent = getStudentById(10); // Edge case
    console.log("Result for unknown student ID 10:", unknownStudent);
}

// Run the program
main();
