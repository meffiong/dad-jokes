import React, { Component } from 'react'
import axios from 'axios'
import './Jokelist.css'
import uuid from 'uuid'
import Joke from './Joke'


class Jokelist extends Component {
    static defaultProps = {
        numJokesToGet: 10
    };

    constructor(props){
        super(props)
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"), //each joke is an object
            loading: false
        }
        this.seenJokes = new Set(this.state.jokes.map( j => j.text))
        this.handleClick = this.handleClick.bind(this)
    };

    async componentDidMount(){
       if(this.state.jokes.length === 0) this.getJokes();
    }

    async getJokes(){
        try{
        let jokes = [];
        while(jokes.length < this.props.numJokesToGet){
            let res = await axios.get("https://icanhazdadjoke.com/", { 
                headers: { Accept: "application/json" }
            });

            let newJoke = res.data.joke
            if(!this.seenJokes.has(newJoke)){
                jokes.push({id: uuid(),text: newJoke, votes: 0})
            }
        }

        this.setState(st => ({
            loading: false,
            jokes: [...st.jokes, ...jokes]
        }),
        () => window.localStorage.setItem("jokes" , JSON.stringify(this.state.jokes))
        )
        // console.log(jokes);
    }catch(e){
        this.setState({ loading:false })
    }
    }

    handleVote(id,delta){
        this.setState(
            st => ({
                jokes: st.jokes.map(j =>
                    (j.id === id ) ? {...j, votes: j.votes + delta  } : j
                )
            }),
            () => window.localStorage.setItem("jokes" , JSON.stringify(this.state.jokes))
        )
    }

    handleClick(){
        this.setState({loading:true}, this.getJokes)
    }

    render() {
        if(this.state.loading){
            return(
                <div className="Jokelist-spinner">
                    <i className="fa-8x far fa-spin fa-laugh"></i>
                    <h1 className="Jokelist-title">Loading...</h1>
                </div>
            )
        }

        let jokes = this.state.jokes.sort( (a,b) => b.votes - a.votes )

        return (
            <div className="Jokelist">
                <div className="Jokelist-sidebar">
                    <h1 className="Jokelist-title"><span>Dad</span> Jokes</h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt="Smiley Face"/>
                    <button className="get-more" onClick={this.handleClick}>New Jokes</button>
                </div>
                <div className="Jokelist-jokes">
                {jokes.map((j)=>(
                    <Joke key={j.id} votes={j.votes} text={j.text} upvote={() => this.handleVote(j.id, 1)} downvote={() => this.handleVote(j.id, -1)} />
                ))}
                </div>
            </div>
        )
    }
}

export default Jokelist