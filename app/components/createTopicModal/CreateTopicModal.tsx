import { useKeyboardEvent } from '@react-hookz/web';
import { Form } from '@remix-run/react';
import clsx from 'clsx';
import { motion, Variants } from 'framer-motion';
import useLockBodyScroll from '~/hooks/useLockBodyScroll';
import type { CloseModalFunctionType } from '~/hooks/useModalState';
import { Button } from '../button/Button';
import { ModalOverlay } from '../modalWrapper/ModalWrapper';
import { TextInput } from '../textInput/TextInput';
import { TopicThumbnail } from '../TopicThumbnail/TopicThumbnail';

const wordsList = [
  {
    id: 1,
    icon: '',
    name: {
      en: 'Drinks',
      pl: 'Napoje',
    },
  },
  {
    id: 2,
    icon: '',
    name: {
      en: 'Food',
      pl: 'Jedzenie',
    },
  },
  {
    id: 3,
    icon: '',
    name: {
      en: 'Drinks',
      pl: 'Napoje',
    },
  },
  {
    id: 4,
    icon: '',
    name: {
      en: 'Food',
      pl: 'Jedzenie',
    },
  },
  {
    id: 5,
    icon: '',
    name: {
      en: 'Drinks',
      pl: 'Napoje',
    },
  },
  {
    id: 6,
    icon: '',
    name: {
      en: 'Food',
      pl: 'Jedzenie',
    },
  },
  {
    id: 7,
    icon: '',
    name: {
      en: 'Drinks',
      pl: 'Napoje',
    },
  },
  {
    id: 8,
    icon: '',
    name: {
      en: 'Food',
      pl: 'Jedzenie',
    },
  },
];

type CreateTopicModalProps = {
  closeModal: CloseModalFunctionType;
};

export const CreateTopicModal = ({ closeModal }: CreateTopicModalProps) => {
  useKeyboardEvent('Escape', closeModal, [closeModal]);
  useLockBodyScroll();

  return (
    <>
      <div className="fixed z-20 top-0 bottom-0 left-0 right-0 overflow-auto">
        <div className="w-full h-full gap-11 mx-auto max-w-screen-lg flex flex-row">
          <div className="min-w-[400px] h-full">
            <motion.div
              initial={{ opacity: 0, top: '5rem' }}
              animate={{ opacity: 1, top: '2.75rem' }}
              exit={{ opacity: 0, top: '5rem' }}
              transition={{ duration: 0.25 }}
              className="fixed top-11 bottom-0 min-w-[400px] bg-purple-600 rounded-t-2xl px-8"
            >
              <div className="w-full flex py-8">
                <div className="text-2xl font-bold">Add topic</div>
                <button onClick={closeModal} className="ml-auto text-2xl">
                  x
                </button>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <div className="w-full py-8 bg-purple-700 rounded-lg">
                  <TopicThumbnail
                    color="orange"
                    title="Title of the topic"
                    className="mx-auto"
                  />
                </div>
                <Form className="flex flex-col gap-4">
                  <TextInput title="sdfds" inputProps={{ name: 'fsd' }} />
                  <TextInput title="sdfds" inputProps={{ name: 'fsd' }} />
                  <span className="h-0 border-b-[1px] w-full border-purple-800 border-dashed" />
                  <Button html="button" type="submit" size="sm">
                    Create topic
                  </Button>
                </Form>
              </div>
            </motion.div>
          </div>
          <ul className="flex flex-col gap-5 w-full py-11 h-max">
            {wordsList.map(({ id, name }, i) => (
              <motion.li
                key={id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.05 }}
                className={clsx(
                  'flex items-center px-7 h-20 w-full flex-shrink-0',
                  'rounded-2xl bg-purple-300/30'
                )}
              >
                {name.en}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <ModalOverlay closeModal={closeModal} />
    </>
  );
};
