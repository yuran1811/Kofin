import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

const App = () => (
  <div className="max-w-screen-lg text-base mx-auto px-8 bg-sky-300">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
