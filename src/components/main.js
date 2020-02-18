import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: "Racecar",
      count: 0
    };
  }

  handleWord = e => {
    let words = e.target.value;
    this.setState({ words });
  };

  handleClickUp = e => {
    e.preventDefault();
    let words = this.state.words
      .split("")
      .reverse()
      .join("");
    this.setState({ words, count: this.state.count + 1 });
  };

  handleClickDown = e => {
    e.preventDefault();
    let words = this.state.words
      .split("")
      .reverse()
      .join("");
    this.setState({ words, count: this.state.count - 1 });
  };

  handleNumber = e => {
    let count = parseInt(e.target.value, 10);
    isNaN(count) ? this.setState({ count: 0 }) : this.setState({ count });
  };

  resetNumber = e => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <h3>{this.state.words}</h3>
        <input onChange={this.handleWord} />
        <br />
        <button onClick={this.handleClickUp}>Increment</button>
        <br />
        <button onClick={this.handleClickDown}>Decrement</button>
        <h2 className={this.state.count > 0 ? "postive" : "negative"}>
          {this.state.count}
        </h2>
        <input onChange={this.handleNumber} />
        <br />
        <button onClick={this.resetNumber}>Reset Counter</button>
      </div>
    );
  }
}

export default Main;
