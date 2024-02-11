'use client'
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import HoverButton from "./HoverButton";

export default function Tab({title, href, Icon} : {title: string, href: string, Icon?: React.ElementType}){
  const pathname = usePathname();
  const highlight = {margin: "0px 10px", borderBottom: "3px solid #ff4d00"};
  const normal = {margin: "0px 10px"};
  const boxStyle = href === pathname ? highlight : normal;

  return (
    // TODO: 光らせるプロパティを追加する
    <Box sx={boxStyle}>
      <HoverButton text={title} Icon={Icon} href={href} />
    </Box>
  );
}
