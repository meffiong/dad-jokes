import React, { Component } from 'react'
import axios from 'axios'
import './Jokelist.css'
import Joke from './Joke'


class Jokelist extends Component {
    static defaultProps = {
        numJokesToGet: 10
    };

    constructor(props){
        super(props)
        this.state = {
            jokes: []
        }
    };

    async componentDidMount(){
        let jokes = [];
        while(jokes.length < this.props.numJokesToGet){
            let res = await axios.get("https://icanhazdadjoke.com/", { 
                headers: { Accept: "application/json" }
            });
            jokes.push(res.data.joke)
        }

        this.setState({jokes})
        // console.log(jokes);
    }

    render() {
        return (
            <div className="Jokelist">
                <div className="Jokelist-sidebar">
                    <h1 className="Jokelist-title"><span>Dad</span> Jokes</h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
                    <button className="get-more">New Jokes</button>
                </div>
                <div className="Jokelist-jokes">
                {this.state.jokes.map((j)=>( 
                   <div>{j}</div> 
                ))}
                </div>
            </div>
        )
    }
}

export default Jokelist