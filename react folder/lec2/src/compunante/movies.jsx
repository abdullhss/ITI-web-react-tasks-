import axios from "axios";
import { Component } from "react";

class Movies extends Component{
    constructor(){
        super();
        this.state={movies:null}
    }

    componentDidMount(){
        axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
        .then((res)=>this.setState({movies:res.data.results}))
    }

    render(){

        if(!this.state.movies) return <div>Loaaading......</div>
        return (
            <>
                {
                    this.state.movies.map((u)=>(
                        <div>
                        <h2>name : {u.title}</h2>
                        <h3>vote : {u.vote_average}</h3>
                        <h4>overview: {u.overview}</h4>
                        </div>
                    ))
                }
            </>
        )
    }
    
}
export default Movies;