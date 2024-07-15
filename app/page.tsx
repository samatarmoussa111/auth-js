import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-5 bg-blue-300/10 space-y-5">
      <h1 className="text-4xl font-semibold ">Authentication with Auth.js</h1>
      <Button>Login</Button>
    </div>
  );
}
