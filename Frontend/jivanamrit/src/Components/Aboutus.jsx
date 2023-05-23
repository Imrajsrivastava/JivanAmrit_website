import { Container } from '@mui/material'
import React from 'react'
import Drawer from './Drawer'
import logo from '../Images/jivanamrit.png'
import img from '../Images/bg2.jpg'
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardOverlay,
    MDBCardImage
  } from 'mdb-react-ui-kit';

const Aboutus = () => {
  return (
    <div>




    <MDBCard className='text-white'>
    <MDBCardImage overlay src={img} width={"100%"} height={"300px"} alt='...' />
    <MDBCardOverlay>
      <MDBCardTitle>About us</MDBCardTitle>
      <MDBCardText>
      Ayurveda is the talk of the town everywhere in the world. But there is some confusion about the exact meaning of Ayurveda. Right from definition up to the expended view of the Ayurveda there are a lot of misunderstandings. This confusion is not only for a lay man. Most of the world is confused with this word Ayurveda.
      </MDBCardText>
      <MDBCardText>Serving the Nation since 1968.</MDBCardText>
    </MDBCardOverlay>
  </MDBCard>



 

     <Container style={{display:"flex"}}>
    

      <Container>
        <img src={logo} width={"100%"} height={"450px"} alt="" />
      </Container>
     
     <Container>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et qui magnam atque dicta odit temporibus cumque expedita. Voluptatum architecto itaque aliquam impedit, quae delectus, cum unde esse reprehenderit est earum inventore officiis eius necessitatibus laudantium ad? Mollitia officiis corrupti repudiandae aperiam dignissimos quasi similique, nemo nobis velit eligendi est unde.
     </Container>

     </Container>




    </div>
  )
}

export default Aboutus
