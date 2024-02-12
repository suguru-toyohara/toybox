'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Avatar, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SocialLink from '@/components/misc/SocialLink';
import SectionTitle from '@/components/misc/SectionTitle';
import GithubActivityCalendar from '@/components/calendar';

function BlueSkyIcon() {
  return <Image src="/bsky.svg" alt="bluesky" width={100} height={100} />;
}

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center p-24 min-h-screen">
      <Typography variant='h1' noWrap sx={{ fontSize: "2.25rem"}}>Welcome to the toybox!</Typography>
      <Typography variant='body1' noWrap sx={{ fontSize: "1.125rem", margin: "1rem"}} className="text-lg m-4"> This is a portfolio site of suguru-toyohara(simeji).</Typography>
      <Avatar sx={{ width: 100, height: 100, bgcolor: 'black', border: '1px solid #CCC' }} className="m-8">
        <Image src="/icon.svg" alt="icon" width={100} height={100} />
      </Avatar>
      <SectionTitle title="Contacts" />
      <SocialLink Icon={GitHubIcon} id="suguru-toyohara" href="https://github.com/suguru-toyohara" />
      <SocialLink
        Icon={BlueSkyIcon}
        id="@simeji.aceof.technology"
        href="https://bsky.app/profile/simeji.aceof.technology"
      />
      <SectionTitle title="Github Contribution" />
      <GithubActivityCalendar username='suguru-toyohara'/>
    </main>
  );
}
