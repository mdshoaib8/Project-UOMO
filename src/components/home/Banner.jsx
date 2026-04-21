import Image from "../common/Image"
import { BannerData } from "../../api/bannerdata"

const Banner = () => {
    return (
        <div>
            {
                BannerData?.map((item) => (
                    <Image key={item.id} src={item.banner} />
                ))
            }
        </div>
    )
}

export default Banner