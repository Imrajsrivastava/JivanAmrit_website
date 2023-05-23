import React from 'react'
import './Home.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../Images/girl.jpg'
import { Container } from '@mui/material';
const Homepage = () => {

const data=[
  "https://media.gettyimages.com/id/532055707/vector/alternative-medicine-banners.jpg?s=612x612&w=0&k=20&c=uym5rMVCJLUOxg93c5qIMN_QQLmIpdXPjsiX7uE7dZQ=",
"https://media.gettyimages.com/id/1059266092/vector/ginkgo-leaf-sketch-vector-seamless-pattern.jpg?s=612x612&w=0&k=20&c=WukI8VTrhALqFt2q6tZZpv4NFZugzxI9kSHCWfBj3y8=",

  "https://media.gettyimages.com/id/114854538/photo/ayurvedic-massage-sign-goa.jpg?s=612x612&w=0&k=20&c=I-uMIHnj_XYsoe5Uz4nKVBrLBBeNIKuy9t4MMjsTTK4=",

  "https://thumbs.dreamstime.com/b/various-aromatic-colorful-spices-herbs-ingredients-cooking-ayurveda-treatments-169744244.jpg",

  "https://www.shutterstock.com/image-photo/fresh-herbs-garden-wooden-olive-260nw-1296916552.jpg",

  "https://media.gettyimages.com/id/1202544687/vector/massage-and-body-care-icon-set.jpg?s=612x612&w=0&k=20&c=48a7yS-v_5AdySrfDuZxeVgnaK_NaL7gM11dyS-U0cM=",

    "https://www.thehealthsite.com/wp-content/uploads/2021/11/ayurveda-category-picture.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISLCUr4pqM1y7hYgCoVmSMAju2-Tt0W1Vww&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqifUFiOLEG8H_wK6JjCNPsIZUtndsPIYoI-cPyQugiTMlyQD4KoYJLBN1NFi3-GteC60&usqp=CAU"
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
    
    <div className='mainDiv'>
    
  
  
      <Carousel 
      responsive={responsive}
      showDots={false}
      autoPlaySpeed={2000}
      autoPlay={true}
      swipeable={true}
      infinite={true}
      draggable={true}
      transitionDuration={500}
      >

    {
   data.map((item) => {
      return (
        <div>
      {/* <h1>hii</h1> */}
       <div className='card' >
     
          <img className='imagecar'
            src={item} width={"100%"} height={"450px"}
            alt="item"
          />
          <div className='overlay'>
            <div className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, doloremque nulla commodi minima ipsam perspiciatis quidem? Mollitia voluptatem velit ullam dolorum obcaecati laborum veniam corporis sapiente repudiandae. Magnam, quam neque.</div>
          </div>
        </div>
      </div>
      )
    })
    }
     </Carousel>
   
   <Container style={{display:"flex"}} className='cardDiv'>
    <Container className='imgdiv'> <img className='imgcard' src={img1} alt='img1'/>
  </Container>
    <Container className='desDiv'> <h2>You ask or search about Ayurveda and you will find that Ayurveda is made up of two words-

Ayu and Veda and these are told as Ayu= Life and Veda = the knowledge.

So meaning of Ayurveda comes to be Knowledge of the Life!</h2></Container>
   </Container>


<div className='CircleDiv'>
   <Container className='contcir'>

   </Container>

   <Container className='contcir'>

</Container>

<Container className='contcir'>

</Container>
<Container className='contcir'>

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
