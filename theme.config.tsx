import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/eman101101/learnswimming',
  },
  docsRepositoryBase: 'https://github.com/eman101101/learnswimming/blob/main',
  footer: {
    text: 'Created by Evan Koumarelas Using Nextra',
  },
  logo: (
    <>
      <img src="/images/icon.svg" style={{ width: '24px', height: '24px'}}/>
      <span style={{ marginLeft: '.4em', fontWeight: 500 }}>
        Learn Swimming
      </span>
    </>
  ),
}

export default config
