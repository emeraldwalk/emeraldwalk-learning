import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { Meta, PageProps } from '../models/page'

const PAGES_DIR = path.join(process.cwd(), 'src', 'pages')
console.log('PAGES_DIR:', PAGES_DIR)

export async function getPageMetaList() {
  const nodes = await fs.promises.readdir(PAGES_DIR)
  const pages = nodes
    .filter((n) => n !== 'index.tsx')
    .filter((n) => /^[^_][^.]+\.(mdx|tsx)/.test(n))
  return Promise.all(pages.map(getPageMeta))
}

export async function getPageMeta(filePath: string): Promise<Meta> {
  const [fileName] = filePath.split(path.sep).slice(-1)
  const [slug, ext] = fileName.split('.')

  const content = await fs.promises.readFile(
    path.join(PAGES_DIR, filePath),
    'utf-8',
  )

  // const parsed = matter(content)

  // if (filePath === 'css-grid.mdx') {
  //   console.log(content)
  // }

  const getTitleRegEx = /getStaticPropsWithTitle\('([^)]+)'\)/
  // const getTitleRegEx = /# ([^\n]+)\n/
  const title = ext === 'mdx' ? getTitleRegEx.exec(content)?.[1] : null

  return {
    title: title ?? slug,
    slug,
  }
}

export async function getStaticProps(): Promise<{ props: PageProps }> {
  const metaList = await getPageMetaList()

  return {
    props: {
      metaList,
    },
  }
}

export function getStaticPropsWithTitle(title: string) {
  return async function (): Promise<{ props: PageProps }> {
    return {
      props: {
        ...(await getStaticProps()).props,
        title,
      },
    }
  }
}
