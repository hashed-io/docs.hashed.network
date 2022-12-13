---
title: Marketplaces
sidebar_position: 40
tags:
  - Marketplace
---

Moderated Marketplaces enables users to create and administer a permissioned or permissionless space for buyers and sellers to operate. The creator establishes the rules of the marketplace, such as the onboarding process, approval of applicants to be admitted to the marketplace, establishing initial notaries or underwriters for assets, and performing various administrative duties. 

> Note that the marketplace is NOT permissioned by the Hashed Network layer, but rather by other users, which is generally desired by users and maps to a mental model that users are familiar with. 

Most users don’t want to interact with a protocol or a smart contract directly. Moderated marketplaces enable a commercial layer for entrepreneurs to contextualize and originate assets. 

## Marketplace Roles
Each marketplace has an owner and administrator. 

### Owner
Owner is required and enforced from signer. The owner may change the administrator. Owner is also a required signer to erase a marketplace, and specify accounts to use for commission payments, protocol fees, etc. 

### Administrator
The Marketplace Administrator can approve:
- new market participants being allowed to originate assets or place orders
- new asset graders/appraisers
- new redemption specialists 

### Asset Grader/Appraiser
This role has the authority to add a grade, score, or boolean to an asset. An asset may have many grades, and graders can edit their own, but graders may not have multiple simultaneous grades of the same asset.

There may be many of these roles, and they can set the price for their services.

### Redemption Specialist
This role is responsible for transforming the on-chain asset into the IRL asset. For example, to be redeemed, a tax credit NFT needs to be assigned to an identity and submitted to (IRS or states?). Or an asset may need to be mailed from a warehouse.

There may be many of these roles, and they can set the price for their services.

### Market Participant
This roles has the authority to originate and purchase assets.

### Arbitrator
This role has the authority to release escrowed funds in the case of a dispute. 

## Fractionalizable
Each asset is infinitesimally fractionalizable. An asset starts as a single whole asset; n=1. The asset has an amount value. An asset owner can spawn a new asset from the original, parent asset and specify the amount value of the child. The pallet enforces the hierarchical math of the amount value on each spawn. 

Children can inherit attributes from their parents, override them (if permitted by attribute-creator), or add new ones.

An example asset is a harvest of corn for a season. The farmer creates it as an asset measuring bushels, and then sells down that harvest by selling a few bushels at a time.

## Support for DAO LLC Shares as Tokens
Last year, Wyoming’s DAO LLC bill became effective, meaning businesses, or DAOs, can register in Wyoming as a Limited Liability Company while existing as digitally-native and/or decentralized. 

We purchased 35 acres of real estate in Wyoming as an LLC, and the ownership of that business is directly tokenized on-chain to certify final settlement of the share. That particular business, Kitchen Lands DAO LLC, was tokenized to a 100 shares and those shares are transferable peer-to-peer wholly on-chain. For detailed, 

A Moderated Marketplace owner could establish a gated or invite-only market that only allows  certain types of tokens, such as those representing ownership in a Wyoming DAO LLC. An LLC has personhood, or ownership rights, so it can own any type of assets or real property, including other companies. 

## Privacy Preserving Storage
Users can save data on the environment that is encrypted, and selectively decide which other users on the Network can view it. They can attach data linked to assets, marketplace applications/member requests, orders, etc. 

The data may be any files, plaintext, json, or markdown, etc. 

## Settlement
Compatible with: 
- Bitcoin
- Stablecoins
- USD/Banks
- Unspecified
