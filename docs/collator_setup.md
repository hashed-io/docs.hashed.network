---
title: Collator Setup
sidebar_position: 2
---
The hashed parachain collator is based on the polkadot v1.3.0 parachain template and as such the binary accepts the same parameters as a standard substrate collator, for more information on collators and how to start one please review this [guide](https://docs.substrate.io/reference/how-to-guides/parachains/connect-to-a-relay-chain/#start-the-collators). This document is a one stop shop for all the elements required to run a hashed parachain collator.

+ The hashed parachain binary can be downloaded from the [release](https://github.com/hashed-io/hashed-substrate-parachain/releases/tag/hashed-node-v3).
+ The hashed parachain raw chain spec can be downloaded [here](https://raw.githubusercontent.com/hashed-io/hashed-substrate-parachain/hashed-node-v3/resources/hashed-collator-raw-spec.json).
+ Bootnode:
  + /dns/c2.p2p.hashed.network/tcp/443/wss/p2p/12D3KooWBdoiZsvYnYnWEdefordNhwSaueiiFmuKnZewomkps4sz

NOTE: Remember to register your aura public key with the session pallet using the setKeys extrinsic.
