import React, { Component } from 'react';
import Item from 'Item';

import List from 'List';

const artists = [
	{name:"PNL"},
	{name:"Le D.U.C"},
	{name:"MZ"},
	{name:"Gradur"},
	{name:"Bob marley"},
	{name:"Kavinsky"},
	{name:"Odezenne"},
	{name:"Bob dylan"},
	{name:"Kendgi girac le tang "},

]
const kinds = {
	rap: {name:"Rap"},
	rock: {name:"Rock"},
	electro: {name:"Electro"},

}

let kindArray = Object.keys(kinds)
//console.log(kingArray)

export default class App extends Component {
	getItem(genre,index) {
		return (<Item key={index} name={genre.name}/>) 
	}
  render() {
    return (
    	<div>

    	<List items={artists}/>
    
    	{
    		kindArray.map((key, index) =>{
    			console.log(kinds[key])
    			return this.getItem(kinds[key], index)
    		})
    	}
    	</div>
    );
  }
}
