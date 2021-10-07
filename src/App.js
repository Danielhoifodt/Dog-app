import {useState} from "react"
import Header from "./components/Header";
import Windows from "./components/Windows";
import "./App.css";

function App() {

  const [searchTerm, setSearchTerm] = useState("")

  const [windows, setWindow] = useState([
    {   id:1,
        image:"https://picsum.photos/200/300",
        text: "Tekst 1",
        flipped:false
    },
    {   id:2,
        image:"https://picsum.photos/200/300",
        text: "Tekst 2",
        flipped:false
    },
    {   id:3,
        image:"https://picsum.photos/200/300",
        text: "Tekst 3",
        flipped:false
    },
    {   id:4,
        image:"https://picsum.photos/200/300",
        text: "Tekst 4",
        flipped:false
    },
    {   id:5,
        image:"https://picsum.photos/200/300",
        text: "Tekst 5",
        flipped:false
    },
    {   id:6,
        image:"https://picsum.photos/200/300",
        text: "Tekst 6",
        flipped:false
    },
    {   id:7,
        image:"https://picsum.photos/200/300",
        text: "Tekst 7",
        flipped:false
    },
    {   id:8,
        image:"https://picsum.photos/200/300",
        text: "Tekst 8",
        flipped:false
    },
    {   id:9,
        image:"https://picsum.photos/200/300",
        text: "Tekst 9",
        flipped:false
    },
    {
        id:10,
        image:"https://picsum.photos/200/300",
        text: "Tekst 10",
        flipped:false
    }
    ,{  id:11,
        image:"https://picsum.photos/200/300",
        text: "Tekst 11",
        flipped:false
    },
    {   id:12,
        image:"https://picsum.photos/200/300",
        text: "Tekst 12",
        flipped:false
    }
    ,{
        id:13,
        image:"https://picsum.photos/200/300",
        text: "Tekst 13",
        flipped:false
    }
    ,{  id:14,
        image:"https://picsum.photos/200/300",
        text: "Tekst 14",
        flipped:false
    }
    ,{
        id:15,
        image:"https://picsum.photos/200/300",
        text: "Tekst 15",
        flipped:false
    }
    ,{
        id:16,
        image:"https://picsum.photos/200/300",
        text: "Tekst 16",
        flipped:false
    }
    ,{  id:17,
        image:"https://picsum.photos/200/300",
        text: "Tekst 17",
        flipped:false
    }
    ,{  id:18,
        image:"https://picsum.photos/200/300",
        text: "Tekst 18",
        flipped:false
    }
    ,{  id:19,
        image:"https://picsum.photos/200/300",
        text: "Tekst 19",
        flipped:false
    }
    ,{
        id:20,
        image:"https://picsum.photos/200/300",
        text: "Tekst 20",
        flipped:false
    }
    ,{
        id:21,
        image:"https://picsum.photos/200/300",
        text: "Tekst 21",
        flipped:false
    }
    ,{  id:22,
        image:"https://picsum.photos/200/300",
        text: "Tekst 22",
        flipped:false
    }
    ,{  id:23,
        image:"https://picsum.photos/200/300",
        text: "Tekst 23",
        flipped:false
    }
    ,{  id:24,
        image:"https://picsum.photos/200/300",
        text: "Tekst 24",
        flipped:false
    }
    ,{  id:25,
        image:"https://picsum.photos/200/300",
        text: "Tekst 25",
        flipped:false
    }
])

const toggleFlipped = (id) =>{
    setWindow(windows.map(item => item.id === id ? {...item, flipped: !item.flipped} : item))
}

  return (
    <div className="container-fluid">
      <Header search={setSearchTerm}/>
    <Windows toggle={toggleFlipped} windows={
      windows.filter(item => {
      if(searchTerm === "")
      {
        return item
      }
      else if(item.text.toLowerCase().includes(searchTerm.toLowerCase()))
      {
        return item
      }
    })
    } />
    </div>
  );
}

export default App;
