import { Box, Button, Divider, Typography } from "@mui/material";



export default function Header(){
  return (
    <header>
      <Box className="flex max-w-max justify-items-start items-start">
        <Box sx={{ padding : "10px 10px 0px 10px" }}>
          <Button className="text-2xl" sx={{ "&:hover" : { backgroundColor: "#222" }}}><Typography sx={{ textTransform: 'capitalize', color: "#FFF" }}>ToyBox</Typography></Button>
        </Box>
      </Box>
      <Box className="flex max-w-max justify-items-start items-start">
        <Box sx={{ padding : "10px" }} >
          <Button className="text-2xl" sx={{ backgroundColor: "#111"}}><Typography sx={{ textTransform: 'capitalize', color: "#FFF" }}>Profile</Typography></Button>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Divider sx={{ border: "1px solid #CCC"}} />
      </Box>
    </header>
  );
}