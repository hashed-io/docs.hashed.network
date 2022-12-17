---
title: Hashed Network vs Fireblocks Comparison
tags:
  - NBV
  - bitcoin
slug: nbv-comparison
authors: [max, augusto]
---
<head>
  <title>Hashed Network vs Fireblocks Comparison</title>
  <meta charSet="utf-8" />
  <meta property="og:image" content="https://docs.hashed.network/img/monolith.png" />
  <meta property="og:description" content="Detailed head-to-head comparison between Hashed Network and Fireblocks" />
  <meta property="og:title" content="Hashed Network vs Fireblocks Comparison" />
  <meta property="og:url" content="https://docs.hashed.network/blog/nbv-comparison" />
</head>

## What is Fireblocks? 

> "Fireblocks is an easy to use platform to create new blockchain based products, and manage day-to-day digital asset operations." 
> -- Fireblocks.com

The Fireblocks platform has a large presence and the general use case so similar, it serves as a helpful comparison when explaining Hashed Network's bitcoin orchestration and Native Bitcoin Vaults. 

Fireblocks is a commercial, closed-source platform for handling multisignature transactions, generating receiving addresses through a verified business network, and interfacing to Defi applications. It allows organizations' administrators to add and manage users and configure corresponding spending permissions. See more about their [policy engine](https://www.fireblocks.com/platforms/governance-%e2%80%a8policy-engine/).

There is a corresponding mobile application for approving transactions. This app receives push notifications when a spend requires a user's approval, and then they are able to approve directly in the app.

The platform supports an [Integrations network](https://www.fireblocks.com/integrations) that provides a wide breadth of compatibility and access to other service providers, including accounting/tax experts, AML partners, FIAT ramps, etc. 

A secure oracle application can run on an Intel SGX server and sign programmatically based on custom criteria.

### Multiparty Computation (MPC) as the secret sauce
Multiparty computation is an off-chain cryptographic algorithm that allows m-of-n key shares to be combined to produce the private key required for the transaction. The independent nature of the algorithm means that it is compatible with any secret and thus any blockchain. 

MPC does not expose signers on chain, but the data is persisted within the Fireblocks systems. 

### How secure is Fireblocks? 
This is unknown because the platform is closed-source.

# Hashed Network Bitcoin Orchestration

Bitcoin orchestration is a protocol hosted on the Hashed Network that performs all of the non-signing functions to safely and securely:  
- generate receiving addresses, 
- build and route partially-signed bitcoin transactions (PSBTs) to the correct signers, and 
- manage UTXOs via coin control, labels, and tags. 

Native Bitcoin Vaults uses bitcoin orchestration to release a user-facing application for business users, treasurers, and fund administrators.

## Key Similarities
### Direct and Self Custody
Both Fireblocks and Hashed Network encourage [direct custody](https://drive.google.com/file/d/1YJwp0TtCO8HUHuKfl7OFB51M8j9WYhKR/view?usp=sharing) or self custody. Many businesses use centralized exchanges to custody their digital assets, meaning that they are dependent on that custodian for safety and withdrawals. 

### Multisignature and Governance 
Both platforms support the ability for administrators to configure business rules for spending and handling assets.

### Verified Network of Businesses
Both platforms support a network of businesses with verified identities. Although the digital assets flow peer-to-peer on the native networks, verified profiles and dynamic address generation make remittance more secure and frictionless. 

## Key Differences
### Administrator Centralization
As a commercial application, each of Fireblocks customers have a singular administrator account. This is the account that has ultimate control over the activities of users under that administrator's purview. 

Hashed Network can be used with decentralized groups without a single administrator. 

### Asset Focus
Fireblocks supports over 40 protocols and what seems to be [thousands of tokens](https://www.fireblocks.com/integrations/tokens/). 

Hashed Network is focused primarily on bitcoin, but also supports limited USD stablecoins and DOT-native assets.

### Cryptography
Fireblocks uses closed source multiparty computation orchestrated via a closed source platform. MPC transactions cannot be executed with cold wallets. 

Hashed Network uses [BIP 174](https://en.bitcoin.it/wiki/BIP_0174), and the taproot upgrade, [BIP 340](https://en.bitcoin.it/wiki/BIP_0340), [BIP 341](https://en.bitcoin.it/wiki/BIP_0341), and [BIP 342](https://en.bitcoin.it/wiki/BIP_0342). These are Bitcoin Core protocols, and thus signing has wide support in variety of hot and cold signers. Substrate signing is separate from Bitcoin signing (although we will be integrating them into our app in 2023).

### Technology
Fireblocks is closed source so much is unknown.

Hashed Network is a [Substrate](https://substrate.dev) blockchain (and [prospective Polkadot parachain](https://polkadot.js.org/apps/#/parachains/crowdloan)). Accounts attest to extended public key(s) on Hashed Network, which can be used to generate many vaults. The pallets are used to manage the spending policies, share relevant data with confidential documents, assign/generate receiving addresses, and more. They use the rust [BitcoinDevKit](https://bitcoindevkit.org) library for Bitcoin cryptography and script generation, and off-chain workers to interact with the Bitcoin network.

Hashed Network does not use any wrapped-tokens, collateral-backed assets, paper bitcoin, or bridges. All of the Bitcoin transactions occur directly on the Bitcoin network for true self-custody.

## Side by Side Comparison Table

 ||Fireblocks|Hashed Network|
    |---|---|---|
    |Technology|Propreitary|Substrate-based|
    |Cryptography|Multiparty Computation (MPC)|Bitcoin Core [BIP 174](https://en.bitcoin.it/wiki/BIP_0174), and the taproot upgrade, [BIP 340](https://en.bitcoin.it/wiki/BIP_0340), [BIP 341](https://en.bitcoin.it/wiki/BIP_0341), and [BIP 342](https://en.bitcoin.it/wiki/BIP_0342)|
    |Asset Types|44 protocols and thousands of tokens|Bitcoin, selected USD stablecoins, and DOT-native|
    |User-facing Apps|Web app and mobile app for 2FA approvals|Web app and mobile app signer|
    |Compatible Signers|Only Fireblocks apps|Any Bitcoin signer, including hardware and air-gapped signers|
    |Verifiable Receiving Addresses|No|Yes|
    |Central Admin Required|Yes|No|
    |Decentralizable|No|Yes|
    |License|Propreitary/Closed|[MIT, Open-Source](https://github.com/hashed-io/hashed-substrate)|


