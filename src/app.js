import React from "react";
import Main from "./components/main.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import "./app.scss";
// import "./styles.css";

//function component

//class component
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
