"use client";
import { sign } from "crypto";
import { signIn, getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const LoginButton = () => {
  const { data: session } = useSession();
  const router = useRouter();
  
    useEffect(() => {
      if (session) {
        router.push("/dashboard");
      }
    }, [session]);

  return (
    <button 
        onClick={() =>  signIn()} 
        className="bg-black-900 text-white font-bold rounded-lg px-12 py-4 hover:bg-black-700 transition duration-200"
        >
      Entrar
    </button>
  );
};
