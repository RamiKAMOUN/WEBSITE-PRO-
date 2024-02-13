import React from 'react'
import { Dropdown } from 'react-bootstrap';


const Societe = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/APropos">APropos</Dropdown.Item>
        <Dropdown.Item href="/NotreHistoire">Notre Histoire</Dropdown.Item>
        <Dropdown.Item href="/NotreFamille">Notre Famille</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Societe