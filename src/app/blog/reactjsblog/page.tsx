// src/ReactBlog.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const ReactBlog = () => {
  return (
    <>
      <Head>
        <title>Getting Started with React </title>
        <meta 
          name="description" 
          content="Learn the basics of React, its setup, and the new features introduced in React 19." 
        />
      </Head>

      <div className="w-[90%] lg:w-[70%] mx-auto mt-20 p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-600">
          Getting Started with React
        </h1>
        <p className="text-gray-400 mb-4 text-center">October 26, 2024</p>

        <Image 
          src="/images/react.avif" 
          alt="React Logo"
          width={700} 
          height={300} 
          className="rounded-lg mb-6 mx-auto"
        />

        <article className="mt-10 text-gray-700">
          <p className="text-lg mb-6 leading-7">
            React is a popular JavaScript library for building user interfaces, especially for single-page applications. 
            It helps developers create interactive UIs efficiently with a component-based approach. This blog will cover 
            the basics of getting started with React.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-purple-700">Why Choose React?</h3>
          <ul className="list-disc list-inside space-y-2 ml-6 mb-6">
            <li>Component-Based: Build encapsulated components to manage their own state.</li>
            <li>Virtual DOM: React updates the UI efficiently by comparing differences in the DOM.</li>
            <li>Unidirectional Data Flow: Keeps data predictable and manageable.</li>
            <li>Large Ecosystem: Supports libraries and tools like Redux and React Router.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-purple-700">Setting Up React</h3>
          <p className="mb-6">To create a new React project, you can use the following command:</p>
          <pre className="bg-gray-100 p-4 rounded-md mb-6 border-l-4 border-purple-600 text-sm text-gray-700">
            npx create-react-app my-react-app
          </pre>

          <p className="mb-6">After creating the project, navigate to the project folder and start the development server:</p>
          <pre className="bg-gray-100 p-4 rounded-md mb-6 border-l-4 border-purple-600 text-sm text-gray-700">
{`cd my-react-app
npm start`}
          </pre>

          <h3 className="text-2xl font-semibold mb-4 text-purple-700">Folder Structure</h3>
          <pre className="bg-gray-100 p-4 rounded-md mb-6 border-l-4 border-purple-600 text-sm text-gray-700">
{`my-react-app/
├── src/
├── public/
├── node_modules/
└── package.json`}
          </pre>

          <p className="mb-6">
            The <code className="bg-gray-200 px-1 rounded">src</code> folder contains all your application’s components, and 
            the <code className="bg-gray-200 px-1 rounded">public</code> folder holds static assets. 
            <code className="bg-gray-200 px-1 rounded">package.json</code> manages project dependencies.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-purple-700">Creating Your First Component</h3>
          <pre className="bg-gray-100 p-4 rounded-md mb-6 border-l-4 border-purple-600 text-sm text-gray-700">
{`import React from 'react';

const HelloWorld = () => {
  return (
    <h1>Hello, React!</h1>
  );
};

export default HelloWorld;`}
          </pre>

          <h3 className="text-2xl font-semibold mb-4 text-purple-700">Deploying Your React App</h3>
          <p className="mb-6">
            Deploying a React app is simple with platforms like Netlify or Vercel. Push your project to GitHub, connect to a platform, and deploy with ease.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-purple-700">Whats New in React 19?</h3>
          <p className="mb-6">React 19 introduces several improvements and new features...</p>

          <div className="text-center mt-8">
            <Link href="/blog">
              <a className="text-blue-600 underline hover:text-purple-600">Back to Blog</a>
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default ReactBlog;
