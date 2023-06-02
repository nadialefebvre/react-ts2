import React from "react"
import ReactDOM from "react-dom/client"

import EventComponent from "./events/EventComponent"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const App = () => {
  return (
    <div>
      <EventComponent />
    </div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
