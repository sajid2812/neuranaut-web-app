import axios from "axios";
import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { BACKEND_URL } from "../config";

export function Signup() {
  const usernameRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);

  function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    axios.post(`${BACKEND_URL}`);
  }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border min-w-48">
        <Input ref={usernameRef} placeholder="Username" />
        <Input ref={passwordRef} placeholder="Password" />
        <div className="flex justify-center pt-4">
          <Button variant="primary" text="Signup" fullWidth={true} />
        </div>
      </div>
    </div>
  );
}
