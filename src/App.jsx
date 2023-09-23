import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]); // console.log(arr);
  const [saved, setSaved] = useState([]);
  useEffect(() => {
    fetch('https://skyjobs.vercel.app/api/jobs')
    .then(res => res.json())
    .then(data => setArr(data.jobsData))
  }, [])
  function jobSaving(data) {
    console.log(saved.includes(data));
    if (saved.includes(data)) {alert('already applied!'); document.getElementById(`${data.id}`).disabled = 'disabled'; return}
    const arr = [...saved, data];
    setSaved(arr);
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {saved.map(x => <p key={x.id}>applied for job no - {x.id}</p>)}
      <div>
        {
          arr.map(x => <p key={x.id}><button id={x.id} onClick={() => {jobSaving(x);}} type='button'>job no - {x.id}</button></p>)
        }
      </div>
    </>
  )
}

export default App
