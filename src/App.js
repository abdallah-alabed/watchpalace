import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./components/data.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  handle = (e) => {
    let index = e.target.value;
    this.setState({ index: index });
    if (index === "1") {
      this.setState({
        data: data.sort((a, b) => {
          return b.price - a.price;
        }),
      });
    }
    if (index === "2") {
      this.setState({
        data: data.sort((a, b) => {
          return a.price - b.price;
        }),
      });
    }
    if (index === "3") {
      this.setState({
        data: data.sort((a, b) => {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          } else if (nameA > nameB) {
            return 1;
          }
          return 0;
        }),
      });
    }

    if (index === "4") {
      this.setState({
        data: data.sort((a, b) => {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          if (nameA > nameB) {
            return -1;
          } else if (nameA < nameB) {
            return 1;
          }
          return 0;
        }),
      });
    }
  };

  render() {
    return (
      <div>
        <Header handle={this.handle} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Main data={this.state.data} />
        <br></br>
        <br></br>
        <Footer />
      </div>
    );
  }
}

export default App;
