(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,s){e.exports=s(53)},29:function(e,t,s){},48:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){"use strict";s.r(t);var o=s(0),n=s.n(o),a=s(19),r=s.n(a),i=(s(29),s(23)),c=s(7),l=s.n(c),p=s(20),u=s(2),m=s(3),h=s(5),v=s(4),d=s(6),f=s(21),k=s.n(f),g=(s(48),s(22)),b=s.n(g),j=(s(51),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"getColor",value:function(){return this.props.votes>=15?"#4CAF50":this.props.votes>=12?"#8BC34A":this.props.votes>=9?"#CDDC39":this.props.votes>=6?"#FFEB3B":this.props.votes>=3?"#FFC107":this.props.votes>=0?"#FF9800":"#f44336"}},{key:"getEmoji",value:function(){return this.props.votes>=15?"em em-rolling_on_the_floor_laughing":this.props.votes>=12?"em em-laughing":this.props.votes>=9?"em em-smiley":this.props.votes>=6?"em em-slightly_smiling_face":this.props.votes>=3?"em em-neutral_face":this.props.votes>=0?"em em-confused":"em em-angry"}},{key:"getSize",value:function(){return this.props.votes>=15?"3":this.props.votes>=12?"2.7":this.props.votes>=9?"2.4":this.props.votes>=6?"2.1":this.props.votes>=3?"1.8":this.props.votes>=0?"1.5":"1.2"}},{key:"render",value:function(){return n.a.createElement("div",{className:"Joke"},n.a.createElement("div",{className:"Joke-buttons"},n.a.createElement("i",{class:"fas fa-arrow-up",onClick:this.props.upvote}),n.a.createElement("span",{className:"Joke-votes",style:{borderColor:this.getColor()}},this.props.votes),n.a.createElement("i",{class:"fas fa-arrow-down",onClick:this.props.downvote})),n.a.createElement("div",{className:"Joke-text"},this.props.text),n.a.createElement("div",{className:"Joke-smiley"},n.a.createElement("i",{class:"em em-rolling_on_the_floor_laughing"})))}}]),t}(o.Component)),E=function(e){function t(e){var s;return Object(u.a)(this,t),(s=Object(h.a)(this,Object(v.a)(t).call(this,e))).state={jokes:[]},s}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(l.a.mark(function e(){var t,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=[];case 1:if(!(t.length<this.props.numJokesToGet)){e.next=8;break}return e.next=4,k.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 4:s=e.sent,t.push({id:b()(),text:s.data.joke,votes:0}),e.next=1;break;case 8:this.setState({jokes:t});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleVote",value:function(e,t){this.setState(function(s){return{jokes:s.jokes.map(function(s){return s.id===e?Object(i.a)({},s,{votes:s.votes+t}):s})}})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"Jokelist"},n.a.createElement("div",{className:"Jokelist-sidebar"},n.a.createElement("h1",{className:"Jokelist-title"},n.a.createElement("span",null,"Dad")," Jokes"),n.a.createElement("img",{src:"https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg",alt:"Smiley Face"}),n.a.createElement("button",{className:"get-more"},"New Jokes")),n.a.createElement("div",{className:"Jokelist-jokes"},this.state.jokes.map(function(t){return n.a.createElement(j,{key:t.id,votes:t.votes,text:t.text,upvote:function(){return e.handleVote(t.id,1)},downvote:function(){return e.handleVote(t.id,-1)}})})))}}]),t}(o.Component);E.defaultProps={numJokesToGet:10};var w=E;s(52);var y=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.f722ad55.chunk.js.map