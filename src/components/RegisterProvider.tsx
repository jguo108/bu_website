"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { RegisterModal } from "./RegisterModal";

type RegisterContextValue = {
  openRegister: () => void;
  closeRegister: () => void;
};

const RegisterContext = createContext<RegisterContextValue | null>(null);

export function RegisterProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openRegister = useCallback(() => setOpen(true), []);
  const closeRegister = useCallback(() => setOpen(false), []);

  return (
    <RegisterContext.Provider value={{ openRegister, closeRegister }}>
      {children}
      <RegisterModal open={open} onClose={closeRegister} />
    </RegisterContext.Provider>
  );
}

export function useRegister() {
  const ctx = useContext(RegisterContext);
  if (!ctx) {
    throw new Error("useRegister must be used within RegisterProvider");
  }
  return ctx;
}
