import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'


import "semantic-ui-css/semantic.min.css"

class App extends Component{

	state={lat:null,errorMessage:''}

	componentDidMount(){
		window.navigator.geolocation.getCurrentPosition(
		(position)=>this.setState({lat:position.coords.latitude}),
		(err)=>this.setState({errorMessage:err.message})
		)
	}

	componentDidUpdate(){
		console.log('My component was just updated- it rendered')
	}
	

	//We have to define
	render(){
	if (this.state.errorMessage && !this.state.lat){
			return <div>Error Message : {this.state.errorMessage} </div>
		}
	if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat}/>
	}

		return <Spinner message='Please accept the location request'/>
	}
	
}

ReactDOM.render(
	<App/>,
	document.querySelector('#root')
	);