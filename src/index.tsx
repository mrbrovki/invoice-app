import ReactDOM, { Root } from 'react-dom/client';

//  components
import App from './components/App';



const container = document.getElementById('root') as HTMLElement;
const root:Root = ReactDOM.createRoot(container);
root.render(<App />);