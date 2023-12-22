import Heading from "./components/heading";
import Main from "./components/main";

function App() {
  return (
    <div className="mx-8 my-8 md:mx-24 md:my-16 lg:mx-24 lg:my-16 flex flex-col items-center">
      <Heading />
      <Main />
    </div>
  );
}

export default App;
