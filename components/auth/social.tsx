import { Button } from "@nextui-org/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2 ">
      <Button
        size="lg"
        className="w-full"
        variant="bordered"
        onClick={() => {}}
        radius="sm"
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="bordered"
        onClick={() => {}}
        radius="sm"
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Social;
