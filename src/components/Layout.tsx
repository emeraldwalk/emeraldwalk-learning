import Link from 'next/link'

import React from 'react'

export interface LayoutProps extends React.PropsWithChildren {}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <header>
      <Link href="/">🏡</Link>
      <Link href="/animation">Animation</Link>
      <Link href="/character-animation">Character Animation</Link>
      <Link href="/css-grid">CSS Grid</Link>
    </header>
    <main>{children}</main>
    <footer>&copy; 2023 emeraldwalk</footer>
  </div>
)

export default Layout
