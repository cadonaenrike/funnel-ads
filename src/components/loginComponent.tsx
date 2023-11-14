import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Button from "@/components/button";
import Input from "./inputComponent";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

export default function LoginComponent() {
  const [valorInput, setValorInput] = useState("");
  const lidarComMudancaInput = (e: any) => {
    setValorInput(e.target.value);
    console.log(valorInput);
  };
  const loginButton = () => {
    console.log("clicou no logar");
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      <h1
        className={`text-center text-2xl font-semibold m-0 mt-8 ${poppins.className}`}
      >
        Bem-vindo de volta
      </h1>
      <a
        className=" text-base font-medium m-0 mt-5 text-black hover:text-sky-500"
        href={"/SignUp"}
      >
        É Novo Aqui?{" "}
        <span className=" text-sky-500 hover:text-black">Crie uma Conta</span>
      </a>
      <Input
        placeholder="Seu email"
        colorPlaceholder="text-sky-500"
        value={valorInput}
        onChange={lidarComMudancaInput}
      />
      <Button
        image="/icons/icon-login-button.svg"
        onClickFunction={loginButton}
      >
        Login
      </Button>
      <a
        className=" text-base font-medium m-0 mt-5 text-black hover:text-sky-500"
        href={"/RecoverPassword"}
      >
        <span
          className={`text-black text-sm mt-5 hover:text-sky-500 ${poppins.className}`}
        >
          Esqueceu sua senha?
        </span>
      </a>
    </div>
  );
}
