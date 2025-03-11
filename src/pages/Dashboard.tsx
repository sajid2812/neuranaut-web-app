import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreateContentModal } from "../components/ui/createContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/ui/Sidebar";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex justify-end gap-4">
          <Button
            variant={"primary"}
            size={"md"}
            startIcon={<PlusIcon size={"md"} />}
            text={"Add Content"}
            onClick={() => {
              setModalOpen(true);
            }}
          ></Button>
          <Button
            variant={"secondary"}
            size={"md"}
            startIcon={<ShareIcon size={"md"} />}
            text={"Share"}
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
    </div>
  );
}
