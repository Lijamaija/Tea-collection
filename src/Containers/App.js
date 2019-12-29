import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import { robots } from '../robots';
import Scroll from '../Components/Scroll';


class App extends Component {
    constructor() {
        super()
        //what changes in app
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

   

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    
    }
    render() {
        //destructuring 
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!robots.length) {
            return <h1>Loading</h1>
        } else {
    return (
        <div className='tc'>
            <h1>My Tea collection</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll> <CardList robots={filteredRobots} />
                </Scroll>
        </div>
    );
}
}
}

export default App;