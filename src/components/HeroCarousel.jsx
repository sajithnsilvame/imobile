import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import slide1 from "../assets/slide1-img.jpg";
import slide2 from "../assets/slide2-img.jpg";
import slide3 from "../assets/slide3-img.jpg";
import slide4 from "../assets/slide4-img.jpg";

const HeroCarousel = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute left-14 z-10 p-2 bg-gray-900 bg-opacity-50 rounded-full"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute right-14 z-10 p-2 bg-gray-900 bg-opacity-50 rounded-full"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </button>
          )
        }
      >
        <div>
          <img src={slide1} alt="Slide 1" />
        </div>
        <div>
          <img src={slide2} alt="Slide 2" />
        </div>
        <div>
          <img src={slide3} alt="Slide 3" />
        </div>
        <div>
          <img src={slide4} alt="Slide 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
