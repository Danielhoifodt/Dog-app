import {useState} from "react"
import Header from "./components/Header"
import Windows from "./components/Windows"
import "./App.css"
import windowsdata from "./windowsdata.json"


function App() {

  const [searchTerm, setSearchTerm] = useState("")

  const [windows, setWindow] = useState(windowsdata)

  const toggleFlipped = (id) =>{
      setWindow(windows.map(item => item.id === id ? {...item, flipped: !item.flipped} : item))
  }

  return (
    <div className="container-fluid">
      <Header search={setSearchTerm}/>
      <Windows toggle={toggleFlipped} 
      windows={
      windows.filter(item => {
      if(searchTerm === "")
      {
        return item
      }
      else if(item.breed.toLowerCase().includes(searchTerm.toLowerCase()))
      {
        return item
      }
      })
      } 
      />
    </div>
  );
}
export default App;
