import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function EventList() {

        const Geologic_Mapping = ['Map Projections', 'Geologic History'];
        const Astronomy = ['Exoplanet Traits', 'Exoplanet Detection', 'Astrophysics'];
        const Optics = ['Theories of Light', 'Geometric Optics', 'Lab'];

    return (
        <>
          {['Events'].map(
            (variant) => (
              <DropdownButton
                as={ButtonGroup}
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant={variant.toLowerCase()}
                title={variant}
              >
                <Dropdown.Item eventKey="1">Geologic Mapping</Dropdown.Item>
                <Dropdown.Item eventKey="2">Astronomy</Dropdown.Item>
                <Dropdown.Item eventKey="3">Optics</Dropdown.Item>
              </DropdownButton>
            ),
          )}
          if (Dropdown.Item )
        </>
      );
    }

    

