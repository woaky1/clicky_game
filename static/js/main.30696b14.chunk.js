(this.webpackJsonpclicky_game=this.webpackJsonpclicky_game||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"name":"Pikachu","img":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"},{"name":"Bulbasaur","img":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"},{"name":"Charmander","img":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"},{"name":"Squirtle","img":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"},{"name":"Aipom","img":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/190.png"},{"name":"Gastly","img":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png"},{"name":"Snivy","img":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/495.png"},{"name":"Shiftry","img":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/275.png"},{"name":"Treecko","img":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png"},{"name":"Ekans","img":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png"},{"name":"Incineroar","img":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/727.png"},{"name":"Snorlax","img":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"}]')},,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),m=a(3),c=a.n(m),s=(a(14),a(4)),l=a(5),i=a(7),r=a(6),k=a(8);var p=function(e){return n.a.createElement("div",{className:"row sticky-top d-flex justify-content-center text-center poketext",style:{backgroundColor:"red",fontFamily:"'Luckiest Guy', cursive"}},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("h3",{className:"font-weight-bold"},"Pok\xe9Click!")),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("h3",null,"Click an image to begin!")),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("h3",null,"Score: ",e.score," | Top Score: ",e.topScore)))};var d=function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"jumbotron jumbotron-fluid text-center",style:{fontFamily:"'Luckiest Guy', cursive",backgroundColor:"black"}},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"display-4 text-danger font-weight-bold"},"Pok\xe9Click!"),n.a.createElement("p",{className:"lead text-danger font-weight-bold"},"Click on a Pok\xe9mon to earn points, but don't click on a Pok\xe9mon more than once!")))))};var g=function(e){return n.a.createElement("div",{className:"col-md-3"},n.a.createElement("div",{className:"card shadow p-3 mb-5 bg-white rounded",style:{maxHeight:"225px",maxWidth:"225px"}},n.a.createElement("img",{src:e.img,className:"card-img-top",alt:e.name,onClick:e.pokeClick})))};var u=function(e){return n.a.createElement("div",{className:"justify-content-center"},n.a.createElement("div",{className:"row"},n.a.createElement(g,{name:e.pokedex[0].name,img:e.pokedex[0].img,pokeClick:e.pokeClick}),n.a.createElement(g,{name:e.pokedex[1].name,img:e.pokedex[1].img,pokeClick:e.pokeClick}),n.a.createElement(g,{name:e.pokedex[2].name,img:e.pokedex[2].img,pokeClick:e.pokeClick}),n.a.createElement(g,{name:e.pokedex[3].name,img:e.pokedex[3].img,pokeClick:e.pokeClick})),n.a.createElement("div",{className:"row"},n.a.createElement(g,{name:e.pokedex[4].name,img:e.pokedex[4].img,pokeClick:e.pokeClick}),n.a.createElement(g,{name:e.pokedex[5].name,img:e.pokedex[5].img,pokeClick:e.pokeClick}),n.a.createElement(g,{name:e.pokedex[6].name,img:e.pokedex[6].img,pokeClick:e.pokeClick}),n.a.createElement(g,{name:e.pokedex[7].name,img:e.pokedex[7].img,pokeClick:e.pokeClick})),n.a.createElement("div",{className:"row"},n.a.createElement(g,{name:e.pokedex[8].name,img:e.pokedex[8].img,pokeClick:e.pokeClick}),n.a.createElement(g,{name:e.pokedex[9].name,img:e.pokedex[9].img,pokeClick:e.pokeClick}),n.a.createElement(g,{name:e.pokedex[10].name,img:e.pokedex[10].img,pokeClick:e.pokeClick}),n.a.createElement(g,{name:e.pokedex[11].name,img:e.pokedex[11].img,pokeClick:e.pokeClick})))},x=a(1);var h=function(){return n.a.createElement("div",{className:"row fluid mt-4",style:{backgroundColor:"red",fontFamily:"'Luckiest Guy', cursive"}},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",null,"Pok\xe9Click!")))},f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),m=0;m<o;m++)n[m]=arguments[m];return(a=Object(i.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(n)))).state={score:0,topScore:0,guessedPokemon:[],pokedex:x},a.pokeClick=function(e){if(a.state.guessedPokemon.includes(e.target.alt))a.setState({score:0,guessedPokemon:[]});else{a.state.guessedPokemon.push(e.target.alt);var t=a.state.score+1;t>a.state.topScore?a.setState({score:t,topScore:t}):a.setState({score:t})}},a.shuffle=function(){for(var e=x.length-1;e>0;e--){var t=Math.floor(Math.random()*e),a=x[e];x[e]=x[t],x[t]=a}},a}return Object(k.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.shuffle(),n.a.createElement("div",null,n.a.createElement("div",{className:"container-fluid"},n.a.createElement(p,{score:this.state.score,topScore:this.state.topScore}),n.a.createElement(d,null),n.a.createElement(u,{pokeClick:this.pokeClick,pokedex:this.state.pokedex}),n.a.createElement(h,null)))}}]),t}(n.a.Component);a(15);var E=function(){return n.a.createElement(f,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.30696b14.chunk.js.map