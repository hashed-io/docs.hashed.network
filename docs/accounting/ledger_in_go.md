---
title: Ledger in Go Integration
sidebar_position: 4
tags:
  - accounting
---

<head>
  <title>Hashed Network Ledger in Go Integration</title>
  <meta charSet="utf-8" />
  <meta property="og:image" content="https://docs.hashed.network/img/monolith.png" />
  <meta property="og:description" content="On-chain, triple entry accounting protocol generates journal files from Native Bitcoin Vaults and enables vault administrators to run balance sheets and income statements" />
  <meta property="og:title" content="Hashed Network On-chain Accounting" />
  <meta property="og:url" content="https://docs.hashed.network/docs/accounting" />
</head>

### **Ledger in Go**

Ledger is a command line application for plain text accounting. Providing commands to view balances, register of transactions, importing of CSV files, and a web interface to view reports, and track investments.
> Github Repository: [Ledger](https://github.com/howeyc/ledger)

### **Installation**
To build the ledger executable from source, you will first need to install Go Follow the instructions on the [Go installation page](https://go.dev/doc/install).

Once you have installed Go, the following command can be used to build and install ledger:
```go
go install github.com/howeyc/ledger/ledger@latest
```
This will automatically download ledger, build it, and install it in Go's global binary directory (~/go/bin/ by default).

**Basic transaction format**

The basic format of a ledger transaction, shown below.
```
2017-06-26 Commonplace Coffee
  Assets:Cash:Wallet           -3.00
  Expenses:Restaurants:Coffee   3.00
```

### **Tutorial & Example**

***Generating Reports***

We can generate a report of the final balances of all accounts.
```
ledger -f ledger.dat bal
```
```
Assets                                                      8.56
Assets:BitcoinVaults                                        8.56
Assets:BitcoinVaults:Cold                                   2.62
Assets:BitcoinVaults:Hot                                    0.34
Assets:BitcoinVaults:Warm                                   5.60
Expenses                                                   22.30
Expenses:Consulting                                        11.41
Expenses:Development                                        4.30
Expenses:Marketing                                          6.58
Income                                                    -30.86
Income:Block Rewards                                       -1.15
Income:BlockRewards                                        -4.20
Income:Consulting                                         -20.20
Income:StakingRewards                                      -5.31
----------------------------------------------------------------
                                                            0.00
```

We can generate a report with specific account by applying a filter.
```
ledger -f docs/journals/hashed-vaults-go.journal bal Income Expenses
```

```
Expenses                                                    22.30
Expenses:Consulting                                         11.41
Expenses:Development                                         4.30
Expenses:Marketing                                           6.58
Income                                                     -30.86
Income:Block Rewards                                        -1.15
Income:BlockRewards                                         -4.20
Income:Consulting                                          -20.20
Income:StakingRewards                                       -5.31
-----------------------------------------------------------------
                                                            -8.56
```

#### By Period
We can generate a report segmented by a time period adding the `--period` flag followed by the period (Monthly,Quarterly,SemiYearly,Yearly).
```
ledger -f docs/journals/hashed-vaults-go.journal --period Monthly  bal Income Expenses
```

```
2021/10/01 - 2021/10/31
================================================================================
Expenses                                                                    6.34
Expenses:Consulting                                                         3.14
Expenses:Development                                                        0.14
Expenses:Marketing                                                          3.06
Income                                                                     -7.20
Income:BlockRewards                                                        -2.15
Income:Consulting                                                          -3.06
Income:StakingRewards                                                      -2.00
--------------------------------------------------------------------------------
                                                                           -0.87

================================================================================
2021/11/01 - 2021/11/30
================================================================================
Expenses                                                                   11.58
Expenses:Consulting                                                         6.13
Expenses:Development                                                        3.03
Expenses:Marketing                                                          2.43
Income                                                                     -8.64
Income:BlockRewards                                                        -0.90
Income:Consulting                                                          -6.63
Income:StakingRewards                                                      -1.10
--------------------------------------------------------------------------------
                                                                            2.94

================================================================================
2021/12/01 - 2021/12/31
================================================================================
Expenses                                                                    4.38
Expenses:Consulting                                                         2.14
Expenses:Development                                                        1.14
Expenses:Marketing                                                          1.10
Income                                                                    -15.01
Income:Block Rewards                                                       -1.15
Income:BlockRewards                                                        -1.15
Income:Consulting                                                         -10.52
Income:StakingRewards                                                      -2.20
--------------------------------------------------------------------------------
                                                                          -10.64
```


#### Account Depth
If we have too many accounts we can trim them to see them added to the second level.
```
ledger -f docs/journals/hashed-vaults-go.journal --period Monthly --depth 2 balance
```
```
2021/10/01 - 2021/10/31
================================================================================
Assets                                                                      0.87
Assets:BitcoinVaults                                                        0.87
Expenses                                                                    6.34
Expenses:Consulting                                                         3.14
Expenses:Development                                                        0.14
Expenses:Marketing                                                          3.06
Income                                                                     -7.20
Income:BlockRewards                                                        -2.15
Income:Consulting                                                          -3.06
Income:StakingRewards                                                      -2.00
--------------------------------------------------------------------------------
                                                                            0.00

================================================================================
2021/11/01 - 2021/11/30
================================================================================
Assets                                                                     -2.94
Assets:BitcoinVaults                                                       -2.94
Expenses                                                                   11.58
Expenses:Consulting                                                         6.13
Expenses:Development                                                        3.03
Expenses:Marketing                                                          2.43
Income                                                                     -8.64
Income:BlockRewards                                                        -0.90
Income:Consulting                                                          -6.63
Income:StakingRewards                                                      -1.10
--------------------------------------------------------------------------------
                                                                            0.00

================================================================================
2021/12/01 - 2021/12/31
================================================================================
Assets                                                                     10.64
Assets:BitcoinVaults                                                       10.64
Expenses                                                                    4.38
Expenses:Consulting                                                         2.14
Expenses:Development                                                        1.14
Expenses:Marketing                                                          1.10
Income                                                                    -15.01
Income:Block Rewards                                                       -1.15
Income:BlockRewards                                                        -1.15
Income:Consulting                                                         -10.52
Income:StakingRewards                                                      -2.20
--------------------------------------------------------------------------------
                                                                            0.00
```
