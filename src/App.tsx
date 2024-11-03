import "./App.css";
import MarioView from "./components/MarioView";
import PowerUpItems from "./components/PowerUpItems";
import MarioMachineContext from "./context/MarioMachineContext";

function App() {
  return (
    <>
      <section>
        <h2>Mario state</h2>
        <div className="mario-section">
          <MarioMachineContext.Provider>
            <MarioView />
            <PowerUpItems />
          </MarioMachineContext.Provider>
        </div>
      </section>
    </>
  );
}

export default App;
