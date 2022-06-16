---
title: Tokenomics
tags:
  - HASH
  - Token
  - Tokenomics
---

The native token of the Luhn (Kusama) and Hashed (Polkadot) Networks are LUHN and HASH, respectively. Each token behaves exactly the same unless otherwise specified. For brevity, it will be referred to as HASH throughout the documentation.

The purpose of HASH is to proactively and automatically manage the health of the network through programmatic incentives.

### Operations and Validators
Like all computing networks, Hashed Network requires servers with capabilities for network, storage, and processing. These servers are permissionless, meaning anyone can join, and they operate globally. Every 3 seconds, a new block is generated and a small amount of HASH is provided to the validator that generated the block as a reward. This HASH amount is born from the network, and it does not exist until the block is created.

#### Who decides who gets to build the block?
HASH token holders select, or *nominate*, validators of their choosing. Validators can specify a share of the block reward that they will keep (the *commission*) and the rest will go back to their nominators, proportional to the nominators' staked HASH amounts.

Nominators often use the commission amount to decide which validators to choose (the smaller the commission, the larger the reward for the nominator). However, validators can also be *slashed* for poor performance, such as going offline or building invalid blocks. When this happens, the nominators lose some of their HASH tokens. The commission rate, operational performance, and a validator's standing relative to its peers all contribute to how nominators select validators.

To learn more about Nominators, see the [Polkadot Wiki](https://wiki.polkadot.network/docs/learn-nominator).

### Inflation
As mentioned above, new HASH to go to the validator and nominator is minted with every block. This is critical to the health of the network, and it continues in perpetuity. The amount of HASH reward for each block is a function of the % of total HASH tokens are staked at that moment. 

Since staked HASH secures the network, more tends to be better. However, if it rises too far, it loses liquidity. There is a  curve that governs the reward amount with the intent of keeping the staked HASH at an optimal level of 50%.

The graph below shows the inflation rate (also known as the APR for staking) on the y-axis and the staking rate on the x-axis. When staking is low (e.g. 10% of all HASH), the reward for staking is very high to encourage token holders to stake to secure the network. Yet, to maintain liquidity, the reward sharply decreases as the staking rate grows above 50%.
![image](https://user-images.githubusercontent.com/32852271/174104100-dddbcf93-94fe-4d51-a027-e293210ff54b.png)

For more information on the tokenomics of staking and nominating, see the [Web 3 Foundation Research](https://research.web3.foundation/en/latest/polkadot/overview/2-token-economics.html).

### Transaction Fees
Transaction fees are critical for the security of networks. Without fees, there is no cost to attack the network using a [denial-of-service attack](https://www.paloaltonetworks.com/cyberpedia/what-is-a-denial-of-service-attack-dos), and the health of the network will be compromised. These fees make it expensive for adversaries to generate high volumes of meaningless transactions, thus thwarting the attempted attack.

Transaction fees are typically a function of the size of a transaction (in bytes), time it takes to run the transaction, the amount of memory used, and the amount of on-chain storage required. The fees may fluctuate subtly over time based on the amount of space utilized in each block (the number of transactions).  As the network becomes more congested, the fees go up to encourage some users to wait to process transactions when there is less congestion.

### Reserved HASH
Many on-chain actions require that data be stored for a long period of time. For example, if a user creates a new marketplace, they must store its name, description, and related configuration parameters. Yet, at some point in the future, the user may decide to close the marketplace. For these scenarios, HASH is typically reserved.

HASH is locked, or *reserved*, for the duration that the storage is needed, and then released back to the user when the storage is evacuated.

### Marketplace Protocol
Any HASH token holder can create a new marketplace on the Hashed Network, giving them the authority to specify the participants allowed in the marketplace and also the origination and commission rates.

When a marketplace asset is originated or sold, commission is paid to the marketplace owner. In this same transaction, 10% of the commission amount, in HASH token, is burned.

For example, if the commission on an order is $100 and the HASH value is $0.25, 40 HASH tokens will be burned. The marketplace protocol supports a number of mechanical methods for how this burn occurs.

1. Marketplace owner may specify a stash account where the HASH is burned from.
2. The amount can be deducted from the order itself, similar to commission, where USD can be automatically converted to HASH (purchasing it from a seller), and then burned.
3. The HASH can be burned from the seller.
4. The HASH can be burned from the buyer.

If the selected option has insufficient HASH to cover the burn, the transaction will fail.

This burn protocol is instrumental in maintaining the health of Hashed Network marketplaces. It establishes deflationary pressure on the HASH token by reducing supply which drives value to tokenholders. Yet, since Hashed Network is open source and voluntary, it establishes ongoing accountability for the network to provide continuous value or else marketplace owners will go elsewhere.