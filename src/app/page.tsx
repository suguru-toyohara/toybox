'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SocialLink from '@/components/misc/SocialLink';
import SectionTitle from '@/components/misc/SectionTitle';

function BlueSkyIcon() {
  return <Image src="/bsky.svg" alt="bluesky" width={100} height={100} />;
}

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-w-max flex-col items-center p-24 min-h-screen">
      <h1 className="text-4xl">Welcome to the toybox!</h1>
      <p className="text-lg m-4"> This is a portfolio site of suguru-toyohara(simeji).</p>
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
      {/* <GitHubCalendar username='suguru-toyohara' /> */}
    </main>
  );
}
