import { useState } from "react"
const Slider = () => {
    const [index, setIndex] = useState(1)
    const numPhotos = 5
    const next = ()=>{
        if (index + 1 == numPhotos) return;
        setIndex(index+1)
    }
    const prev = ()=>{
        if (index - 1 == 0) return;
        setIndex(index-1)
    }
    return (
       <>
        <div>
            <img src={`${index}.jpg`} alt="photo" />
            {console.log(`${index}.jpg`)}
        </div>
        <button onClick={next}>next</button>
        <button onClick={prev}>prev</button>
       </>
    )

}
export default Slider 