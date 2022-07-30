import { useState } from "react";

function Activity({ a }) {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <ul>
            <li>{a.activity}</li>
            <button onClick={() => setShowDetails(!showDetails)}>{showDetails ? "Collapse" : "Expand"}</button>
            {showDetails ?
                <div>
                    <li>type: {a.type}</li>
                    <li>participants: {a.participants}</li>
                    <li>price: {a.price}</li>
                    <li>link: {a.link}</li>
                    <li>key: {a.key}</li>
                    <li>accessibility: {a.accessibility}</li>
                </div> : null
            }
        </ul>
    )
}

export default Activity