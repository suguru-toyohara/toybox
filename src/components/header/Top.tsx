import { Box } from "@mui/material";
import HoverButton from "./HoverButton";

export default function Top({title, href, Icon} : {title: string, href: string, Icon?: React.ElementType}){
  return (
    <Box sx={{ padding : "10px 10px 0px 10px" }}>
      <HoverButton text={title} href={href} Icon={Icon}/>
    </Box>
  );
}
