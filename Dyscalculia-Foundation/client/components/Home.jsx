import React from 'react'
// import Feature from './Feature'
import { getDFoundation } from '../api'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      info: '',
      img: ''
    }
  }

  componentDidMount () {
    getDFoundation()
      .then(DFoundations => {
        this.setState({
          info: DFoundations[0].info,
          img: DFoundations[0].img
        })
      })
      .catch(err => {
        this.renderError(err)
      })
  }

  render () {
    return (
      <div>
        <p>{this.state.info}</p>
        <img src={this.state.img}/>
      </div>
    )
  }
}
