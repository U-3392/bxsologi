import React from "react";
import '../gaussian.css';

export default function CompetitorTable( { data } ) {
    return (
        <>
        <table>
            <tr>
                <th>Name</th>
                <th>Grade</th>
                <th>Competitions</th>
            </tr>
            {data.map((competitor, index) => (
                <tr key={index}>
                    <td>{competitor.name}</td>
                    <td>{competitor.grade}</td>
                    <td>
                        <ul>
                        {competitor.competitions.map((competition, index) => (
                            <li key={index}>{competition.comp_name}</li>
                        ))}
                        </ul>
                    </td>
                </tr>
            ))}
        </table>
        </>
    )
}

function CTtest( [data] ) {
    return (
        <>
        <table>
            <tr>
                <th>Name</th>
                <th>Grade</th>
                <th>Competitions</th>
            </tr>
        </table>
        </>
    )
}