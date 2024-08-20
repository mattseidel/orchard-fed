import { Container } from "./components/features/Container";
import { Hero } from "./components/hero/Hero";


const App = () => {
  return (
    <main className="bg-black min-h-screen px-4 py-2 xl:px-32 xl:py-44 md:px-20 md:py-10">
      <Hero />
      <Container />
      
    </main>
  );
};

export default App;
