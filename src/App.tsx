// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { routes } from './routes';


function App() {
  const filterdRoutes = routes.filter((route) => route.isActive === true);
  return (
    <Router>
      <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'ui-monospace', overflowY: 'hidden'}}>
        <Header />
        
        <Routes>
          {filterdRoutes.map((route) => (<Route {...route}/>))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;