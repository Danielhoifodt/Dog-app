import Window from "./Window"

const Windows = ({windows, toggle}) =>{

    return(
        <div className="windowWrapper">
            {windows.map(item =>{
                return(<Window key={item.id} text={item.text} image={item.image} flipped={item.flipped} id={item.id} toggle={toggle} />)
                
            })}
        </div>
    )
}

export default Windows