import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import List from './components/List.js';
import Texttransform from './components/Texttransform.js';
import About from './components/About.js';
import Mode from './components/Mode.js';


function App() {
  
  

  return (
    <>
        <Mode/>
        <List title="Ahmad" about="abdullah"/>
        <Texttransform />
        <About/>
    </>
  );
}

export default App;