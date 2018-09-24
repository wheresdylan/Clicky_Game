import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Nav from "./components/Nav";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    message: "Click an image to begin!",
    topScore: 0,
    curScore: 0,
    friends: friends,
    notSelectedZombies: friends
  };

  componentDidMount() {
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // selectZombie = id => {
  //   this.shuffleArray(friends);
  // }

  selectZombie = id => {
    const findId = this.state.notSelectedZombies.find(item => item.id === id);

    if (findId === undefined) {
 
      this.setState({
        message: "You guessed incorrectly!",
        topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
        curScore: 0,
        friends: friends,
        notSelectedZombies: friends
      });
    }
    else {
   
      const newID = this.state.notSelectedZombies.filter(item => item.id !== id);

      this.setState({
        message: "You guessed correctly!",
        curScore: this.state.curScore + 1,
        friends: friends,
        notSelectedZombies: newID
      });
    }

    this.shuffleArray(friends);
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav
          message={this.state.message}
          curScore={this.state.curScore}
          topScore={this.state.topScore}
        />
        <Title></Title>
        {this.state.friends.map(friend => (
          <FriendCard
            selectZombie={this.selectZombie}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
