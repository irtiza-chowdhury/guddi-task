/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import '../assets/boostrap_css/bootstrap.min.css';
import sample from '../assets/images/image.svg';
import sample2 from '../assets/images/sample-2.jpg';
import sample3 from '../assets/images/sample-3.jpg';
import sample4 from '../assets/images/sample-4.jpg';

export default function CarouselImage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className=" h-100">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100 h-[295px]" src={sample} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-[295px] rounded-[8px]" src={sample2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-[295px] rounded-[8px]" src={sample3} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-[295px] rounded-[8px]" src={sample4} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
