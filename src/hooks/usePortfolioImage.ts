import { useEffect, useState } from 'react'

interface Props {
  filename: string
}

function usePortfolioImage({ filename }: Props) {
  const [loading, setLoading] = useState(true)
  const [image, setImage] = useState(null)

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(
          `../assets/portfolio/images/${filename}.png`
        )
        setImage(response.default)
        setLoading(false)
      } catch (err) {
        console.error(err)
      }
    }

    fetchImage()
  }, [filename])

  return {
    loading,
    image,
  }
}

export default usePortfolioImage
