import CurrencyConverter from "./components/CurrencyConverter";
import NewsFeed from "./components/NewsFeed";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Crypto Dashboard</h1>
      </header>
      <section className="app-wrapper">
        <NewsFeed />
        <CurrencyConverter />
      </section>
    </div>
  );
}

export default App;
