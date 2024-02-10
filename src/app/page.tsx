'use client';
import Image from 'next/image';
import { Avatar } from '@mui/material';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl">Welcome to the toybox!</h1>
      <p className="text-lg m-4"> This is a portfolio site of suguru-toyohara.</p>
      <Avatar sx={{ width: 100, height: 100, bgcolor: 'black', border: "1px solid #AAA"}}><Image src="/icon.svg" alt="icon" width={100} height={100}/></Avatar>
      <h2 className="text-2xl m-8">GitHub Contributions</h2>
      
    </main>
  );
}
