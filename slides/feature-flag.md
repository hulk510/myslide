---
marp: true
theme: default
paginate: true
footer: "hulk510 © 2024"
backgroundColor: "rgb(24, 33, 39)"
color: "#ffffff"
---

# Feature Flag管理ツールの雑な比較

---

## 主要なツールと特徴

### [**LaunchDarkly**](https://launchdarkly.com)

- **メジャー感**: 一番有名
- **特徴**: 企業がメンテ、機能は充実
- **懸念**: 高額そうな印象
- **利用対象**: 企業規模での利用に最適

---

### **Vercel Flags**

- **開発元**: Vercelが提供
- **状態**: Experimental
- **特記事項**:
  - Vercel Toolbarと組み合わせると便利？
  - Vercel以外で利用可能か不明

---

### [**PostHog**](https://posthog.com)

- **特徴**: アナリティクス+機能多数
- **性質**: オープンソース (セルフホスト可)
- **懸念**: Feature Flagのみだと機能過剰
- **利点**: アナリティクスと併用に最適

---

### [**Unleash**](https://github.com/Unleash/unleash)

- **ホスティング**: セルフホスト中心
- **プラン制約**: 無料では一部機能制限
- **特徴**: シンプルで利用しやすい
- **比較**: Flagsmithに近いが人気は上

---

### [**Flagsmith**](https://github.com/Flagsmith/flagsmith)

- **メンバー制限**: 無料は1人のみ
- **特徴**: 特化型のFeature Flag管理
- **ホスティング**: セルフ/ホステッド両対応
- **比較**: Unleashとの[比較情報](https://www.flagsmith.com/compare/flagsmith-vs-unleash)出してる

---

### [**DevCycle**](https://www.devcycle.com)

- **OpenFeature対応**: 対応済み
- **無料範囲**: 1,000 MAU制限あり
- **利点**: チームでの利用に便利
- **懸念**: セルフホスト非対応

---

### [**Flipt**](https://github.com/flipt-io/flipt)

- **特徴**: 軽量シンプル
- **ホスティング**: セルフホスト推奨
- **利点**: Flipt CloudでGitHubと連携可能
- **制約**: 無料は環境2つまで

---

### [**GrowthBook**](https://github.com/growthbook/growthbook)

- **ホスティング**: セルフホスト+有料機能
- **無料利用**: 3人まで、MAU制限なし
- **特徴**: Feature Flag+実験(A/B)対応
- **OpenFeature対応**: 一部確認済み

---

## まとめ

### **ツール選択のポイント**

- **充実した機能を求める**: LaunchDarkly
- **簡易的かつGitOps対応**: Flipt
- **アナリティクスも重視**: PostHog
- **制約が緩いツール**: DevCycle, GrowthBook

---

### **個人的に良さそう感**

とりあえずFeature Flagの管理をしたい、安価に試したい場合

- **DevCycle**: チーム利用に便利そう、制約緩め
- サイバーエージェントの記事で絶賛されてる
  - [開発速度UP⤴️！UX UP⤴️！利益⤴️！フィーチャーフラグはDevCycleで50ミリ秒以下の世界に 🚀](https://zenn.dev/gunta/articles/79f77bdc285874#%E3%81%BE%E3%81%A8%E3%82%81)

### 個人的に気になってる

- **Flipt**: 軽量でGitHub連携が魅力（個人利用じゃないと無料では厳しいかも）
