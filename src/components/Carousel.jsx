import React from "react";
import { Carousel } from "antd";

const CarouselComponent = () => {
  return (
    <Carousel autoplay>
      <div>
        <img className="rounded-md w-full" src="https://thumbor.sirclocdn.com/unsafe/1210x340/filters:format(webp):quality(70)/web.mitra10.com/media/weltpixel/owlcarouselslider/images/b/2/b2b-tb-desktop-november-re.jpg" alt="" />
      </div>
      <div>
        <img className="rounded-md w-full" src="https://thumbor.sirclocdn.com/unsafe/1210x340/filters:format(webp):quality(70)/web.mitra10.com/media/weltpixel/owlcarouselslider/images/4/_/4._top_banner_desktop_1600_x_450_-_oven_rinnai_2459ssw_72_g.jpg" alt="" />
      </div>
      <div>
        <img className="rounded-md w-full" src="https://thumbor.sirclocdn.com/unsafe/1210x340/filters:format(webp):quality(70)/web.mitra10.com/media/weltpixel/owlcarouselslider/images/o/l/oled_promo_mitra_10_main_page_desktop_1600x450.jpg" alt="" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
