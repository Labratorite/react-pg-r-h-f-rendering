import "./style.scss";
import BaseContainer from "./components/BaseContainer";
import logger from "./logger";

export default function App() {
  logger.info("App", "RE-RENDER");
  return (
    <div className="App">
      <BaseContainer />
    </div>
  );
}
