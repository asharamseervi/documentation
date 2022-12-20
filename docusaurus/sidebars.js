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
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  devDocsSidebar: [
    {
      type: 'category',
      collapsed: false,
      label: '🚀 Getting Started',
      items: [
        'dev-docs/intro',
        'dev-docs/quick-start',
        'dev-docs/faq',
        'dev-docs/usage-information',
      ]
    },
    {
      type: 'category',
      collapsed: false,
      label: '⚙️ Setup & Deployment',
      items: [
        {
          type: 'category',
          label: 'Installation',
          link: {
            /**
            * Use the 2 lines below to make sure that
            * "Installation" in the TOC is a clickable link
            * pointing to a page (i.e., type: 'doc') whose link target
            * is defined as the 'id' property.
            */
            type: 'doc',
            id: 'dev-docs/installation',
          },
          items: [
            'dev-docs/installation/cli',
            'dev-docs/installation/docker',
          ]
        },
        {
          type: 'category',
          label: 'Configuration',
          link: {
            /**
            * Use the 2 lines below to make sure that
            * "Installation" in the TOC is a clickable link
            * pointing to a page (i.e., type: 'doc') whose link target
            * is defined as the 'id' property.
            */
            type: 'doc',
            id: 'dev-docs/configurations',
          },
          items: [
            {
              type: 'category',
              label: 'Required configurations',
              items: [
                'dev-docs/configurations/database',
                'dev-docs/configurations/server',
                'dev-docs/configurations/admin-panel',
                'dev-docs/configurations/middlewares',
              ]
            },
            {
              type: 'category',
              label: 'Optional configurations',
              items: [
                'dev-docs/configurations/api',
                'dev-docs/configurations/api-tokens',
                'dev-docs/configurations/cron',
                'dev-docs/configurations/environment',
                'dev-docs/configurations/functions',
                'dev-docs/configurations/plugins',
                'dev-docs/configurations/public-assets',
                'dev-docs/configurations/rbac',
                'dev-docs/configurations/sso',
                'dev-docs/configurations/typescript',
              ]
            },
          ],
        },
        {
          type: 'category',
          label: 'Deployment',
          items: [
            'dev-docs/deployment/strapi-cloud',
          ]
        }
      ]
    },
    {
      type: 'category',
      collapsed: false,
      label: '💻 APIs',
      items: [
        {
          type: 'category',
          label: 'REST API',
          link: {
            type: 'doc',
            id: 'dev-docs/api/rest',
          },
          items: [
            'dev-docs/api/rest/parameters',
            'dev-docs/api/rest/populate-select',
            'dev-docs/api/rest/filters-locale-publication',
            'dev-docs/api/rest/sort-pagination',
          ]
        },
        'dev-docs/api/plugins/admin-panel-api',
      ]
    },
    {
      type: 'category',
      label: '🔧 Development',
      collapsed: false,
      items: [
        'dev-docs/admin-panel-customization',
        {
          type: 'category',
          label: 'Back-end customization',
          link: {
            type: 'doc',
            id: 'dev-docs/backend-customization',
          },
          items: [
            'dev-docs/backend-customization/routes',
            'dev-docs/backend-customization/policies',
            'dev-docs/backend-customization/middlewares',
            'dev-docs/backend-customization/controllers',
            'dev-docs/backend-customization/requests-responses',
            'dev-docs/backend-customization/services',
            'dev-docs/backend-customization/models',
            'dev-docs/backend-customization/webhooks',
          ]
        },
        'dev-docs/typescript'
      ]
    },
  ],
  userDocsSidebar: [
    'user-docs/intro',
    {
      type: 'category',
      collapsed: false,
      label: 'Content-type Builder',
      items: [
        {
          type: 'autogenerated',
          dirName: 'user-docs/content-type-builder'
        }
      ]
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Media Library',
      items: [
        {
          type: 'autogenerated',
          dirName: 'user-docs/media-library'
        }
      ]
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Plugins',
      items: [
        {
          type: 'autogenerated',
          dirName: 'user-docs/plugins'
        }
      ]
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Users, Roles & Permissions',
      items: [
        {
          type: 'autogenerated',
          dirName: 'user-docs/users-roles-permissions'
        }
      ]
    },
    {
      type: 'category',
      collapsed: false,
      label: 'General Settings',
      items: [
        {
          type: 'autogenerated',
          dirName: 'user-docs/settings'
        }
      ]
    },
  ],
};

module.exports = sidebars;
