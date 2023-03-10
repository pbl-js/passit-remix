import type { LoaderArgs } from '@remix-run/node';
import type { ActionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Form, useLoaderData, useTransition } from '@remix-run/react';
import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { Button } from '~/components/button/Button';
import { CreateSectionModal } from '~/components/createSectionForm/CreateSectionForm';
import { CreateTopicModal } from '~/components/createTopicModal/CreateTopicModal';
import { TopicThumbnail } from '~/components/TopicThumbnail/TopicThumbnail';
import { useModalState } from '~/hooks/useModalState';
import { db } from '~/utils/db.server';

export const loader = async (_: LoaderArgs) => {
  return json({
    sections: await db.section.findMany({
      take: 5,
      select: { id: true, title: true },
    }),
  });
};

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();

  const actionType = form.get('_action');

  if (actionType === 'create-section') {
    const title = form.get('title');

    if (typeof title !== 'string') {
      throw new Error(`Form not submitted correctly.`);
    }

    const fields = { title };

    const section = await db.section.create({ data: fields });

    return section;
  }

  if (actionType === 'delete-section') {
    const id = form.get('id');

    if (typeof id !== 'string') {
      throw new Error(`Form not submitted correctly.`);
    }

    const test = await db.section.delete({ where: { id } });

    return test;
  }

  throw new Error('Action type not supported');
};

const topSectionsPadding = 'p-12';

const topicsList = [
  {
    title: 'Warzywa',
    color: '#B953EA',
  },
  {
    title: 'Owoce',
    color: '#3CB847',
  },
  {
    title: 'Kawiarnia',
    color: '#ED7E0E',
  },
  {
    title: 'Grill',
    color: '#D00576',
  },
  {
    title: 'Słodycze',
    color: '#217AD1',
  },
];

function SavedWordsWidget() {
  return (
    <>
      <div
        className={`flex lg:hidden bg-white/5 rounded-2xl ${topSectionsPadding}`}
      >
        <p className="text-3xl font-semibold text-white">Words List mobile</p>
      </div>
      <div
        className={`hidden lg:flex  bg-white/5 rounded-2xl ${topSectionsPadding}`}
      >
        <p className="text-3xl font-semibold text-white">Words list desktop</p>
      </div>
    </>
  );
}

export const LastPlayedWidget = ({ className }: { className: string }) => {
  return (
    <div
      className={clsx(
        className,
        `flex flex-col bg-white/5 rounded-2xl gap-8`,
        'text-3xl font-semibold text-white'
      )}
    >
      <p className="text-[22px] uppercase">Jedzenie i picie</p>
      <p className="text-5xl">Owoce i warzywa</p>
      <p>Progress</p>
      <Button size="base" type="link" href="/learn/play">
        Continue
      </Button>
    </div>
  );
};

export default function TopicsRoute() {
  const {
    isOpen: isAddingOpen,
    openModal: openAddingModal,
    closeModal: closeAddingModal,
  } = useModalState();

  const {
    isOpen: isTopicAddingOpen,
    openModal: openTopicAddingModal,
    closeModal: closeTopicAddingModal,
  } = useModalState(true);

  const { sections } = useLoaderData<typeof loader>();

  const transition = useTransition();

  return (
    <>
      <div className="flex flex-col w-full">
        <div
          className={clsx(
            'w-full grid grid-cols-1 grid-rows-[auto, auto] gap-8 mb-20',
            'lg:grid-cols-2 lg:grid-rows-1'
          )}
        >
          <LastPlayedWidget className={topSectionsPadding} />
          <SavedWordsWidget />
        </div>
        <div className="mb-10">
          <p className="text-4xl font-semibold mb-6">Moje zestawy</p>
          <div className="flex flex-wrap flex-row gap-5">
            {topicsList.map(
              ({ title, color }, index) =>
                index > 3 && (
                  <div
                    key={title}
                    style={{ backgroundColor: color }}
                    className="w-[214px] h-[164px] rounded-xl p-4"
                  >
                    title
                  </div>
                )
            )}
            <div
              onClick={openTopicAddingModal}
              className="flex w-[214px] h-[164px] rounded-xl p-4 bg-purple-300/30 items-center justify-center"
            >
              Add
            </div>
          </div>
        </div>

        {sections.map(({ id, title }) => {
          const isSectionDeleting =
            transition.state === 'submitting' &&
            transition.submission.formData.get('_action') ===
              'delete-section' &&
            transition.submission.formData.get('id') === id;

          return (
            <div
              key={id}
              className={clsx('mb-10', { 'opacity-50': isSectionDeleting })}
            >
              <div className="flex items items-end gap-4 mb-6">
                <div className="text-4xl font-semibold">{title}</div>
                <Form method="post">
                  <input type="hidden" name="id" value={id} />
                  <button
                    type="submit"
                    name="_action"
                    value="delete-section"
                    className="text-lg text-white/60"
                  >
                    Delete
                  </button>
                </Form>
              </div>
              <div className="flex flex-wrap flex-row gap-5">
                {topicsList.map(({ title, color }) => (
                  <TopicThumbnail key={title} color={color} title={title} />
                ))}
              </div>
            </div>
          );
        })}

        <Button type="button" onClick={openAddingModal}>
          Add new smth
        </Button>
      </div>

      <AnimatePresence>
        {isTopicAddingOpen && (
          <CreateTopicModal closeModal={closeTopicAddingModal} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isAddingOpen && <CreateSectionModal closeModal={closeAddingModal} />}
      </AnimatePresence>
    </>
  );
}
