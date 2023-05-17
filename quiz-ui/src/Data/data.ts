type QuizOption = {
  question: string;
  options: string[];
  answer: number;
}

type QuizData = {
  react: QuizOption[];
}
 const data:QuizData = {
  react: [
    {
      question: "What is React?",
      options: [
        "A JavaScript framework",
        "A programming language",
        "A server-side technology",
        "A user interface library",
      ],
      answer: 3,
    },
    {
      question: "What is JSX in React?",
      options: [
        "A syntax extension for JavaScript",
        "A type of CSS selector",
        "A data fetching library",
        "A package manager for React",
      ],
      answer: 1,
    },
    {
      question: "What is the purpose of React Router?",
      options: [
        "To manage state in React applications",
        "To handle HTTP requests in React applications",
        "To create reusable components in React",
        "To handle routing in React applications",
      ],
      answer: 3,
    },
    {
      question: "What is the virtual DOM in React?",
      options: [
        "A representation of the actual DOM in memory",
        "A special DOM element that React uses internally",
        "A concept used in server-side rendering",
        "A technique to optimize rendering performance in React",
      ],
      answer: 0,
    },
    {
      question: "What is a React component?",
      options: [
        "A function that returns JSX",
        "A class that extends the React Component class",
        "A reusable UI element",
        "All of the above",
      ],
      answer: 3,
    }
  ],
};

export default data
