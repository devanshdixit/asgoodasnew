/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import { Carousel, Col, Container, Row, Button } from 'react-bootstrap';
import styles from '../styles/Slider.module.css'
import Images from 'next/image'
const Slider = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  function scrollto() {
    const contact = window.document.getElementById("contact");
    contact.scrollIntoView();
  }
  return (
    <div className="container">
      <Carousel activeIndex={index} variant="dark" controls={false} onSelect={handleSelect}>
        <Carousel.Item>
          <Row>
            <Col lg={6} className="order-lg-2 p-2 " >
              <img src={`/images/slide-1.png`} className="img-fluid" alt="" />
            </Col>
            <Col lg={6} className="order-lg-1 pb-4 pt-4">
              <Container>
                <p className={styles.header}>Do you want to buy eco-friendly and affordable clothes?</p>
                <Button type="submit" onClick={scrollto} variant="primary" className={styles.button}>Lets Go</Button>
              </Container>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Slider;