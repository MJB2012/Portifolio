import { About } from "./Components/About";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Skills } from "./Components/Skills";
import { Work } from "./Components/Work";

export function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  )
}
