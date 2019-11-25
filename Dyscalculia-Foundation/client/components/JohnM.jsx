import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { getDFYouth } from '../api'

import Feature from './Feature'

export default class JohnM extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      DFYouths: []
    }
  }

  componentDidMount () {
    getDFYouth()
      .then(DFYouths => {
        this.setState({
          DFYouths: DFYouths
        })
      })
      .catch(err => {
        this.renderError(err)
      })
  }

  render () {
    return (
      <div>
        {this.state.DFYouths.map(DFYouth => {
          if (DFYouth.name === 'John M') {
            return <Feature
              key={DFYouth.id}
              DFYouth={DFYouth}
            />
          }
        })}
      </div>
    )
  }
}
