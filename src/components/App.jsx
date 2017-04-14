import React, { Component } from 'react';
import { Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      packages: [],
      search: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    console.log(this.state.search);
  }

  handleChange(field, value) {
    this.setState({
      [field]: value,
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="main">
          <div className="container">
            <Row>
              <Col md={6} mdOffset={3}>
                <form>
                  <FormGroup>
                    <FormControl
                      type="text"
                      value={this.state.search}
                      placeholder="Search Packages"
                      onChange={e =>
                        this.handleChange('search', e.target.value)}
                    />
                  </FormGroup>
                  <Button onClick={this.handleSearch}>
                    Search
                  </Button>
                </form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
