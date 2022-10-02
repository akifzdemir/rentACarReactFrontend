import './App.css';
import Dashboard from './components/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import { BrandsProvider } from './context/BrandsContex';
import { ColorProvider } from './context/ColorContex';
import { CarProvider } from './context/CarContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div>
      <AuthProvider>  
      <CarProvider>
        <ColorProvider>
        <BrandsProvider>
        <Dashboard/>
        </BrandsProvider>
      </ColorProvider>
      </CarProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
