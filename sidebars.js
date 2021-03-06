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
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: ['intro', 'purpose', 'tokenomics'],
    },
    {
      type: 'category',
      label: 'Key Concepts',
      collapsible: true,
      collapsed: false,
      items: ['marketplaces', 'irl_assets', 'confidential_docs', 'banking_integration'],
    },
    // {
    //   type: 'category',
    //   label: 'Guides',
    //   collapsible: true,
    //   collapsed: false,
    //   items: [
    //     'intro',
    //     // {
    //     //   type: 'category',
    //     //   label: 'Docs',
    //     //   items: ['purpose', 'marketplaces', 'tokenomics', 'irl_assets'],
    //     // },
    //   ],
    // },
  ],
};

module.exports = sidebars;
