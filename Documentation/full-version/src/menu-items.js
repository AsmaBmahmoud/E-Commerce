export default {
  items: [
    {
      id: "navigation",
      title: "Navigation",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'collapse',
                    icon: 'feather icon-home',
                    children: [
                        {
                            id: 'default',
                            title: 'Cyber Security Analysis',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'e-commerce',
                            title: 'Ecommerce',
                            type: 'item',
                            url: '/dashboard/e-commerce'
                        },
                        {
                            id: 'crm',
                            title: 'CRM',
                            type: 'item',
                            url: '/dashboard/crm'
                        },
                        {
                            id: 'analytics',
                            title: 'Analytics',
                            type: 'item',
                            url: '/dashboard/analytics'
                        },
                        {
                            id: 'crypto',
                            title: 'Crypto',
                            type: 'item',
                            url: '/dashboard/crypto',
                            badge: {
                                title: 'NEW',
                                type: 'label-danger'
                            }
                        },
                        {
                            id: 'project',
                            title: 'Project',
                            type: 'item',
                            url: '/dashboard/project'
                        }
                    ]
                },
                {
                    id: 'layout',
                    title: 'Page Layouts',
                    type: 'collapse',
                    icon: 'feather icon-layout',
                    children: [
                        {
                            id: 'vertical',
                            title: 'Vertical',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'v-static',
                                    title: 'Static',
                                    type: 'item',
                                    url: '/layout/static',
                                    target: true,
                                },
                                {
                                    id: 'v-fixed',
                                    title: 'Fixed',
                                    type: 'item',
                                    url: '/layout/fixed',
                                    target: true,
                                },
                                {
                                    id: 'v-nav-fixed',
                                    title: 'Navbar Fixed',
                                    type: 'item',
                                    url: '/layout/nav-fixed',
                                    target: true,
                                },
                                {
                                    id: 'v-collapse-menu',
                                    title: 'Collapse Menu',
                                    type: 'item',
                                    url: '/layout/collapse-menu',
                                    target: true,
                                }
                            ]
                        },
                        {
                            id: 'horizontal',
                            title: 'Horizontal',
                            type: 'item',
                            url: '/layout/horizontal',
                            target: true
                        },
                        {
                            id: 'box-layout',
                            title: 'Box Layout',
                            type: 'item',
                            url: '/layout/box',
                            target: true
                        },
                        {
                            id: 'rtl',
                            title: 'RTL',
                            type: 'item',
                            url: '/layout/rtl',
                            target: true
                        },
                        {
                            id: 'light-layout',
                            title: 'Light Layout',
                            type: 'item',
                            url: '/layout/light',
                            target: true
                        },
                        {
                            id: 'dark-layout',
                            title: 'Dark Layout',
                            type: 'item',
                            url: '/layout/dark',
                            target: true,
                            badge: {
                                title: 'Hot',
                                type: 'label-danger'
                            }
                        },
                        {
                            id: 'color-icon',
                            title: 'Color Icon',
                            type: 'item',
                            url: '/layout/color-icon',
                            target: true
                        }
                    ]
                },
                {
                    id: 'widget',
                    title: 'Widget',
                    type: 'collapse',
                    icon: 'feather icon-layers',
                    badge: {
                        title: '100+',
                        type: 'label-info'
                    },
                    children: [
                        {
                            id: 'wdgt-statistic',
                            title: 'Statistic',
                            type: 'item',
                            url: '/widget/wdgt-statistic'
                        },
                        {
                            id: 'wdgt-data',
                            title: 'Data',
                            type: 'item',
                            url: '/widget/wdgt-data'
                        },
                        {
                            id: 'wdgt-table',
                            title: 'Table',
                            type: 'item',
                            url: '/widget/wdgt-table'
                        },
                        {
                            id: 'wdgt-user',
                            title: 'User',
                            type: 'item',
                            url: '/widget/wdgt-user'
                        },
                        {
                            id: 'wdgt-chart',
                            title: 'Chart',
                            type: 'item',
                            url: '/widget/wdgt-chart'
                        }
                    ]
                }
            ]
        },
        {
          id: "CryptographicCompliance",
          title: "Cryptographic Compliance",
          type: "item",
          icon: "feather icon-eye",
          url: "/dashboard/crypto"
        },
        {
          id: "CyberDetection",
          title: "Cyber Detection",
          type: "item",
          icon: "feather icon-activity",
          url: "/tables/datatable"
        },
        {
          id: "AgentsStatus",
          title: "Agents Status",
          type: "item",
          icon: "feather icon-loader",
          url: "/tables/bootstrap"
        },
        {
          id: "DailyAttempts",
          title: "Daily Attempts",
          type: "item",
          icon: "feather icon-sunset",
          url: "/basic/alert"
        },

        {
          id: "AttacksMap",
          title: "Attacks Map",
          type: "item",
          icon: "feather icon-map",
          url: "/maps/google-map"
        },
        {
          id: "Real-TimeMap",
          title: "Real-Time Map",
          type: "item",
          icon: "feather icon-globe",
          url: "/maps/vector"
        },

        {
          id: "IPConfiguration",
          title: "IP Configuration",
          type: "item",
          icon: "feather icon-check-square",
          url: "/basic/tabs-pills"
        },
        {
          id: "Certificate",
          title: "Certificate",
          type: "item",
          icon: "feather icon-award",
          url: "/charts/chart-js"
        },
        {
          id: "Beaconing",
          title: "Beaconing",
          type: "item",
          classes: "nav-item",
          url: "/charts/google-chart",
          icon: "feather icon-zap"
        },
        {
          id: "Configuration",
          title: "Configuration",
          type: "item",
          classes: "nav-item",
          url: "/widget/wdgt-table",
          icon: "feather icon-settings"
        }
      ]
    }
  ]
};
