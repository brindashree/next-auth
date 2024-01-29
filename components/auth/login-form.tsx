import React from "react";
import { CardWrapper } from "./card-wrapper";

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <div>LoginForm</div>
    </CardWrapper>
  );
};

export default LoginForm;
