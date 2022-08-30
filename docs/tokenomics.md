---
title: Tokenomics (out of date)
sidebar_position: 3
tags:
  - HASH
  - Token
  - Tokenomics
---

> TODO: Needs to be updated with parachain tokenomics. 

The purpose of HASH is to proactively and automatically manage the health of the network through programmatic incentives.

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