import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function EventList() {
    
    /*const currentevent = [
        Geologic_Mapping = ['Map Projections', 'Geologic History'],
        Astronomy = ['Exoplanet Traits', 'Exoplanet Detection', 'Astrophysics']
    ];*/

    return (
        <>
          {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
            (variant) => (
              <DropdownButton
                as={ButtonGroup}
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant={variant.toLowerCase()}
                title={variant}
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                  Active Item
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownButton>
            ),
          )}
        </>
      );
    }

    

