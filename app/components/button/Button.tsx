import { Link } from '@remix-run/react';
import clsx from 'clsx';
import type { routes } from 'consts/routes';
import React from 'react';

// TODO: React better button component

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href: typeof routes[keyof typeof routes];
  loading?: boolean;
};

export const Button = ({ children, href, className, loading }: ButtonProps) => {
  return (
    <Link
      className={clsx(
        'py-5 px-8 bg-yellow-400 rounded-xl text-purple-800 text-lg font-bold',
        'shrink-0 mr-auto',
        className
      )}
      to={href}
    >
      {children}
    </Link>
  );
};
