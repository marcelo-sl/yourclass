import React from 'react'
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import {FaSearch} from 'react-icons/fa';
import './index.css';

export default function Search() {
    return (
        <div className="SearchBar">
        <h2>Pesquisar</h2>
        <InputGroup className="mb-3">
            <FormControl className="input" placeholder="Pesquise por aulas ou professores..." />
            <InputGroup.Append className="inputEl">
                <Button variant="dark" className="button"><FaSearch className="mr-2" />Pesquisar</Button>
            </InputGroup.Append>
        </InputGroup>  
        </div>
    )
}
