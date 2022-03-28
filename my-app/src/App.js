import React from 'react';
import Card from './Card';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox'

const App = () => {
    return (
        <div>
        <h1> Robo friends</h1>
        <SearchBox />
        <CardList robots={robots}/>
        </div>
    )
}

export default App;