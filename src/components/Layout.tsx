import Head from 'next/head'
import Link from 'next/link'

import React from 'react'
import { PageProps } from '../models/page'
import styles from './Layout.module.css'
import cl from 'classnames'

export interface LayoutProps extends PageProps {}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  children,
  title,
  metaList,
}) => {
  const pageLinks = React.useMemo(
    () => metaList?.sort((a, b) => a.title.localeCompare(b.title)),
    [metaList],
  )

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={cl(styles.container, styles.areaGrid)}>
        <header className={styles.itemHeader}>
          <Link href="/">🏡</Link>
        </header>
        <h1 className={styles.itemTitle}>{title}</h1>
        <main className={styles.itemMain}>{children}</main>
        <aside className={styles.itemSide}>
          {pageLinks?.map(({ slug, title }) => (
            <Link key={slug} href={`/${slug}`}>
              {title}
            </Link>
          ))}
        </aside>
        <footer className={styles.itemFooter}>&copy; 2023 emeraldwalk</footer>
      </div>
    </>
  )
}

export default Layout
