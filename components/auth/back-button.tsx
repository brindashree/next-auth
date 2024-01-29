"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
}

const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Button
      variant="light"
      className="font-normal w-full"
      size="sm"
      radius="sm"
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
