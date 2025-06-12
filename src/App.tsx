import { Button } from "@/components/ui/button";
import { MenubarDemo } from "./components/ui/MenubarDemo";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-10">
      <MenubarDemo />
      <Button>Click me</Button>
    </div>
  );
}

export default App;
