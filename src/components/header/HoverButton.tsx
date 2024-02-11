'use client';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function HoverButton( {text, href, Icon} : {text: string, href: string, Icon?: React.ElementType} ){
  const router = useRouter();
  return (
    // hrefをonclickで実装する
    <Button className="text-2xl" sx={{ "&:hover" : { backgroundColor: "#222" }}} onClick={() => router.push(href)}>
      {Icon && <Icon className="text-2xl text-white" />}
      <Typography sx={{ textTransform: 'capitalize', color: "#FFF" }}>
        {text}
      </Typography>
    </Button>
  );
}
