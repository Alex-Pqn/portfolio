import { useEffect, useState } from 'react'

interface Props {
  filename: string
}

function usePortfolioImage({ filename }: Props) {
  const [imagePng, setImagePng] = useState('')
  const [imageWebp, setImageWebp] = useState('')
  const [loadingPng, setLoadingPng] = useState(true)
  const [loadingWebp, setLoadingWebp] = useState(true)

  const isLoading = loadingPng || loadingWebp

  useEffect(() => {
    const fetchPng = async () => {
      try {
        const response = await import(
          `../assets/portfolio/images/${filename}.png`
        )
        setImagePng(response.default)
        setLoadingPng(false)
      } catch (err) {
        console.error(err)
      }
    }

    const fetchWebp = async () => {
      try {
        const response = await import(
          `../assets/portfolio/images/${filename}.webp`
        )
        setImageWebp(response.default)
        setLoadingWebp(false)
      } catch (err) {
        console.error(err)
      }
    }

    fetchPng()
    fetchWebp()
  }, [filename])

  return {
    isLoading,
    imagePng,
    imageWebp,
  }
}

export default usePortfolioImage
