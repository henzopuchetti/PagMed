import img from "./assets/Vector.png"
import img2 from "./assets/🦆 icon _whatsapp_.png"
import './App.css'

function App() {
  return (
    <body>
      <div className="obj1">
        <img className="img1" src={img} />  {/*Aqui vai ser a img do médico */}
        <h1>Doutor(a)</h1>
      </div>
      <div className="obj2">
        <h2>Biografia:</h2>
        <p>Aqui o profissional colocará uma descrição sobre seus estudos, carreira e experiencias</p>
        <div className="icon">
        <img src={img2}/>
        </div>
      </div>
    </body>
  )
}

export default App
