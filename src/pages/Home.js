import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import mcdonalds from '../assets/mcdonalds.png'
import chicken from '../assets/chicken.png'
import taco from '../assets/tacobell.png'
import map from '../assets/usamap.png'
import { useNavigate } from 'react-router-dom';
import '../styles/home.css'

function Home() {
  const navigate = useNavigate();
    return (
        <div style={{ margin: "auto" }}>
            <h2>Restaurants In Your Area</h2>
            <Container className='container' style={{ marginTop: "40px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly", }} >
                    <Col sm="1">
                        <Row>
                            <Col xs=".5" >
                                <Image className='img1' src={mcdonalds} roundedCircle />
                            </Col>
                            <Col>
                                <h5 style={{ fontWeight: "bold" }}>McDonalds</h5>
                                <p>Rating</p>
                                <button className="link-btn1" onClick={() => navigate('/show')}>Rate This Restaurant</button>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="1">
                        <Row >
                            <Col xs=".5">
                                <Image className='img2' src={chicken} roundedCircle />
                            </Col>
                            <Col>
                                <h5 style={{ fontWeight: "bold" }}>Chick-Fil-A</h5>
                                <p>Rating</p>
                                <button className="link-btn1" onClick={() => navigate('/show')}>Rate This Restaurant</button>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="1">
                        <Row >
                            <Col xs=".5" >
                                <Image className='img3' src={taco} roundedCircle />
                            </Col>
                            <Col xs=".5">
                                <h5 style={{ fontWeight: "bold" }}>Taco Bell</h5>
                                <p>Rating</p>
                                <button className="link-btn1" onClick={() => navigate('/show')}>Rate This Restaurant</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div>
              <h1>MAP WILL GO HERE</h1>
              <img src={map} />
              
            </div>
        </div>
    )
}

export default Home