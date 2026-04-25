import { Link } from "react-router-dom";
import Image from "../../common/Image";

const Card = ({ item }) => {
    return (
        <div
            key={item.id}
            className={`h-full w-full ${item.id == 1 && "col-span-2 row-span-2"} ${item.id == 2 && "col-span-2 row-span-1"} relative`}
        >
            <Image className="h-full w-full" src={item.image} alt={item.name} />
            <div className="absolute bottom-10 left-10">
                <h4 className="font-jost text-primary-black text-sm leading-6 font-normal">
                    HOT LIST
                </h4>
                <h2 className="font-jost text-[24px] font-medium">
                    <span className="font-bold">{item.name}</span> COLLECTION
                </h2>
                <Link
                    className="font-jost text-primary-black after:bg-primary-black relative text-sm leading-6 font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-[40%]"
                    to={item.link}
                >
                    SHOP NOW
                </Link>
            </div>
        </div>
    );
};

export default Card;
