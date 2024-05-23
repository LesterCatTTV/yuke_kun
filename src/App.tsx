import { modCommands, viewCommands } from "@/data"
import { NavBar } from "@/components/index"

function App() {
  return (
    <div>
      <NavBar />
        <div className="spacer" />
      <div className="commmands">
        <h1>Viewer Commands</h1>
        <div className="spacer_namer" />
        {viewCommands.map((data) => (
          <div key={data.id}>
            <h1>{data.text}</h1>
            <p>{data.desc}</p>
          </div>
        ))}
        <div className="spacer_command" />
        <h1>Mod Commands</h1>
        <div className="spacer_namer" />
        {modCommands.map((data) => (
          <div key={data.id}>
            <h1>{data.text}</h1>
            <p>{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
