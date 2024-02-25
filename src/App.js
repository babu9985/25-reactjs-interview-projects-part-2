import './App.css';
import DigitalClock from './components/digital-clock/DigitalClock';
import PaginationTest from './components/pagination/PaginationTest';
import StopWatch from './components/stop-watch/StopWatch';

function App() {
  return (
    <div className="App">
     <h1 className="title">25 React JS Interview Projects : Part 2</h1>
     <PaginationTest></PaginationTest>
     <DigitalClock></DigitalClock>
     <StopWatch></StopWatch>
    </div>
  );
}

export default App;
