import Heading from '@/app/home-components/Heading';
import Installation from '@/app/home-components/installation';
import Usage from '@/app/home-components/usage';

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col gap-14 px-5 py-20">
      <Heading />
      <Installation />
      <Usage />
    </main>
  );
}
