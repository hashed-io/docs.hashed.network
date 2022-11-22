---
title: HASH Usage
sidebar_position: 2
tags:
  - HASH
  - Token
  - Tokenomics
---

*The purpose of HASH is to proactively and automatically manage the health of the network through programmatic incentives.*

Mechanisms that burn or reserve HASH are:

### Transaction Fees
Transaction fees support the health of the Network by inflicting a cost of attack. These fees make it expensive for adversaries to generate high volumes of meaningless transactions, thus thwarting the attempted attack.

Transaction fees are typically a function of the size of a transaction (in bytes), time it takes to run the transaction, the amount of memory used, and the amount of on-chain storage required. The fees may fluctuate subtly over time based on the amount of space utilized in each block (the number of transactions).  As the network becomes more congested, the fees rise to encourage some users to wait to process transactions when there is less congestion.

Hashed Network allows marketplaces administrators and dapps to pay transaction fees on behalf of users and monetize the delta in a more convenient manner.

### Slashing HASH
As operations become more decentralized, slashing undesired behavior ensures the network can thwart attacks and ensure operators maintain high service levels.

### Reserving HASH
Many on-chain actions require that data be stored for a long period of time. For example, if a user creates a new marketplace, they must store its name, description, and related configuration parameters. Yet, at some point in the future, the user may decide to close the marketplace. 

HASH is locked, or *reserved*, for the duration that the storage is needed, and then released back to the user when the storage is evacuated.

### Marketplace Protocol
Any HASH token holder can create a new marketplace on the Hashed Network, giving them the authority to specify the participants allowed in the marketplace and also the origination and commission rates.

When a marketplace asset is originated or sold, commission is paid to the marketplace owner. In this same transaction, 10% of the commission amount, in HASH, is burned.

For example, if the commission on an order is $100 and the HASH value is $0.25, 40 HASH tokens will be burned. The marketplace protocol supports a number of mechanical methods for how this burn occurs.

1. Marketplace owner may specify a stash account where the HASH is burned from.
2. The amount can be deducted from the order itself, similar to commission, where USD can be automatically converted to HASH (purchasing it from a seller), and then burned.
3. The HASH can be burned from the seller.
4. The HASH can be burned from the buyer.

If the selected option has insufficient HASH to cover the burn, the transaction will fail.

This burn protocol maintains the health of Hashed Network marketplaces by aligning economic incentives among protocol developers and market participants. 

:::caution

The most accurate information about tokenomics and governance is on-chain. 
:::
