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
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s3.eu-west-1.amazonaws.com/redsys-prod/articles/eac8c6d69d1ce8ce0ff8824d/images/teaserImage_xxxx_croppedTeaserImage.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Click on the links in the navbar</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;