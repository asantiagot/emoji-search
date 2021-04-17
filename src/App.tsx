import './App.css';
import { EmojiBox } from './components/EmojiBox/EmojiBox';
import emojis from '../src/emojis.json';

function App() {
  return (
    <div className="App">
      <EmojiBox emojis={emojis} />
    </div>
  );
}

export default App;
