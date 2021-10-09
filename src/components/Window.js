

const Window = ({photo, breed, flipped, id, toggle, uiData}) => {

    console.log(photo)
    return(
        <div className="window" style={uiData}>
            {flipped? 
            <div className="inner" onClick={() =>toggle(id)}><p className="windowText">{breed}</p></div>: 
            <div className="inner" onClick={() =>toggle(id)}><img className="image" alt="image" src={photo} ></img></div>
            }
        </div>
    )
    
}

export default Window