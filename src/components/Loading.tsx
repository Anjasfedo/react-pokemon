import { FaSpinner } from "react-icons/fa";

export const Loading = () => {
  return (
    <div className="flex flex-col items-center py-48 min-h-screen bg-slate-900 text-white font-bold">
    <h1 className="text-5xl mb-4">Loading</h1>
    <FaSpinner className="text-blue-500 animate-spin text-5xl" />
  </div>
  );
};
