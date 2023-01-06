import { useCallback, useState } from 'react';

export const useModalState = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = useCallback(() => setIsOpen(true), [setIsOpen]);
  const closeModal = useCallback(() => setIsOpen(false), [setIsOpen]);
  const toggleModal = useCallback(
    () => setIsOpen((value) => !value),
    [setIsOpen]
  );

  return { isOpen, openModal, closeModal, toggleModal };
};

export type OpenModalFunctionType = ReturnType<
  typeof useModalState
>['openModal'];

export type CloseModalFunctionType = ReturnType<
  typeof useModalState
>['closeModal'];

export type ToggleModalFunctionType = ReturnType<
  typeof useModalState
>['toggleModal'];
