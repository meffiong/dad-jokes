import React, { Component } from 'react'
import './Joke.css'

class Joke extends Component {
    getColor() {
        if (this.props.votes >= 15) {
          return "#4CAF50";
        } else if (this.props.votes >= 12) {
          return "#8BC34A";
        } else if (this.props.votes >= 9) {
          return "#CDDC39";
        } else if (this.props.votes >= 6) {
          return "#FFEB3B";
        } else if (this.props.votes >= 3) {
          return "#FFC107";
        } else if (this.props.votes >= 0) {
          return "#FF9800";
        } else {
          return "#f44336";
        }
      }
      getEmoji() {
        if (this.props.votes >= 15) {
          return "em em-rolling_on_the_floor_laughing";
        } else if (this.props.votes >= 12) {
          return "em em-laughing";
        } else if (this.props.votes >= 9) {
          return "em em-smiley";
        } else if (this.props.votes >= 6) {
          return "em em-slightly_smiling_face";
        } else if (this.props.votes >= 3) {
          return "em em-neutral_face";
        } else if (this.props.votes >= 0) {
          return "em em-confused";
        } else {
          return "em em-angry";
        }
      }
      getSize() {
        if (this.props.votes >= 15) {
          return "3";
        } else if (this.props.votes >= 12) {
            return "2.7";
        } else if (this.props.votes >= 9) {
            return "2.4";
        } else if (this.props.votes >= 6) {
            return "2.1";
        } else if (this.props.votes >= 3) {
            return "1.8";
        } else if (this.props.votes >= 0) {
            return "1.5";
        } else {
            return "1.2";
        }
      }


    render() {
        return (
            <div className="Joke">
                <div className="Joke-buttons">
                    <i class="fas fa-arrow-up" onClick={this.props.upvote}></i>
                    <span className="Joke-votes" style={{borderColor: this.getColor()}}>{this.props.votes}</span>
                    <i class="fas fa-arrow-down" onClick={this.props.downvote}></i>
                </div>
                <div className="Joke-text">{this.props.text}</div>
                <div className="Joke-smiley"><i className={this.getEmoji()}></i></div>
            </div>
        )
    }
}

export default Joke