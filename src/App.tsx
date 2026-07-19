import Button from './components/atoms/Button';

const App = () => {
  return (
    <div className="app-container">
      <h1>E-commerce Landing Page</h1>
      <p>Baza proiectului a fost setată cu succes în TypeScript!</p>
      
      {/* Container pentru butoane care folosește clase CSS, nu inline styles */}
      <div className="button-group">
        <Button variant="primary">Buton Primary</Button>
        <Button variant="secondary">Buton Secondary</Button>
      </div>
    </div>
  );
};

export default App;