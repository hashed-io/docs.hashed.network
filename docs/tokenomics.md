---
title: Tokenomics
sidebar_position: 3
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
Many on-chain actions require that data be stored for a long period of time. For example, if a user creates a new marketplace, they must store its name, description, and related configuration parameters. Yet, at some point in the future, the user may decide to close the marketplace. 

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

## Genesis Allocation
:::caution

Cohort analysis is still in process and will be finalized soon.

:::
As with all parachains, Hashed Network has an initial token quantity, allocations, and vesting periods codified into the first block. 

The allocations of these tokens were decided based on a cohort analysis of all the parachains listed on [parachains.info](https://parachains.info), a useful database for viewing parameters and information about parachains and parachain candidates.

We used a 4-step process for the analysis to derive the genesis allocations:
1. Data collection - recorded the genesis allocations for each parachain and candidate (n=170)
2. Data cleansing - labels used for the allocations (pie charts) are inconsistent across chains, so we mapped each of the allocations into a consistent structure (as defined below)
3. Aggregate and score - with a clean data set, we were able to aggregate all parachains into a consistent score for each allocation category.
4. Overlay new information - using the aggregate "mash-up" of our cohorts to set the starting point, we then overlaid any Hashed Network diffirientators, and applied that knowledge to make small, defensible adjustments.

### Allocation Categories
 |Category|Subcategory|Definition|
    |---|---|---|
    |Founding Team|
    ||Founding Team|Individuals responsible for building the open source software for Hashed Network|
    |Investors|
    ||Seed Round|Initial round of fundraising|
    ||Subsequent Round|Second and subsequent round(s) of fundraising|
    |Budgets|
    ||Community|Funds allocated to energize and support general token holders and ambassadors (“fans”)|
    ||Ecosystem|Funds allocated to support applications and organizations using Hashed Network (“users”)|
    ||Marketing|Funds allocated to drive awareness of the benefits and features of the Hashed Network|
    ||Development|Funds allocated to continue building the base protocol, pallets, and network services|
    |Parachain|
    ||Crowdloan|Rewards paid to accounts that contribute to a crowdloan resulting in a successful parachain lease|
    ||Auctions|Funds allocated to directly swap or stake for a parachain slot|
    |Reserve|
    ||Reserve|Funds with no specific allocation, such as *treasury* or *reserve*|
    

### Cohort Allocations
The following pie chart shows the **mash-up** of genesis allocations of all other parachains and parachain candidates.

![image](https://user-images.githubusercontent.com/32852271/174317051-4f9ee4ab-6f95-400b-acb7-1d9afdbe0b6b.png)

### Overlay Considerations
Using the cohort allocations as a starting point, we then established the key diffirientiators of Hashed Network relative to our cohorts and adjusted the amounts accordingly.

#### Launch Partners
Hashed Network is launching with partners that will be providing products and services to users. These parties would typically fall into the **Ecosystem** category. Since they are instrumental to the success of the network and establishing momentum, we have assigned 75% of the **Ecosystem** allocation directly to the Launch Partners.

#### Service Providers
Hashed Network supports some key *back-bridge* integrations, such as partnerships with KYC and financial service providers. These parties have off-chain pricing models and other legacy constructs, such as legal entities and licenses, that must be paid in fiat. 

Although **Community** is always critical in establishing support for projects, we feel that since Hashed Network is mostly for businesses as opposed to consumers (as might be found with an artwork- or gaming-related parachain), we can reduce this allocation to cover Service Providers.

So, we reduced **Community** to 5.2% and created a new allocation for **Service Providers**.

#### Crowdloan
Hashed Network plans to pursue a crowdloan to secure a parachain slot rather than bidding on a slot directly, so we have moved funds from **Auction** to **Crowdloan**.

### HASH Allocations
The final allocations for the LUHN token (Kusama) are below. If new information or additional considerations become known prior to the launch of the HASH token (Polkadot), that information may be applied prior to finalizing that genesis token allocation.

### Vesting
- Founding Team allocation will vest 5% at the initial block, and then linearly over the subsequent x blocks, or 4 years.
- Launch Partners allocation will vest 5% at the initial block, and then linearly over the subsequent x blocks, or 4 years.
- Ecosystem and Community allocations will vest 20% at the initial block, and then linearly over the subsequent x blocks, or 2 years.
- Seed Round will vest 0% at the initial block, and then linearly over the next 2 years.
- Crowdload rewards will vest linearly over the duration of a successful parachain slot lease.