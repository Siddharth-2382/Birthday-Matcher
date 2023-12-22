import Results from "./components/results";
import Heading from "./components/heading";
import InputForm from "./components/inputForm";

function App() {
  return (
    <div className="mx-24 mt-16 flex flex-col items-center">
      <Heading />
      <InputForm />
      <Results />
    </div>
  );
}

export default App;
