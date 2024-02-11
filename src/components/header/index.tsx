'use client';
import { Box, Button, Divider, Typography } from "@mui/material";
import HandymanIcon from '@mui/icons-material/Handyman';
import HoverButton from "./HoverButton";
import Tab from "./Tab";
import Top from "./Top";

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
        <Tab title="Overview" href="/" />
      </HeaderSection>
      <Box sx={{ width: "100%" }}>
        <Divider sx={{ border: "1px solid #CCC"}} />
      </Box>
    </header>
  );
}
