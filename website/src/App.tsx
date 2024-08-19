import Head from "./components/Head";
import Installation from "./components/Installation";
import ShowCase from "./components/ShowCase";

const App = () => {
  return (
    <div className="flex flex-col max-w-screen-sm mx-auto bg-opacity-10 w-full">
      <Head />
      <ShowCase />
      <Installation />
    </div>
  );
};

export default App;
