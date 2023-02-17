---
title: General Architecture
sidebar_position: 1
---


**Repositories**
(all MIT licensed)
| Component | Repo | Language |
| ----- | ----------- | ------- |
| Afloat Client API | https://github.com/hashed-io/afloat-client-api | Javascript |
| Marketplace UI | https://github.com/hashed-io/hashed-network-portal-ui | Quasar/Vue |
| Marketplace pallet | https://github.com/hashed-io/hashed-substrate/tree/develop/pallets/gated-marketplace | Rust |
| Fruniques pallet | https://github.com/hashed-io/hashed-substrate/tree/develop/pallets/fruniques | Rust |
| Confidential Documents Server | https://github.com/hashed-io/hashed-private-server | Javascript |
| Confidential Documents API | https://github.com/hashed-io/hashed-confidential-docs-client-api | Javascript |
| Faucet Server | https://github.com/hashed-io/faucet-server | Javascript |

## General architecture Diagram

```mermaid
    C4Context
      title Hashed Systems
      Enterprise_Boundary(b0, "Hashed Systems") {
        Person(customerA, "End user", "A blockchain user")

        System(WebApp, "Web App", "Allows users to interact with all the components of the system")

        Enterprise_Boundary(b1, "Hashed Backend") {

          System(ConfidentialDocumentsServer, "Confidential Documents Server", "The services provided by this server are called via hasura actions and as such are exposed through the hasura graphql endpoint.")

          System(ConfidentialDocumentsAPI, "Confidential Documents API", "Enables the usage of the Hashed Confidential docs services by client applications.")

          System(FaucetServer, "Faucet Server", "Provides the backend services for token distribution for new accounts, reducing friction for user onboarding.")

          System(AfloatClientAPI, "Afloat Client API", "This client api is used to provide methods to interact with gatedMarketplace, uniques and fruniques pallets and go through Afloat specific flow.")

          System_Boundary(b2, "Hashed Blockchain") {
            System(GatedMarketplace, "Gated Marketplaces", "Allows users to buy and sell tokens on the blockchain")
            System(FruniquesPallet, "Fruniques", "Allows users to create assets on the blockchain")
            System(ConfidentialDocuments, "Confidential documents")
            System(NativeBitcoinVaults, "Native Bitcoin Vaults")
          }

        }
      }

      BiRel(customerA, WebApp, "Uses")

      Rel(WebApp, AfloatClientAPI, "Sends transactions to")
      Rel(AfloatClientAPI, GatedMarketplace, "Sends transactions to")
      Rel(AfloatClientAPI, FruniquesPallet, "Sends transactions to")

      Rel(WebApp, ConfidentialDocumentsAPI, "Sends e-mails", "SMTP")
      Rel(GatedMarketplace, FruniquesPallet, "<br>Sends transactions to")

      UpdateRelStyle(WebApp, SystemE, $textColor="blue", $lineColor="blue", $offsetY="-10")
      UpdateRelStyle(WebApp, ConfidentialDocumentsAPI, $textColor="blue", $lineColor="blue", $offsetY="-40", $offsetX="-50")

      UpdateLayoutConfig($c4ShapeInRow="2", $c4BoundaryInRow="1")

```

## How to deploy and configure a full system locally.

### Prerequisites

You need some tools to be able to run the system locally.

- [Substrate](https://docs.substrate.io/install/)
- [NodeJS 16](https://nodejs.org/en/download/)
- [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)


### Deploying the blockchain
Clone the [Hashed Substrate](https://github.com/hashed-io/hashed-substrate) repo, and checkout the develop branch.

```bash
git clone git@github.com:hashed-io/hashed-substrate.git
cd hashed-substrate
git checkout develop
```

#### Running a local node

```bash
cargo run --bin hashed --release -- --dev
```
