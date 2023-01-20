import clsx from 'clsx';
import React from 'react';

export type TextInputProps = {
  className?: string;
  title: string;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
};

export const TextInput = ({ title, className, inputProps }: TextInputProps) => {
  return (
    <div className={className}>
      <label
        className="mb-2 block uppercase tracking-wide text-purple-200 text-sm font-semibold"
        htmlFor="title"
      >
        {title}
      </label>
      <input
        {...inputProps}
        className={clsx(
          inputProps.className,
          'appearance-none block w-full bg-purple-700 text-theme-150 text-base',
          'transition-all',
          'focus:ring hover:ring ring-theme-150 ring-offset-purple-600 ring-offset-4',
          'rounded-lg py-4 px-4 leading-tight focus:outline-none font-medium'
        )}
      />
    </div>
  );
};
