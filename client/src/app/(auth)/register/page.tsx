'use client';

import { getSelf, login, register } from "@/utils/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { errorCodes } from "@/utils/utils";
import GithubButton from "../(components)/github-button";

interface FormData {
  email: string;
  password: string;
  username: string;
}

const RegisterPage = () => {
  const [isPageLoading, setIsPageLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState<FormData>({ email: "", password: "", username: "" });
  const [errorCode, setErrorCode] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSelf = async () => {
      try {
        await getSelf();
        router.push("/app");
      } catch (error) {
        setIsPageLoading(false);
      }
    }

    fetchSelf();
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password, username } = formData;

    try {
      const newUser = await register(email, password, username);

      const loginResponse = await login(newUser.email, password);

      localStorage.setItem("token", loginResponse.token);
      router.push("/app");
    } catch (error: any) {
      const newErrorCode = error.response.data.errorCode;
      if (newErrorCode) setErrorCode(newErrorCode);
    }
  }

  return (
    <div className="bg-[#1E1F22] h-[100vh] w-[100vw] flex items-center justify-center">
      <form onSubmit={handleRegister} className="bg-[#313338] w-[386px] mx-10 flex flex-col gap-3 p-5 rounded-lg shadow-lg shadow-black/20">
        <div>
          <h1 className="text-2xl font-bold">
            Crie sua conta!
          </h1>
          <p className="text-white/50 text-sm">
            Registre-se para continuar
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-white/80 font-bold">
            NOME DE USUARIO
          </label>
          <input
            required
            placeholder="Como os outros vao te chamar?"
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="text-white bg-[#1e1f22] rounded-sm w-full p-2"
            style={{
              outline: errorCode === errorCodes.usernameAlreadyInUse ? "#E76B6B solid 1px" : "none"
            }}
            minLength={2}
            maxLength={20}
          />
          {errorCode === errorCodes.usernameAlreadyInUse && (
            <p className="text-red-400">
              Nome ja usado. Tente outro nome.
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-white/80 font-bold">
            EMAIL
          </label>
          <input
            required
            placeholder="Seu melhor email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="text-white bg-[#1e1f22] rounded-sm w-full p-2"
            style={{
              outline: errorCode === errorCodes.emailAlreadyInUse ? "#E76B6B solid 1px" : "none"
            }}
          />
          {errorCode === errorCodes.emailAlreadyInUse && (
            <p className="text-red-400">
              Email ja esta em uso. Tente outro email.
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-white/80 font-bold">
            SENHA
          </label>
          <input
            required
            placeholder="Utilize uma senha forte"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="text-white bg-[#1e1f22] rounded-sm w-full p-2"
            minLength={8}
            maxLength={200}
          />
        </div>
        <button
          type="submit"
          disabled={isPageLoading}
          className="bg-[#5865f2] hover:bg-[#4f5acb] text-sm w-full py-3 rounded-md transition-colors"
        >
          Registrar
        </button>
        <GithubButton />
        <Link
          href={"/login"}
          className="text-center font-semibold text-xs underline"
        >
          Ja tem uma conta?
        </Link>
      </form>
    </div>
  );
}

export default RegisterPage;
