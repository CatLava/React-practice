import React, { useState, useEffect} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/scroll';
import { robots } from '../robots';
import ErrorBoundry from '../components/ErrorBoundry'
import SearchBox from '../components/SearchBox'
// State and properties with React
// React will read teh props received and renders
// Props never change and are inputs
// need a memory for the app when doing the search text, State
// State is the description of the app, object 


function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)
// fetch will make the http request and reviece a response
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));   
    }, [])

    // function to search with
    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        console.log(filteredRobots);
    }


    const filteredRobots = robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? 
        <h1>Loading</h1> :
    (
        <div className='tc'>
        <h1> Robo friends</h1>
        <button onClick={() => setCount(count + 1)}> Click me</button>
        <h1>test</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
            <ErrorBoundry>
                <CardList robots={filteredRobots}/>
                </ErrorBoundry>
        </Scroll>
        </div>
    )
}
    
    


export default App;