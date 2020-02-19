import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from './Team/Form'
import TeamMembers from './Team/Members'


function App() {
  const [teamMember, setTeamMember] = useState ([
    {
      id:1,
      name: "John Ruble",
      email: "jrockwv@gmail.com",
      role: "Team Member"
    }
  ])

  const addTeamMember = tmember => {
    const newTeamMember ={
      id: Date.now(),
      name: tmember.name,
      email: tmember.email,
      role: tmember.role
    }
    setTeamMember([...teamMember, newTeamMember])
  }
  return(
    <div className="App">
      <h1>Web 13</h1>
      <Forms addTeamMember={addTeamMember}/>
      <TeamMembers teamMember={teamMember}/>
    </div>
  )
}











// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
