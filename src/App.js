import {useState} from "react"
import Header from "./components/Header"
import Windows from "./components/Windows"
import "./App.css"
import windowsdata from "./windowsdata.json"


function App() {

  const [searchTerm, setSearchTerm] = useState("")

  const [windows, setWindow] = useState(windowsdata)

  const toggleFlipped = (id) =>{
    console.log(id)
      setWindow((windows) =>windows.map(item => item.id === id ? {...item, flipped: !item.flipped} : item))
      lockWindows(id)
      setTimeout(()=>flipBack(id), 3000)
  }
  const lockWindows = (id)=>{
    setWindow((windows)=>windows.map(item => item.id !== id ? {...item, locked: true}: item))
  }
  const flipBack =(id) =>{
    setWindow((windows)=>windows.map(item => item.id === id ? {...item, flipped: false}: item))
    openWindows()
  }
  const openWindows = (id)=>{
    setWindow(windows.map(item => item.id !== id ? {...item, locked: false}: item))
  }

  return (
    <div className="container">
      <Header search={setSearchTerm}/>
      <Windows 
      toggle={toggleFlipped} 
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
