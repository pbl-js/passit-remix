import React from 'react';

export const MockSection = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-center w-full h-[800px] rounded-xl bg-purple-600 text-white text-4xl">
      {title}
    </div>
  );
};
