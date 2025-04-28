import { useEffect, useState } from "react";

const CountTrack = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <button
        className="bg-amber-400 text-white rounded px-4 py-2"
        onClick={() => setCount(count + 1)}
      >
        Add items
      </button>
      <h1 className="mt-4 text-lg font-semibold">
        Button clicked: {count} times
      </h1>
    </div>
  );
};

export default CountTrack;
