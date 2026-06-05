"use client";

import { useRegister } from "./RegisterProvider";

export function RegisterButton({
  className = "",
  children = "REGISTER",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { openRegister } = useRegister();
  return (
    <button type="button" onClick={openRegister} className={className}>
      {children}
    </button>
  );
}
