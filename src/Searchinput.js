import React, { Component } from 'react'
import './Searchinput.css'

export default class Searchinput extends Component {
  render() {
    return (
          <div className='component-search-input'>
                <div>
                     <input onChange={this.props.textChange} />
                </div>
          </div>
    )
  }
}
