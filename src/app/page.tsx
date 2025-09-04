import MainSlider from "@/components/Slider-Components/MainSlider";
import CatSlider from "./../components/Slider-Components/CatSlider";

export default function Home() {
    return (
        <div className="container mx-auto text-2xl text-center mt-12">
            <MainSlider />
            <CatSlider />
        </div>
    );
} 
