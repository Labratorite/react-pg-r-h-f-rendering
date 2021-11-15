import "./style.scss";
import FormContainer from "./components/FormContainer";
import logger from "./logger";

export default function App() {
  logger.info("App", "RE-RENDER");
  return (
    <div className="App">
      <FormContainer />
    </div>
  );
}
