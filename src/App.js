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

        <Person></Person>
        <Person></Person>
        
      </header>
    </div>
  );
}

//Component Declare er time a first letter ta capital letter hobe for example: Person
function Person() {

  const personStyle = {
    border: '2px solid red',
    margin: '10px'
  }

  return (
    // <div style={{border: '2px solid red', margin: '10px'}}>
    <div style={personStyle}>
      <h1>Name: Md. Islam</h1>
      <h3>Hero of the Year</h3>
    </div>
  )
}

export default App;
