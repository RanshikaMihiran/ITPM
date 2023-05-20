import Aboutus from "./Aboutus";
import Donation from "./Donation";
import Hero from "./Hero";
import Patners from "./Patners";
import Projects from "./Projects";

export function Home(){
    return(
        <div>
            <Hero/>
         <Aboutus/>
         <Patners/>
         <Projects/>
         <Donation/>
            <h1>Home</h1>
        </div>
    )
}