import React from "react";
import { DatabaseTable, createTable} from "../components/CompetitorTable";
 
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
            <tbody>
        <tr>
          <th>Name</th>
          <th>Grade</th>
          <th>Initial Diagnostic</th>
          <th>Rickards Invitational</th>
          <th>Boyceville Invitational</th>
          <th>Regionals Diagnostic</th>
        </tr>
      </tbody>
        </div>
    );
};
 
export default Search;