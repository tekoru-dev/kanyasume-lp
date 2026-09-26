const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function submitWaitlistEmail(email: string, source: string) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    throw new Error("Web3Forms access key is not configured");
  }

  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: "Kanyasume ウェイトリスト登録",
      from_name: "Kanyasume LP",
      email,
      message: `ウェイトリスト登録: ${email}（${source}）`,
      source,
      botcheck: false,
    }),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.message || "送信に失敗しました");
  }
  return data;
}
