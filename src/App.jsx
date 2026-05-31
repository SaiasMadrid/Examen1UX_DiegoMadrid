import "./index.css";
import Navbar from "./components/organisms/Navbar";
import HeroBanner from "./components/organisms/HeroBanner";
import ContentRow from "./components/organisms/ContentRow";
import { categories } from "./data/mockData";

function App() {
  const category0 = categories[0];
  const category1 = categories[1];
  const category2 = categories[2];

  return (
    <div className="app">
      <Navbar />
      <HeroBanner />
      <div className="app__content">
        <ContentRow category={category0} />
        <ContentRow category={category1} />
        <ContentRow category={category2} />
      </div>
    </div>
  );
}

export default App;