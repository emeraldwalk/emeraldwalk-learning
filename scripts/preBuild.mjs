import fs from 'fs'
import path from 'path'

const PAGES_DIR = path.join(process.cwd(), 'src', 'pages')
const defaultMeta = {}

main()

async function main() {
  const metaList = await getPageMetaList()
  console.log(
    `/** Auto-generated by preBuild.mjs */\nexport const metaList = ${JSON.stringify(
      metaList,
      undefined,
      2,
    )}`,
  )
}

export async function getPageMetaList() {
  const nodes = await fs.promises.readdir(PAGES_DIR)
  const pages = nodes.filter((n) => /^[^_][^.]+\.(mdx|tsx)/.test(n))
  return Promise.all(pages.map(getPageMeta))
}

/**
 * @returns {Promise<import('../src/models/page').Meta>}
 */
export async function getPageMeta(filePath) {
  const [fileName] = filePath.split(path.sep).slice(-1)
  const [slug, ext] = fileName.split('.')

  const content = await fs.promises.readFile(
    path.join(PAGES_DIR, filePath),
    'utf-8',
  )

  const getMetaRegex = /export const meta = \{([^}]+)\}/

  const metaRaw = getMetaRegex.exec(content)?.[1] ?? ''

  try {
    return {
      author: 'Brian Ingles',
      slug: slug === 'index' ? '' : slug,
      ext,
      ...metaRaw
        .split('\n')
        .filter((line) => line)
        .reduce((meta, line) => {
          const [key, value] = line.trim().split(':')
          meta[key] = value.slice(2, -2)
          return meta
        }, {}),
    }
  } catch {
    return defaultMeta
  }
}
