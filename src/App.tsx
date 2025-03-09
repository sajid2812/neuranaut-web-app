import "./App.css";
import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <Button
        variant={"primary"}
        size={"md"}
        startIcon={<ShareIcon size={"md"} />}
        text={"Share"}
        onClick={() => {}}
      ></Button>
      <Button
        variant={"secondary"}
        size={"md"}
        startIcon={<PlusIcon size={"md"} />}
        text={"Add Content"}
        onClick={() => {}}
      ></Button>
    </>
  );
}

export default App;
