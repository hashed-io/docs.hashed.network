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

- [Introduction](#introduction)
- [**Polkadot browser extension**](#polkadot-browser-extension)
- [**Polkadot user interface (UI)**](#polkadot-user-interface-ui)
- [How to import your account into the Polkadot extension](#how-to-import-your-account-into-the-polkadot-extension)

---
## Introduction

The following tutorial covers `How to create a Polkadot account`. Let's start our journey!
Throughout this page you will see some words highlighted in [blue](#introduction), if you click on those words, you may be taken to an external website or directed to a section of this document.

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

<img alt="image0" src={require('./images/polkadot-account/image0.png').default} width="750px"/>

Once you are on the page, click on the "Download for Chrome" or "Download for Firefox" button, depending on which browser you are using.

2. It will take you to the Chrome Web Store or Firefox Add-ons page. Click on the "Add to Chrome" or "Add to Firefox" button.

**Chrome download**
<img alt="image1" src={require('./images/polkadot-account/image1.png').default} width="600px"/>

**Firefox download**
<img alt="image2" src={require('./images/polkadot-account/image2.png').default} width="600px"/>

**NOTE**: Sometimes a restart of your browser may be necessary for the extension to be fully loaded.

3. After installing the extension, you should see the orange and white Polkadot extension logo in your browser's menu bar. 

<img alt="image3" src={require('./images/polkadot-account/image3.png').default} width="250px"/>

4. Click on the Polkadot extension logo and you will see the following screen:
   
<img alt="image4" src={require('./images/polkadot-account/image5.png').default} width="400px"/>

5. Before starting the process of creating your first Polkadot account, read the notes then click the `Understood, let me continue` button. This will take you to the next screen:

<img alt="image5" src={require('./images/polkadot-account/image4.png').default} width="400px"/>

**Note**: Keep in mind if you do a click outside the Polkadot extension, it will close. If you want to open it again, you will have to click on the Polkadot extension logo again and repeat the **WHOLE** process.

6. Click the big plus button in the middle or the one in the top-right corner then select `Create new account`:

**Option 1**
<img alt="image6" src={require('./images/polkadot-account/image4.png').default} width="400px"/>

**Option 2**
<img alt="image7" src={require('./images/polkadot-account/image6.png').default} width="400px"/>

7. In the next screen, we can see a couple of interesting sections. 

<img alt="image8" src={require('./images/polkadot-account/image7.png').default} width="400px"/>

The first one is the `Account name` section. This name is only for you to identify your account inside your Polkadot extension. Default name is `<unknown>`. but you can change it in a later step.
<img alt="image9" src={require('./images/polkadot-account/image9.png').default} width="600px"/>

Below the `<Unknown>` text, you can see a large string of characters. This is your account address [Public Key](./polkadot-key-concepts.md#public-and-private-keys))
. You can copy it by clicking on the `Copy to clipboard` button.

**Note**: You don't need to copy it now, because as you can remember, if you click outside the Polkadot extension, it will close.

Next, you can see the `Mnemonic phrase` section. This is the most important part of the process. You will need to save this [mnemonic phrase](./polkadot-key-concepts.md#mnemonic-and-address-generation) in a safe place. If you lose it, you will lose access to your account.

<img alt="image10" src={require('./images/polkadot-account/image10.png').default} width="600px"/>

**Note**: Next you can see the `Copy to clipboard` button. If you click on it, it will copy the mnemonic phrase to your clipboard. You can paste it in a text editor LATER (remember the extension closing problem). 

<img alt="image11" src={require('./images/polkadot-account/image11.png').default} width="260px"/>

Next section is a warning. It says that if you lose your mnemonic phrase, you will lose access to your account. This is true, so make sure to save it in a safe place.

<img alt="image12" src={require('./images/polkadot-account/image12.png').default} width="500px"/>

**Note**: Keep your mnemonic phrase secret and safe! Anyone who knows it can have full access to your account!

Finally, you need to check the `I have saved my mnemonic seed safely` checkbox. 

<img alt="image13" src={require('./images/polkadot-account/image13.png').default} width="600px"/>

After that, you can click on the `Next Step` button.

<img alt="image14" src={require('./images/polkadot-account/image14.png').default} width="600px"/>

8. Next, you will see a screen with your account information:

<img alt="image15" src={require('./images/polkadot-account/image15.png').default} width="400px"/>

Again, the first section is the `Account name` section. 

<img alt="image16" src={require('./images/polkadot-account/image9.png').default} width="600px"/>

9. Next section is `Network` section. This is the network your account is connected to. At this point you can choose to use the account on any chain or allow it for a specific chain only, from the drop-down menu. Select the `Allow use on any chain` option:

<img alt="image17" src={require('./images/polkadot-account/image16.png').default} width="700px"/>

10. Next section is the `Name` section. Remember, the name is only for you to identify your account inside your Polkadot extension. Give it a name a descriptive name, so you can easily identify it later, i.e. `Alice Keys` or `Proxy Investor`:

<img alt="image18" src={require('./images/polkadot-account/image18.png').default} width="700px"/>

11. After you have given your account a name, you will notice that the `<Unknown>` text in the `Account name` section has changed.

<img alt="image19" src={require('./images/polkadot-account/image19.png').default} width="600px"/>

12.   Next, the `Password` section. You will need to enter this password when signing any transaction with your account, so make sure to remember it.

<img alt="image20" src={require('./images/polkadot-account/image20.png').default} width="700px"/>

**Note**: The password isn't stored anywhere and we can't recover it for you. It's only used to encrypt your account locally on your computer. It does not protect your mnemonic phrase!

13. After you have entered your password, you will see a `Confirm password` section. You need to enter the same password again to confirm it.

<img alt="image21" src={require('./images/polkadot-account/image21.png').default} width="600px"/>

**Note**: If you forget your password, you can still access your account by using your mnemonic phrase. That's why it's important to save the mnemonic phrase in a safe place.

14.  If your passwords match, you will see that the `Add the account with the generated seed` button is now enabled. Click on it.

<img alt="image22" src={require('./images/polkadot-account/image22.png').default} width="600px"/>

<img alt="image23" src={require('./images/polkadot-account/image23.png').default} width="600px"/>

15. After clicking the button, you will see the following screen:

<img alt="image24" src={require('./images/polkadot-account/image24.png').default} width="500px"/>

**Note**: At this point, you can close the Polkadot extension and paste your mnemonic phrase in a text editor or a password manager.

16.  We're done! You have successfully created your first Polkadot account. You can now close the Polkadot extension and start using your account.

----

## **Polkadot user interface (UI)**

**Note**: Next guide is about the Polkadot-JS user interface (UI) method.For most users, we strongly recommend using the Polkadot browser extension instead. If you'd like to continue with this method, here are the steps.

**The Polkadot extension is the best way to manage your accounts, as it has many advantages**:

- It provides better security than using the Web UI directly
- Your browser won't "forget" your accounts if its cookies are cleared
- It allows you to interact with any Web 3.0 compatible site in the Polkadot ecosystem
- The extension recognizes all known Polkadot (and not only) scams and alerts you when you access a phishing site. This will help you protect yourself and your funds.

1. Go to the [Polkadot{.js} user interface (UI)](https://polkadot.js.org/), you will see the following screen:

<img alt="image25" src={require('./images/polkadot-account/image25.png').default} width="600px"/>

2. Then select the `apps wallet (hosted)`, the top left option:

<img alt="image26" src={require('./images/polkadot-account/image26.png').default} width="400px"/>

3. If this is your first time using the Polkadot{.js} user interface (UI), you will see the following screen from the Polkadot extension:

<img alt="image27" src={require('./images/polkadot-account/image27.png').default} width="500px"/>

4. Click on the `Yes, allow this application access` button.

<img alt="image28" src={require('./images/polkadot-account/image28.png').default} width="400px"/>

5. Next, you will see the main screen of the Polkadot{.js} user interface (UI).

<img alt="image29" src={require('./images/polkadot-account/image29.png').default} width="800px"/>

6. Next, you will see the `Accounts` section in the top left corner, click on the dropdown menu and select the `Accounts` option:

<img alt="image30" src={require('./images/polkadot-account/image30.png').default} width="600px"/>

<img alt="image31" src={require('./images/polkadot-account/image31.png').default} width="600px"/>

7. After that, you will see the following screen:

<img alt="image32" src={require('./images/polkadot-account/image32.png').default} width="800px"/>

8. Next, you will see the `Add account` button. Click on it.

<img alt="image33" src={require('./images/polkadot-account/image33.png').default} width="300px"/>

9. After clicking the button, a popup window will appear:

<img alt="image34" src={require('./images/polkadot-account/image34.png').default} width="650px"/>

10. First seccion shows your `Public key`. This is your public account address.

**Note**: Your profile picture is generated randomly.

<img alt="image35" src={require('./images/polkadot-account/image35.png').default} width="500px"/>

11. Next section is the `Mnemonic phrase` section. This is your mnemonic phrase. You will need it to recover your account if you lose your password. 

**Note**: Keep your mnemonic phrase secret and safe! Anyone who knows it can have full access to your account!

<img alt="image36" src={require('./images/polkadot-account/image36.png').default} width="800px"/>

12. Select the `Mnemonic` option from the dropdown menu and click on the `Clipboard` icon.

**Note**: The dropdown menu allows you to copy your `seed` as a mnemonic phrase or as a raw seed.

<img alt="image37" src={require('./images/polkadot-account/image37.png').default} width="250px"/>

**Note**: Make sure to save your mnemonic phrase now, as there is no way to view it after the account is created.

13.  Then we have the `Advanced creation options` section. Don't worry about this section:

<img alt="image38" src={require('./images/polkadot-account/image38.png').default} width="600px"/>

14. Check the `I have saved my mnemonic seed safely` checkbox:

<img alt="image39" src={require('./images/polkadot-account/image39.png').default} width="600px"/>

and click on the `Next` button.

<img alt="image40" src={require('./images/polkadot-account/image40.png').default} width="250px"/>

15. Next screen should look like this:

<img alt="image41" src={require('./images/polkadot-account/image41.png').default} width="800px"/>

16.   Insert a descriptive name for your account. This name is only for you to identify your account inside your Polkadot extension. 

<img alt="image42" src={require('./images/polkadot-account/image42.png').default} width="800px"/>

17.  Next, introduce a password for your account:

<img alt="image43" src={require('./images/polkadot-account/image43.png').default} width="800px"/>

18.  Repeat the password:

<img alt="image44" src={require('./images/polkadot-account/image44.png').default} width="800px"/>

19. Click on the `Next` button.

<img alt="image46" src={require('./images/polkadot-account/image40.png').default} width="250px"/>

20. The next window will verify that the account has been created successfully. Click on the `Save` button.
<img alt="image47" src={require('./images/polkadot-account/image45.png').default} width="800px"/>

21. Click on the `Save` button.

<img alt="image48" src={require('./images/polkadot-account/image46.png').default} width="300px"/>

22. After clicking the `Save` button, a `JSON` file will be downloaded. Remeber to save this file in a secure place. 

<img alt="image49" src={require('./images/polkadot-account/image47.png').default} width="220px"/>

**Note**: If you forget your password, you can still access your account by using your mnemonic phrase or restoring your account using the `JSON` file. That's why it's important to save both your mnemonic phrase and the `JSON` file in a safe place

23.  We're done! You have successfully created your first Polkadot account. 

<img alt="image50" src={require('./images/polkadot-account/image48.png').default} width="900px"/>

**Note**: As you can see, your new account is already funded with `0.0000 DOT`.

**Note**: Ensure that you have saved your mnemonic phrase and the `JSON` file in a safe place before buying DOTs. If you lose your mnemonic phrase or the `JSON` file, you will lose access to your account and your DOTs.

---

## How to import your account into the Polkadot extension

---
In order to import your account into the Polkadot extension, you need to have your backup `JSON` file.

1.   Open the Polkadot extension.
   
<img alt="image51" src={require('./images/polkadot-account/image4.png').default} width="450px"/>

2.  Click on the `Plus` button located in the top right corner of the Polkadot extension.

<img alt="image52" src={require('./images/polkadot-account/image49.png').default} width="500px"/>

3.  A dropdown menu will appear:

<img alt="image53" src={require('./images/polkadot-account/image50.png').default} width="500px"/>

Select the `Restore account from backup JSON file` option.

<img alt="image54" src={require('./images/polkadot-account/image51.png').default} width="500px"/>

**Note**: A new tab will open. Make sure to keep this tab open, while you import your account.

4. New tab will look like this:

<img alt="image55" src={require('./images/polkadot-account/image52.png').default} width="400px"/>

5. As the text says, `Click or drag and drop the JSON file here` to import your account. If you click the button, a file explorer will open, navigate to the folder where you saved your `JSON` file and select it.

<img alt="image56" src={require('./images/polkadot-account/image53.png').default} width="500px"/>


6. Next, you will see the following screen:

<img alt="image57" src={require('./images/polkadot-account/image54.png').default} width="500px"/>

7. Insert the password you used to create your account.

<img alt="image58" src={require('./images/polkadot-account/image55.png').default} width="600px"/>

8. Click on the `Restore` button.

<img alt="image59" src={require('./images/polkadot-account/image58.png').default} width="500px"/>

9. Now your Polkadot account is imported into the Polkadot extension. 

<img alt="image60" src={require('./images/polkadot-account/image56.png').default} width="500px"/>

To verify that your account has been imported successfully, click on the Polkadot extension icon (top right corner):

<img alt="image61" src={require('./images/polkadot-account/image57.png').default} width="500px"/>

10.   We're done! You have successfully imported your account into the Polkadot extension.

<img alt="image62" src={require('./images/how-to-login/im3.png').default} width="500px"/>