import React from "react";
import { DatabaseTable, createTable} from "../components/CompetitorTable";
import JsonDataDisplay from "../components/CompetitorTableTest";
const Search = () => {
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
            <JsonDataDisplay />
        </div>
    );
};
 
export default Search;