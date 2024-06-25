import React from "react";
import { DatabaseTable, createTable} from "../components/CompetitorTable";
import JsonDataDisplay from "../components/CompetitorTableTest";
import Table from "../components/CompetitorTableTest";
import data from '../data.json'
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
            <Table theadData = {getHeadings()} tbodyData={data} />
        </div>
    )
}
 
export default Search;