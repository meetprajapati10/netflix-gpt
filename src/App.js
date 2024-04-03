import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./Redux/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
