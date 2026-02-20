import './App.css'
import Badge from './Components/Badge'

function App() {

  return (
    <div className='card'>
        <Badge label="Parvaneh" value={"Python"} score={98}></Badge>
        <Badge label="Masoud" value={"JavaScript"} score={99}></Badge>
        <Badge label="Miranda" value={"Java"} score={95}></Badge>
        <Badge label="Elmira" value={"Kotlin"} score={93}></Badge>
        <Badge label="Ali" value={"Final"} score={96}></Badge>
        <Badge label="Fatemeh" value={"Mathematic"} score={96}></Badge>
    </div>
  )
}

export default App
