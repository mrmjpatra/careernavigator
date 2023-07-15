// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

const SwipperTab = ({
  setActiveTab,
  activeTab,
}: {
  setActiveTab: (value: number) => void;
  activeTab: number;
}) => {
  return (
    <div>
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swipperTab"
      >
        <SwiperSlide
          onClick={() => setActiveTab(1)}
          className={`${activeTab === 1
              ? "border-b-2 border-red-500 rounded bg-red-400/10"
              : "border-0 transition-all duration-300 ease-out"
            } text-xl font-bold text-blue-500 cursor-pointer `}
        >
          Overview
        </SwiperSlide>
        <SwiperSlide
          onClick={() => setActiveTab(2)}
          className={`${activeTab === 2
              ? "border-b-2 border-red-500 rounded bg-red-400/10"
              : "border-0 transition-all duration-300 ease-out"
            } text-xl font-bold text-blue-500 cursor-pointer `}
        >
          Important Dates
        </SwiperSlide>
        <SwiperSlide
          onClick={() => setActiveTab(3)}
          className={`${activeTab === 3
              ? "border-b-2 border-red-500 rounded bg-red-400/10"
              : "border-0 transition-all duration-300 ease-out"
            } text-xl font-bold text-blue-500 cursor-pointer `}
        >
          Eligibility
        </SwiperSlide>
        <SwiperSlide
          onClick={() => setActiveTab(4)}
          className={`${activeTab === 4
              ? "border-b-2 border-red-500 rounded bg-red-400/10"
              : "border-0 transition-all duration-300 ease-out"
            } text-xl font-bold text-blue-500 cursor-pointer `}
        >
          Application Form
        </SwiperSlide>
        <SwiperSlide
          onClick={() => setActiveTab(5)}
          className={`${activeTab === 5
              ? "border-b-2 border-red-500 rounded bg-red-400/10"
              : "border-0 transition-all duration-300 ease-out"
            } text-xl font-bold text-blue-500 cursor-pointer `}
        >
          Admit Card
        </SwiperSlide>
        <SwiperSlide
          onClick={() => setActiveTab(6)}
          className={`${activeTab === 6
              ? "border-b-2 border-red-500 rounded bg-red-400/10"
              : "border-0 transition-all duration-300 ease-out"
            } text-xl font-bold text-blue-500 cursor-pointer `}
        >
          Exam Pattern
        </SwiperSlide>
        <SwiperSlide
          onClick={() => setActiveTab(7)}
          className={`${activeTab === 7
              ? "border-b-2 border-red-500 rounded bg-red-400/10"
              : "border-0 transition-all duration-300 ease-out"
            } text-xl font-bold text-blue-500 cursor-pointer `}
        >
          Syllabus
        </SwiperSlide>
        <SwiperSlide
          onClick={() => setActiveTab(8)}
          className={`${activeTab === 8
              ? "border-b-2 border-red-500 rounded bg-red-400/10"
              : "border-0 transition-all duration-300 ease-out"
            } text-xl font-bold text-blue-500 cursor-pointer `}
        >
          How to Prepare
        </SwiperSlide>
        <SwiperSlide
          onClick={() => setActiveTab(9)}
          className={`${activeTab === 9
              ? "border-b-2 border-red-500 rounded bg-red-400/10"
              : "border-0 transition-all duration-300 ease-out"
            } text-xl font-bold text-blue-500 cursor-pointer `}
        >
          Books
        </SwiperSlide>
        <SwiperSlide
          onClick={() => setActiveTab(10)}
          className={`${activeTab === 10
              ? "border-b-2 border-red-500 rounded bg-red-400/10"
              : "border-0 transition-all duration-300 ease-out"
            } text-xl font-bold text-blue-500 cursor-pointer `}
        >
          Previous Year Question Paper
        </SwiperSlide>
        <SwiperSlide
          onClick={() => setActiveTab(11)}
          className={`${activeTab === 11
              ? "border-b-2 border-red-500 rounded bg-red-400/10"
              : "border-0 transition-all duration-300 ease-out"
            } text-xl font-bold text-blue-500 cursor-pointer `}
        >
          Result
        </SwiperSlide>
        <SwiperSlide
          onClick={() => setActiveTab(12)}
          className={`${activeTab === 12
              ? "border-b-2 border-red-500 rounded bg-red-400/10"
              : "border-0 transition-all duration-300 ease-out"
            } text-xl font-bold text-blue-500 cursor-pointer `}
        >
          Selection Process
        </SwiperSlide>
        <SwiperSlide
          onClick={() => setActiveTab(13)}
          className={`${activeTab === 13
              ? "border-b-2 border-red-500 rounded bg-red-400/10"
              : "border-0 transition-all duration-300 ease-out"
            } text-xl font-bold text-blue-500 cursor-pointer `}
        >
          Answer Key
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwipperTab;
