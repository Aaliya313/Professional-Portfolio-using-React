import Carousel from 'react-bootstrap/Carousel';
import "../carousel/style.css";
import { Link } from 'react-router-dom';
<Link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'></Link>


function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1594645715165/q01-kk5fR.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://www.springboard.com/blog/wp-content/uploads/2019/07/sb-blog-programming.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s3.eu-west-1.amazonaws.com/redsys-prod/articles/eac8c6d69d1ce8ce0ff8824d/images/teaserImage_xxxx_croppedTeaserImage.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;