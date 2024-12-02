// components/ErrorMessage.tsx
import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex items-center justify-center mt-10 p-4 border border-gray-500 bg-white-100 text-green-500 rounded-md">
      <span className="font-bold text-lg">{message}</span>
    </div>
  );
};

export default ErrorMessage;