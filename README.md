# Gmail ChatGPT Reply Assistant

[日本語版 README](README.ja.md)

Gmail ChatGPT Reply Assistant is a Chrome extension that helps you draft Gmail replies with the ChatGPT web app. It extracts the current Gmail thread, builds a prompt, opens ChatGPT, and lets you paste the final answer back into Gmail as a draft.

The extension does not use the ChatGPT API, OpenAI API, Google Cloud API, or any API key. It is designed for personal use with your own Gmail account and your own ChatGPT account in the browser.

## What It Does

- Extracts a Gmail thread from the printable view or the on-page Gmail DOM.
- Builds a prompt for a reply or a new email draft.
- Opens the official ChatGPT website so you can run the prompt manually.
- Lets you paste or read the generated final reply and insert it into Gmail.
- Supports English and Japanese UI depending on the browser language.
- Supports output-language options such as matching the source email, Japanese, English, bilingual, or a custom language instruction.

## What It Does Not Do

- It does not call the ChatGPT API or require an API key.
- It does not run a backend server.
- It does not connect to Google Cloud or require a Google API project.
- It does not send emails automatically.
- It does not automatically upload email content anywhere. Email content reaches ChatGPT only when you manually paste or submit the generated prompt in ChatGPT.

## Requirements

- Google Chrome or a Chromium-based browser with extension developer mode.
- A personal Gmail account.
- A personal ChatGPT account accessible at [chatgpt.com](https://chatgpt.com/).

## Installation From a Release ZIP

ZIP packages should be downloaded from GitHub Releases only. Release ZIP files are intentionally not tracked in the repository source tree.

1. Download the release ZIP from the repository's Releases page.
2. Unzip the package.
3. Open `chrome://extensions/` in Chrome.
4. Enable **Developer mode**.
5. Click **Load unpacked**.
6. Select the unzipped `gmail-chatgpt-assistant` folder.
7. Reload Gmail.

## Installation From Source

1. Clone this repository.
2. Open `chrome://extensions/` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the `gmail-chatgpt-assistant/` folder inside this repository.
6. Reload Gmail.

## Usage

1. Open a Gmail thread.
2. Click the **GPT Mail** button at the bottom right of Gmail, or use the extension popup to open the panel.
3. Choose the use case, tone, output language, and additional instructions.
4. Click **Load full thread**.
5. Click **Copy prompt and open ChatGPT**.
6. Paste the prompt into ChatGPT and generate the reply.
7. Copy only ChatGPT's final reply.
8. Return to Gmail and click **Read from clipboard**, or paste the final reply manually.
9. Review the draft and click **Insert into Gmail draft**.
10. Review the Gmail draft carefully before sending it manually.

## Permissions

The extension uses:

- `https://mail.google.com/*` host access to run inside Gmail.
- `activeTab` to communicate with the active Gmail tab from the popup.
- `clipboardRead` and `clipboardWrite` to copy prompts and read generated replies when you choose those actions.
- `storage` to keep local extension settings.

## Privacy Notes

This extension is a local browser extension. It does not include analytics, a remote backend, or bundled credentials. Gmail content is read in the active browser page to generate a prompt. You remain responsible for deciding whether to submit that prompt to ChatGPT and for reviewing the final email before sending.

## Release ZIP Policy

Release ZIP files are not committed to this repository. ZIP packages should be published only as GitHub Release assets.

To create a release ZIP locally:

```sh
zip -r gmail-chatgpt-assistant-v0.4.0.zip gmail-chatgpt-assistant -x '*.DS_Store'
```

## License

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0). See [LICENSE](LICENSE).
