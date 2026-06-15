# Gmail ChatGPT Reply Assistant

[English README](README.md)

Gmail ChatGPT Reply Assistant は、Gmail の返信作成を ChatGPT 公式 Web 画面で補助する Chrome 拡張機能です。Gmail のスレッドを抽出して ChatGPT 用プロンプトを作成し、ChatGPT で生成した最終返信案を Gmail の下書きへ挿入できます。

この拡張機能は ChatGPT API、OpenAI API、Google Cloud API、API キーを使用しません。個人の Gmail アカウントと、ブラウザでログインした個人の ChatGPT アカウントで実行する前提です。

## できること

- Gmail の印刷用ビュー、または画面上の Gmail DOM からスレッドを抽出します。
- 返信メールまたは新規メール用のプロンプトを作成します。
- ChatGPT 公式サイトを開き、ユーザーが手動でプロンプトを実行できます。
- 生成された最終返信案を貼り付け、Gmail に下書きとして挿入できます。
- ブラウザ言語に応じて英語 UI / 日本語 UI を切り替えます。
- 元メールに合わせる、日本語、英語、日英併記、自由入力による言語指定に対応します。

## しないこと

- ChatGPT API を呼び出しません。
- API キーは不要です。
- バックエンドサーバーはありません。
- Google Cloud や Google API プロジェクトは不要です。
- メールを自動送信しません。
- メール本文を自動で外部へアップロードしません。ChatGPT に送信されるのは、ユーザーが ChatGPT 画面でプロンプトを手動送信した場合のみです。

## 必要なもの

- Google Chrome、または Chromium ベースのブラウザ。
- 個人の Gmail アカウント。
- [chatgpt.com](https://chatgpt.com/) にアクセスできる個人の ChatGPT アカウント。

## Release ZIP からインストール

ZIP パッケージは GitHub Releases からのみダウンロードしてください。Release ZIP はリポジトリのソースツリーには含めません。

1. リポジトリの Releases ページから ZIP をダウンロードします。
2. ZIP を解凍します。
3. Chrome で `chrome://extensions/` を開きます。
4. **デベロッパーモード** をオンにします。
5. **パッケージ化されていない拡張機能を読み込む** を押します。
6. 解凍した `gmail-chatgpt-assistant` フォルダを選択します。
7. Gmail を再読み込みします。

## ソースからインストール

1. このリポジトリを clone します。
2. Chrome で `chrome://extensions/` を開きます。
3. **デベロッパーモード** をオンにします。
4. **パッケージ化されていない拡張機能を読み込む** を押します。
5. このリポジトリ内の `gmail-chatgpt-assistant/` フォルダを選択します。
6. Gmail を再読み込みします。

## 使い方

1. Gmail でメールスレッドを開きます。
2. Gmail 右下の **GPT Mail** ボタン、または拡張機能ポップアップからパネルを開きます。
3. 用途、文体、出力言語、追加条件を指定します。
4. **Load full thread** / **スレッド全体を読み込む** を押します。
5. **Copy prompt and open ChatGPT** / **プロンプトをコピーして ChatGPT を開く** を押します。
6. ChatGPT にプロンプトを貼り付けて返信案を生成します。
7. ChatGPT の最終返信案だけをコピーします。
8. Gmail に戻り、**Read from clipboard** / **クリップボードから読み込む** を押すか、手動で貼り付けます。
9. 内容を確認し、**Insert into Gmail draft** / **Gmail へ挿入して下書き化** を押します。
10. Gmail の下書きを必ず確認してから、手動で送信します。

## 権限

この拡張機能は次の権限を使います。

- `https://mail.google.com/*`: Gmail 上で実行するため。
- `activeTab`: ポップアップから現在の Gmail タブと通信するため。
- `clipboardRead` / `clipboardWrite`: ユーザー操作に応じてプロンプトのコピーや返信案の読み込みを行うため。
- `storage`: 拡張機能のローカル設定を保存するため。

## プライバシー

この拡張機能はローカルのブラウザ拡張です。分析機能、リモートバックエンド、同梱された認証情報はありません。Gmail の内容は、プロンプト作成のために現在のブラウザページ上で読み取られます。ChatGPT へ送信するかどうか、および最終メールを送信するかどうかはユーザーが判断してください。

## ライセンス

このプロジェクトは Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0) で提供します。詳細は [LICENSE](LICENSE) を確認してください。
