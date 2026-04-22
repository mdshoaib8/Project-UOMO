import Image from "../common/Image"
import { BannerData } from "../../api/bannerdata"
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";

const Slider = SliderImport.default || SliderImport;

const Banner = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div>
                <ul
                    className="
                        flex 
                        gap-5 
                        absolute
                        bottom-14.5
                        left-48.75
                    "
                    style={{ margin: "0px" }}
                >
                    {" "}{dots}{" "}
                </ul>
            </div>
        ),
        customPaging: () => (
            <div
                className="
                    bg-[#ddc2b9]
                    h-1.5
                    w-1.5
                    rounded-full
                "
            >
            </div>
        )
    };

    return (
        <div className="
            mx-15
        ">
            <Slider {...settings}>
                {
                    BannerData?.map((item) => (
                        <Image
                            className="
                                w-full
                                text-center
                            "
                            key={item.id}
                            src={item.banner}
                        />
                    ))
                }
            </Slider>
        </div>
    )
}

export default Banner