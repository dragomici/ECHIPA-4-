import Button from './components/atoms/Button/Button';
import Input from './components/atoms/Input/Input';

const App = () => {
  return (
    <div className="app-container">
      <h1>E-commerce Landing Page</h1>
      <p>Baza proiectului a fost setată cu succes în TypeScript!</p>
      
      <div className="button-group">
        <Button variant="primary">Buton Primary</Button>
        <Button variant="secondary">Buton Secondary</Button>
      </div>

      <div className="button-group" style={{ marginTop: '20px' }}>
        <Input type="text" placeholder="Caută un produs..." />
        <Input type="email" placeholder="E-mail greșit" hasError={true} />
      </div>
    </div>
  );
};

export default App;