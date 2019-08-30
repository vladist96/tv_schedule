import { Component, h } from 'preact';
import style from './style';

export class Hero extends Component {
	constructor(props){
	  super(props);
		this.state =  {
			exData: {
				heading: 'Hello World',
				desc: 'Example desc'
			}
		}
		this.exFunc = this.exFunc.bind(this)
	}
	
	exFunc(){
	}

	componentDidMount(){}

	render(props, state) {
		return (
			<section class="hero">
				<div class="container hero__container">
					<h1>{this.state.exData.heading}</h1>
					<p>{this.state.exData.desc}</p>
				</div>
				
			</section>
		);
	}
}