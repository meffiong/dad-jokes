(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,s){e.exports=s(55)},31:function(e,t,s){},50:function(e,t,s){},53:function(e,t,s){},54:function(e,t,s){},55:function(e,t,s){"use strict";s.r(t);var n=s(0),o=s.n(n),a=s(21),r=s.n(a),i=(s(31),s(25)),c=s(24),l=s(2),u=s.n(l),p=s(9),m=s(3),h=s(4),v=s(8),k=s(6),d=s(5),f=s(7),g=s(22),j=s.n(g),w=(s(50),s(23)),b=s.n(w),E=(s(53),function(e){function t(){return Object(m.a)(this,t),Object(v.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"getColor",value:function(){return this.props.votes>=15?"#4CAF50":this.props.votes>=12?"#8BC34A":this.props.votes>=9?"#CDDC39":this.props.votes>=6?"#FFEB3B":this.props.votes>=3?"#FFC107":this.props.votes>=0?"#FF9800":"#f44336"}},{key:"getEmoji",value:function(){return this.props.votes>=15?"em em-rolling_on_the_floor_laughing":this.props.votes>=12?"em em-laughing":this.props.votes>=9?"em em-smiley":this.props.votes>=6?"em em-slightly_smiling_face":this.props.votes>=3?"em em-neutral_face":this.props.votes>=0?"em em-confused":"em em-angry"}},{key:"getSize",value:function(){return this.props.votes>=15?"3rem":this.props.votes>=12?"2.7rem":this.props.votes>=9?"2.4rem":this.props.votes>=6?"2.1rem":this.props.votes>=3?"1.8rem":this.props.votes>=0?"1.5rem":"1.2rem"}},{key:"render",value:function(){return o.a.createElement("div",{className:"Joke"},o.a.createElement("div",{className:"Joke-buttons"},o.a.createElement("i",{class:"fas fa-arrow-up",onClick:this.props.upvote}),o.a.createElement("span",{className:"Joke-votes",style:{borderColor:this.getColor()}},this.props.votes),o.a.createElement("i",{class:"fas fa-arrow-down",onClick:this.props.downvote})),o.a.createElement("div",{className:"Joke-text"},this.props.text),o.a.createElement("div",{className:"Joke-smiley"},o.a.createElement("i",{className:this.getEmoji()})))}}]),t}(n.Component)),J=function(e){function t(e){var s;return Object(m.a)(this,t),(s=Object(v.a)(this,Object(k.a)(t).call(this,e))).state={jokes:JSON.parse(window.localStorage.getItem("jokes")||"[]"),loading:!1},s.seenJokes=new Set(s.state.jokes.map(function(e){return e.text})),console.log(s.seenJokes),s.handleClick=s.handleClick.bind(Object(d.a)(s)),s}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:0===this.state.jokes.length&&this.getJokes();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getJokes",value:function(){var e=Object(p.a)(u.a.mark(function e(){var t,s,n,o=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=[];case 2:if(!(t.length<this.props.numJokesToGet)){e.next=10;break}return e.next=5,j.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 5:s=e.sent,n=s.data.joke,this.seenJokes.has(n)?(console.log("found duplicate"),console.log(n)):t.push({id:b()(),text:n,votes:0}),e.next=2;break;case 10:this.setState(function(e){return{loading:!1,jokes:[].concat(Object(c.a)(e.jokes),t)}},function(){return window.localStorage.setItem("jokes",JSON.stringify(o.state.jokes))}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),this.setState({loading:!1});case 16:case"end":return e.stop()}},e,this,[[0,13]])}));return function(){return e.apply(this,arguments)}}()},{key:"handleVote",value:function(e,t){var s=this;this.setState(function(s){return{jokes:s.jokes.map(function(s){return s.id===e?Object(i.a)({},s,{votes:s.votes+t}):s})}},function(){return window.localStorage.setItem("jokes",JSON.stringify(s.state.jokes))})}},{key:"handleClick",value:function(){this.setState({loading:!0},this.getJokes)}},{key:"render",value:function(){var e=this;if(this.state.loading)return o.a.createElement("div",{className:"Jokelist-spinner"},o.a.createElement("i",{className:"fa-8x far fa-spin fa-laugh"}),o.a.createElement("h1",{className:"Jokelist-title"},"Loading..."));var t=this.state.jokes.sort(function(e,t){return t.votes-e.votes});return o.a.createElement("div",{className:"Jokelist"},o.a.createElement("div",{className:"Jokelist-sidebar"},o.a.createElement("h1",{className:"Jokelist-title"},o.a.createElement("span",null,"Dad")," Jokes"),o.a.createElement("img",{src:"https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg",alt:"Smiley Face"}),o.a.createElement("button",{className:"get-more",onClick:this.handleClick},"New Jokes")),o.a.createElement("div",{className:"Jokelist-jokes"},t.map(function(t){return o.a.createElement(E,{key:t.id,votes:t.votes,text:t.text,upvote:function(){return e.handleVote(t.id,1)},downvote:function(){return e.handleVote(t.id,-1)}})})))}}]),t}(n.Component);J.defaultProps={numJokesToGet:10};var y=J;s(54);var N=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.e737b9bd.chunk.js.map