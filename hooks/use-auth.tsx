import { auth } from "@/lib/db";
import { signIn } from "@/services/auth";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsuscribe();
    };
  }, []);

  const login = async () => {
    const res = await signIn();
    if (res.error) {
      console.log(res.error.message);
    }
  };

  return {
    login, 
    user
  };
};
