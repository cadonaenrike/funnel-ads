import Button from "@/components/button";
import LoginComponent from "@/components/loginComponent";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-10  ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-52 w-56"
            src="/images/funnrlads _dark.png"
            width={220}
            height={199}
            alt="Your Company"
            priority
          />

          <LoginComponent />
        </div>
      </div>
    </>
  );
}
