import {
  Box,
  Stack,
  Typography,
  Card,
  CardMedia,
  Button,
  Container,
} from "@mui/material";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import Navbar from "../components/navbar";
const Home = () => {
  return (
    <Box
      sx={{
        background: "#030f18",
        width: "100%",
        height: "fit-content",
        padding: "17px 90px",
      }}>
      <Stack direction={"row"} sx={{ width: "100%", height: "90vh" }}>
        <Stack
          direction={"column"}
          sx={{ width: "50%", alignItems: "flex-start", paddingTop: "8rem" }}>
          <Typography variant='h6' fontWeight={500} color={"#ffffff"}>
            All fun starts here.
          </Typography>
          <Typography variant='h2' fontWeight={500} color={"#ffffff"}>
            Book your <br />
            Tickets for Events!
          </Typography>
          <Button
            variant='contained'
            sx={{
              width: "25%",
              background: "#03a075 !important",
              color: "#ffffff !important",
              fontWeight: 600,
              borderRadius: 4,
            }}>
            Get Started
          </Button>
        </Stack>
        <Stack
          direction={"row"}
          sx={{ width: "50%", justifyContent: "center" }}>
          <Card
            sx={{
              width: "20%",
              height: 250,
              bgcolor: "#ffffff",
              borderRadius: 3,
              position: "absolute",
              left: "675px",
            }}>
            <CardMedia
              sx={{ height: "100%", objectFit: "cover" }}
              image={pic2}
              title='pic2'
            />
          </Card>
          <Card
            sx={{
              width: "20%",
              height: 250,
              bgcolor: "#ffffff",
              position: "absolute",
              borderRadius: 3,
              right: "120px",
              bottom: "250px",
            }}>
            <CardMedia sx={{ height: "100%" }} image={pic1} title='pic1' />
          </Card>
          <Card
            sx={{
              width: "20%",
              height: 250,
              bgcolor: "#ffffff",
              position: "absolute",
              borderRadius: 3,
              top: "340px",
              left: "675px",
            }}>
            <CardMedia sx={{ height: "100%" }} image={pic4} title='pic4' />
          </Card>
          <Card
            sx={{
              width: "20%",
              height: 250,
              bgcolor: "#ffffff",
              position: "absolute",
              borderRadius: 3,
              right: "120px",
              bottom: "-12px",
            }}>
            <CardMedia sx={{ height: "100%" }} image={pic3} title='pic3' />
          </Card>
        </Stack>
      </Stack>
      <Container sx={{ width: "100%", height: "fit-content" }}>
        <Stack direction={"row"} sx={{ width: "100%" }}>
          <Typography
            variant='h4'
            fontWeight={600}
            paddingBottom={5}
            color={"#ffffff"}>
            About Us
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={30} sx={{ height: "70vh" }}>
          <Box
            sx={{
              width: "24%",
              height: "60%",
              borderRadius: 5,
              background: "#03a075!important",
            }}>
            <Card
              sx={{
                width: "35%",
                height: "50%",
                position: "absolute",
                borderRadius: 5,

                top: "727px",
                left: "124px ",
              }}>
              <CardMedia
                sx={{ height: "100%", objectFit: "cover" }}
                image={pic5}
                title='pic5'
              />
            </Card>
          </Box>
          <Box sx={{ width: "50%", height: "100%" }}>
            <Typography variant='h5' sx={{ color: "#ffffff", fontWeight: 500 }}>
              lorem ipsum
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
