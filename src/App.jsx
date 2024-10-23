import Navbar from "./components/Navbar";
import Canon from "./components/Canon";
import Highlights from "./components/Highlights";

 function App  () {

  return (
      <main className= 'bg-black'>
       <Navbar/>
       <Canon/>
       <Highlights/>
       {/* <Model/> */}
      </main>
  )
}

export default App
