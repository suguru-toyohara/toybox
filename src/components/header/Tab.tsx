import { Box } from "@mui/material";
import HoverButton from "./HoverButton";

export default function Tab({title, href, Icon} : {title: string, href: string, Icon?: React.ElementType}){
  return (
    // TODO: 光らせるプロパティを追加する
    <Box sx={{ padding : "10px" }}>
      <HoverButton text={title} Icon={Icon} href={href} />
    </Box>
  );
}
