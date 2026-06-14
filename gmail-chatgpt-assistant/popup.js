'use strict';

const statusEl = document.getElementById('status');
const openButton = document.getElementById('open-panel');

function getMessage(key) {
  try {
    return chrome.i18n.getMessage(key) || key;
  } catch (_error) {
    return key;
  }
}

function getUiLocale() {
  try {
    const language = chrome.i18n.getUILanguage() || navigator.language || 'en';
    return String(language).toLowerCase().startsWith('ja') ? 'ja' : 'en';
  } catch (_error) {
    return String(navigator.language || 'en').toLowerCase().startsWith('ja') ? 'ja' : 'en';
  }
}

function applyI18n() {
  document.documentElement.lang = getUiLocale();
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (key) {
      element.textContent = getMessage(key);
    }
  });
  document.title = getMessage('popupTitle');
}

function setStatus(messageKey) {
  statusEl.textContent = getMessage(messageKey);
}

applyI18n();

openButton.addEventListener('click', async () => {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab?.id || !tab.url?.startsWith('https://mail.google.com/')) {
      setStatus('popupStatusNeedGmail');
      return;
    }

    await chrome.tabs.sendMessage(tab.id, { type: 'open-panel' });
    setStatus('popupStatusOpened');
    window.close();
  } catch (_error) {
    setStatus('popupStatusFailed');
  }
});
