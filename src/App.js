import React, { Component } from 'react';
import "./App.css";
import Card from './Card';
import axios from 'axios';

const url = "https://www.omdbapi.com/?apikey=45f0782a&s=war"



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      loader: true
     }
  }


  componentDidMount() {
    axios.get(url).then(res =>  this.setState({data: res.data.Search, loader:false})).catch(err => console.log("error", err));
  }
  

  render() { 

    const { data, loader } = this.state
    console.log(data);
 
    return ( 
      <div>
        <h1 className="headingApp">Mo<b className="headingV">v</b>ies</h1>
        { loader && <h1> loading.....</h1>}
          <div className="cardDivInApp">

        { data && Object.keys(data).length &&
           
        data.map((item, index) => <Card 
        data={item}
        index={index}
        />
  )
  }
        </div>
      </div>
     )
  }
}
 

export default App;
