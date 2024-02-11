'use client';

import { Box } from "@mui/material";
import FullDivider from "../misc/FullDivider";

export default function Footer() {

  return (
    <footer>
      <FullDivider />
      <Box sx={{ textAlign: "center" }} className="my-8">
        <p className="text-gray-400 text-sm">© 2024 ace of technology</p>
      </Box>
    </footer>
  );
}