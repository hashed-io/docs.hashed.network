---
title: Marketplaces
sidebar_position: 40
tags:
  - Marketplace
  - Tokenomics
---

Hashed Network features an elegant, practical feature set for hosting marketplaces.

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

## Privacy Preserving Storage
Users can save data on the environment that is encrypted, and selectively decide which other users on the Network can view it. They can attach data linked to assets, marketplace applications/member requests, orders, etc. 

The data may be any files, plaintext, json, or markdown, etc. 

## Settlement
Compatible with: 
- Bitcoin
- Stablecoins
- USD/Banks
- Unspecified
- 

## Data Structures

### Structs

| Marketplace |
|--|
|label: BoundedVec\<pre>u8</pre>|




|Application|
|--|
|status: ApplicationStatus|
|fields: BoundedVec\<pre>ApplicationField</pre>|
|feedback: BoundedVec\<pre>u8</pre>|





|ApplicationField|
|--|
|display_name|



|ApplicationField|
|--|
|display_name|


--- 

### Enumerators

|ApplicationStatus|
|--|
|Pending|
|Approved|
|Rejected|




|MarketplaceAuthority|
|--|
|Owner|
|Admin|
|Appraiser|
|RedemptionSpecialist|




|AccountOrApplication|
|--|
|Account(T::AccountId)|
|Application([u8;32])|




|AccountOrApplication|
|--|
|Open|
|Closed|




|OfferData|
|--|
|marketplace_id: [u8,32]|
|collection_id: u32|
|item_id: u32|
|creator: AccountId|
|price: u128|
|status: OfferStatus|
|creation_date: timestamp|
|expiration_date timestamp + 7 days|
|type: OfferType|
|buyer: Option<(AccountId, Marketplace_id)>|


---

### Storage Maps

|Marketplaces ||
|--|--|
|Key| marketplace_id: [u8;32]|
|Val|Marketplace|




Applicants by marketplace||
|--|--|
|key1| marketplace_id: [u8;32]|
|key2|ApplicationStatus|
|val|BoundedVec\<pre>AccountId</pre>|




|Applications||
|--|--|
|key1| application_id: [u8;32]|
|val|Application|




|Applications by account||
|--|--|
|key1| account: AccountId|
|key2|marketplace_id: [u8;32]|
|val|application_id: [u8;32]|




|Custodians||
|--|--|
|key1| account: AccountId|
|key2|marketplace_id: [u8;32]|
|val|Vec\<pre>AccountId</pre>|




|OffersByAccount||
|--|--|
|key1| account: AccountId|
|val|Offer_id's: Boundedvec\<[u8;32]> |




|OffersByMarketplace||
|--|--|
|key1| marketplace_id: [u8;32]|
|val|Offer_id's: Boundedvec\<[u8;32]> |


|OffersByMarketplace||
|--|--|
|key1| offer_id: [u8;32]|
|val|Offer: OfferData\<pre>T</pre> |


---

## Queries
|Description|polkadot-js|Returns|
|--|--|--|
|get marketplace|marketplaces(id)|[Marketplace]|
|get all marketplaces|marketplaces.entries()|[(marketplace_id, Marketplace)]|
|get user's roles on a specific market|rbac.rolesByUser(account,pallet_id, marketplace_id)|[role_id]|
|get user's roles on all markets|rbac.rolesByUser.entries(account_id)|[((account_id, pallet_id, marketplace_id),[role_id's])]|
|get all users' roles on all markets|rbac.rolesByUser.entries()|[((account_id, pallet_id, marketplace_id),[role_id's])]|
|get marketplace specific authorities|rbac.usersByScope(pallet_id,marketplace_id, role_id)|[account_id]|
|get all marketplace's authorities (grouped by roles)|rbac.usersByScope.entries(pallet_id,marketplace_id)|[((pallet_id, scope_id, role_id), [account_id])]|
|get all authorities (grouped by markets and roles)|rbac.usersByScope.entries(pallet_id)|[((pallet_id, scope_id, role_id), [account_id])]|
|get application|applications(application_id)|[Application]|
|get all applications|applications.entries()|[(application_id, Application)]|
|get marketplaces' applicants by specific status|applicants_by_marketplace(marketplace_id, ApplicationStatus)|[account_id]|
|get marketplaces' applicants (grouped by status)|applicants_by_marketplace.entries( marketplace_id)|[(ApplicationStatus, [account_id])]|
|get all applicants (grouped by marketplaces and status)|applicants_by_marketplace.entries()|[(marketplace_id, ApplicationStatus, [acocuntId])]|
|get user's marketplace application|applications_by_account(account_id, marketplace_id)|[application_id]|
|get all user's applications (grouped by marketplace)|applications_by_account.entries( account_id)|[(marketplace_id, application_id )]|
|get all applications (grouped by account and marketplaces)|applications_by_account.entries()|[(account_id, marketplace_id, application_id )]|
|get offer info|offersInfo(offer_id)|OfferData|
|get all offers|offersInfo.entries()|[(offer_id, OfferData)]|
|get offers by account|offersByAccount(account_id)|[offer_id's]|
|get all offers grouped by accounts|offersByAccount.entries()|[(AccountId, [Offer_id's])]|
|get offers by marketplace|offersByMarketplace(marketplace_id)|[Offer_id's]|
|get offers from all marketplaces|offersByMarketplace.entries()|[(marketplace_id,[offer_id's])]|
|get offer id's by item|offersByItem(collection_id,item_id)|[offer_id's]|
|get all offer id's by item|offersByItem.entries()|[((collection_id, item_id), [offer_id's])]|

