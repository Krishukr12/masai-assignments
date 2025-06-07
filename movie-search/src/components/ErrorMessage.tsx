import { AlertCircle } from "lucide-react";

export const ErrorMessage = () => {
  return (
    <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
      <AlertCircle className="w-5 h-5 text-red-500" />
      <p className="text-sm font-medium">
        Something went wrong. Please try again later.
      </p>
    </div>
  );
};
