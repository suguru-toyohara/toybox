'use client';
import { Box } from "@mui/material";
import HandymanIcon from '@mui/icons-material/Handyman';
import Tab from "./Tab";
import Top from "./Top";
import FullDivider from "@/components/misc/FullDivider";
import DescriptionIcon from '@mui/icons-material/Description';
import AppsIcon from '@mui/icons-material/Apps';

function HeaderSection({children}: {children: React.ReactNode}){
  return (
    <Box className="flex max-w-max justify-items-start items-start">
      {children}
    </Box>
  );
}

export default function Header(){
  return (
    <header>
      <HeaderSection >
        <Top title="ToyBox" href="/" Icon={HandymanIcon} />
      </HeaderSection>
      <HeaderSection>
        <Tab title="Overview" href="/" Icon={DescriptionIcon}/>
        <Tab title="github" href="/github" Icon={AppsIcon}/>
      </HeaderSection>
      <FullDivider />
    </header>
  );
}
