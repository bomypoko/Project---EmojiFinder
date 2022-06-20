import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Searchinput from './Searchinput'
import EmojiResults from './EmojiResults'
import filterEmoji from './filterEmoji'




export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      filteredEmoji: filterEmoji("", 20) 
    }

    this.handleSearchChange = this.handleSearchChange.bind(this);


  }

  handleSearchChange(event) {
    this.setState ({
      filteredEmoji: filterEmoji(event.target.value, 20) 
    })
  }


  render() {
    return ( 
      <div className='container'>
        <Header />
        <Searchinput textChange={this.handleSearchChange}/>
        <EmojiResults emojiData={this.state.filteredEmoji}/>
      </div>
    )
  }
}
