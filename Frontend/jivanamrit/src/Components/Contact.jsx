import React from "react";
import Container from "@mui/material/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Contact.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Topimage from "./Topimage";

const Contact = () => {
  return (
    <>
      {/* <div className="contactimage">
        {" "}
        <img
          src="https://www.cloud4c.com/kr/sites/kr/files/2022-07/cloud4c-company-contact-1Desktop.jpg"
          width={"100%"}
          height={"300px"}
          alt="contact"
        />
      </div> */}

     <Topimage item={"https://www.cloud4c.com/kr/sites/kr/files/2022-07/cloud4c-company-contact-1Desktop.jpg"} heading={"Contact Us"} />


      <div  className="containctdiv1" style={{ display: "flex", justifyContent: "space-around",marginTop:"50px" }}>
        <Container >
          {" "}
          <iframe className="iframe"
            style={{
              width: "900px",
              height: "500px",
              border: "0px",
              loading: "lazy",
              
            }}
            id="iframe"
            //   width="600"
            //   height="450"
            //   style="border: 0"
            //   loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCJ50P3i-sk5hbxpI4mwppCAkio4ATadi0
                    &q=gonda"
          ></iframe>
          <b>Getting to us</b>
        </Container>

        <div  className="formCont">
          <Form className="form">
            <h3>
              Contact <b>Us</b>
            </h3>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Phone No</Form.Label> */}
              <Form.Control type="number" placeholder="Number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </Form.Group>

            {/* <Form.Label>Phone No</Form.Label> */}

            <Button className="contButton" variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>

      <Container>
        <Container>
          <h3>Overview of Ayurveda</h3>
          <p>
            Ayurveda is the talk of the town everywhere in the world. But there
            is some confusion about the exact meaning of Ayurveda. Right from
            definition up to the expended view of the Ayurveda there are a lot
            of misunderstandings. This confusion is not only for a lay man. Most
            of the world is confused with this word Ayurveda.The ancient Indian
            medical system, also known as Ayurveda, is based on ancient writings
            that rely on a “natural” and holistic approach to physical and
            mental health. Ayurvedic medicine is one of the world's oldest
            medical systems and remains one of India's traditional health care
            systems.
          </p>
        </Container>
      </Container>

      <Container className="downContainercon" style={{ display: "flex" }}>
        <Container className="cardmedia">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://img.freepik.com/premium-photo/man-sits-lotus-pose-person-practices-yoga-meditation-radiating-energy-generative-ai_788189-3992.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Meditation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Meditation can include anything from breath awareness to
                  moving meditation or yoga. Choose the ones that resonate with
                  you and stick with them. The more you practice, the easier it
                  will become.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>

        <Container className="cardmedia">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://t3.ftcdn.net/jpg/02/44/98/64/360_F_244986473_ZA74HdZIJ7DKdzMFI8gfj4rki77RjXN9.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pranayama
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Deep diaphragmatic breathing clears the lungs of carbon
                  dioxide, and increases oxygen intake, providing you body with
                  more vital energy. Deep belly breathing also massages your
                  internal organs and promotes digestion by stimulating
                  metabolism and encouraging peristalsis.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>

        <Container className="cardmedia">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://media.istockphoto.com/id/491242324/photo/no-such-thing-as-too-much-pampering.jpg?b=1&s=170667a&w=0&k=20&c=mkAwNTjcwEcVCUz9uxki68C2IXthC-2mEeGPCOJeHCY="
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Massage
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Numerous studies have shown the amazing health benefits of
                  massage, including lowered blood pressure, increased muscle
                  tone, stress reduction, and increased lymphatic flow (thereby
                  reducing edema). The National Institute of Health did a study
                  in 2009 concluding that abdominal massage successfully reduced
                  constipation and increased bowel movements.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
      </Container>
    </>
  );
};

export default Contact;
