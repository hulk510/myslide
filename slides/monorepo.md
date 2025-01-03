---
marp: true
theme: default
paginate: true
footer: "hulk510 © 2024"
backgroundColor: "rgb(24, 33, 39)"
color: "#ffffff"
---

# モノリポからマイクロフロントエンドを目指す

---

# モノリポとは

- 複数のプロジェクトやコードベースを1つのリポジトリで管理する手法
- **なぜ注目されるのか？**
  - コンポーネントの共有や再利用
  - デプロイの効率化
  - チーム間の連携強化
  - **マイクロフロントエンド**への進化

---

# なぜモノリポか？

これを解決したい！

- **複数リポジトリの課題**
- **モノシリックなアプリケーションの限界**

---

# 複数リポジトリの課題

- **コンポーネントやロジックを共有するのが難しい**
- **設定ファイルなどの重複** (例: ESLint, Prettier, TypeScript etc.)
- **バージョン管理の複雑化**（依存関係のバージョンが異なる）
- **時代によって全然違うものをメンテする必要がある**（例: React v15, v16, v17 etc.）

---

# モノシリックなアプリケーションの限界

- **ビルド時間の増加**
  - 関係ないコードもビルドされる
- **デプロイの遅延**
  - すべてのコードをまとめてデプロイする必要がある
- **依存関係の管理が複雑**、**コードの複雑化**
  - 何がどこで使われているのかどこまでが依存関係なのかがわかりにくい

---

# モノリポで解決🏃‍♀️

- 一元管理で**依存関係を明確化**、統一した設定を適用できる
- **コンポーネントやロジックの再利用**が可能なので、開発効率が向上する
- 重複が排除できるためメンテナンス性が向上する
- **ビルド・デプロイ効率化**
- スコープや責務を明確化できる

---

# モノリポのデメリット

- 管理が複雑になる
- リポジトリが肥大化
- テストないと怖い

気抜いたら死ぬし、常にメンテナンスしやすい環境を作る必要がある（と思う）

とはいえ、適用してから少しずつ変えていけるのでいつでも始められるのは便利かなと

---

### ツールの活用

- [**Turborepo**](https://turbo.build/repo/docs): 必要な部分だけをビルド/デプロイ可能, vercel製
- CI/CDの最適化: GitHub Actionsを活用。
- pnpm (workspace): npm packageよりも高速なパッケージ管理
- Renovate: パッケージの自動更新
- biome: 高速なlinter, formatter
- Storybook: 最近だとほぼE2Eと近いテストもカバーできるしvitestでテストできるようになりそう
- vitest: テスト

---

## 今後の開発において、

# **自動化とスケーラビリティを重視しないと詰む**

今後のAIによる進化に対応できない。

「AIあるからできるでしょ」と夢をみてる人たちが求めるスピードに開発者が耐えれないし、それが可能な会社に先を越される。

とはいえ、安定感を持って開発できる土台も作ってかないといけない...

Nextはv15, Reactはもうv19である。誰が自信を持ってバージョン上げられるのか？

---

### モノリポの先に

# フロントエンドもマイクロフロントエンドへ⭐️

- [フロントエンドエンジニアは Micro Frontends の夢を見るか](https://engineering.mercari.com/blog/entry/2018-12-06-162827/)
- [How Vercel adopted microfrontends](https://vercel.com/blog/how-vercel-adopted-microfrontends)

---

# マイクロフロントエンドへ向けて

必要になってきそうなところ

- BFF（Backend for Frontend）によるAPIの責務分離（型定義を共有する）
  - swaggerあればclientコードも自動生成できる(例：[orval](https://orval.dev))
- Sharableなコンポーネント、ロジック等のパッケージ作成とサービスの分割
  - コンポーネントに関しては汎用性よりもとにかく再利用性を重視する
- デプロイの柔軟性を高めるためのCI/CDの最適化
- パッケージごとの自動テストの導入

---

# まとめ

エンジニア考えること多すぎではある。

## しかし、扱える領域が広がり楽しくてしょうがないですね😆

