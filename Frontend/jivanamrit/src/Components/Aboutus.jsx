import { Container } from '@mui/material'
import React from 'react'
import Drawer from './Drawer'
import logo from '../Images/jivanamrit.png'
import img from '../Images/bg2.jpg'



import { CardActionArea } from "@mui/material";
import './Aboutus.css'
import Button from 'react-bootstrap/esm/Button'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardOverlay,
    MDBCardImage
  } from 'mdb-react-ui-kit';
import Topimage from './Topimage'

const Aboutus = () => {
  const theme = useTheme();

  return (
    <div>


    <Topimage item={"https://wallpaperaccess.com/full/2996865.jpg"} heading={"About Us"}/>




    <Card sx={{ display: 'flex', height:"350px",padding:"10px", margin:"30px",boxShadow:" rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width:"50%" }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque, consequuntur officiis eos veritatis molestias laudantium temporibus reprehenderit iste. Nisi quaerat sunt obcaecati in minus quia aut esse quam sed.
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Button variant="primary">See More</Button>
        </Box>
      </Box>
      <CardMedia className="logocard"
        component="img"
        sx={{ width: "40%" }}
        image={logo}
        alt="Live from space album cover"
      />
    </Card>







 

     {/* <Container className='Contabt' style={{display:"flex"}}>
    

      <Container  className='Contimg'>
        <img src={logo} width={"100%"} height={"450px"} alt="" />
      </Container>
     
     <Container className='contdes'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et qui magnam atque dicta odit temporibus cumque expedita. Voluptatum architecto itaque aliquam impedit, quae delectus, cum unde esse reprehenderit est earum inventore officiis eius necessitatibus laudantium ad? Mollitia officiis corrupti repudiandae aperiam dignissimos quasi similique, nemo nobis velit eligendi est unde.
     </Container>

     </Container>

 */}




     <Container style={{ display: "flex" }}>
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

     
     








   <Card sx={{ display: 'flex', height:"350px",padding:"10px", margin:"30px",boxShadow:" rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", }}>

<CardMedia >


<iframe width="660" height="350" src="https://www.youtube.com/embed/S_L6Ato1ndk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</CardMedia>


      <Box sx={{ display: 'flex', flexDirection: 'column', width:"50%" }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque, consequuntur officiis eos veritatis molestias laudantium temporibus reprehenderit iste. Nisi quaerat sunt obcaecati in minus quia aut esse quam sed.
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Button variant="primary">See More</Button>
        </Box>
      </Box>
      
    </Card>



    </div>
  )
}

export default Aboutus
