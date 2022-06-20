import React, { Component } from 'react'
import './EmojiResults.css'


import EmojiResultsRow from './EmojiResultsRow'
import Clipboard from 'clipboard'



export default class emojiResults extends Component {


  componentDidMount() {
    this.clipboard = new Clipboard('.copy-to-clipboard')
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <div className='component-emoji-results'>
        
        {this.props.emojiData.map(emojiData => (
          <EmojiResultsRow 
              key={emojiData.title}
              symbol={emojiData.symbol}
              title={emojiData.title}
          />
        ))}

      </div>
    )
  }
}
