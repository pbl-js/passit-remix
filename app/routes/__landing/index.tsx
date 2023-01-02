import { MockSection } from '~/components/mockSection/MockSection';

const sections = ['Section One', 'Section Two', 'Section Three'];

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      {sections.map((name) => (
        <MockSection key={name} title={name} />
      ))}
    </div>
  );
}
