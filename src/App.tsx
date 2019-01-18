import React, { Component } from "react";
import { Segment, Input, Button } from "semantic-ui-react";
import "./App.css";

import * as scraper from "./modules/scraper";

class App extends Component {
  state = {
    nounInput: "",
    nounType: "",
    loading: false
  };

  onSubmit = () => {
    this.setState({ loading: true });
    scraper.nounInfo(this.state.nounInput).then(nounType => {
      this.setState({ nounType, loading: false });
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h2>Masculin ou Féminin</h2>
          <Input
            fluid
            icon="search"
            placeholder="Search..."
            value={this.state.nounInput}
            loading={this.state.loading}
            onChange={event => {
              this.setState({ nounInput: event.target.value });
            }}
          />
          <br />
          <Button fluid color="blue" onClick={this.onSubmit}>
            Submit
          </Button>
          {this.state.nounType !== "" && (
            <Segment>
              <h4>{this.state.nounType}</h4>
            </Segment>
          )}
        </div>
      </div>
    );
  }
}

export default App;
