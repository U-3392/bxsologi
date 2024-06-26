import React from "react";
import data from '../data.json';
import '../gaussian.css';
import FilterView, {TopPercentage, EventSort} from './Filters';

export default function CompetitorTable( {data} ) {
    return (
        <>
        <table>
            <tr>
                <th>Name</th>
                <th>Grade</th>
                <th>Competitions</th>
            </tr>
            {data.competitors.map((competitor, index) => (
                <tr>
                    <td key={index}>{competitor.name}</td>
                    <td key={index}>{competitor.grade}</td>
                    <td key={index}>
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