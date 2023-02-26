import CurrencyConverter from "./components/CurrencyConverter";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Crypto Dashboard</h1>
      </header>
      <section className="app-wrapper">
        <CurrencyConverter />
      </section>
    </div>
  );
}

export default App;
