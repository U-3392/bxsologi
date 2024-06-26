import React, { useState } from 'react';
import Slider from './Slider';

function EventDrop() {
    const eventList = [
        {
            ename : "Geologic Mapping",
            sections : ["Map Projections", "Topo Maps", "Trigonometric Analysis", "Drill Cores"],
        },
        {
            ename : "Astronomy",
            sections : ["Exoplanet Detection", "Stellar Evolution", "JS9 Analysis", "DSOs"]
        },
        {
            ename : "Optics",
            sections : ["Lab", "Geometric Optics", "Theories of Light", "Properties of Light"]
        }
    ]

    return(
        <>
            <form>
                <select id="allEvents">
                {eventList.map((item, index) => (
                    <option key={index}>{item.ename}</option>
             ))}
                </select>
                <input type="submit"></input>
            </form>


        </>
        
    )
        
 }

export default EventDrop;