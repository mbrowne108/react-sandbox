import { useEffect, useState } from "react";
import GenerateList from "./GenerateList.js";

function App() {
  const [activities, setActivities] = useState([])
  const [counter, setCounter] = useState(1)
  
  function newActivityClick() {
    setCounter(() => counter + 1)
  }

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
      .then(r => r.json())
      .then(activity => setActivities([...activities, activity]))
  }, [counter])

  return (
    <div>
      <button onClick={newActivityClick}>Generate Activity</button>
      <GenerateList activities={activities}/>
    </div>
  )
}

export default App;