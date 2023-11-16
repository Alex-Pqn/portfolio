interface Props {
  path: string
}

function useAsset({ path }: Props) {
  const asset = new URL(`../assets/${path}`, import.meta.url)

  const newAsset = asset.pathname === '/undefined' ? undefined : asset.href

  return newAsset
}

export default useAsset
