import { useEffect, useState } from 'react'

export const usePreviewImage = (imgUrlInitial) => {
  const [file, setFile] = useState(null)
  const [imgURL, setImgURL] = useState(imgUrlInitial)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (file && file?.type.match(/image.*/)) {
      setLoading(true)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImgURL(reader.result)
        setLoading(false)
      }
      reader.readAsDataURL(file)
    }
  }, [file])

  return { file, setFile, imgURL, setImgURL, loading, setLoading }
}
