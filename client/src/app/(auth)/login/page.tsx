'use client';

import { getSelf, login } from "@/utils/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { errorCodes } from "@/utils/utils";
import GithubButton from "../(components)/github-button";

interface FormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [isPageLoading, setIsPageLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState<FormData>({ email: "", password: "" });
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const loginResponse = await login(email, password);

      if (loginResponse.token) {
        localStorage.setItem("token", loginResponse.token);
        return router.push("/app");
      }
    } catch (error: any) {
      const newErrorCode = error?.response?.data?.errorCode;
      if (newErrorCode) setErrorCode(newErrorCode);
    }
  }

  return (
    <div className="bg-[#1E1F22] h-[100vh] w-[100vw] flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-[#313338] w-[386px] mx-10 flex flex-col gap-3 p-5 rounded-lg shadow-lg shadow-black/20">
        <div>
          <h1 className="text-2xl font-bold">
            Bem vindo de volta!
          </h1>
          <p className="text-white/50 text-sm">
            Faca login para continuar
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-white/80 font-bold">
            EMAIL
          </label>
          <input
            required
            placeholder="Seu email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="text-white bg-[#1e1f22] rounded-sm w-full p-2"
            style={{
              outline: errorCode === errorCodes.userNotFound ? "#E76B6B solid 1px" : "none"
            }}
          />
          {errorCode === errorCodes.userNotFound && <p className="text-red-400">
            Usuario nao encontrado
          </p>}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-white/80 font-bold">
            SENHA
          </label>
          <input
            required
            placeholder="Sua senha"
            type="password"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="text-white bg-[#1e1f22] rounded-sm w-full p-2"
            style={{
              outline: errorCode === errorCodes.passwordNotMatch ? "#E76B6B solid 1px" : "none"
            }}
          />
          {errorCode === errorCodes.passwordNotMatch && <p className="text-red-400">
            Senha incorreta
          </p>}
        </div>
        <button
          type="submit"
          disabled={isPageLoading}
          className="bg-[#5865f2] hover:bg-[#4f5acb] text-sm w-full py-3 rounded-md transition-colors"
        >
          Login
        </button>
        <GithubButton />
        <Link href={"/register"} className="text-center font-semibold text-xs underline">
          Ainda nao tem uma conta?
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;
