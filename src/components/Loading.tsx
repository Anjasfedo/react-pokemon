import { FaSpinner } from "react-icons/fa";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <h1>Loading</h1>
      <FaSpinner className="text-blue-500 animate-spin" />
    </div>
  );
};
