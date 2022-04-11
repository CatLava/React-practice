import React, {Component} from 'react';
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


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
// fetch will make the http request and reviece a response
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users =>this.setState({robots: users}));   
    }
    // function to search with
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log(filteredRobots);
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length == 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                <h1> Robo friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                     <CardList robots={filteredRobots}/>
                     </ErrorBoundry>
                </Scroll>
                </div>
            )
            }
    }
    
}

export default App;