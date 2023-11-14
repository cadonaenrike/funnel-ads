import { Poppins } from "next/font/google";
import Button from "@/components/button";
import Input from "./inputComponent";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

export default function RecoverPasswordComponent() {
  const [email, setEmail] = useState("");
  return (
    <div className="mt-10 flex flex-col items-center">
      <h1
        className={`text-center text-2xl font-semibold m-0 mt-8 ${poppins.className}`}
      >
        Recuperar Senha
      </h1>
      <p className="mb-3 text-center text-gray-500">
        Digite o email associado à sua conta e enviaremos um email com
        instruções para redefinir sua senha.
      </p>
      <form action="">
        <section>
          <label className="self-start font-medium" htmlFor="email">
            Email
          </label>
          <Input
            type="email"
            colorPlaceholder="text-sky-500"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <Button image={""}> Solicitar instruções</Button>
        <Button image={""} className={"mt-3"}>
          Voltar
        </Button>
      </form>
    </div>
  );
}
