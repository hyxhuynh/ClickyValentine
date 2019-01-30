import React, { Component } from "react";
import Body from "../components/Body";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from "../data.json";

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      score: 0,
      topScore: 0,
      selected: [],
      data: this.shuffleArray(data)
    };
  }

  shuffleArray = (array) => {
    //Copied from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  handleItemSelected = (event) => {
    // Check the values of the event
    var key = event.target.getAttribute('data-id');

    // Check if key already exists
    if( this.state.selected.includes(key) ){
      // We reset the score and save the top score, then reload
      this.setState({
        score: 0,
        topScore: Math.max(this.state.topScore, this.state.score), 
        data: this.shuffleArray(data),
        selected: []
      });
    }
    else {
      this.setState({
        score: this.state.score + 1,
        data: this.shuffleArray(data),
        selected: this.state.selected.concat(key)
      });
    }

    // Randomize the list again
    
  };

  render() {
    return (
      <div>
        <Nav score={this.state.score} topScore={this.state.topScore}/>
        <Header />
        <Body
            itemList={this.state.data} handleItemSelected={this.handleItemSelected} >
        </Body>
        <Footer />
      </div>
    )
  }
}

export default Home;