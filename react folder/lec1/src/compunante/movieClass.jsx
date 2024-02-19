import { Component } from "react";

class MovieClass extends Component{
    
    constructor(){
        super();
        this.state={Movie:"intell"}
    }
    render(){
        return <div>Movie : {this.state.Movie}</div>
    }
}
export default MovieClass;