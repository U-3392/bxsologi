import React, { useState } from 'react';
import Slider from './Slider';
import SortDropdown from './SortDropdown';

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
    const[eKey, setEKey] = useState('');

    return(
        <>
           <SortDropdown keys={[]} onSortKeyChange={setEKey} />
        </>
        
    )
        
 }

export default EventDrop;