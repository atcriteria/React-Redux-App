import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Key from './key';
import Content from './components/Content';
import logo2 from './giphy_logo.png';

function App() {

  axios
    .get(`https://api.giphy.com/v1/gifs/random?api_key=${Key}&tag=&rating=r`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err)
    });

  return (
    <div className="App">
      <h1>Random Gif</h1>
      <p>Click the button for a random gif!</p>
      <Content />
      <img src={logo2} alt="Powered By Giphy" width="100"/>
    </div>
  );
}

export default App;