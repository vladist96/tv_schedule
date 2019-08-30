import {Component, h} from 'preact';
import {style} from './style/index.scss'
import { Header } from './components/header';
import { Hero } from './components/hero';

class App extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div id="app" class="wrap">
        <Header />
        <Hero />
      </div>
    );
  }
}

export default App;