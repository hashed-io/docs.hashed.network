/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  docs: [
    {
      type: 'category',
      label: 'Introduction',
      collapsible: true,
      collapsed: false,
      items: ['intro', 'general_architecture'],
    },
    {
      type: 'category',
      label: 'Key Concepts',
      collapsible: true,
      collapsed: false,
      items: ['nbv', 
        {
          type: 'category',
          label: 'On-chain Accounting',
          items: ['accounting/index', 'accounting/beancount', 'accounting/monescript', 'accounting/ledger_in_go'],
        },
        {
          type: 'category',
          label: 'Fund Administration',
          items: ['fund_administration', 'fund-admin/polkadot-account', 'fund-admin/how-to-login', 'fund-admin/polkadot-key-concepts'],
        },
        'marketplaces', 'traceability', 'integrations', 'sdk'
      ],
    },
    {
      type: 'category',
      label: 'Tokenomics',
      collapsible: true,
      collapsed: false,
      items: ['genesis_allocations', 'hash_usage', 'hash_inflation', 'governance'],
    },
    // {
    //   type: 'category',
    //   label: 'Guides',
    //   collapsible: true,
    //   collapsed: false,
    //   items: [
    //     'accounting',
    //     {
    //       type: 'category',
    //       label: 'On-chain Accounting',
    //       items: ['beancount', 'monescript'],
    //     },
    //   ],
    // },
  ],
};

module.exports = sidebars;
