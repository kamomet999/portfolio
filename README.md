# Taiki Horaguchi Portfolio

テクノロジーと現場経験を掛け合わせた取り組みを紹介するポートフォリオサイト。

🔗 **Live:** [portfolio1-chi-rouge.vercel.app](https://portfolio1-chi-rouge.vercel.app)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React

## Projects

### 🌾 APE (Agricultural Price Engine)
農産物の価格予測と営農支援シミュレーター。市場データ・気象データを組み合わせ、農家の経営判断を支援します。

### 🧠 Personal OS
AIが「自分ならどう判断するか」を再現するための人格OS。意思決定の外部化と自動化を目指すフレームワーク。

### 🛒 Smart Pantry Tracker
飲食店向けの在庫管理 & チラシ配信プラットフォーム。Next.js + Supabase で構築。

## Getting Started

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # ランディングページ
│   ├── globals.css         # グローバルスタイル
│   └── projects/
│       ├── ape/page.tsx    # APE 詳細
│       └── personal-os/page.tsx  # Personal OS 詳細
├── components/
│   ├── ui/                 # UIコンポーネント
│   └── layout/             # レイアウトコンポーネント
└── lib/
    └── utils.ts            # ユーティリティ
```

## License

MIT

## Author

Taiki Horaguchi
