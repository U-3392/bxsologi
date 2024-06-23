import React from "react";
import ContinuousSlider from "../components/Slider";
import EventList from "../components/EventList";
 
const Simulation = () => {
    return (
        <div>
            <h1>
                Competitor Simulations
            </h1>
            <p><i>Basically, you set the percentage correct for each section of the event (there's only two events here because I don't really know any others well enough, but that is easily fixed). </i></p>

            <EventList />

            <h2>Partner 1</h2>
            <h2>Partner 2</h2>
            <ContinuousSlider />
        </div>
    );
};
 
export default Simulation;