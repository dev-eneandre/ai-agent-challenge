"use client";

import { useFormStatus } from "react-dom";

function AnalyseButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="px-7 py-2 text-white bg-[#003900] cursor-pointer rounded-lg hover:bg-[#007200] focus:outline-none focus:ring-2 focus:ring-[#007200] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
    >
      {pending ? "Analyzing..." : "Analyze"}
    </button>
  );
}

export default AnalyseButton;