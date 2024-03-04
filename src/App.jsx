import './App.css';
import Board from "./components/Board"
const App = () => {

  return (
    <div className="App">
        <div className='container'>
            <h1>Best Trails in Mankato</h1>
            <h2>Looking for the best hiking trails in Mankato? Whether you're getting ready to hike, bike, trail run, or explore other outdoor activities, we have 10 scenic trails in our beautiful Mankato area for you. </h2>
            <Board/>
        </div>

    </div>
  )
}
export default App