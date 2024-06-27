import React from "react";
import data from '../data.json'
import CompetitorTable from "../components/Table";
import ComboTable from "../components/ComboTable";

const Search = () => {
    const getHeadings = () => {
        return Object.keys(data[0]);
      }
    return (
        <div>
            <h1>
                Competitor Search
            </h1>
            <p>
                <i>
                    This section obtains the competition results, which are stored in a database. You can query for certain categories -- for example, you can search for "Top 5%" in "All events." 
                </i>
            </p>
            <ComboTable />
        </div>
    )
}
 
export default Search;