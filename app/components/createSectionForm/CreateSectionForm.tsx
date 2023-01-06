import clsx from 'clsx';
import type { CloseModalFunctionType } from '~/hooks/useModalState';
import { PrimaryModalWrapper } from '~/components/modalWrapper/ModalWrapper';
import { Form } from '@remix-run/react';

type CreateSectionForm = {
  closeModal: CloseModalFunctionType;
};

const inputClassName = clsx(
  'appearance-none block w-full bg-theme-700 text-theme-150',
  'transition-all',
  'focus:ring hover:ring ring-theme-150 ring-offset-theme-800 ring-offset-4',
  'rounded-lg py-4 px-4 mb-3 leading-tight focus:outline-none font-medium'
);

export const CreateSectionModal = ({ closeModal }: CreateSectionForm) => {
  return (
    <PrimaryModalWrapper closeModal={closeModal} title="Create Section">
      <Form method="post" className="flex flex-col gap-5">
        <div>
          <label
            className="block uppercase tracking-wide text-theme-150 text-sm font-semibold mb-4"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className={inputClassName}
            id="title"
            name="title"
            type="text"
            placeholder="Owoce i warzywa"
          />
        </div>
        <button
          type="submit"
          name="_action"
          value="create"
          className="bg-theme-500 h-12 rounded-lg font-semibold text-white"
        >
          Add
        </button>
      </Form>
    </PrimaryModalWrapper>
  );
};
