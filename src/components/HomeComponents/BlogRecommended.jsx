import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeBlogCards from "../HomeBlogCards";
import { blogRecommend } from "../../../utitlities/dummyData";
import { useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function BlogRecommended() {

  const sliderRef = useRef(null)
  //NEXT SLIDER BUTTON ARROW
  const next = () =>{
    sliderRef.current.slickNext();
}

//PREV SLIDER BUTTON ARROW
const previous = () =>{
    sliderRef.current.slickPrev();
}

  

const settings = {
  speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
                autoplay: true,

            },
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                autoplay: true,

            },
            },
        ],
};

  return (
    <section className="relative w-full lg:p-10 p-3">
      <h2 className="lg:text-2xl text-[1rem] font-bold text-booksyGray">
        Recommended For You
      </h2>
      <div className="my-5">
        {/* SLIDER ARROWS    */}
            {/* NEXT ARROW */}
            <div
                onClick={next}
                className="hidden lg:block absolute cursor-pointer self-center text-[1.2rem] right-[1rem] p-[1rem] top-[11rem] rounded-full w-[auto] text-[#222324] bg-[white] shadow-2xl z-[99999999]"
              >
                <BsArrowRight/>
              </div>

              {/* PREV ARROW */}
              <div
                onClick={previous}
                className="hidden lg:block absolute cursor-pointer text-[1.2rem] left-[1.2rem] p-[1rem] top-[11rem] rounded-full w-[auto] text-[#222324] bg-[white] shadow-2xl z-[99999999]"
              >
                <BsArrowLeft/>
              </div>

        <Slider 
          {...settings}
          ref={sliderRef}
        >
          {blogRecommend.map((card, index) => (
            <HomeBlogCards
              key={index}
              title={card.title}
              image={card.imageURL}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}
