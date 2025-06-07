import { Box,  } from "@mui/material";
import Card from "./Card";
import EmailIcon from '@mui/icons-material/Email';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Row1 = () => {
  return (
    <Box mt={4}  >

   <Box sx={{display:"grid",    gridTemplateColumns: {
        xs: "repeat(1, 1fr)", // موبايل: عمود واحد
        sm: "repeat(2, 1fr)", // تابلت: عمودين
        md: "repeat(4, 1fr)", // ديسكتوب: ٤ أعمدة
      }, gap: 1}}>

        <Card icon={<EmailIcon/>} title={"lorem"} subtitle={"lor"} increase={"50%"} scheme={'paired'} />
        <Card icon={<MonetizationOnIcon/>} title={"lorem"} subtitle={"lor"} increase={"50%"} scheme={'blues' } />
        <Card icon={<PersonAddIcon/>} title={"lorem"} subtitle={"lor"} increase={"50%"} scheme={'purple_orange' } /> 
        <Card icon={<EmailIcon/>} title={"lorem"} subtitle={"lor"} increase={"50%"} scheme={ 'reds' } />

        </Box>
    </Box>
  );
};

export default Row1;
