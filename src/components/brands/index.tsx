import BrandsCard from "../brands-card";
import CarouselDemo from "../carousel";

export default function Brands() {
    return(
        <div className="w-full m-5">
            <h2 className="text-3xl text-center m-10">Marcas</h2>
            <div className="flex items-center gap-5 ">
                <BrandsCard />
            </div>
        </div>
    )
}