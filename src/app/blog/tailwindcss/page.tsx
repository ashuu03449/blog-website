import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TailwindBlog = () => {
  return (
    <div className="w-[90%] lg:w-[70%] mx-auto mt-20 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Getting Started with Tailwind CSS</h1>
      <Image 
        src="/images/tailcss.png" // Ensure this image path is correct.
        alt="Tailwind CSS Logo"
        width={700} 
        height={300} 
        className="rounded-lg mb-6 mx-auto"
      />
      <article className="mt-10 text-gray-700">
        <p className="text-lg mb-6 leading-7">
          Tailwind CSS is a utility-first CSS framework packed with classes like 
          <code className="bg-gray-200 px-1 rounded">flex</code>, 
          <code className="bg-gray-200 px-1 rounded">pt-4</code>, and 
          <code className="bg-gray-200 px-1 rounded">text-center</code> 
          to build any design directly in your markup.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-blue-700">Why Use Tailwind CSS?</h3>
        <ul className="list-disc list-inside space-y-2 ml-6 mb-6">
          <li>Utility-First: Speed up development with utility classes that can be combined as needed.</li>
          <li>Responsive Design: Built-in responsive modifiers make it easy to create responsive layouts.</li>
          <li>Customization: Tailwind is fully customizable with configuration options for colors, spacing, and more.</li>
          <li>Efficiency: Write less custom CSS by using Tailwind&apos;s pre-built classes.</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4 text-blue-700">Setting Up Tailwind CSS</h3>
        <p className="mb-6">To add Tailwind CSS to your project, follow these steps:</p>
        <pre className="bg-gray-100 p-4 rounded-md mb-6 border-l-4 border-blue-600 text-sm text-gray-700">
          {`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
        </pre>

        <h3 className="text-2xl font-semibold mb-4 text-blue-700">Configure Tailwind</h3>
        <p className="mb-6">
          Open the <code className="bg-gray-200 px-1 rounded">tailwind.config.js</code> file and configure the paths for your template files:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md mb-6 border-l-4 border-blue-600 text-sm text-gray-700">
          {`module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};`}
        </pre>

        <h3 className="text-2xl font-semibold mb-4 text-blue-700">Using Tailwind CSS in Your Project</h3>
        <p className="mb-6">
          Add the Tailwind directives to your main CSS file, typically <code className="bg-gray-200 px-1 rounded">src/index.css</code>:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md mb-6 border-l-4 border-blue-600 text-sm text-gray-700">
          {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
        </pre>

        <h3 className="text-2xl font-semibold mb-4 text-blue-700">Example Tailwind CSS Layout</h3>
        <pre className="bg-gray-100 p-4 rounded-md mb-6 border-l-4 border-blue-600 text-sm text-gray-700">
          {`<div className="bg-blue-500 text-white p-8 rounded-lg shadow-lg">
  <h1 className="text-2xl font-bold">Hello, Tailwind!</h1>
  <p className="mt-4">This is a sample component styled with Tailwind CSS.</p>
</div>`}
        </pre>

        <div className="text-center mt-8">
          <Link href="/blog" className="text-blue-600 underline hover:text-blue-500">
            Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
};

export default TailwindBlog;
