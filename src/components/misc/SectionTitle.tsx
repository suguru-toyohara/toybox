'use client';
import { Box } from "@mui/material";

export default function SectionTitle({title}: {title: string}) {
  return (
    <Box sx={{ borderBottom: "1px solid #FFF", padding: "0px 2rem" , margin: "2rem 0px"}} >
      <h2 className="text-2xl">{title}</h2>
    </Box>
  );
}
