import { Meta, PageProps } from '../models/page'

export function getStaticPropsWithMeta(meta: Meta) {
  return async function (): Promise<{ props: PageProps }> {
    return {
      props: {
        meta,
      },
    }
  }
}
