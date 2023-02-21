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
              fontWeight: 500,
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
          <Typography variant='h4' fontWeight={600} color={"#ffffff"}>
            About Us
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={2} sx={{ height: "60vh" }}>
          <Box
            sx={{ width: "50%", height: "100%", background: "#ffffff" }}></Box>
          <Box
            sx={{ width: "50%", height: "100%", background: "#ffffff" }}></Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
