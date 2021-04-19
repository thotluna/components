import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { styles } from '.'
import { getClasses } from '../../helpers/styles'

import Paragraph from '../../atoms/Paragraph'

import { usePreviewImage } from '../../hooks/useImagePreview'

const DRAG_IMAGE_STATES = {
  NONE: false,
  DRAG_OVER: true,
}

export const ImageDragDrop = ({ width, handelFile }) => {
  const inputRef = useRef()
  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
  const { file, setFile, imgURL, loading } = usePreviewImage(
    `https://dummyimage.com/${width}x${width}/#b4d1f/#3b3f4`
  )

  const handleDragEnter = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
  }
  const handleDragLeave = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
  }
  const handleOnDrop = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
    const upFile = e.target.files[0]
    console.log(upFile)
    if (upFile) {
      setFile(upFile)
      handelFile(file)
    }
  }

  const getStyles = getClasses(styles)({})
  return (
    <div
      style={{ width, height: width }}
      className={getStyles('imageDragDrop', { 'is-drag': drag })}
      onClick={() => {
        inputRef.current.click()
      }}
      onKeyPress={(e) => {
        if (e.code === 'Enter') {
          inputRef.current.click()
        }
      }}
      tabIndex="0"
    >
      {loading && <Paragraph>Loading...</Paragraph>}
      <img
        style={{ width: width, height: width }}
        src={imgURL}
        alt="insert your photo"
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragEnter}
        onDrop={handleOnDrop}
      />
      <input
        className={getStyles('input-image')}
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleOnDrop}
      />
    </div>
  )
}

ImageDragDrop.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  handelFile: PropTypes.func,
}

ImageDragDrop.defaultProps = {}

export default ImageDragDrop
