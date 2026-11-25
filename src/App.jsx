import Board from "./components/Board.jsx";

function App() {
  return (
    <main className="page">
      <section className="game-card">
        <header className="header">
          <span className="eyebrow">REACT • ESTADO • COMPONENTES</span>
          <h1>Jogo da Velha</h1>
          <p>Desafie alguém para uma partida de estratégia.</p>
        </header>

        <Board />

        <footer className="footer">
          <span><strong>X</strong> começa a partida</span>
          <span>3 em linha vence</span>
        </footer>
      </section>
    </main>
  );
}

export default App;
