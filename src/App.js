import './stylesheet/styles.css';
import React from 'react';
import data from './model/data';

function App() {
  const [button1, setButton1] = React.useState(true)
  const [button2, setButton2] = React.useState(true)
  const [button3, setButton3] = React.useState(true)
  const [button4, setButton4] = React.useState(true)
  const [valor1, setvalor1] = React.useState("")
  const changebutton = () => setButton1(button1 => !button1);
  const changebutton2 = () => setButton2(button1 => !button1);
  const changebutton3 = () => setButton3(button1 => !button1);
  const changebutton4 = () => setButton4(button1 => !button1);
  const names = ["Benjamin", "mauricio", "Paco", "Arturo"];
  const listItems = names.map((name) => (
    <div>
      <li>
        <label style={{ marginRight: "5%" }}>
          Name:
          <input style={{ marginLeft: '5%' }} type="text" name="name" value={name} />
        </label>
      </li>
    </div>
  ));
  const lastnames = ["picapiedra", "Turcos", "Paquirri", "Turo"];
  const listItems2 = lastnames.map((lastname) => (
    <div>
      <li>
        <label style={{ marginRight: "5%" }}>
          Name:
          <input style={{ marginLeft: '5%' }} type="text" name="name" value={lastname} />
        </label>
      </li>
    </div>
  ));
  const titles = ["25", "26", "38", "40"];
  const listItems3 = titles.map((title) => (
    <div>
      <li>
        <label style={{ marginRight: "5%" }}>
          Name:
          <input style={{ marginLeft: '5%' }} type="text" name="name" value={title} />
        </label>
      </li>
    </div>
  ));
  const ages = ["01/12/95", "14/11/95", "06/06/96", "11/10/81"];
  const listItem4 = ages.map((age) => (
    <div>
      <li>
        <label style={{ marginRight: "5%" }}>
          Name:
          <input style={{ marginLeft: '5%' }} type="text" name="name" value={age} />
        </label>
      </li>
    </div>
  ));
  return (
    <div className="App">
     <div style={{ flexDirection: "column",justifyContent: 'center', alignItems:'center' }}>
        <div>
          {button1 ? (
            <div>
              <button style={{ marginRight: "5%" }} onClick={changebutton}>
                <text>Desactivar Nombre</text>
              </button>
              <ul>{listItems}</ul>
            </div>
          ) : (
            <button onClick={changebutton}>
              <text>Desactivar Nombre</text>
            </button>
          )}
          {button2 ? (
            <div>
              <button style={{ marginRight: "5%" }} onClick={changebutton2}>
                <text>Desactivar Apellido</text>
              </button>
              <ul>{listItems2}</ul>
            </div>
          ) : (
            <button onClick={changebutton2}>
              <text>Desactivar Apellido</text>
            </button>
          )}
          {button3 ? (
            <div>
              <button style={{ marginRight: "5%" }} onClick={changebutton3}>
                <text>Desactivar Age</text>
              </button>
              <ul>{listItems3}</ul>
            </div>
          ) : (
            <button onClick={changebutton3}>
              <text>Desactivar Age</text>
            </button>
          )}
          {button4 ? (
            <div>
              <button style={{ marginRight: "5%" }} onClick={changebutton4}>
                <text>Desactivar Date</text>
              </button>
              <ul>{listItem4}</ul>
            </div>
          ) : (
            <button onClick={changebutton4}>
              <text>Desactivar Date</text>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
