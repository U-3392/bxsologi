import React, { useState, useEffect } from 'react';
import CompetitorTable from './Table';
import '../gaussian.css';
import SortDropdown from './SortDropdown';

function Filter({ data }) {
    const [competitors, setCompetitors] = useState(data.competitors);
    const [sortKey, setSortKey] = useState('name');
    const [eventKey, setEventKey] = useState('');
    const [percentageKey, setPercentageKey] = useState('');
    const [scoreKey, setScoreKey] = useState('');

    useEffect(() => {
        if (data && data.competitors) {
            setCompetitors(data.competitors);
        }
    }, [data]);

    useEffect(() => {
        let sortedData = [...competitors];
        switch (sortKey) {
            case 'basics':
                sortedData = data.competitors;
                break;
            case 'name':
                sortedData.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
                break;
            case 'grade':
                sortedData.sort((a, b) => a[sortKey]- b[sortKey]);
                break;
            case 'competitions': {
                sortedData.sort((a, b) => b[sortKey].length - a[sortKey].length);
                break;
            }
            case 'events': {
                sortedData.sort((a, b) => [...new Set(b.competitions.flatMap(competition => competition.scores.map(score => score.event)))].length - [...new Set(a.competitions.flatMap(competition => competition.scores.map(score => score.event)))].length);
                break;
            }
            default:
                sortedData = data.competitors;
        }
        setCompetitors(sortedData);
    }, [sortKey, competitors])

    useEffect(() => {
        let sortedData = [...competitors];
        sortedData.forEach(competition => {
            if(competition && competition.scores) {
                let averageScore = 0;
            competition.scores.forEach(score => {
                averageScore += score.total / score.placement;
            });
            averageScore /= competition.scores.length;
    
            if (competition.comp_name === "Yale" || competition.comp_name === "States") {
                averageScore *= 2;
            }
        }
        })
        sortedData.sort((a, b) => a.averageScore - b.averageScore);

        switch (scoreKey) {
            case '(experimental, subjective) skill':
                sortedData = data.competitors;
                break;
            case 'A':
                sortedData = sortedData.slice(0, (sortedData.length)/4);
                break;
            case 'B': 
                sortedData = sortedData.slice((sortedData.length)/4, (sortedData.length)/2);
                break;
            case 'C':
                sortedData = sortedData.slice((sortedData.length)/2, (sortedData.length)*3/4);
                break;
            case 'D': 
                break;
        }
        setCompetitors(sortedData);
    }, [scoreKey, competitors])

    useEffect(() => {
        let sortedData = [...competitors];
        switch (percentageKey) {
            case 'top':
                sortedData = data.competitors;
            case '1%':
            case '5%':
            case '10%':
            case '50%':
                if (eventKey) {
                    sortedData = sortedData.filter(c =>
                        c.competitions.some(comp =>
                            comp.scores.some(s => s.event === eventKey)
                        )
                    );
                    const percentage = parseInt(sortKey, 10) / 100;
                    sortedData.sort((a, b) => {
                        const aScore = a.competitions.find(comp =>
                            comp.scores.some(s => s.event === eventKey)
                        ).scores.find(s => s.event === eventKey).placement;
                        const bScore = b.competitions.find(comp =>
                            comp.scores.some(s => s.event === eventKey)
                        ).scores.find(s => s.event === eventKey).placement;
                        return aScore / a.total - bScore / b.total;
                    });
                    sortedData = sortedData.slice(0, Math.ceil(sortedData.length * percentage));
                }
                break;
        }
        setCompetitors(sortedData);
    }, [percentageKey, competitors])

    return (
        <div>
            <SortDropdown keys={['basics', 'name', 'grade', 'competitions', 'events']} onSortKeyChange={setSortKey} />

            <SortDropdown keys={['top', '1%', '5%', '10%', '50%']} onSortKeyChange={setPercentageKey} />

            <SortDropdown keys={['events', ...new Set(data.competitors.flatMap(c => c.competitions.flatMap(comp => comp.scores.map(s => s.event))).sort())]} onSortKeyChange={setEventKey} />

            <SortDropdown keys={['(experimental, subjective) skill', 'A', 'B', 'C', 'D']} onSortKeyChange={setScoreKey} />

            <table>
            <tr>
                <th>Name</th>
                <th>Grade</th>
                <th>Competitions</th>
                <th>Events</th>
            </tr>
            {competitors.map((competitor, index) => (
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
                    <td>
                        <ul>
                        {[...new Set(competitor.competitions.flatMap(competition => competition.scores.map(score => score.event)))].map((event, index) => (
                        <li key={index}>{event}</li>
                        ))}
                        </ul>
                    </td>
                </tr>
            ))}
        </table>
        </div>
    );
}

export default Filter;
