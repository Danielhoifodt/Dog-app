import Window from "./Window"

const Windows = ({windows, toggle}) =>{

    return(
        <div className="windowWrapper">
            {windows.map(item =>{
                return(
                    <Window 
                        key={item.id} 
                        breed={item.breed} 
                        photo={item.photo} 
                        flipped={item.flipped}
                        locked={item.locked} 
                        id={item.id} 
                        toggle={toggle} 
                        uiData={item.flipped === true? {border:"3px solid green"}:{border:"1px solid black"}} 
                    />)
                
            })}
        </div>
    )
}

export default Windows