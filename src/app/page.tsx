import { AboutNextGen } from "./(Home)/AboutNextGen";
import { AboutVedio } from "./(Home)/AboutVedio";
import { Completed_work } from "./(Home)/Completed_work";
import Hero from "./(Home)/Hero";
import { OurServices } from "./(Home)/OurServices";

export default function Home() {
    return (
        <>
            <div className="px-2 py-8 flex gap-5 flex-wrap items-center content-center">
                <Hero />
                <Completed_work />
            </div>
            <div className="px-2 lg:pl-0 py-8 flex gap-5 flex-wrap bg-primary/5 rounded-xl">
                <AboutVedio />
                <AboutNextGen />
            </div>
            <div className="px-2 py-8 mt-5">
                <OurServices/>
            </div>
        </>
    );
}
