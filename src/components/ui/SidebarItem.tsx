import { ReactElement } from "react";

export function SidebarItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex text-gray-700">
      <div className="p-2">{icon}</div>
      <div className="p-2">{text}</div>
    </div>
  );
}
