import {
  Box,
  Stack,
  Typography,
  Card,
  CardMedia,
  Button,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import smilePic from "../assets/smile.jpg";
const Home = () => {
  return (
    <Box
      sx={{
        marginTop: "65px",
        background: "#030f18",
        width: "100%",
        height: "fit-content",
        padding: "17px 90px",
      }}>
      <Stack direction={"row"} sx={{ width: "100%", height: "90vh" }}>
        <Stack
          direction={"column"}
          sx={{ width: "50%", alignItems: "flex-start", paddingTop: "8rem" }}>
          <Typography variant='h6' fontWeight={500} color={"#edf7ff"}>
            All fun starts here.
          </Typography>
          <Typography variant='h2' fontWeight={500} color={"#edf7ff"}>
            Book your <br />
            Tickets for Events!
          </Typography>
          <Link to='/register' style={{ textDecoration: "none" }}>
            <Button
              variant='contained'
              sx={{
                background: "#03a075 !important",
                color: "#edf7ff !important",
                fontWeight: 600,
                borderRadius: 4,
                padding: 1,
                paddingX: 3,
              }}>
              Get Started
            </Button>
          </Link>
        </Stack>
        <Stack
          direction={"row"}
          sx={{ width: "50%", justifyContent: "center" }}>
          <Card
            sx={{
              width: "20%",
              height: 250,
              bgcolor: "#ffffff",
              borderRadius: 1,
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
              borderRadius: 1,
              right: "120px",
              bottom: "250px",
            }}>
            <CardMedia
              sx={{ height: "100%", loading: "lazy" }}
              image={pic1}
              title='pic1'
            />
          </Card>
          <Card
            sx={{
              width: "20%",
              height: 250,
              bgcolor: "#ffffff",
              position: "absolute",
              borderRadius: 1,
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
              borderRadius: 1,
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
            color={"#edf7ff"}>
            How it works
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={30} sx={{ height: "70vh" }}>
          <Box
            sx={{
              width: "24%",
              height: "60%",

              background: "#03a075!important",
            }}>
            <Card
              sx={{
                width: "35%",
                height: "50%",
                position: "absolute",
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
          <Stack
            direction={"column"}
            justifyContent={"center"}
            sx={{ width: "50%", height: "60%" }}>
            <Typography
              variant='h5'
              sx={{ color: "#ffffff", fontSize: "1.7rem", fontWeight: 400 }}>
              Discover comprehensive <br />
              list of upcoming events such as: <br />
              concerts, festivals, sports games, and other gatherings.
            </Typography>
          </Stack>
        </Stack>
      </Container>
      <Container sx={{ width: "100%", height: "fit-content" }}>
        <Stack direction={"row"} sx={{ width: "100%" }}>
          <Typography
            variant='h4'
            fontWeight={600}
            paddingBottom={4}
            color={"#edf7ff"}>
            Benefits
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={3} sx={{ height: "70vh" }}>
          <Stack
            direction={"column"}
            justifyContent={"center"}
            sx={{ width: "50%", height: "90%" }}>
            <Typography
              variant='h5'
              sx={{ color: "#ffffff", fontSize: "1.7rem", fontWeight: 400 }}>
              Keep yourself updated.
              <br />
              Safe, Secure, Reliable ticketing.
              <br />
              Get access to private perks.
              <br />
              Choose the event you want to be
              <br />
              part with.
            </Typography>
          </Stack>
          <Box sx={{ width: "48%", height: "100%", bgcolor: "#009FFF" }}>
            <Card
              sx={{
                width: "43%",
                height: "70%",
                position: "absolute",
                top: "1210px",
                right: "130px",
              }}>
              <CardMedia
                sx={{ height: "100%", objectFit: "cover" }}
                image={smilePic}
                title='smile'
              />
            </Card>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
