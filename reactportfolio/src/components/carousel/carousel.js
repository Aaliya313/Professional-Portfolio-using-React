import Carousel from 'react-bootstrap/Carousel';
import "../carousel/style.css";
import { Link } from 'react-router-dom';
<Link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'></Link>



function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 " 
          src="https://lazyd3v.com/images/previews/hello.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Portfolio - Aaliya Ladha</h3>
          <p>Showcasing projects.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block" id="avatar"
          src="https://i.pinimg.com/originals/68/29/b8/6829b881ae314429369d7743331d48ea.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>About me!</h3>
          <p>I am a software developer</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;