import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import clsx from 'clsx';
import { Button } from '~/components/button/Button';
import { db } from '~/utils/db.server';

export const loader = async (_: LoaderArgs) => {
  return json({
    sections: await db.section.findMany({
      take: 5,
      select: { id: true, title: true },
    }),
  });
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
  {
    title: 'Supermarket',
    color: '#0AB1B4',
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
      <Button href="/learn/play">Continue</Button>
    </div>
  );
};

export default function TopicsRoute() {
  const data = useLoaderData<typeof loader>();
  console.log('data: ', data);

  return (
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
        </div>
      </div>

      <div className="mb-10">
        <p className="text-4xl font-semibold mb-6">Czasowniki nieregularne</p>
        <div className="flex flex-wrap flex-row gap-5">
          {topicsList.map(({ title, color }) => (
            <div
              key={title}
              style={{ backgroundColor: color }}
              className="w-[214px] h-[164px] rounded-xl p-4"
            >
              title
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <p className="text-4xl font-semibold mb-6">Zestawy premium</p>
        <div className="flex flex-wrap flex-row gap-5">
          {topicsList.map(({ title, color }) => (
            <div
              key={title}
              style={{ backgroundColor: color }}
              className="w-[214px] h-[164px] rounded-xl p-4"
            >
              title
            </div>
          ))}
          {topicsList.map(({ title, color }) => (
            <div
              key={title}
              style={{ backgroundColor: color }}
              className="w-[214px] h-[164px] rounded-xl p-4"
            >
              title
            </div>
          ))}
        </div>
      </div>

      <Button href="/learn/profile">Add new smth</Button>
    </div>
  );
}
