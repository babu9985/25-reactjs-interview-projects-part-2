import './App.css';
import TipCalculator from './components/Tip-Calculator/TipCalculator';
import CurrencyConverter from './components/currency-converter/CurrencyConverter';
import DigitalClock from './components/digital-clock/DigitalClock';
import DragAndDrop from './components/draganddrop/DragAndDrop';
import FilterProducts from './components/filter-products/FilterProducts';
import MusicPlayer from './components/musicplayer/MusicPlayer';
import PaginationTest from './components/pagination/PaginationTest';
import QuoteGenerator from './components/random-quote-generator/QuoteGenerator';
import ProgressBar from './components/step-progress-bar/ProgressBar';
import StopWatch from './components/stop-watch/StopWatch';
import TooltipTest from './components/tooltip/TooltipTest';

function App() {
  return (
    <div className="App">
      <h1 className="title">25 React JS Interview Projects : Part 2</h1>
      <PaginationTest></PaginationTest>
      <DigitalClock></DigitalClock>
      <StopWatch></StopWatch>
      <ProgressBar></ProgressBar>
      <QuoteGenerator></QuoteGenerator>
      <TooltipTest></TooltipTest>
      <CurrencyConverter></CurrencyConverter>
      <FilterProducts></FilterProducts>
      <TipCalculator></TipCalculator>
      <MusicPlayer></MusicPlayer>
      <DragAndDrop></DragAndDrop>
    </div>
  );
}

export default App;
