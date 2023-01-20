import clsx from 'clsx';
import React from 'react';

export type TopicThumbnailProps = {
  color: string;
  title: string;
  className?: string;
};

export const TopicThumbnail = ({
  color,
  title,
  className,
}: TopicThumbnailProps) => {
  return (
    <div
      className={clsx(
        className,
        'flex flex-col gap-3 w-[214px]',
        'font-medium text-purple-200'
      )}
    >
      <div
        style={{ backgroundColor: color }}
        className="h-[164px] rounded-xl p-4"
      >
        {/* {title} */}
      </div>
      {title}
    </div>
  );
};
