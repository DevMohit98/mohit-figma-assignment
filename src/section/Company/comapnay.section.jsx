import { Typography, Box, Grid } from "@mui/material";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Image1 from "../../assests/Image1.png";
import Image2 from "../../assests/Image2.png";
import Image3 from "../../assests/Image2.png";
import "./index.css"
const CompanySection = () => {
  const cardStyle = {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    borderRadius: "20px",
  };

  return (
    <Box className="p-4 sectionbg">
      <Typography
        as="p"
        className="!font-medium !text-center !text-5xl !leading-relaxed !text-[#151313]">
        Adding value through your
        <br />
        <Typography as="span" className="!text-[#FC7785] !text-5xl">
          Company’s Lifecycle
        </Typography>
        <Typography
          as="p"
          className="!font-normal !text-sm !text-[#151313] !text-center">
          Bespoked modules for every phase
        </Typography>
      </Typography>

      <Grid container spacing={10} className="!mt-2">
        <Grid item xs={12} md={6}>
          <Box className="!bg-white p-8 w-[40vw]" style={cardStyle}>
            <Box className="flex items-center">
              <Box className="w-[52px] h-[52px] bg-[#F5F6F9] flex justify-center items-center !rounded">
                <FaHandHoldingDollar className="text-[#4A67FF] w-[22px] h-[22px]" />
              </Box>
              <Typography
                as="h1"
                className="!text-[#151313] !ml-2 !font-medium !text-2xl">
                Investment Phase
              </Typography>
            </Box>
            <Typography
              as="p"
              className="!text-[#505050] !font-normal !leading-8 !pt-2">
              Get "investment ready" for faster deals, better terms & higher
              valuations. Attract more investors & reduce deal collapse risk.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="!bg-white p-8 w-[40vw]" style={cardStyle}>
            <Box className="flex items-center">
              <Box className="w-[52px] h-[52px] bg-[#F5F6F9] flex justify-center items-center !rounded">
                <FaHandHoldingDollar className="text-[#4A67FF] w-[22px] h-[22px]" />
              </Box>
              <Typography
                as="h1"
                className="!text-[#151313] !ml-2 !font-medium !text-2xl">
                Growth Phase
              </Typography>
            </Box>
            <Typography
              as="p"
              className="!text-[#505050] !font-normal !leading-8 !pt-2">
              Streamlined processes and early problem-solving fuel faster
              growth. Benchmarking keeps you ahead, freeing up time for the "fun
              stuff".
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="!bg-white p-8 w-[40vw]" style={cardStyle}>
            <Box className="flex items-center">
              <Box className="w-[52px] h-[52px] bg-[#F5F6F9] flex justify-center items-center !rounded">
                <FaHandHoldingDollar className="text-[#4A67FF] w-[22px] h-[22px]" />
              </Box>
              <Typography
                as="h1"
                className="!text-[#151313] !ml-2 !font-medium !text-2xl">
                Exit/Sale/IPO
              </Typography>
            </Box>
            <Typography
              as="p"
              className="!text-[#505050] !font-normal !leading-8 !pt-2">
              "Exit ready" with more buyers, bidding wars, & a smoother sale.
              Get top dollar, faster, with less drama.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
         <Box className="flex flex-row gap-10">
            <img src={Image1} alt="image1" className="w-[10vw] h-auto"/>
            <img src={Image2} alt="image2" className="w-[10vw] h-auto"/>
            <img src={Image3} alt="image4" className="w-[10vw] h-auto"/>
         </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default CompanySection;
