---
title: Troubleshooting
description: Troubleshooting while waiting for help during beta / alpha testing
keywords: [reload, delete, manually, logs, server, console]
---

# ❓ Troubleshooting

The Continue VS Code extension is currently in beta, and the Intellij extension is in Alpha. If you are having trouble, please follow the steps below.

## Check the console logs (VS Code)

To solve many problems, the first step is reading the logs to find the relevant error message. To do this, follow these steps:

1. `cmd+shift+p` (MacOS) / `ctrl+shift+p` (Windows)
2. Search for and then select "Developer: Toggle Developer Tools"
3. This will open the [Chrome DevTools window](https://developer.chrome.com/docs/devtools/)
4. Select the `Console` tab
5. Read the console logs

## Download a Newer Version (VS Code)

If you are using an older version of the Continue extension, particularly one which depends on the separate Python server, we would recommend downloading the latest version of the extension, as we are constantly making bug fixes and are likely to have solved any major issues.

## Download an Older Version (VS Code)

If you've tried everything, reported an error, know that a previous version was working for you, and are waiting to hear back, you can try downloading an older version of the extension. All versions are hosted on the Open VSX Registry [here](https://open-vsx.org/extension/Continue/continue). Once you've downloaded the extension, which will be a .vsix file, you can install it manually by following the instructions [here](https://code.visualstudio.com/docs/editor/extension-gallery#_install-from-a-vsix).

## Still having trouble?

Create a GitHub issue [here](https://github.com/continuedev/continue/issues/new?assignees=&labels=bug&projects=&template=bug-report-%F0%9F%90%9B.md&title=), leaving the details of your problem, and we'll be able to more quickly help you out.
