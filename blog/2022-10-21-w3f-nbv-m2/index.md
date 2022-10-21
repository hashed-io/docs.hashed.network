---
slug: nbv-m2
title: Native Bitcoin Vaults
authors: [max]
---

# Native Bitcoin Vaults (NBV)

## Summary
There are 3 key features of Native Bitcoin Vaults. 

1. Flexible policy engine for managing bitcoin with business rules
    - Uses Partially-Signed Bitcoin Transactions (PSBTs) to roll-up bitcoin spending proposals and approvals
    - Orchestrated by Substrate, integrated with bitcoin via off-chain workers
    - Bitcoin signing compatible with many convenient signers, from highly secured airgapped signers to not-very-secure 'Sign with Google' for the web3 experimenter.
2. Verifiable receiving addresses
    - Bitcoin senders can independently verify a receiving address for a specific vault, such as an elected council based on the democracy pallet. 
    - Generate a new receiving address for each UTXO
3. Integration with other Hashed Network features 
    - Triple entry accounting platform allows businesses to natively assign bitcoin sends and receipts to General Ledger accounts such as Income and Expenses.
    - Integration with Confidential Documents, which allows users to securely encrypt, save, and share data that corresponds to a vault or journal entries. 

There are 3 key 'reasons to believe' NBV is useful. 

1. More businesses are adopting bitcoin on their balance sheet. 
2. NBV is real, simple, pure bitcoin. That's what people want. 
3. The market for approval and payment tools is robust.

# Features 
### Flexible Policy Engine 

Bitcoin is a UTXO-based blockchain (as opposed to account-based, like Polkadot), and in the early days, we would send bitcoin to the same address over and over again. However, it is more privacy-preserving to generate a new receiving address for every transaction, which has become the norm now. Each receiving address is transformed into a UTXO as soon as it receives a payment. 

Each UTXO has a pre-determined, Substrate-orchestrated configuration for set of potential signers and threshold. This creates a lot of flexibility for use cases such as budgeting funds to sub-groups or task forces, paying invoices based on requested drawdowns, and using higher security signers for larger UTXOs.

To spend the UTXO, Substrate compiles the Paritally Signed Bitcoin Transactions (PSBTs) together, and when ready, broadcasts it to the Bitcoin network. PSBTs were introduced in [BIP-174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki) and are implemented in many wallets including Bitcoin Core. NBV also uses output descriptors extensively, which is also a broadly supported standard for describing UTXOs in a composable fashion.

Using standards like these means that there are many available signers, such as ColdCard, BlueWallet, or libraries such as [Bitcoin Dev Kit](https://bitcoindevkit.org/). Users can also sign with a key stored in Confidential Documents (sign via polkadot.js), our own Hashed Wallet, or even 'Sign with Google' for the web3 experimenter or casual user.

### Verifiable Receiving Addresses 

There are two primary attacks as it relates to bitcoin. Either a hacker finds your secret, or the sender is tricked into sending bitcoin to an address for which the hacker has the secret. NBV addresses the latter. 

The generated receiving addresses can be cryptographically verified by senders from other vaults or senders using any compatible bitcoin wallet. For example, if a set of treasurers were elected using the `democracy` pallet, they could begin receiving contributions immediately and seamlessly rather than the worrisome trouble of having them coordinate together separately to generate receiving addresses. 

### Integration with Hashed Network Features

Verifiability is secure. However, some bitcoin vaults wish to remain private. NBV supports integration with Confidential Documents, which allows users to safely encrypt and share data such as the output descriptors, wallet metadata, receiving addresses, and vault documents. 

NBV also integrates with the triple-entry accounting tools on Hashed Network. This platform allows businesses to natively assign bitcoin sends and receipts to General Ledger accounts such as Assets and Expenses, enabling Income Statements and Balance Sheets.

# Reasons to believe

Most bitcoin layers that I've seen on programmable blockchains, such as Ethereum and Polkadot, have an element of custody/trust, peg tokens, or collateral backing. They are usually engineered by people much smarter than me, and I'm not qualified to opine on how secure they are. 

I think people want real bitcoin though. Real, simple, pure bitcoin. Especially for large amounts often seen in business treasuries or managed by governance teams.

In 2021, companies such as Tesla and Microstrategy adopted bitcoin as a treasury asset, many of which described in this [Cointelegraph article](https://cointelegraph.com/news/the-bitcoin-boom-the-future-of-the-company-balance-sheet). We believe this trend will continue and accelerate in the coming years. 

Valuations for companies such as Fireblocks, [which raised $550 million on a valuation of $8 billion](https://www.prnewswire.com/news-releases/fireblocks-raises-550-million-in-series-e-funding-to-become-the-highest-valued-digital-asset-infrastructure-provider-301469630.html), suggest that there is a market for payment approval, coordination, and broadcast.

<div style={{textAlign: 'center'}}>

<iframe width="560" height="315" src="https://www.youtube.com/embed/kn_eqC07wao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

# Road Map
There are 3 key focus areas on the road map: 

1. Short term focus is usability for basic treasury activities 
2. Migrate from off-chain worker BDK-integration to WASM
3. Integrate additional signers

<div style={{textAlign: 'center'}}>

![image](../2022-10-17-independence/node-operator.png)

</div>


