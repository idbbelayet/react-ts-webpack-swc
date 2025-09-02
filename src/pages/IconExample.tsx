import { Icons } from '../components/Icons';

export const IconExample = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-6 p-8">
      <h1 className="text-3xl font-bold">Centralized React Icons Demo</h1>

      <div className="flex gap-4">
        <Icons.Home size={32} />
        <Icons.Dashboard size={32} />
        <Icons.Settings size={32} />
      </div>

      <div className="flex gap-4">
        <Icons.Beer size={32} />
        <Icons.Github size={32} />
        <Icons.Heart size={32} />
      </div>
    </div>
  );
};

export default IconExample;
