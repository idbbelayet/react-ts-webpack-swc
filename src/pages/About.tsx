import { Icons } from '../components/Icons';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-start p-6">
      <section className="p-6 text-center text-gray-600 dark:text-gray-100">
        <h1 className="mb-4 text-3xl font-bold">👉 About Page</h1>
        <p className="mt-5">This is the Home page loaded via React Router.</p>
        <div className="flex items-center justify-center">
          <h1 className="mt-3 text-4xl font-bold">
            React + TypeScript + Webpack + SWC + Tailwind CSS + Fluent UI 🚀
          </h1>
        </div>
        <div className="mt-5 flex w-full items-center justify-center gap-6">
          <Icons.react className="h-12 w-12 text-blue-400" />
          <Icons.typescript className="h-12 w-12 text-blue-600" />
          <Icons.Webpack className="h-12 w-12 text-blue-500" />
          <Icons.swc className="h-12 w-12 text-yellow-400" />
          <Icons.tailwind className="h-12 w-12 text-teal-400" />
          <Icons.FluentUi className="h-12 w-12 text-teal-400" />
        </div>
      </section>
    </div>
  );
}
