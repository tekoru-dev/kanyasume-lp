"use client";

import { useState, type FormEvent } from "react";
import { submitWaitlistEmail } from "@/lib/web3forms";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Variant = "hero" | "panel";
type Status = "idle" | "submitting" | "error" | "done";

export default function WaitlistForm({ variant }: { variant: Variant }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const invalid = status === "error" && !EMAIL_RE.test(email.trim());

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      await submitWaitlistEmail(email.trim(), variant);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const submitting = status === "submitting";
  const showError = status === "error";
  const msg = invalid
    ? "正しいメールアドレスを入力してください"
    : showError
      ? "送信に失敗しました。時間をおいて再度お試しください。"
      : "スパムは送りません。公開時の通知のみお届けします。";
  const msgColor = showError ? "oklch(0.55 0.15 25)" : "oklch(0.55 0.02 235)";
  const border = showError ? "oklch(0.65 0.14 25)" : "oklch(0.9 0.015 220)";

  if (variant === "hero") {
    if (status === "done") {
      return (
        <div
          style={{
            animation: "pop .4s ease",
            display: "flex",
            gap: 14,
            alignItems: "flex-start",
            maxWidth: 480,
            background: "oklch(0.96 0.035 165)",
            border: "1px solid oklch(0.87 0.05 165)",
            borderRadius: 16,
            padding: "18px 20px",
          }}
        >
          <div
            style={{
              flex: "none",
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "oklch(0.58 0.12 165)",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              fontWeight: 900,
              fontSize: 14,
            }}
          >
            ✓
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: 4 }}>登録ありがとうございます</div>
            <div style={{ fontSize: 14, lineHeight: 1.7, color: "oklch(0.4 0.03 200)" }}>
              {email} 宛に、公開時にお知らせをお送りします。
            </div>
          </div>
        </div>
      );
    }

    return (
      <form onSubmit={onSubmit} noValidate style={{ maxWidth: 480 }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            background: "#fff",
            border: `1px solid ${border}`,
            borderRadius: 16,
            padding: 6,
            boxShadow: "0 8px 30px -12px oklch(0.4 0.06 230 / 0.25)",
          }}
        >
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-label="メールアドレス"
            value={email}
            disabled={submitting}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus("idle");
            }}
            style={{
              flex: "1 1 200px",
              minWidth: 0,
              border: 0,
              outline: 0,
              background: "transparent",
              font: '500 16px var(--font-zen-kaku), sans-serif',
              padding: "14px 14px",
              color: "inherit",
            }}
          />
          <button
            type="submit"
            disabled={submitting}
            style={{
              flex: "1 0 auto",
              border: 0,
              cursor: submitting ? "default" : "pointer",
              opacity: submitting ? 0.7 : 1,
              background: "oklch(0.42 0.07 235)",
              color: "#fff",
              font: '700 15px var(--font-zen-kaku), sans-serif',
              padding: "14px 22px",
              borderRadius: 11,
            }}
          >
            {submitting ? "送信中…" : "公開時に通知を受け取る"}
          </button>
        </div>
        <div style={{ minHeight: 22, marginTop: 10, fontSize: 12.5, color: msgColor }}>{msg}</div>
      </form>
    );
  }

  // panel variant
  if (status === "done") {
    return (
      <div
        style={{
          animation: "pop .4s ease",
          background: "#fff",
          borderRadius: 20,
          padding: 28,
          textAlign: "center",
          boxShadow: "0 20px 40px -24px oklch(0.4 0.06 200 / 0.4)",
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            margin: "0 auto 14px",
            borderRadius: "50%",
            background: "oklch(0.58 0.12 165)",
            color: "#fff",
            display: "grid",
            placeItems: "center",
            fontWeight: 900,
            fontSize: 22,
          }}
        >
          ✓
        </div>
        <div style={{ fontWeight: 900, fontSize: 19, marginBottom: 8 }}>登録が完了しました</div>
        <div style={{ fontSize: 14, lineHeight: 1.8, color: "oklch(0.45 0.03 210)" }}>
          {email} 宛に、公開時にお知らせします。
          <br />
          もうしばらくお待ちください。
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <label style={{ fontSize: 13, fontWeight: 700 }}>メールアドレス</label>
      <input
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="you@example.com"
        value={email}
        disabled={submitting}
        onChange={(e) => {
          setEmail(e.target.value);
          setStatus("idle");
        }}
        style={{
          width: "100%",
          border: `1px solid ${border}`,
          borderRadius: 14,
          background: "#fff",
          font: '500 16px var(--font-zen-kaku), sans-serif',
          padding: "16px 18px",
          outline: 0,
          color: "inherit",
        }}
      />
      <button
        type="submit"
        disabled={submitting}
        style={{
          width: "100%",
          border: 0,
          cursor: submitting ? "default" : "pointer",
          opacity: submitting ? 0.7 : 1,
          background: "oklch(0.42 0.07 235)",
          color: "#fff",
          font: '700 16px var(--font-zen-kaku), sans-serif',
          padding: 17,
          borderRadius: 14,
        }}
      >
        {submitting ? "送信中…" : "ウェイティングリストに登録"}
      </button>
      <div style={{ minHeight: 20, fontSize: 12.5, color: msgColor }}>{msg}</div>
    </form>
  );
}
