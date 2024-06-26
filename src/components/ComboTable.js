import React, { useState, useEffect } from 'react';
import data from '../data.json';
import CompetitorTable from './Table';
import SortDropdown from './SortDropdown';

function ComboTable() {
  const [competitors, setCompetitors] = useState(data.competitors);
  const [sortKey, setSortKey] = useState('name');

  useEffect(() => {
    let sortedData = [...competitors];
    switch(sortKey) {
        case 'name': 
            sortedData.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
            break;
        case 'grade':
            sortedData.sort((a, b) => a[sortKey] - b[sortKey]);
            break;
        case 'competitions' : {
            for(let i = 0; i < sortedData.length; i++) {

            }
        }


        case 'top' : {
            break;
        }
        case '1%' : {
            for(let i = 0; i < sortedData.length; i++) {
                
            }
        }
        case '5%' : {

        }
        case '10%' : {

        }
        case '50%' : {

        }


        case '(experimental, subjective) skill' : {

        }
        case 'A' : {

        }
        case 'B' : {

        }
        case 'C' : {

        }
        case 'D' : {
            
        }
        default:
            sortedData = data;
    }
    setCompetitors(sortedData);
}, [sortKey, competitors])


  return (
    <div>
      <SortDropdown keys={['name', 'grade', 'competitions']} onSortKeyChange={setSortKey} />

      <SortDropdown keys={['top', '1%', '5%', '10%', '50%']} onSortKeyChange={setSortKey} />

      <SortDropdown keys={['(experimental, subjective) skill', 'A', 'B', 'C', 'D']} onSortKeyChange={setSortKey} />
      <CompetitorTable data={data} />
    </div>
  );
}

export default ComboTable;
