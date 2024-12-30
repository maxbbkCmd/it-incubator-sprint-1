import "./App.css";
import { Header } from "./layout/header/Header";
import { Skills } from "./layout/section/skills/Skills";
import { Main } from "./layout/section/main/Main";
import { About } from "./layout/section/about/About";

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Skills />
      <About />
    </div>
  );
}

export default App;
