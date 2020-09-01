import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
class App extends Component {

  constructor() {
    super();
    this.state = {
      monster :[],
      searchField:""
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({monster:user}));

  }

  handleChange = (e) => {
    this.setState({searchField:e.target.value})
  }

  render() {
    const {monster,searchField } = this.state;
    const filteredMonsters = monster.filter(mon => 
      mon.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App"> 
      <h1>Monsters Rolodex</h1>  
    <SearchBox 
    placeholder='search monsters'
    handleChange ={this.handleChange}/>
    <CardList monster={filteredMonsters}/>
  </div>)
  }
}

export default App;
