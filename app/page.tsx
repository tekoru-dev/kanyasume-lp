import WaitlistForm from "@/components/waitlist-form";

const mono = { fontFamily: "var(--font-ibm-plex-mono), monospace" };

type CalCell = { blank?: true; d?: number; future?: boolean; rest?: boolean; drink?: boolean };

function buildCalendar(): CalCell[] {
  const rest = [1, 2, 4, 7, 8, 9, 11, 14, 15, 16, 18, 21, 22, 23, 24, 25];
  const cal: CalCell[] = [{ blank: true }];
  for (let d = 1; d <= 30; d++) {
    const f = d > 26;
    cal.push({ d, future: f, rest: !f && rest.includes(d), drink: !f && !rest.includes(d) });
  }
  return cal;
}

function buildWeek() {
  const vals = [1600, 1200, 2100, 1850, 1400, 1950, 1450];
  const labels = ["土", "日", "月", "火", "水", "木", "金"];
  return vals.map((v, i) => ({ h: Math.round((v / 2200) * 100), l: labels[i] }));
}

const REST_COUNT = 16;
const cal = buildCalendar();
const week = buildWeek();
const log = [
  { t: "07:30", n: "起床後の水", ml: 300 },
  { t: "10:15", n: "お茶", ml: 350 },
  { t: "12:40", n: "ランチ", ml: 400 },
  { t: "15:20", n: "炭酸水", ml: 400 },
];

export default function Page() {
  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "oklch(0.985 0.006 210 / 0.86)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid oklch(0.92 0.01 220)",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "14px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: "50% 50% 50% 4px",
                transform: "rotate(-45deg)",
                background:
                  "linear-gradient(135deg,oklch(0.72 0.09 220),oklch(0.72 0.09 165))",
              }}
            />
            <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.02em" }}>
              休肝日 × 水分補給トラッカー
            </span>
            <span
              style={{
                ...mono,
                fontWeight: 500,
                fontSize: 10,
                color: "oklch(0.5 0.03 235)",
                border: "1px solid oklch(0.88 0.015 220)",
                padding: "2px 6px",
                borderRadius: 4,
              }}
            >
              仮称
            </span>
          </div>
          <a
            href="#waitlist"
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#fff",
              background: "oklch(0.42 0.07 235)",
              padding: "9px 16px",
              borderRadius: 999,
              whiteSpace: "nowrap",
            }}
          >
            先行登録
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "clamp(48px,8vw,96px) 24px clamp(56px,8vw,104px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 56,
          }}
        >
          <div style={{ flex: "1 1 420px", minWidth: 0 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                ...mono,
                fontWeight: 500,
                fontSize: 12,
                color: "oklch(0.45 0.08 165)",
                background: "oklch(0.95 0.03 165)",
                padding: "6px 12px",
                borderRadius: 999,
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "oklch(0.62 0.12 165)",
                }}
              />
              COMING SOON — iOS
            </div>
            <h1
              style={{
                margin: "0 0 24px",
                fontSize: "clamp(34px,5.4vw,58px)",
                lineHeight: 1.22,
                fontWeight: 900,
                letterSpacing: "-0.01em",
              }}
            >
              飲まない日と、
              <br />
              水を飲んだ量。
              <br />
              <span style={{ color: "oklch(0.5 0.1 230)" }}>分析は、あなたのAIで。</span>
            </h1>
            <p
              style={{
                margin: "0 0 36px",
                fontSize: "clamp(15px,1.6vw,17px)",
                lineHeight: 1.9,
                color: "oklch(0.42 0.025 235)",
                maxWidth: "30em",
              }}
            >
              休肝日と水分摂取を毎日ワンタップで記録。Apple Healthの心拍数・睡眠・活動量と自動で紐付け、ClaudeなどのAIにそのまま渡せる形に整えます。アプリは答えを押しつけません。問いを立てるのは、あなたです。
            </p>
            <WaitlistForm variant="hero" />
          </div>

          {/* phone mock */}
          <div style={{ flex: "0 1 340px", margin: "0 auto", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "-40px 0",
                background: "radial-gradient(closest-side,oklch(0.92 0.05 210),transparent)",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: 300,
                maxWidth: "100%",
                margin: "0 auto",
                background: "#fff",
                borderRadius: 44,
                padding: 14,
                boxShadow:
                  "0 0 0 10px oklch(0.24 0.02 235),0 40px 80px -30px oklch(0.3 0.06 235 / 0.5)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  ...mono,
                  fontWeight: 500,
                  fontSize: 11,
                  padding: "4px 14px 14px",
                  color: "oklch(0.35 0.02 235)",
                }}
              >
                <span>9:41</span>
                <span>●●●</span>
              </div>
              <div style={{ padding: "0 8px" }}>
                <div style={{ ...mono, fontWeight: 500, fontSize: 11, color: "oklch(0.55 0.03 235)" }}>
                  TODAY · 9/26 SAT
                </div>
                <div style={{ fontWeight: 900, fontSize: 22, margin: "4px 0 14px" }}>
                  今日は休肝日？
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 8,
                    marginBottom: 14,
                  }}
                >
                  <div
                    style={{
                      background: "oklch(0.95 0.035 165)",
                      border: "1.5px solid oklch(0.62 0.11 165)",
                      borderRadius: 14,
                      padding: 12,
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: 13,
                      color: "oklch(0.38 0.08 165)",
                    }}
                  >
                    飲んでない
                  </div>
                  <div
                    style={{
                      background: "oklch(0.97 0.006 220)",
                      borderRadius: 14,
                      padding: 12,
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: 13,
                      color: "oklch(0.55 0.02 235)",
                    }}
                  >
                    飲んだ
                  </div>
                </div>
                <div
                  style={{
                    background: "oklch(0.97 0.015 225)",
                    borderRadius: 18,
                    padding: 14,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontSize: 12, fontWeight: 700 }}>水分</span>
                    <span style={{ ...mono, fontWeight: 500, fontSize: 11, color: "oklch(0.5 0.03 235)" }}>
                      目安 2,000ml
                    </span>
                  </div>
                  <div style={{ ...mono, fontWeight: 500, fontSize: 30, margin: "6px 0 10px", color: "oklch(0.42 0.1 230)" }}>
                    1,450<span style={{ fontSize: 13 }}> ml</span>
                  </div>
                  <div
                    style={{
                      height: 8,
                      borderRadius: 99,
                      background: "oklch(0.9 0.02 225)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: "72%",
                        height: "100%",
                        background:
                          "linear-gradient(90deg,oklch(0.72 0.09 220),oklch(0.6 0.11 230))",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3,1fr)",
                      gap: 6,
                      marginTop: 12,
                    }}
                  >
                    {["+150", "+250", "+500"].map((v) => (
                      <div
                        key={v}
                        style={{
                          background: "#fff",
                          borderRadius: 10,
                          padding: "8px 0",
                          textAlign: "center",
                          ...mono,
                          fontWeight: 500,
                          fontSize: 11,
                        }}
                      >
                        {v}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, margin: "14px 0 8px" }}>
                  {[
                    ["安静時心拍", "58 bpm"],
                    ["睡眠", "7h 12m"],
                    ["歩数", "8,204"],
                  ].map(([label, value]) => (
                    <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                      <span style={{ color: "oklch(0.5 0.03 235)" }}>{label}</span>
                      <span style={mono}>{value}</span>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    ...mono,
                    fontWeight: 500,
                    fontSize: 10,
                    color: "oklch(0.6 0.03 165)",
                    padding: "6px 0 10px",
                  }}
                >
                  ↻ Apple Health と同期済み
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section
          style={{
            background: "#fff",
            borderTop: "1px solid oklch(0.93 0.01 220)",
            borderBottom: "1px solid oklch(0.93 0.01 220)",
          }}
        >
          <div style={{ maxWidth: 1120, margin: "0 auto", padding: "clamp(64px,9vw,112px) 24px" }}>
            <div style={{ ...mono, fontWeight: 500, fontSize: 12, color: "oklch(0.5 0.08 230)", marginBottom: 14 }}>
              01 — 課題
            </div>
            <h2
              style={{
                margin: "0 0 48px",
                fontSize: "clamp(26px,3.6vw,38px)",
                lineHeight: 1.45,
                fontWeight: 900,
                maxWidth: "22em",
              }}
            >
              記録はたまる。でも、自分の体のことは
              <br />
              あまりわからないまま。
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                gap: 20,
              }}
            >
              {[
                {
                  label: "A.",
                  title: "記録するだけで終わる",
                  body: "水分トラッカーは量を、断酒アプリは日数を数えるだけ。体調との関係までは見えてきません。",
                },
                {
                  label: "B.",
                  title: "分析が画一的",
                  body: "用意されたグラフとアドバイスは誰にでも同じ。あなたが本当に知りたい問いには答えてくれません。",
                },
                {
                  label: "C.",
                  title: "データがアプリに閉じている",
                  body: "飲酒・水分・睡眠・心拍がバラバラのアプリに散らばり、まとめて見ることができません。",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ padding: 28, borderRadius: 20, background: "oklch(0.975 0.008 220)" }}
                >
                  <div style={{ ...mono, fontWeight: 500, fontSize: 12, color: "oklch(0.55 0.03 235)", marginBottom: 12 }}>
                    {item.label}
                  </div>
                  <h3 style={{ margin: "0 0 10px", fontSize: 19, fontWeight: 700 }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.85, color: "oklch(0.45 0.025 235)" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONCEPT */}
        <section style={{ maxWidth: 1120, margin: "0 auto", padding: "clamp(64px,9vw,112px) 24px" }}>
          <div style={{ ...mono, fontWeight: 500, fontSize: 12, color: "oklch(0.5 0.08 230)", marginBottom: 14 }}>
            02 — しくみ
          </div>
          <h2 style={{ margin: "0 0 16px", fontSize: "clamp(26px,3.6vw,38px)", lineHeight: 1.45, fontWeight: 900 }}>
            記録して、つないで、自由に聞く。
          </h2>
          <p style={{ margin: "0 0 52px", fontSize: 15.5, lineHeight: 1.9, color: "oklch(0.45 0.025 235)", maxWidth: "36em" }}>
            アプリの役割はデータの受け皿と連携役。分析の主導権は、最後まであなたの手元に残ります。
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: 16,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "relative",
                padding: "32px 28px",
                borderRadius: 24,
                background: "oklch(0.96 0.035 165)",
                border: "1px solid oklch(0.9 0.04 165)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: "#fff", display: "grid", placeItems: "center" }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", border: "3px solid oklch(0.58 0.12 165)" }} />
                </div>
                <span style={{ ...mono, fontWeight: 500, fontSize: 36, color: "oklch(0.75 0.07 165)" }}>01</span>
              </div>
              <h3 style={{ margin: "0 0 10px", fontSize: 20, fontWeight: 700 }}>休肝日と水分を記録</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.85, color: "oklch(0.4 0.035 180)" }}>
                「飲んだ／飲んでない」と水分量をタップするだけ。1日10秒で続けられます。
              </p>
            </div>
            <div
              style={{
                position: "relative",
                padding: "32px 28px",
                borderRadius: 24,
                background: "oklch(0.96 0.03 210)",
                border: "1px solid oklch(0.9 0.035 210)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "oklch(0.62 0.1 210)" }} />
                  <div style={{ width: 12, height: 3, background: "oklch(0.62 0.1 210)" }} />
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "oklch(0.62 0.1 210)" }} />
                </div>
                <span style={{ ...mono, fontWeight: 500, fontSize: 36, color: "oklch(0.75 0.07 210)" }}>02</span>
              </div>
              <h3 style={{ margin: "0 0 10px", fontSize: 20, fontWeight: 700 }}>Apple Healthと自動連携</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.85, color: "oklch(0.4 0.035 220)" }}>
                心拍数・睡眠・活動量を日付ごとに自動で取得し、記録と紐付けます。
              </p>
            </div>
            <div style={{ position: "relative", padding: "32px 28px", borderRadius: 24, background: "oklch(0.3 0.04 240)", color: "#fff" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 16,
                    background: "oklch(0.38 0.05 240)",
                    display: "grid",
                    placeItems: "center",
                    ...mono,
                    fontWeight: 500,
                    fontSize: 16,
                    color: "oklch(0.85 0.06 210)",
                  }}
                >
                  {"{ }"}
                </div>
                <span style={{ ...mono, fontWeight: 500, fontSize: 36, color: "oklch(0.5 0.05 235)" }}>03</span>
              </div>
              <h3 style={{ margin: "0 0 10px", fontSize: 20, fontWeight: 700 }}>分析はあなたのAIで</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.85, color: "oklch(0.85 0.02 230)" }}>
                構造化されたデータをエクスポート。Claudeなど好きなAIに渡して、自由に問いかけられます。
              </p>
            </div>
          </div>

          <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 16, alignItems: "stretch" }}>
            <div style={{ flex: "1 1 380px", minWidth: 0, background: "oklch(0.22 0.03 240)", borderRadius: 20, padding: "22px 24px", overflow: "auto" }}>
              <div style={{ display: "flex", justifyContent: "space-between", ...mono, fontWeight: 500, fontSize: 11, color: "oklch(0.65 0.03 235)", marginBottom: 14 }}>
                <span>export / 2026-09.json</span>
                <span>AI-ready</span>
              </div>
              <pre style={{ margin: 0, ...mono, fontWeight: 400, fontSize: 13, lineHeight: 1.75, color: "oklch(0.88 0.02 220)", whiteSpace: "pre" }}>
                {"{\n  "}
                <span style={{ color: "oklch(0.8 0.08 210)" }}>&quot;date&quot;</span>
                {": \"2026-09-25\",\n  "}
                <span style={{ color: "oklch(0.8 0.08 210)" }}>&quot;alcohol_free&quot;</span>
                {": "}
                <span style={{ color: "oklch(0.82 0.1 165)" }}>true</span>
                {",\n  "}
                <span style={{ color: "oklch(0.8 0.08 210)" }}>&quot;water_ml&quot;</span>
                {": 1850,\n  "}
                <span style={{ color: "oklch(0.8 0.08 210)" }}>&quot;health&quot;</span>
                {": {\n    \"resting_hr\": 57,\n    \"sleep_min\": 438,\n    \"steps\": 9120\n  }\n}"}
              </pre>
            </div>
            <div style={{ flex: "1 1 300px", minWidth: 0, display: "flex", flexDirection: "column", gap: 10, justifyContent: "center" }}>
              <div style={{ ...mono, fontWeight: 500, fontSize: 11, color: "oklch(0.5 0.03 235)" }}>たとえば、こんな問いを</div>
              {[
                "休肝日にした翌日は、安静時心拍数がどう変わっている？",
                "水分が1,500ml未満の日と、睡眠時間に関係はある？",
                "週末に飲んだ週と飲まなかった週で、月曜の歩数を比べて。",
              ].map((q) => (
                <div
                  key={q}
                  style={{
                    background: "#fff",
                    border: "1px solid oklch(0.91 0.012 220)",
                    borderRadius: "16px 16px 16px 4px",
                    padding: "14px 18px",
                    fontSize: 14.5,
                    lineHeight: 1.7,
                  }}
                >
                  {q}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFFERENTIATION */}
        <section style={{ background: "oklch(0.3 0.04 240)", color: "#fff" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto", padding: "clamp(64px,9vw,112px) 24px" }}>
            <div style={{ ...mono, fontWeight: 500, fontSize: 12, color: "oklch(0.8 0.07 210)", marginBottom: 14 }}>
              03 — ちがい
            </div>
            <h2 style={{ margin: "0 0 16px", fontSize: "clamp(26px,3.6vw,38px)", lineHeight: 1.45, fontWeight: 900, maxWidth: "20em" }}>
              分析機能を、あえて内蔵しない。
            </h2>
            <p style={{ margin: "0 0 48px", fontSize: 15.5, lineHeight: 1.9, color: "oklch(0.85 0.02 230)", maxWidth: "36em" }}>
              アプリに閉じた分析より、進化し続けるAIに任せたほうが、深く、自由で、あなたに合った答えが得られます。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16 }}>
              <div style={{ border: "1px solid oklch(0.42 0.04 240)", borderRadius: 22, padding: 28 }}>
                <div style={{ ...mono, fontWeight: 500, fontSize: 12, color: "oklch(0.65 0.03 235)", marginBottom: 20 }}>
                  よくあるアプリ
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 15, lineHeight: 1.6, color: "oklch(0.78 0.02 230)" }}>
                  {[
                    "あらかじめ決められたグラフとスコア",
                    "誰にでも同じ定型アドバイス",
                    "データはアプリの中に閉じたまま",
                    "分析の進化はアップデート待ち",
                  ].map((t) => (
                    <div key={t} style={{ display: "flex", gap: 12 }}>
                      <span style={{ color: "oklch(0.6 0.03 235)" }}>—</span>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: "oklch(0.97 0.012 210)", color: "oklch(0.26 0.03 235)", borderRadius: 22, padding: 28 }}>
                <div style={{ ...mono, fontWeight: 500, fontSize: 12, color: "oklch(0.48 0.1 230)", marginBottom: 20 }}>
                  このアプリ
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 15, lineHeight: 1.6, fontWeight: 500 }}>
                  {[
                    "知りたいことを、自分の言葉で聞ける",
                    "あなたの生活に合わせた切り口で分析",
                    "構造化データをいつでも持ち出せる",
                    "AIが賢くなるほど、分析も深くなる",
                  ].map((t) => (
                    <div key={t} style={{ display: "flex", gap: 12 }}>
                      <span style={{ color: "oklch(0.58 0.12 165)", fontWeight: 900 }}>✓</span>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section style={{ maxWidth: 1120, margin: "0 auto", padding: "clamp(64px,9vw,112px) 24px" }}>
          <div style={{ ...mono, fontWeight: 500, fontSize: 12, color: "oklch(0.5 0.08 230)", marginBottom: 14 }}>
            04 — 機能イメージ
          </div>
          <h2 style={{ margin: "0 0 48px", fontSize: "clamp(26px,3.6vw,38px)", lineHeight: 1.45, fontWeight: 900 }}>
            シンプルに記録、まるごと連携。
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
            {/* calendar */}
            <div style={{ background: "#fff", border: "1px solid oklch(0.92 0.01 220)", borderRadius: 24, padding: 26 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>休肝日カレンダー</h3>
                <span style={{ ...mono, fontWeight: 500, fontSize: 11, color: "oklch(0.55 0.03 235)" }}>2026.09</span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7,1fr)",
                  gap: 5,
                  ...mono,
                  fontWeight: 500,
                  fontSize: 10,
                  color: "oklch(0.6 0.03 235)",
                  textAlign: "center",
                  marginBottom: 6,
                }}
              >
                {["月", "火", "水", "木", "金", "土", "日"].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 5 }}>
                {cal.map((c, i) => {
                  if (c.blank) return <div key={i} />;
                  const base = {
                    aspectRatio: "1",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                    ...mono,
                    fontWeight: 500,
                    fontSize: 11,
                  } as const;
                  if (c.rest) {
                    return (
                      <div key={i} style={{ ...base, background: "oklch(0.62 0.11 165)", color: "#fff" }}>
                        {c.d}
                      </div>
                    );
                  }
                  if (c.drink) {
                    return (
                      <div key={i} style={{ ...base, background: "oklch(0.95 0.012 220)", color: "oklch(0.5 0.03 235)" }}>
                        {c.d}
                      </div>
                    );
                  }
                  return (
                    <div key={i} style={{ ...base, border: "1px dashed oklch(0.88 0.015 220)", color: "oklch(0.72 0.02 235)" }}>
                      {c.d}
                    </div>
                  );
                })}
              </div>
              <div style={{ display: "flex", gap: 16, marginTop: 16, fontSize: 12, color: "oklch(0.5 0.03 235)" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 3, background: "oklch(0.62 0.11 165)" }} />
                  休肝日 {REST_COUNT}日
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 3, background: "oklch(0.93 0.012 220)" }} />
                  飲酒日
                </span>
              </div>
            </div>

            {/* water log */}
            <div style={{ background: "#fff", border: "1px solid oklch(0.92 0.01 220)", borderRadius: 24, padding: 26 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>水分摂取ログ</h3>
                <span style={{ ...mono, fontWeight: 500, fontSize: 11, color: "oklch(0.55 0.03 235)" }}>TODAY</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 6,
                  height: 96,
                  marginBottom: 18,
                  paddingBottom: 6,
                  borderBottom: "1px solid oklch(0.93 0.01 220)",
                }}
              >
                {week.map((w) => (
                  <div
                    key={w.l}
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 6,
                      height: "100%",
                      justifyContent: "flex-end",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        maxWidth: 26,
                        height: `${w.h}%`,
                        borderRadius: "6px 6px 3px 3px",
                        background: "linear-gradient(180deg,oklch(0.74 0.08 215),oklch(0.62 0.1 230))",
                      }}
                    />
                    <span style={{ ...mono, fontWeight: 500, fontSize: 10, color: "oklch(0.6 0.03 235)" }}>{w.l}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {log.map((e) => (
                  <div key={e.t} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13.5 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ ...mono, fontWeight: 500, fontSize: 11, color: "oklch(0.55 0.03 235)", width: 38 }}>{e.t}</span>
                      {e.n}
                    </span>
                    <span style={{ ...mono, fontWeight: 500, fontSize: 12, color: "oklch(0.45 0.09 230)" }}>+{e.ml}ml</span>
                  </div>
                ))}
              </div>
            </div>

            {/* data flow */}
            <div style={{ background: "oklch(0.97 0.015 210)", border: "1px solid oklch(0.91 0.02 215)", borderRadius: 24, padding: 26, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 22 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Apple Health 連携</h3>
                <span style={{ ...mono, fontWeight: 500, fontSize: 11, color: "oklch(0.55 0.03 235)" }}>DATA FLOW</span>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "stretch" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
                  {["心拍数", "睡眠", "活動量"].map((t) => (
                    <div key={t} style={{ background: "#fff", borderRadius: 12, padding: "10px 4px", textAlign: "center", fontSize: 12, fontWeight: 700 }}>
                      {t}
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: "center", ...mono, fontWeight: 500, fontSize: 10, color: "oklch(0.55 0.05 220)", padding: "6px 0" }}>
                  Apple Health ↓
                </div>
                <div style={{ background: "oklch(0.42 0.07 235)", color: "#fff", borderRadius: 14, padding: 14, textAlign: "center" }}>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>休肝日 × 水分補給トラッカー</div>
                  <div style={{ ...mono, fontWeight: 400, fontSize: 11, color: "oklch(0.85 0.03 220)", marginTop: 4 }}>
                    休肝日 + 水分 + 体調 を日付で統合
                  </div>
                </div>
                <div style={{ textAlign: "center", ...mono, fontWeight: 500, fontSize: 10, color: "oklch(0.55 0.05 220)", padding: "6px 0" }}>
                  JSON / CSV エクスポート ↓
                </div>
                <div style={{ background: "#fff", border: "1.5px dashed oklch(0.7 0.07 165)", borderRadius: 14, padding: 14, textAlign: "center" }}>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>あなたのAI</div>
                  <div style={{ ...mono, fontWeight: 400, fontSize: 11, color: "oklch(0.5 0.03 235)", marginTop: 4 }}>
                    Claude など、好きなツールで
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WAITLIST */}
        <section id="waitlist" style={{ padding: "0 24px clamp(64px,9vw,112px)", scrollMarginTop: 70 }}>
          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              borderRadius: 32,
              padding: "clamp(40px,7vw,80px) clamp(24px,6vw,72px)",
              background: "linear-gradient(160deg,oklch(0.94 0.04 205),oklch(0.95 0.04 165))",
              display: "flex",
              flexWrap: "wrap",
              gap: 40,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ flex: "1 1 360px", minWidth: 0 }}>
              <div style={{ ...mono, fontWeight: 500, fontSize: 12, color: "oklch(0.45 0.08 190)", marginBottom: 14 }}>
                WAITLIST
              </div>
              <h2 style={{ margin: "0 0 14px", fontSize: "clamp(26px,3.6vw,38px)", lineHeight: 1.45, fontWeight: 900 }}>
                近日公開。
                <br />
                いちばん先にお知らせします。
              </h2>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.9, color: "oklch(0.4 0.03 210)", maxWidth: "30em" }}>
                メールアドレスを登録すると、iOS版の公開時に通知が届きます。登録は無料、いつでも解除できます。
              </p>
            </div>
            <div style={{ flex: "1 1 380px", minWidth: 0, maxWidth: 480 }}>
              <WaitlistForm variant="panel" />
            </div>
          </div>
        </section>
      </main>

      <footer style={{ borderTop: "1px solid oklch(0.92 0.01 220)" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "28px 24px",
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "space-between",
            fontSize: 12,
            color: "oklch(0.55 0.02 235)",
          }}
        >
          <span>© 2026 休肝日 × 水分補給トラッカー（仮称）</span>
          <span>Apple Health は Apple Inc. の商標です。本サービスは Apple とは提携していません。</span>
        </div>
      </footer>
    </>
  );
}
