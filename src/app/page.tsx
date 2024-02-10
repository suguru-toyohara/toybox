import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl">Welcome to the toybox!</h1>
      <p className="text-lg mt-4">
        This is a portfolio site of suguru-toyohara.</p>
      <Image src="/icon.svg" alt="icon" width={200} height={200} />
    </main>
  );
}
