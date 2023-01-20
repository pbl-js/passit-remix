import { Link } from '@remix-run/react';
import clsx from 'clsx';
import type { routes } from 'consts/routes';
import React from 'react';

// TODO: React better button component

type ButtonSize = 'lg' | 'base' | 'sm';

type CommonButtonProps = {
  className?: string;
  children: React.ReactNode;
  size?: ButtonSize;
};

type LinkButtonProps = {
  html: 'link';
  href: typeof routes[keyof typeof routes];
};

type ButtonButtonProps = {
  html: 'button';
  buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

type ButtonProps = CommonButtonProps & (LinkButtonProps | ButtonButtonProps);

export const Button = (props: ButtonProps) => {
  const { children, html, className, size } = props;

  const baseButtonClassName = clsx(
    `py-5 px-8 bg-yellow-400 rounded-xl text-purple-800 font-bold`,
    'shrink-0 mr-auto',
    { 'text-lg': size === 'lg' },
    { 'text-base py-4 px-6': size === 'sm' },
    { 'text-base': size === 'base' || undefined }
  );

  if (html === 'link') {
    return (
      <Link
        className={clsx(baseButtonClassName, className, 'text')}
        to={props.href}
      >
        {children}
      </Link>
    );
  }

  // html === 'button'
  return (
    <button
      className={clsx(baseButtonClassName, className)}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};
