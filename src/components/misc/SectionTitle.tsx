'use client';
import { Box, Typography } from "@mui/material";

export default function SectionTitle({title}: {title: string}) {
  return (
    <Box sx={{ borderBottom: "1px solid #FFF", padding: "0px 2rem" , margin: "2rem 0px"}} >
      <Typography variant="h2" noWrap sx={{ fontSize: "1.5rem"}}>{title}</Typography>
    </Box>
  );
}
