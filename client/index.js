// index.js
// Finish combining https://github.com/uber/react-map-gl , https://reactstrap.github.io/components/jumbotron/
import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Jumbotron,Button} from 'reactstrap'


const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center',
  },
}

class App extends Component {
  render() {
    return (
        <div>
        <Jumbotron>
          <h1 className="display-3">Welcome!</h1>
          <p className="lead">This is a proof of Concept Work.</p>
          <hr className="my-2" />
          <p>Replace this with our map.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </div>
    )
  }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)