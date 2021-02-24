import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman'];
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

        <Person name={nayoks[1]} food="Fuska" nayika="Bobita"></Person>
        <Person name="Jashim" nayika="Sabana"></Person>
        <Person name="Bappa Raj" nayika="Nipun"></Person>
        <Person name="Elias K" nayika="Dithi"></Person>
        
      </header>
    </div>
  );
}

//Component Declare er time a first letter ta capital letter hobe for example: Person
function Person(props) {

  const personStyle = {
    border: '2px solid red',
    margin: '10px'
  }
  console.log(props);
  return (
    // <div style={{border: '2px solid red', margin: '10px'}}>
    <div style={personStyle}>
      <h1>Nayok: {props.name}</h1>
      <h3>Nayika: {props.nayika}</h3>
    </div>
  )
}

export default App;
