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
        <span className="text-code text-primary uppercase tracking-widest block mb-sm">
          Register / Apply
        </span>
        <h2 id="register-title" className="text-display-md text-on-surface mb-md">
          Join BoundaryUnknown
        </h2>
        <p className="text-body-md text-secondary mb-lg">
          Tell us about your interest in our programs. Our team will reach out
          with session dates, logistics, and next steps.
        </p>
        <div className="space-y-md">
          <div>
            <label className="text-label-md uppercase text-on-surface-variant block mb-xs">
              Email
            </label>
            <input
              type="email"
              placeholder="parent@email.com"
              className="w-full border border-border bg-background px-md py-sm text-body-md focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="text-label-md uppercase text-on-surface-variant block mb-xs">
              Program interest
            </label>
            <select className="w-full border border-border bg-background px-md py-sm text-body-md focus:outline-none focus:border-primary">
              <option>Innovathon Camp</option>
              <option>Incubator</option>
              <option>General inquiry</option>
            </select>
          </div>
          <button
            type="button"
            className="w-full bg-primary text-white py-3 font-semibold uppercase tracking-tight hover:bg-primary-hover transition-colors"
          >
            Submit inquiry
          </button>
        </div>
        <p className="text-body-sm text-secondary mt-md">
          Or contact us directly at{" "}
          <a
            href="mailto:hello@boundaryunknown.edu"
            className="text-primary hover:underline"
          >
            hello@boundaryunknown.edu
          </a>
        </p>
      </div>
    </div>
  );
}
