import React from "react";
import EventDrop from "../components/EventDropdown";
 
const Simulation = () => {
    return (
        <div>
            <h1>
                Competitor Simulations
            </h1>
            <p><i>Basically, you set the percentage correct for each section of the event (there's only two events here because I don't really know any others well enough, but that is easily fixed). </i></p>

            <EventDrop />
            
            <h2>Partner 1</h2>
            
            <h2>Partner 2</h2>
        </div>
    );
};
 
export default Simulation;