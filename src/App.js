import React, { Component } from "react";
import NamesList from "./NamesList";
import HeaderNav from "./HeaderNav";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    codeLang: [],
    dataFail: false,
    dataMsg: null,
    isLoading: true
  };

  componentDidMount() {
    axios
      .get(`https://localhost:44345/api/values`)
      .then(res => {
        const codeLang = res.data;
        this.setState({ codeLang, isLoading: false });
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
    const { codeLang, dataFail, dataMsg, isLoading } = this.state;
    let show = "";

    if (isLoading && !dataFail) {
      show = (
        <div className="spinner-border text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }

    if (dataFail) {
      show = (
        <React.Fragment>
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div>
            <p className="errormsg">{dataMsg}</p>
          </div>
        </React.Fragment>
      );
    }

    if (show.length > 0) {
      return (
        <div className="container">
          <div className="App">{show}</div>
        </div>
      );
    }

    return (
      <div className="container">
        <HeaderNav />
        <div className="App">
          <div className="row">
            <div className="col-6">
              <NamesList listType={"ul"} listOfNames={this.state.codeLang} />
            </div>
            <div className="col-6">
              <NamesList listType={"ol"} listOfNames={codeLang} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
