import type { MetaFunction } from '@remix-run/node';
import { MockSection } from '~/components/mockSection/MockSection';

const sections = ['Section One', 'Section Two', 'Section Three'];

export const meta: MetaFunction = () => ({
  title: "Remix: So great, it's funny!",
  description: 'Remix jokes app. Learn Remix and laugh at the same time!',
});

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      {sections.map((name) => (
        <MockSection key={name} title={name} />
      ))}
    </div>
  );
}
