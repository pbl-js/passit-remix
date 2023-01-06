import { Link } from '@remix-run/react';
import clsx from 'clsx';
import type { routes } from 'consts/routes';
import React from 'react';

// TODO: React better button component

type CommonButtonProps = {
  className?: string;
  children: React.ReactNode;
};

type LinkButtonProps = {
  type: 'link';
  href: typeof routes[keyof typeof routes];
};

type ButtonButtonProps = {
  type: 'button';
  onClick: () => void;
};

type ButtonProps = CommonButtonProps & (LinkButtonProps | ButtonButtonProps);

const baseButtonClassName = clsx(
  'py-5 px-8 bg-yellow-400 rounded-xl text-purple-800 text-lg font-bold',
  'shrink-0 mr-auto'
);

export const Button = (props: ButtonProps) => {
  const { children, type, className } = props;

  if (type === 'link') {
    return (
      <Link className={clsx(baseButtonClassName, className)} to={props.href}>
        {children}
      </Link>
    );
  }

  // type === 'button'
  return (
    <button
      className={clsx(baseButtonClassName, className)}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};
