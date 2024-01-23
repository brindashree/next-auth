"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({ mode = "redirect", asChild }: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };
  if (mode === "modal") {
    return <p>"TODO: implement modal"</p>;
  }

  return (
    <Button size="lg" radius="sm" onClick={onClick}>
      Sign In
    </Button>
  );
};

export default LoginButton;
