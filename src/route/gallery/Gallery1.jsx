import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CardMedia from "@mui/material/CardMedia";
import img1 from "../../assests/camera.jpg";
import img2 from "../../assests/taining.jpg";
import img3 from "../../assests/cultural1.jpg";
import img4 from "../../assests/land0.jpg";
import img5 from "../../assests/land1.jpg";
import img6 from "../../assests/icemount.jpg";
import img7 from "../../assests/training.jpg";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import "./gallerystyle.css";
let photo = [
  {
    id: 1,
    imgsrc: img1,
  },
  {
    id: 2,
    imgsrc: img2,
  },
  {
    id: 3,
    imgsrc: img3,
  },
  {
    id: 4,
    imgsrc: img4,
  },
  {
    id: 5,
    imgsrc: img5,
  },
  {
    id: 6,
    imgsrc: img6,
  },
  {
    id: 7,
    imgsrc: img7,
  },
  {
    id: 8,
    imgsrc: img3,
  },
  {
    id: 9,
    imgsrc: img6,
  },
];

export default function Gallery1() {
  const [model, setmodel] = useState(false);
  const [tempimg, settempimg] = useState("");

  const getImg = (imgsrc) => {
    settempimg(imgsrc);
    setmodel(true);
  };
  return (
    <>
      <Navbar />
      <Container sx={{ py: 18 }} maxWidth="xl">
        <div className={model ? "model open" : "model"}>
          <img src={tempimg} alt="99" className="modelimg" />
          <FaWindowClose onClick={() => setmodel(false)} />
        </div>
        <Grid container spacing={7}>
          {photo.map((item, index) => (
            <Grid item key={index} xs={14} sm={6} md={4}>
              <Card
                onClick={() => getImg(item.imgsrc)}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: "18rem",
                    pt: "0%",
                  }}
                  image={item.imgsrc}
                  alt="random"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
