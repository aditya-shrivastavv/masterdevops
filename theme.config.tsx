import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>MASTERDEVOPS.ORG</span>,
  project: {
    link: 'https://github.com/aditya-shrivastavv/masterdevops',
  },
  docsRepositoryBase: 'https://github.com/aditya-shrivastavv/masterdevops',
  footer: {
    text: 'masterdevops.org',
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
  },
  useNextSeoProps() {
    const router = useRouter()
    if (router.pathname != '/') {
      return {
        titleTemplate: '%s - MasterDevOps',
      }
    }
  },
}

export default config
