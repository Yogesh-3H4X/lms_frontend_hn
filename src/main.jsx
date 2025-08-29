//component import
import { Toaster } from 'react-hot-toast';
import App from './App.jsx'
//css imoprts
import './index.css'
//libarary import
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  
<BrowserRouter>
    <App/>
      <Toaster />
</BrowserRouter>
  
);
