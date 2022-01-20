import logo from './logo.svg';
import './App.css';

const axios = require('axios')

let url = 'https://10snmasbq4.execute-api.us-east-1.amazonaws.com/test'
let myapi = 'https://3pordybj18.execute-api.us-east-1.amazonaws.com/Dev/hello/'

axios.post(myapi, {
  test: 'this is a test for cors'
}).then(res=>{
  console.log(JSON.stringify(res, null, 2));
}).catch(error=>{
  console.error(error)
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
