// jsファイルにしている理由は以下の記事を参照
// https://zenn.dev/convcha/articles/6aa3dc18158a41
module.exports = {
  tabWidth: 2,
  useTabs: false,
  plugins: [require("prettier-plugin-md-nocjsp")],
  overrides: [
    {
      files: ["*.md"],
      options: {
        parser: "markdown-nocjsp",
      },
    },
  ],
};
