'use strict';

const CHATGPT_URL = 'https://chatgpt.com/';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.type !== 'open-chatgpt-tab') {
    return false;
  }

  (async () => {
    try {
      const createProperties = {
        url: CHATGPT_URL,
        active: true
      };

      if (Number.isInteger(sender.tab?.windowId)) {
        createProperties.windowId = sender.tab.windowId;
      }
      if (Number.isInteger(sender.tab?.id)) {
        createProperties.openerTabId = sender.tab.id;
      }

      const tab = await chrome.tabs.create(createProperties);
      sendResponse({ ok: true, tabId: tab.id ?? null });
    } catch (error) {
      sendResponse({
        ok: false,
        error: error instanceof Error ? error.message : String(error)
      });
    }
  })();

  return true;
});
