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
        padding: ["17px 20px", "17px 90px", "17px 90px", "17px 90px"],
      }}>
      <Stack
        direction={["column", "column", "row", "row"]}
        sx={{
          width: "100%",
          height: ["60vh", "62vh", "90vh", "90vh"],
        }}>
        <Stack
          direction={"column"}
          sx={{
            width: ["100%", "100%", "100%", "50%"],
            alignItems: [
              "flex-start",
              "flex-start",
              "flex-start",
              "flex-start",
            ],
            paddingTop: ["4rem", "4rem", "6rem", "8rem"],
          }}>
          <Typography
            variant='h6'
            fontSize={[17, 18, "1.2rem", "1.23rem"]}
            fontWeight={500}
            color={"#edf7ff"}>
            All fun starts here.
          </Typography>
          <Typography
            variant='h2'
            fontSize={[39, 40, 45, "3.75rem"]}
            fontWeight={500}
            lineHeight={["3.4rem", "3.2rem", 1.2, 1.2]}
            color={"#edf7ff"}>
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
                borderRadius: [3, 3, 3, 4],
                padding: 1,
                paddingX: 3,
              }}>
              Get Started
            </Button>
          </Link>
        </Stack>
        <Stack
          direction={"row"}
          display={["none", "none", "flex", "flex"]}
          flexWrap={"wrap"}
          gap={2}
          sx={{ width: "50%", justifyContent: "center" }}>
          <Card
            sx={{
              width: "40%",
              height: "50%",
              bgcolor: "#ffffff",
              borderRadius: 1,
            }}>
            <CardMedia
              sx={{ height: "100%", objectFit: "cover" }}
              image={pic2}
              title='pic2'
            />
          </Card>
          <Card
            sx={{
              width: "40%",
              height: "50%",
              bgcolor: "#ffffff",
              marginTop: "40px",
              borderRadius: 1,
            }}>
            <CardMedia
              sx={{ height: "100%", loading: "lazy" }}
              image={pic1}
              title='pic1'
            />
          </Card>
          <Card
            sx={{
              width: "40%",
              height: "50%",
              bgcolor: "#ffffff",
              marginTop: "-40px",
              borderRadius: 1,
              top: "340px",
              left: "675px",
            }}>
            <CardMedia sx={{ height: "100%" }} image={pic4} title='pic4' />
          </Card>
          <Card
            sx={{
              width: "40%",
              height: "50%",
              bgcolor: "#ffffff",

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
            paddingBottom={[0, 1, 1, 5]}
            color={"#edf7ff"}>
            How it works
          </Typography>
        </Stack>
        <Stack
          direction={["column", "column", "row", "row"]}
          gap={[12, 13, 29, 30]}
          paddingBottom={[20, 20, 4, 3]}
          sx={{ height: ["100vh", "100vh", "90vh", "70vh"] }}>
          <Box
            sx={{
              width: ["62%", "", "", "29%"],
              height: "60%",

              background: "#03a075!important",
            }}>
            <Card
              sx={{
                width: "150%",
                height: ["49vh", "50vh", "115%", "115%"],
                position: "relative",
                top: ["10px", "12px", "22px", "22px"],
                left: ["12px", "13px", "18px", "19px"],
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
            sx={{
              width: ["100%", "100%", "50%", "50%"],
              height: ["100%", "100%", "60%", "60%"],
            }}>
            <Typography
              variant='h5'
              sx={{
                color: "#ffffff",
                fontSize: [24, 24, "1.4rem", "1.7rem"],
                fontWeight: 400,
              }}>
              Discover comprehensive <br />
              list of upcoming events such as: <br />
              concerts, festivals, sports games, and other gatherings.
            </Typography>
          </Stack>
        </Stack>
      </Container>
      <Container sx={{ width: "100%", height: "fit-content" }}>
        <Stack
          direction={["column", "column", "row", "row"]}
          sx={{
            width: "100%",
          }}>
          <Typography
            variant='h4'
            fontWeight={600}
            paddingBottom={4}
            color={"#edf7ff"}>
            Benefits
          </Typography>
        </Stack>
        <Stack
          direction={["column", "column", "row", "row"]}
          gap={3}
          sx={{ height: ["100vh", "100vh", "73vh", "70vh"] }}>
          <Stack
            direction={"column"}
            justifyContent={"center"}
            sx={{
              width: ["100%", "100%", "50%", "50%"],
              height: ["100%", "100%", "52%", "50%"],
            }}>
            <Typography
              variant='h5'
              sx={{
                color: "#ffffff",
                fontSize: [24, 24, "1.5rem", "1.7rem"],
                fontWeight: 400,
              }}>
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
          <Box
            sx={{
              width: ["100%", "100%", "48%", "48%"],
              height: "86%",
              bgcolor: "#009FFF",
            }}>
            <Card
              sx={{
                width: ["100%", "100%", "100%", "111%"],
                height: "106%",
                position: "relative",
                top: ["-30px", "-30px", "-42px", "-42px"],
                right: [15, 15, "78px", "79px"],
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
