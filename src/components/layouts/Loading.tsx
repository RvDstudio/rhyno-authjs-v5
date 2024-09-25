import { Loader2Icon } from "lucide-react";
import { Button } from "../ui/button";

export const Loading = () => {
  return (
    <li>
      <Button size="sm" variant="ghost">
        <Loader2Icon className="min-w-[8ch] animate-spin" />
      </Button>
    </li>
  );
};
