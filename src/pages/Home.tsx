import Counter from '../components/Counter';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start p-6">
      <section className="p-6 text-center">
        <h1 className="mb-4 text-3xl font-bold">🏠 Home Page</h1>
        <p className="mt-5">This is the Home page loaded via React Router.</p>
        <div className="flex items-center justify-center">
          <h1 className="mt-3 text-4xl font-bold">
            React + TypeScript + Webpack + SWC + Tailwind CSS 🚀
          </h1>
        </div>
        <Counter />
      </section>
    </div>
  );
}
