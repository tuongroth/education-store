import React from 'react';
import { headerBooks } from '../../Data/Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './Header.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import headerShape from '../../assets/header-shape.svg';

import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="header-container">

        {/* Navigation Buttons */}
        <div className="slider-button">
          <div className="button-prev-slide slidebutton">
            <GoArrowLeft />
          </div>
          <div className="button-next-slide slidebutton">
            <GoArrowRight />
          </div>
        </div>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: '.button-prev-slide',
            nextEl: '.button-next-slide',
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {headerBooks.map(({ title, info, img, btnLink }, index) => (
            <SwiperSlide key={index}>
              <div className="header-wrapper container">
                <div className="header-left">
                  <h1>{title}</h1>
                  <p dangerouslySetInnerHTML={{ __html: info }}></p>
                  <Link to={btnLink} className="btn btn-border">
                    Learn More
                  </Link>
                </div>
                <div className="header-right">
                  <img src={img} alt={title} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="header-shape">
          <img src={headerShape} alt="Header Shape" />
        </div>
      </div>
    </header>
  );
}
