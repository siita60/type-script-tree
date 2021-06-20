# treeコマンドの実装

- meow@7.0.0を利用して、コマンドを実装する。
  - めっちゃ複雑なので結構理解までつらいかも。一旦写経。

# jestも導入

- JEST
  - https://jestjs.io/ja/docs/getting-started
  - yarnでインストールしろって書いてあるな...とりまnpmで。

# ハマったこと

- tsファイルが存在しないとディレクトリごと存在しない扱いになる
  - refs: https://stackoverflow.com/questions/41211566/tsconfig-json-buildno-inputs-were-found-in-config-file
  - 全然わからなくて辛かった