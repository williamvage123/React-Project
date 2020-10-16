import React, { Component } from 'react';
import './App.css';                                             
import Form from './Form.js'
import List from './List.js'
import ShowAd from './ShowAd.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: "form",
      ad: ""
    }

  }
  showList = () => {
    this.setState({ page: "list" })
  };

  showDetails = (ad) => {
    this.setState({ ad: ad, page: "details" })
  }



  render() {

    let pageElement;
    if (this.state.page === "form") {
      pageElement = <Form onSubmit={this.showList} />
    } else if (this.state.page === "list") {
      pageElement = <List onAdClick={this.showDetails} />
    } else if (this.state.page === "details") {
      pageElement = <ShowAd ad={this.state.ad} />
    }


    return (
      <body>
        <section class="hero is-medium is-primary is-bold">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                Classified Ads
              </h1>
              <h2 class="subtitle">
                How not to become a software developer
              </h2>
            </div>
          </div>
        </section>
        <section>
        <nav class="tabs is-boxed is-fullwidth">
              <div class="container">
                <ul>
                  <li class="Buttons is-4">
                    <a><p onClick={() => this.setState({ page: "list" })}>Show List</p></a>
                  </li>
                  <li>
                    <a><p onClick={() => this.setState({ page: "form" })}>Hide List</p></a>
                  </li>
                  <li>
                    <a>{pageElement}</a>
                  </li>
                </ul>
              </div>
            </nav>
          
        </section>
        </body>

      //looking at one ad specifically, or form or all.
    );
  }
}






export default App;
