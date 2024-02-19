import React, { useState } from 'react';
import Movie from './movie';
import {v4 as uuid} from "uuid";

const Movies = () => {
    const [moviearr]=useState([
        {id:uuid(),name:"Forrest Gump",year:1994},
        {id:uuid(),name:"Inception",year:2010},
        {id:uuid(),name:"The Shawshank Redemption",year:1994},
        {id:uuid(),name:"The Dark Knight",year: 2008},
    ])
    console.log(moviearr)

    return (
        <div>
       {moviearr.map((elem)=><Movie key={uuid()}id={elem.id}  name={elem.name} year={elem.year}></Movie>)}
       </div>
    );
}

export default Movies;