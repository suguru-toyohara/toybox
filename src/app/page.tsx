'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Avatar, Box, Button, ButtonBase, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const openGitHub = () => {
};

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-w-max flex-col items-center p-24">
      <h1 className="text-4xl">Welcome to the toybox!</h1>
      <p className="text-lg m-4"> This is a portfolio site of suguru-toyohara(simeji).</p>
      <Avatar sx={{ width: 100, height: 100, bgcolor: 'black', border: "1px solid #AAA"}} className='m-8'>
        <Image src="/icon.svg" alt="icon" width={100} height={100}/>
      </Avatar>

      {/* <h2 className="text-2xl m-8">GitHub Contributions</h2> */}
      <h2 className="text-2xl m-8">Social Links</h2>
      <a href="https://github.com" target='_blank'>
        <ButtonBase >
          <Box className="p-4">
            <GitHubIcon sx={{ fontSize: "24px" }}/>
            <span className="text-lg m-4"> suguru-toyohara </span>
          </Box>
        </ButtonBase>
      </a>
    </main>
  );
}
