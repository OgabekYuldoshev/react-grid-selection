import { ReactGridSelection } from "react-grid-selection";

const App = () => {
  return (
    <div>
      <h1>Ui Package</h1>
      <ReactGridSelection
        hasFooter
        grid={[10, 10]}
        onSelected={(value) => console.log(value)}
      />
    </div>
  );
};

export default App;
