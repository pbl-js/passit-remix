import type { CloseModalFunctionType } from '../../hooks/useModalState';
import React from 'react';
// import ArrowIcon from 'public/icons/half-arrow-left.svg';
import { useKeyboardEvent } from '@react-hookz/web';
import clsx from 'clsx';
import { motion } from 'framer-motion';

type BaseModalWrapperProps = {
  children: React.ReactNode;
  closeModal: CloseModalFunctionType;
};

type PrimaryModalWrapperProps = {
  title: string;
} & BaseModalWrapperProps;

const ModalOverlay = ({
  closeModal,
}: {
  closeModal: CloseModalFunctionType;
}) => (
  <motion.button
    onClick={closeModal}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
    className="fixed z-10 top-0 right-0 bottom-0 left-0 backdrop-blur-lg bg-black/50 cursor-default"
  />
);

export const PrimaryModalWrapper = ({
  children,
  closeModal,
  title,
}: PrimaryModalWrapperProps) => {
  useKeyboardEvent('Escape', closeModal, [closeModal]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, top: '60%' }}
        animate={{ opacity: 1, top: '50%' }}
        exit={{ opacity: 0, top: '60%' }}
        transition={{ duration: 0.25 }}
        className={clsx(
          'fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          'w-full max-w-xl shadow-xl bg-purple-600 rounded-2xl p-6'
        )}
      >
        <div className="grid grid-cols-3 items-center mb-10">
          <button
            onClick={closeModal}
            className="w-12 h-12 grid place-items-center bg-theme-700 fill-theme-150 rounded-full"
          >
            {/* <ArrowIcon width={20} height={20} /> */}X
          </button>
          <div className="text-theme-150 font-medium text-lg text-center">
            {title}
          </div>
        </div>
        {children}
      </motion.div>
      {/* TODO: Move this to separate component */}
      <ModalOverlay closeModal={closeModal} />
    </div>
  );
};

export const SecondaryModalWrapper = ({
  children,
  closeModal,
}: BaseModalWrapperProps) => {
  return (
    <>
      {/* TODO: Move this to separate component */}
      <ModalOverlay closeModal={closeModal} />
    </>
  );
};
