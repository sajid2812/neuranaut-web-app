import "./App.css";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <div className="p-4">
      <div className="flex justify-end gap-4">

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
      </div>
      <div className="flex gap-4">
        <Card
          type="twitter"
          link="https://x.com/GoogleIndia/status/1898628906179305805"
          title="First tweet"
        ></Card>
        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=Y5HIqjf3rek"
          title="First video"
        ></Card>
      </div>
    </div>
  );
}

export default App;
