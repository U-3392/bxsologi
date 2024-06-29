import React from "react";
import data from '../data.json';
import CompetitorTable from "../components/Table";
import Filter from "../components/Filters";

const Search = () => {
    return (
        <div>
            <h1>
                Competitor Search
            </h1>
            <p>
                <i>
                    This section obtains the competition results, which are stored in a database. You can query for certain categories -- for example, you can search for "Top 5%" in "Anatomy and Physiology".
                    If something seems to not work, try clicking on it a few times. Your browser may have stored your initial query. 
                </i>
            </p>
            <p>
                <i>General notes:</i> <br />
                <i> <ul>
                        <li>The first dropdown is meant to sort similar to those in Google Sheets (order of JSON file, alphabetically first name, lowest-to-highest grade, highest-to-lowest number of invitationals, highest-to-lowest number of distinct events).</li>
                        <li>The second and third dropdowns are meant to work in tandem, but they should work by themselves. Specifically:
                            <ul>
                                <li>If the second dropdown is set to something, then it will average the competitor's scores (placement/total) amongst all of their events. Then, all of the competitor averages are placed into an array and sorted. </li>
                                <li>If the third dropdown is set to something, then it will only return people who have competed in that event.</li>
                                <li>This is the fun part: if both dropdowns are set to something, it will return the union of the sets, or all competitors in the top X% in a specific event.</li>
                            </ul>
                        </li>
                        <li>The fourth dropdown is my own subjective rating system. Specifically, I sort the competitors based on this formula:<br />
                        
                        (total/placement * importance of invitational * number of invitationals total) <br />

                        Note that a bigger number = better. Each rank (A, B, C, D) is the quartile in which the competitor falls in. This means that, even if all of the competitors are bad, there will still be people in the A category, B category, etc.
                        
                        </li>
                    </ul>
                </i>
                <br /> <b>VERY IMPORTANT: </b> For some reason, the table updates incorrectly if you go directly from one rank to another (e.g., A to C). Instead, just go from the starting value "(experimental, subjective) skill" to a rank and it should work fine. This is a small but important bug, and I think I know what to do to solve it (introduce better state management such as Redux) but I ran out of time sorry. )
            </p>
            <Filter data={data} />
        </div>
    )
}

export default Search;