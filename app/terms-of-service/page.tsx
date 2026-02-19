import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SlimHeader from "@/components/shared/slim-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Moltbase Terms of Service before using the platform.",
};

const TermsOfServicePage = () => {
  // Read the Markdown file at build/request time (runs only on the server)
  const filePath = path.join(process.cwd(), "public", "terms-of-service.md");
  const fileContents = fs.readFileSync(filePath, "utf8");

  return (
    <div className="min-h-screen bg-background">
      <SlimHeader />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <article className="prose prose-slate prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white prose-table:text-sm">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // Enhanced heading styling
              h1: ({ children, ...props }) => (
                <h1
                  className="text-4xl font-bold text-gray-900 dark:text-white mb-6 mt-8 border-b border-gray-200 dark:border-gray-700 pb-3"
                  {...props}
                >
                  {children}
                </h1>
              ),
              h2: ({ children, ...props }) => (
                <h2
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8"
                  {...props}
                >
                  {children}
                </h2>
              ),
              h3: ({ children, ...props }) => (
                <h3
                  className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6"
                  {...props}
                >
                  {children}
                </h3>
              ),
              // Enhanced paragraph styling
              p: ({ children, ...props }) => (
                <p
                  className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
                  {...props}
                >
                  {children}
                </p>
              ),
              // Enhanced list styling
              ul: ({ children, ...props }) => (
                <ul
                  className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300"
                  {...props}
                >
                  {children}
                </ul>
              ),
              ol: ({ children, ...props }) => (
                <ol
                  className="list-decimal list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300"
                  {...props}
                >
                  {children}
                </ol>
              ),
              li: ({ children, ...props }) => (
                <li className="mb-1" {...props}>
                  {children}
                </li>
              ),
              // Enhanced table styling
              table: ({ children, ...props }) => (
                <div className="overflow-x-auto my-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <table
                    className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                    {...props}
                  >
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children, ...props }) => (
                <thead className="bg-gray-50 dark:bg-gray-800" {...props}>
                  {children}
                </thead>
              ),
              tbody: ({ children, ...props }) => (
                <tbody
                  className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700"
                  {...props}
                >
                  {children}
                </tbody>
              ),
              th: ({ children, ...props }) => (
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  {...props}
                >
                  {children}
                </th>
              ),
              td: ({ children, ...props }) => (
                <td
                  className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-100"
                  {...props}
                >
                  {children}
                </td>
              ),
              // Enhanced blockquote styling
              blockquote: ({ children, ...props }) => (
                <blockquote
                  className="border-l-4 border-blue-500 bg-gray-50 dark:bg-gray-800 pl-4 pr-4 py-3 my-4 rounded-r-lg"
                  {...props}
                >
                  <div className="text-gray-700 dark:text-gray-300">
                    {children}
                  </div>
                </blockquote>
              ),
              // Enhanced emphasis and strong text
              em: ({ children, ...props }) => (
                <em
                  className="italic text-gray-600 dark:text-gray-400"
                  {...props}
                >
                  {children}
                </em>
              ),
              strong: ({ children, ...props }) => (
                <strong
                  className="font-semibold text-gray-900 dark:text-white"
                  {...props}
                >
                  {children}
                </strong>
              ),
              // Enhanced link styling
              a: ({ children, href, ...props }) => (
                <a
                  href={href}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline decoration-blue-300 hover:decoration-blue-500 transition-colors"
                  {...props}
                >
                  {children}
                </a>
              ),
              // Enhanced code styling
              code: ({ children, className, ...props }) => {
                const isInline = !className;
                if (isInline) {
                  return (
                    <code
                      className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-1 py-0.5 rounded text-sm font-mono"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                }
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {fileContents}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
};

export default TermsOfServicePage;
