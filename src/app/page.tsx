'use client';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import { Avatar, Box, ButtonBase } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function SocialLink({Icon, id, href}: {Icon: React.ElementType, id: string, href: string}) {
  return (
    <a href={href} target='_blank'>
      <ButtonBase >
        <Box className="flex">
          <Box className="w-6 mt-4">
            <Icon className='text-2xl'/>
          </Box>
          <span className="text-lg m-4">{id}</span>
        </Box>
      </ButtonBase>
    </a>
  );
}

SocialLink.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

function BlueSkyIcon() {
  return(
    <Image src="/bsky.svg" alt="bluesky" width={100} height={100}/>
  );
}

function SectionTitle({title}: {title: string}) {
  return (
    <Box sx={{ borderBottom: "1px solid #FFF", padding: "0px 2rem" , margin: "2rem 0px"}} >
      <h2 className="text-2xl">{title}</h2>
    </Box>
  );
}

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-w-max flex-col items-center p-24">
      <h1 className="text-4xl">Welcome to the toybox!</h1>
      <p className="text-lg m-4"> This is a portfolio site of suguru-toyohara(simeji).</p>
      <Avatar sx={{ width: 100, height: 100, bgcolor: 'black', border: "1px solid #CCC"}} className='m-8'>
        <Image src="/icon.svg" alt="icon" width={100} height={100}/>
      </Avatar>
      <SectionTitle title="Contacts" />
      <SocialLink Icon={GitHubIcon} id="suguru-toyohara" href="https://github.com/suguru-toyohara" />
      <SocialLink Icon={BlueSkyIcon} id="@simeji.aceof.technology" href="https://bsky.app/profile/simeji.aceof.technology" />
      {/*
      <Box className="m-16 w-96">
        <Divider sx={{ border: "1px solid #FFF"}} />
      </Box>
      */}
      <SectionTitle title="Github Contribution" />
      {/* <GitHubCalendar username='suguru-toyohara' /> */}
    </main>
  );
}
