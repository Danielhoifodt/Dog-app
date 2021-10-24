

const Header = ({search}) =>{

    const submitSearch =(event)=>{
      event.preventDefault()
      let button = document.getElementById("search").value
      search(button)
    }

    return (  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <div className="navbar-brand">Dog Card App</div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form className="d-flex">
        <input className="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" onClick={submitSearch}>Search</button>
      </form>
    </div>
    </div>
    </nav>
        
    );
}

export default Header  