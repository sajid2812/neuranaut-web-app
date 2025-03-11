import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export function Signin() {
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border min-w-48">
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <div className="flex justify-center pt-4">
          <Button variant="primary" text="Signin" fullWidth={true} />
        </div>
      </div>
    </div>
  );
}
