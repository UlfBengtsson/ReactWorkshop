import React, { Component } from "react";
import "./App.css";
import NamesList from "./NamesList";
import axios from "axios";

class App extends Component {
  state = {
    codeLang: [],
    dataFail: false,
    dataMsg: null
  };

  componentDidMount() {
    axios
      .get(`https://localhost:44345/api/values`)
      .then(res => {
        const codeLang = res.data;
        this.setState({ codeLang });
      })
      .catch(
        function(error) {
          this.setState({ dataFail: true });
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            this.setState({
              dataMsg: "Sever Access Denied: " + error.response.status
            });
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            this.setState({ dataMsg: "Sever dident respond" });
          } else {
            // Something happened in setting up the request that triggered an Error
            this.setState({ dataMsg: "Failed to send request" });
          }
        }.bind(this)
      );
  }

  render() {
    const { codeLang, dataFail, dataMsg } = this.state;

    return (
      <div className="App">
        <div>
          <NamesList listType={"ul"} listOfNames={this.state.codeLang} />
          <NamesList listType={"ol"} listOfNames={codeLang} />
        </div>
      </div>
    );
  }
}

export default App;
