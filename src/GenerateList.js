import React from 'react'
import Activity from "./Activity.js";

function GenerateList({ activities }) {
  return (
    <div>
        {activities.map((a) => <Activity a={a} key={a.activity} />)}
    </div>
  )
}

export default GenerateList;