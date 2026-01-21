import express from 'express'

const app = express()
const port = process.env.PORT || 3000

const notesData = [
    {
        id: 1,
        title: "React Basics",
        type: "Core Concept",
        overview:
            "This note introduces the fundamentals of React, helping beginners understand how modern frontend development works using components and state.",
        summary: [
            "Understanding JSX and component-based architecture",
            "Difference between props and state",
            "Using basic hooks like useState",
            "Building reusable UI components",
        ],
        description: `
React Basics introduces the foundational ideas behind modern frontend development using React. It explains how JSX allows developers to combine JavaScript logic with UI structure, making component creation more intuitive and readable. The concept of component-based architecture is explored to show how large applications are broken into small, manageable, and reusable parts.

The note clearly distinguishes between props and state, two core mechanisms for handling data in React applications. Props are used for passing data between components, while state is used to manage dynamic data within a component. Practical explanations help learners understand real-world data flow.

Additionally, basic React hooks such as useState are introduced to manage state in functional components. By the end of this note, students gain the confidence to build simple interactive interfaces and understand the building blocks of more advanced React concepts.
    `,
        year: "2nd Year",
        subject: "React",
        createdAt: "2025-01-05",
        image: "https://reactjs.org/logo-og.png",
        pdf: "/pdfs/react.pdf"
    },

    {
        id: 2,
        title: "Advanced React",
        type: "Practical Use",
        overview:
            "Covers advanced React concepts required to build scalable and high-performance applications in real-world projects.",
        summary: [
            "Using useEffect correctly",
            "Managing global state with Context API",
            "Optimizing performance using memoization",
            "Best practices for large React apps",
        ],
        description: `
Advanced React focuses on patterns and techniques used in production-level applications. It explains how the useEffect hook manages side effects such as API calls, subscriptions, and lifecycle-like behavior in functional components. Common mistakes and best practices are discussed to prevent unnecessary re-renders.

The note also introduces global state management using the Context API. It explains how Context helps eliminate prop drilling in large component trees and provides a clean way to share data across the application. Real-world examples help connect theory with practice.

Performance optimization is another key focus, covering memoization techniques like React.memo and useCallback. These concepts help developers build scalable, efficient, and maintainable React applications suitable for real-world use.
    `,
        year: "3rd Year",
        subject: "React",
        createdAt: "2025-01-12",
        image: "https://reactjs.org/logo-og.png",
    },

    {
        id: 3,
        title: "DBMS Normalization",
        type: "Exam Oriented",
        overview:
            "Explains database normalization techniques to reduce redundancy and improve data integrity with practical examples.",
        summary: [
            "Purpose of database normalization",
            "Differences between 1NF, 2NF, and 3NF",
            "Understanding BCNF with examples",
            "Reducing data redundancy",
        ],
        description: `
This note explains why normalization is essential in database design. Poorly designed databases often suffer from redundancy, inconsistency, and update anomalies. Normalization helps structure data efficiently while maintaining data accuracy and integrity.

The concepts of First Normal Form (1NF), Second Normal Form (2NF), and Third Normal Form (3NF) are explained step by step using simple relational tables. Each normal form addresses specific design issues, making the progression logical and easy to understand for exams.

The note also introduces Boyce-Codd Normal Form (BCNF), highlighting scenarios where 3NF is not sufficient. With clear explanations and examples, this note prepares students to confidently handle normalization questions in both exams and practical database design.
    `,
        year: "3rd Year",
        subject: "DBMS",
        createdAt: "2025-01-18",
        image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
    },

    {
        id: 4,
        title: "Operating System Scheduling",
        type: "Key Topic",
        overview:
            "Provides an overview of CPU scheduling algorithms and how operating systems manage process execution efficiently.",
        summary: [
            "Understanding process scheduling",
            "Difference between preemptive and non-preemptive scheduling",
            "How FCFS, SJF, and Round Robin work",
            "Real-life importance of scheduling algorithms",
        ],
        description: `
This note introduces CPU scheduling, a core responsibility of an operating system. Scheduling determines how processes are allocated CPU time, directly affecting system performance, responsiveness, and fairness among processes.

Different scheduling strategies such as preemptive and non-preemptive scheduling are explained with clarity. Algorithms like FCFS, SJF, Priority Scheduling, and Round Robin are discussed in detail along with their advantages, disadvantages, and use cases.

Real-life examples help relate scheduling concepts to multitasking systems such as operating systems used in computers and smartphones. This note builds strong conceptual understanding for both exams and system-level thinking.
    `,
        year: "3rd Year",
        subject: "OS",
        createdAt: "2025-01-22",
        image: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
    },

    {
        id: 5,
        title: "Computer Networks Basics",
        type: "Foundation Topic",
        overview:
            "Introduces networking fundamentals, protocols, and models essential for understanding how computers communicate.",
        summary: [
            "Understanding the OSI model layers",
            "Difference between TCP and UDP",
            "Common networking protocols",
            "How data flows over the internet",
        ],
        description: `
This note provides a strong foundation in computer networking concepts. It explains how data is transmitted between devices and introduces the OSI model to break down complex communication into manageable layers.

Each OSI layer is discussed with its responsibilities, making it easier to understand how networking hardware and software interact. Differences between TCP and UDP are clearly explained using real-world scenarios.

Common protocols such as HTTP, FTP, and DNS are introduced to show how everyday internet services function. This note prepares students for more advanced networking topics and practical applications.
    `,
        year: "2nd Year",
        subject: "CN",
        createdAt: "2025-01-25",
        image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },

    {
        id: 6,
        title: "Data Structures Overview",
        type: "Concept Note",
        overview:
            "A beginner-friendly introduction to core data structures that form the foundation of efficient algorithms.",
        summary: [
            "Understanding arrays and linked lists",
            "How stacks and queues work",
            "Choosing the right data structure",
            "Importance of time and space complexity",
        ],
        description: `
This note introduces data structures as the backbone of efficient programming. It explains how data organization directly affects algorithm performance and application scalability.

Core structures such as arrays, linked lists, stacks, and queues are discussed with conceptual clarity and practical intuition. The note emphasizes when and why a particular data structure should be chosen.

Time and space complexity are also introduced to develop analytical thinking. By understanding these fundamentals, students build a strong base for advanced data structures and algorithm design.
    `,
        year: "1st Year",
        subject: "DSA",
        createdAt: "2025-01-28",
        image: "https://cdn-icons-png.flaticon.com/512/2103/2103658.png",
    },
];

app.get('/api/notes', (req, res) => {
    res.send(notesData)
})

app.get('/api/notes/:id', (req, res) => {
    const noteId = req.params.id
    const note = notesData.find(
        (item) => item.id.toString() === noteId
    )
    if (!note) {
        return res.status(404).json({ message: "Note not found" })
    }
    res.json(note)
})


app.listen(port, () => {
    console.log("server started...");

})