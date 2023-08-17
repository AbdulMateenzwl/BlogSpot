const posts = [
  {
    title: "Introduction to JavaScript",
    slug: "introduction-to-js",
    content: "JavaScript is a versatile programming language..."
  },
  {
    title: "Web Development with HTML and CSS",
    slug: "web-dev-with-html-css",
    content: "Creating web pages involves using HTML for structure..."
  },
  {
    title: "Data Structures and Algorithms in C#",
    slug: "ds-algorithms-in-csharp",
    content: "Understanding data structures and algorithms is crucial..."
  },
  {
    title: "Getting Started with React",
    slug: "getting-started-with-react",
    content: "React is a popular JavaScript library for building user interfaces..."
  },
  {
    title: "Python for Data Science",
    slug: "python-for-data-science",
    content: "Python is widely used in the field of data science..."
  },
  {
    title: "Creating Interactive Web Applications with Vue.js",
    slug: "interactive-web-apps-with-vuejs",
    content: "Vue.js is a progressive JavaScript framework for building user interfaces..."
  },
  {
    title: "Introduction to Node.js",
    slug: "introduction-to-nodejs",
    content: "Node.js allows you to build scalable and efficient server-side applications..."
  }
];

 import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';



export async function GET(){

  const session = await getServerSession();

    return NextResponse.json(posts);
}