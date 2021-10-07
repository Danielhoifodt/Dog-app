const Window = ({image, text, flipped, id, toggle}) => {

    let bgImage = {
        backgroundImage:"url(" + { image } + ")",
        width:"100px"
    }

    return(
        <div className="window">
            {flipped? <p  onClick={() =>toggle(id)} className="windowText">{text}</p>: <img  onClick={() =>toggle(id)} className="image" alt="image" src={image}  style={bgImage}></img>}
        </div>
    )
    
}

export default Window