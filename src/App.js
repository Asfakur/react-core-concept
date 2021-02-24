import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name : "Kuddus Ali",
    job : "Chemist"
  }
  
  var style = {
    color:'red',
    backgroundColor: 'yellow'
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done second <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="" style={style}>Heading in react name :{person.name + ", " + person.job} </h1>

        <h1 style={{backgroundColor:'blue', color:'yellow'}}>React calculation {(2+5) * 2}</h1>
        <p>
          My first React Paragraph
        </p>
        
      </header>
    </div>
  );
}

export default App;
