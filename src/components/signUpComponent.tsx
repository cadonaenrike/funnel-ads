import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Button from "@/components/button";
import Input from "./inputComponent";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

const PasswordNote: React.FC = () => (
  <div className="text-black bg-gray-100 p-4 text-sm mt-2 font-normal">
    <b>NOTA:</b> Sua senha deve conter pelo menos 1 letra maiúscula, 1 letra
    minúscula, 1 número, 1 símbolo e deve ter no mínimo 8 caracteres.
  </div>
);

export default function SignUpComponent() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaIstrue, setSenhaIstrue] = useState("");
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const validatePassword = () => {
    return (
      senha.length >= 8 &&
      /[a-z]/.test(senha) &&
      /[A-Z]/.test(senha) &&
      /\d/.test(senha) &&
      /\W/.test(senha)
    );
  };

  const handleSenhaFocus = () => {
    setIsPasswordFocused(true);
  };

  const handleSenhaBlur = () => {
    setIsPasswordFocused(false);
  };

  const mudançaSenha = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  };

  const mudançaSenhaIstrue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenhaIstrue(e.target.value);
  };

  const signupButton = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha === senhaIstrue && validatePassword()) {
      console.log("clicou no criar");
    } else {
      alert("senhas incompatíveis ou não atendem aos requisitos");
    }
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      <h1
        className={`text-center text-2xl font-semibold m-0 mt-8 ${poppins.className}`}
      >
        Crie uma conta
      </h1>
      <a
        className="text-base font-medium m-0 mt-5 text-black hover:text-green-500"
        href={"/Login"}
      >
        Já possui uma conta?{" "}
        <span className="text-green-500 hover:text-black">Faça o Login</span>
      </a>
      <form onSubmit={signupButton}>
        <span className="self-start font-medium">Nome</span>
        <Input
          colorPlaceholder="text-gray-400"
          placeholder="Primeiro nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <span className="self-start font-medium">Sobrenome</span>
        <Input
          colorPlaceholder="text-gray-400"
          placeholder="Sobrenome completo"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
        />
        <span className="self-start font-medium">Email</span>
        <Input
          colorPlaceholder="text-gray-400"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="self-start font-medium">Senha</span>
        {isPasswordFocused && <PasswordNote />}
        <Input
          type="password"
          colorPlaceholder={
            isPasswordFocused
              ? validatePassword()
                ? "text-green-500"
                : "text-red-500"
              : "text-gray-400"
          }
          placeholder="*********"
          value={senha}
          onChange={mudançaSenha}
          onFocus={handleSenhaFocus}
          onBlur={handleSenhaBlur}
        />

        <span className="self-start font-medium">Confimar Senha</span>
        <Input
          type="password"
          colorPlaceholder="text-gray-400"
          placeholder="*********"
          value={senhaIstrue}
          onChange={mudançaSenhaIstrue}
        />
        <div className="self-start mb-4">
          <label>
            <input type="checkbox" className="m-3" />
            Li e aceito os <span className="text-green-500">Termos</span> e a{" "}
            <span className="self-start text-green-500">Politica</span>
          </label>
        </div>
        <Button image="/icons/icon-signup-button.svg">Criar Conta</Button>
      </form>
    </div>
  );
}
