import Types from "prop-types"

const Movie=(props)=>{

    const {id,name,year}=props;
    
    return <div style={{backgroundColor:"violet", color:"white",margin :"10px auto"}}>
        <div>id :{id}</div>
        <div>name: {name} </div>
        <div>age:{year}</div>
    </div>
}

Movie.propTypes={
    id:Types.string.isRequired,
    name:Types.string,
    year:Types.number.isRequired
}

export default Movie;