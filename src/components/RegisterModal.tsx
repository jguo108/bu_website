"use client";

import { MaterialIcon } from "./MaterialIcon";

export function RegisterModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="register-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-inverse-surface/60"
        onClick={onClose}
        aria-label="Close"
      />
      <div className="relative w-full max-w-lg bg-card border border-border p-xl md:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-secondary hover:text-on-surface"
          aria-label="Close"
        >
          <MaterialIcon name="close" />
        </button>
        <h2 id="register-title" className="text-display-md text-on-surface mb-md">
          Join BoundaryUnknown
        </h2>
        <p className="text-body-md text-secondary mb-lg">
          Feeling interested? Scan the codes below to chat with us! Our team will get back to
          you with all the information!
        </p>
        <div className="grid grid-cols-2 gap-md mt-lg">
          <div className="flex flex-col items-center p-md bg-background border border-border text-center">
            <div className="w-full aspect-square max-w-[160px] bg-white p-sm border border-border-muted mb-sm flex items-center justify-center">
              <img
                src="/images/wechat_service.png"
                alt="WeChat Customer Service"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col items-center p-md bg-background border border-border text-center">
            <div className="w-full aspect-square max-w-[160px] bg-white p-sm border border-border-muted mb-sm flex items-center justify-center">
              <img
                src="/images/wechat_boundary.png"
                alt="WeChat Official Account"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
