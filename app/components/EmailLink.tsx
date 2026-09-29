"use client";

import { useEffect, useState } from "react";
import { CheckIcon } from "../shared/icons/CheckIcon";
import { CopyIcon } from "../shared/icons/CopyIcon";

export type EmailLinkProps = {
  label: string;
  copyText?: string;
  copiedLabel?: string;
  resetDelayMs?: number;
  className?: string;
};

export default function EmailLink({
  label,
  copyText,
  copiedLabel = "Copié !",
  resetDelayMs = 2000,
  className = "",
}: EmailLinkProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setCopied(false);
    }, resetDelayMs);

    return () => window.clearTimeout(timeoutId);
  }, [copied, resetDelayMs]);

  const copyToClipboard = async () => {
    const valueToCopy = copyText ?? label;
    if (!valueToCopy) {
      return;
    }

    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(valueToCopy);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = valueToCopy;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  const handleCopy = async () => {
    try {
      await copyToClipboard();
      setCopied(true);
    } catch {
      // If copy fails, we simply avoid flipping to "Copié !"
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title="Cliquer pour copier l'adresse e-mail"
      aria-live="polite"
      className={`flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 hover:underline decoration-2 ${className}`}
    >
      <span className="font-medium text-neutral-800 text-xl md:text-2xl">
        {copied ? copiedLabel : label}
      </span>
      {copied ? (
        <CheckIcon className="h-6 w-6 text-neutral-800" />
      ) : (
        <CopyIcon className="h-6 w-6 text-neutral-800" />
      )}
    </button>
  );
}
