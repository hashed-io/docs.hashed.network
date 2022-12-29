---
title: Creating Your First Polkadot Account
sidebar_position: 4
tags:
  - Polkadot
  - account
  - PRXY
  - Fund Admin
---

<head>
  <title>Creating Your First Polkadot Account</title>
  <meta charSet="utf-8" />
  <meta property="og:image" content="https://docs.hashed.network/img/fund-admin.png" />
  <meta property="og:description" content="On-chain, triple entry accounting protocol generates journal files from Native Bitcoin Vaults and enables vault administrators to run balance sheets and income statements" />
  <meta property="og:title" content="Creating Your First Polkadot Account" />
  <meta property="og:url" content="https://docs.hashed.network/docs/fund-admin/polkadot-account" />
</head>

- [**Polkadot browser extension**](#polkadot-browser-extension)
- [**Polkadot user interface (UI)**](#polkadot-user-interface-ui)

---

The following tutorial covers "How to create a Polkadot account". let's start our journey!
Throughout this page you will see some words highlighted in [blue](#creating-your-first-polkadot-account), if you click on those words, you may be taken to an external website or directed to a section of this document.

Before you begin, you must have one of the following browsers installed:

- Firefox -> Download it [here](https://www.mozilla.org/en-US/firefox/new/).
- Google chrome -> Download it [here](https://www.google.com/chrome/).

**Note**: This tutorial is intended for Windows, macOS & Linux users.

**Note**: If you aren't familiar with the Blockchain environment, we suggest you reading the last section(REFERENCE_PENDING) first.

You can create an account in any wallet that supports Polkadot. For detailed information on how to set up Polkadot accounts using the different tools that Web3 Foundation/Parity developed and supports, please follow our links below. 


- Polkadot [browser extension](#polkadotjs-browser-extension) (**RECOMMENDED**: easy to use, secure, and works with any browser)
- Polkadot-JS [user interface (UI)](#polkadotjs-user-interface-ui)

We also suggest reading the Offical Polkadot Support site [here](https://support.polkadot.network/support/home).

## **Polkadot browser extension**
In order to continue with this tutorial, you must have the Polkadot{.js} browser extension installed. If you don't have it installed, please follow the instructions below:

1. Open your browser and go to the [Polkadot{.js} browser extension](https://polkadot.js.org/extension/) page.

![Image0](./images/polkadot-account/image0.png)

1. After you are on the page, click on the "Download for Chrome" or "Download for Firefox" button, depending on which browser you are using.
2. It will take you to the Chrome Web Store or Firefox Add-ons page. Click on the "Add to Chrome" or "Add to Firefox" button.

**Chrome download**
![Image1](./images/polkadot-account/image1.png)

**Firefox download**
![Image2](./images/polkadot-account/image2.png)

**NOTE**: Sometimes a restart of your browser may be necessary for the extension to be fully loaded.

3. After installing the extension, you should see the orange and white Polkadot extension logo in your browser's menu bar. 

![Image3](./images/polkadot-account/image3.png)

4. Click on the Polkadot extension logo and you will see the following screen:
   
![Image5](./images/polkadot-account/image5.png)

5. Before starting the process of creating your first Polkadot account, read the notes then click the `Understood, let me continue` button. This will take you to the next screen:

![Image4](./images/polkadot-account/image4.png)

**Note**: Keep in mind if you do a click outside the Polkadot extension, it will close. If you want to open it again, you will have to click on the Polkadot extension logo again and repeat the **WHOLE** process.

6. Click the big plus button in the middle or the one in the top-right corner then select `Create new account`:

**Option 1**
![Image4](./images/polkadot-account/image4.png)

**Option 2**
![Image6](./images/polkadot-account/image6.png)

7. In the next screen, we can see a couple of interesting sections. 

![Image7](./images/polkadot-account/image7.png)

The first one is the `Account name` section. This name is only for you to identify your account inside your Polkadot extension. Default name is `<unknown>`. but you can change it in a later step.
![Image9](./images/polkadot-account/image9.png)

Below the `<Unknown>` text, you can see a large string of characters. This is your account address [Public Key](./polkadot-key-concepts.md#public-and-private-keys))
. You can copy it by clicking on the `Copy to clipboard` button.

**Note**: You don't need to copy it now, because as you can remember, if you click outside the Polkadot extension, it will close.

Next, you can see the `Mnemonic phrase` section. This is the most important part of the process. You will need to save this [mnemonic phrase](./polkadot-key-concepts.md#mnemonic-and-address-generation) in a safe place. If you lose it, you will lose access to your account.

![Image10](./images/polkadot-account/image10.png)

**Note**: Next you can see the `Copy to clipboard` button. If you click on it, it will copy the mnemonic phrase to your clipboard. You can paste it in a text editor LATER (remember the extension closing problem). 
![Image11](./images/polkadot-account/image11.png)

Next section is a warning. It says that if you lose your mnemonic phrase, you will lose access to your account. This is true, so make sure to save it in a safe place.

![Image12](./images/polkadot-account/image12.png)

**Note**: Keep your mnemonic phrase secret and safe! Anyone who knows it can have full access to your account!

Finally, you need to check the `I have saved my mnemonic seed safely` checkbox. 

![Image13](./images/polkadot-account/image13.png)

After that, you can click on the `Next Step` button.

![Image14](./images/polkadot-account/image14.png)

1. Next, you will see a screen with your account information:

![Image15](./images/polkadot-account/image15.png)

Again, the first section is the `Account name` section. 

![Image16](./images/polkadot-account/image9.png)

8. Next section is `Network` section. This is the network your account is connected to. At this point you can choose to use the account on any chain or allow it for a specific chain only, from the drop-down menu. Select the `Allow use on any chain` option:

![Image17](./images/polkadot-account/image16.png)

9. Next section is the `Name` section. Remember, the name is only for you to identify your account inside your Polkadot extension. Give it a name a descriptive name, so you can easily identify it later, i.e. `Alice Keys` or `Proxy Investor`:

![Image18](./images/polkadot-account/image18.png)

10. After you have given your account a name, you will notice that the `<Unknown>` text in the `Account name` section has changed.

![Image19](./images/polkadot-account/image19.png)

11.   Next, the `Password` section. You will need to enter this password when signing any transaction with your account, so make sure to remember it.

![Image20](./images/polkadot-account/image20.png)

**Note**: The password isn't stored anywhere and we can't recover it for you. It's only used to encrypt your account locally on your computer. It does not protect your mnemonic phrase!

12. After you have entered your password, you will see a `Confirm password` section. You need to enter the same password again to confirm it.

![Image21](./images/polkadot-account/image21.png)

**Note**: If you forget your password, you can still access your account by using your mnemonic phrase. That's why it's important to save the mnemonic phrase in a safe place.

13.  If your passwords match, you will see that the `Add the account with the generated seed` button is now enabled. Click on it.

![Image22](./images/polkadot-account/image22.png)
![Image23](./images/polkadot-account/image23.png)

14. After clicking the button, you will see the following screen:

![Image24](./images/polkadot-account/image24.png)

**Note**: At this point, you can close the Polkadot extension and paste your mnemonic phrase in a text editor or a password manager.

15.  We're done! You have successfully created your first Polkadot account. You can now close the Polkadot extension and start using your account.

----

## **Polkadot user interface (UI)**

**Note**: Next guide is about the Polkadot-JS user interface (UI) method.For most users, we strongly recommend using the Polkadot browser extension instead. If you'd like to continue with this method, here are the steps.

**The Polkadot extension is the best way to manage your accounts, as it has many advantages**:

- It provides better security than using the Web UI directly
- Your browser won't "forget" your accounts if its cookies are cleared
- It allows you to interact with any Web 3.0 compatible site in the Polkadot ecosystem
- The extension recognizes all known Polkadot (and not only) scams and alerts you when you access a phishing site. This will help you protect yourself and your funds.

1. Go to the [Polkadot{.js} user interface (UI)](https://polkadot.js.org/), you will see the following screen:
![Image25](./images/polkadot-account/image25.png)

1. Then select the `apps wallet (hosted)`, the top left option:
![Image26](./images/polkadot-account/image26.png)

1. If this is your first time using the Polkadot{.js} user interface (UI), you will see the following screen from the Polkadot extension:
![Image27](./images/polkadot-account/image27.png)

1. Click on the `Yes, allow this application access` button.
![Image28](./images/polkadot-account/image28.png)

1. Next, you will see the main screen of the Polkadot{.js} user interface (UI).
![Image29](./images/polkadot-account/image29.png)

1. Next, you will see the `Accounts` section in the top left corner, click on the dropdown menu and select the `Accounts` option:

![Image30](./images/polkadot-account/image30.png)

![Image31](./images/polkadot-account/image31.png)

7. After that, you will see the following screen:

![Image32](./images/polkadot-account/image32.png)

8. Next, you will see the `Add account` button. Click on it.

![Image33](./images/polkadot-account/image33.png)

9. After clicking the button, a popup window will appear:

![Image34](./images/polkadot-account/image34.png)

10. First seccion shows your `Public key`. This is your public account address.

**Note**: Your profile picture is generated randomly.

![Image35](./images/polkadot-account/image35.png)

11. Next section is the `Mnemonic phrase` section. This is your mnemonic phrase. You will need it to recover your account if you lose your password. 

**Note**: Keep your mnemonic phrase secret and safe! Anyone who knows it can have full access to your account!

![Image36](./images/polkadot-account/image36.png)

12. Select the `Mnemonic` option from the dropdown menu and click on the `Clipboard` icon.

**Note**: The dropdown menu allows you to copy your `seed` as a mnemonic phrase or as a raw seed.  
![Image37](./images/polkadot-account/image37.png)

**Note**: Make sure to save your mnemonic phrase now, as there is no way to view it after the account is created.

13.  Then we have the `Advanced creation options` section. Don't worry about this section:

![Image38](./images/polkadot-account/image38.png)

14. Check the `I have saved my mnemonic seed safely` checkbox and click on the `Next` button.

![Image39](./images/polkadot-account/image39.png)

![Image40](./images/polkadot-account/image40.png)

15. Next screen should look like this:

![Image41](./images/polkadot-account/image41.png)

16.   Insert a descriptive name for your account. This name is only for you to identify your account inside your Polkadot extension. 

![Image42](./images/polkadot-account/image42.png)

17.  Next, introduce a password for your account:

![Image43](./images/polkadot-account/image43.png)

18.  Repeat the password:

![Image44](./images/polkadot-account/image44.png)

19. Click on the `Next` button.

![Image45](./images/polkadot-account/image40.png)

20. The next window will verify that the account has been created successfully. Click on the `Save` button.

![Image46](./images/polkadot-account/image45.png)

![Image47](./images/polkadot-account/image46.png)

21.    After clicking the `Save` button, a `JSON` file will be downloaded. Remeber to save this file in a secure place. 

![Image48](./images/polkadot-account/image47.png)

**Note**: If you forget your password, you can still access your account by using your mnemonic phrase or restoring your account using the `JSON` file. That's why it's important to save both your mnemonic phrase and the `JSON` file in a safe place.

22.  We're done! You have successfully created your first Polkadot account. 

![Image49](./images/polkadot-account/image48.png)

**Note**: As you can see, your new account is already funded with `0.0000 DOT`.

**Note**: Ensure that you have saved your mnemonic phrase and the `JSON` file in a safe place before buying DOTs. If you lose your mnemonic phrase or the `JSON` file, you will lose access to your account and your DOTs.