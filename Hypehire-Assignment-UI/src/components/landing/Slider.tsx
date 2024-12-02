import React from "react";
import Image from "next/image";
import Avatar from "@/assests/images/user.png";
import Dallor from "@/assests/svg/icon-dallor.svg";
import dynamic from "next/dynamic";

const Swipper = dynamic(() => import("../common/Swipper"), {
  ssr: false,
});

const SliderCard = () => {
  return (
    <div className="shadow bg-white p-4 rounded-md flex flex-col gap-4 items-center text-black sm:m-4 w-[17rem]">
      <Image
        className="w-100 h-100 rounded-full"
        src={Avatar}
        alt="Rounded avatar"
      ></Image>
      <h2 className="font-bold text-xl m-0">Abhishek Gupta</h2>
      <p className="text-[#4A77FF] m-0">마케팅 · 2y+</p>
      <div className="flex flex-col flex-wrap gap-2 mt-2 items-center">
        <p className="p-1 border border-[#C1C5CF] rounded-md">
          마케팅 콘텐츠 제작
        </p>
        <p className="p-1 border border-[#C1C5CF] rounded-md">
          인스타그램 관리
        </p>
        <div className="flex flex-wrap gap-2">
          <p className="p-1 border border-[#C1C5CF] rounded-md">트위터 관리</p>
          <p className="p-1 border border-[#C1C5CF] rounded-md">
            블로그 글 작성
          </p>
        </div>
      </div>
    </div>
  );
};

let cards = [
  {
    key: 1,
    content: <SliderCard />,
  },
  {
    key: 2,
    content: <SliderCard />,
  },
  {
    key: 3,
    content: <SliderCard />,
  },
  {
    key: 4,
    content: <SliderCard />,
  },
  {
    key: 5,
    content: <SliderCard />,
  },
];

function Slider() {
  return (
    <div className="pl-4 relative">
      <div className="w-full flex  justify-center absolute mb-2">
        <div
          className="talk-bubble_2 tri-right round btm-left-in_2 floatingAnimation"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1200"
          data-aos-offset="0"
        >
          <div className="flex p-3 gap-3">
            <Image src={Dallor} alt="dallor" />
            <div>
              <p className="text-lg font-extrabold text-[#00C696]">
                월 100만원
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8">
        <Swipper
          cards={cards}
          height="500px"
          width="100%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </div>
    </div>
  );
}

export default Slider;
