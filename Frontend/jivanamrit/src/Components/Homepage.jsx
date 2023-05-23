import React from 'react'
import './Home.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../Images/girl.jpg'
import { Container } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../Images/Background.jpg'
import logo from '../Images/jivanamrit.png'
import {CardMedia} from '@mui/material';
import {CardContent} from '@mui/material';
import { Typography }from '@mui/material';
import {Box} from '@mui/material'
 import owner from '../Images/owner.jpg'
 import IconButton from '@mui/material/IconButton';
 import { useTheme } from '@mui/material/styles';
 import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
 import PlayArrowIcon from '@mui/icons-material/PlayArrow';
 import SkipNextIcon from '@mui/icons-material/SkipNext';
import ButtonBase from './ButtonBase';

const Homepage = () => {
  const theme = useTheme();

const data=[



"https://www.bestherbs.in/wp-content/uploads/2020/01/Ayurveda-business-opportunity-in-India.jpg",

"https://thumbs.dreamstime.com/b/healing-herbs-wooden-table-herbal-medicine-24030906.jpg",

 "https://images.pexels.com/photos/9575086/pexels-photo-9575086.jpeg?cs=srgb&dl=pexels-axmarkazi-babaiyan-9575086.jpg&fm=jpg",

 "https://thumbs.dreamstime.com/b/natural-herbal-medicine-fresh-herbs-flowers-aromatherapy-essential-oil-mortar-pestle-scissors-hemp-paper-102329035.jpg",

"https://st2.depositphotos.com/1005563/5207/i/950/depositphotos_52076229-stock-photo-dried-medical-herbs.jpg",

"https://media.istockphoto.com/id/1019597966/photo/herbs.jpg?s=612x612&w=0&k=20&c=ZcsO72g511QJeVhnpoYlYENXcVBb5Yawavy_FMMhBJU=",
"https://st2.depositphotos.com/4760391/7188/i/950/depositphotos_71885923-stock-photo-chives-thyme-basil-rosemary-and.jpg",

 "https://media.istockphoto.com/id/504069254/photo/fresh-herbs-on-wooden-background.jpg?s=612x612&w=0&k=20&c=UmuG3l9qSQDu0cOjjVG-9lfTMEYoOYoILa7oYGGsRmc=",
]


      const responsive = { 
    superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }

};
  return (
    
    <div className='mainDivhome'>
    
  
  
      <Carousel 
      responsive={responsive}
      showDots={false}
      autoPlaySpeed={3000}
      autoPlay={true}
      swipeable={true}
      infinite={true}
      draggable={true}
      transitionDuration={2000}
      >

    {
   data.map((item) => {
      return (
        <div>
      {/* <h1>hii</h1> */}
       <div className='card' >
     
          <img className='imagecar'
            src={item} width={"100%"} height={"441px"}
            alt="item"
          />
          <div className='overlay'>
            <div className='jivanDiv'>
              <h1 style={{color:"white"}}>Jivan Amrit</h1>
            </div>

            <div className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, doloremque nulla commodi minima ipsam perspiciatis quidem? Mollitia voluptatem velit ullam dolorum obcaecati laborum veniam corporis sapiente repudiandae. Magnam, quam neque.</div>
          </div>
        </div>
      </div>
      )
    })
    }
     </Carousel>



  

<div> <h1 style={{color:"rgb(77, 60, 60)", textAlign:"center"}}>~Jivan Amrit~</h1></div>


<Box className="ownerdiv">

<Box className="ownerdiv1"  style={{color:"rgb(77, 60, 60)", textAlign:"center"}}><h3>Jivan Amrit</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo voluptatem at ipsum tempore ea eaque beatae aut alias, voluptatibus similique nulla eos doloribus, sequi repellendus sed rerum. Odio, tenetur quo sit earum esse sequi labore nobis, facere mollitia inventore totam velit ex debitis exercitationem! Consectetur temporibus ex rerum ab!</p> </Box>
<Box className="ownerdiv2"><img src={owner} width ="100%" alt="" /></Box>
</Box>





   

 <Box className='cardhomepage'>
  <Box className="boxhome">
    <img src="https://images.pexels.com/photos/9575086/pexels-photo-9575086.jpeg?cs=srgb&dl=pexels-axmarkazi-babaiyan-9575086.jpg&fm=jpg" width={"200px"} alt="" />
  </Box>
  <Box className="boxhome">
    <img src="https://st2.depositphotos.com/1005563/5207/i/950/depositphotos_52076229-stock-photo-dried-medical-herbs.jpg" width={"200px"} alt="" />
  </Box>
  <Box className="boxhome">
  <img src="https://media.istockphoto.com/id/1019597966/photo/herbs.jpg?s=612x612&w=0&k=20&c=ZcsO72g511QJeVhnpoYlYENXcVBb5Yawavy_FMMhBJU=" width={"200px"} alt="" />
  </Box>
  <Box className="boxhome">
  <img src="https://st2.depositphotos.com/4760391/7188/i/950/depositphotos_71885923-stock-photo-chives-thyme-basil-rosemary-and.jpg" width={"200px"} alt="" />
  <Typography>Serving the nation since 1968</Typography>
  </Box>

 </Box>

<div className='textmain'>
  <h1>What is Ayurveda?</h1>
  <div><h3>Ayurveda is a 5,000-year-old lifestyle science that promotes proactive and preemptive approaches to personal health and wellness. In Sanskrit the word āyuh means “life” and veda means “knowledge or science”.</h3></div>
  <div>
    <p>Originating in the Indus Valley, what is now modern-day India, Ayurveda is a science of self-healing and encompasses diet and nutrition, lifestyle, meditation, postures, breathing exercises, and medical herbs along with cleansing and rejuvenation programs for healing body, mind, and spirit.</p>
    <p>Ayurveda is truly a holistic approach to wellness, and as a lifestyle medicine, it works! There’s a reason it has survived for 5,000 across generations, and the Ayurvedic Institute is a part of this generation’s movement to translate this ancient science into today’s living and pass on this knowledge to future generations.</p>
  </div>
</div>


<div className='buttonimg'>
  <ButtonBase/>
</div>


     
   
   {/* <Container style={{display:"flex"}} className='cardDiv'>
    <Container className='imgdiv'> <img className='imgcard' src={img1} alt='img1'/>
  </Container>
    <Container className='desDiv'> <h2>You ask or search about Ayurveda and you will find that Ayurveda is made up of two words-

Ayu and Veda and these are told as Ayu= Life and Veda = the knowledge.

So meaning of Ayurveda comes to be Knowledge of the Life!</h2></Container>
   </Container> */}

<div><h1 style={{margin:"20px 0px -17px 30px", color:"rgb(64, 60, 60)"}}>Power of Ayurvedic Herbs and Spices :-</h1></div>


<div className='CircleDiv'>

<Container className='contcir'>
<Card className='home3card' style={{ width: '100%' }}>
      <Card.Img variant="top" src='https://media.istockphoto.com/id/1298434383/photo/jars-of-spices.jpg?b=1&s=170667a&w=0&k=20&c=AiH7m0His_y1-yQIrncAGoPLdOOq5hqJxkZpYMbKs20='  width={"100%"}/>
      <Card.Body>
        <Card.Title className='spice'>Ayurvedic Spices</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="" className='spiceb'>Go somewhere</Button>
      </Card.Body>
    </Card>
</Container>



<Container className='contcir'>
<Card className='home3card' style={{ width: '100%' }}>
      <Card.Img variant="top" src='https://thumbs.dreamstime.com/b/ayurveda-16037170.jpg' width={"100%"} />
      <Card.Body>
        <Card.Title className='flower'>Ayurvedic Flowers</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='flowerb' variant="">Go somewhere</Button>
      </Card.Body>
    </Card>
</Container>



<Container className='contcir'>
<Card className='home3card' style={{ width: '100%' }}>
      <Card.Img variant="top" src='https://fortmirrorprod.s3-ap-south-1.amazonaws.com/626532/healhTipsFolder/23801545210578418.jpg' width={"100%"} />
      <Card.Body>
        <Card.Title className='herb'>Ayurvedic Herbs</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="" className='herbb'>Go somewhere</Button>
      </Card.Body>
    </Card>

</Container>
</div>

   {/* <div className='cardDiv'>
    <div className='imgdiv'> <img className='imgcard' src={img1} alt='img1' width={"100%"}/>
  </div>
    <div className='desDiv'> <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis consequatur, perspiciatis, ea sed explicabo distinctio, quidem sit reiciendis excepturi laborum eum repellendus repudiandae nulla odio perferendis voluptas numquam doloribus doloremque inventore quia dicta. Obcaecati eum fuga expedita quia laboriosam labore nesciunt doloribus, </h2></div>
   </div>

   <div className='cardDiv'>
    <div className='imgdiv'> <img className='imgcard' src={img1} alt='img1' />
  </div>
    <div className='desDiv'> <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis consequatur, perspiciatis, ea sed explicabo distinctio, quidem sit reiciendis excepturi laborum eum repellendus repudiandae nulla odio perferendis voluptas numquam doloribus doloremque inventore quia dicta. Obcaecati eum fuga expedita quia laboriosam labore nesciunt doloribus, </h2></div>
   </div>
     */}



    </div>




  )
}

export default Homepage
