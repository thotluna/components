import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '.'
import { getClasses } from '../../helpers/styles'

export const Picture = ({
  src,
  alt,
  sources,
  width,
  height,
  isRounded,
  withBorder,
}) => {
  const getStyles = getClasses(styles)({})
  return (
    <picture className={getStyles('picture')}>
      {sources &&
        sources.map((source, index) => (
          // eslint-disable-next-line react/jsx-key
          <source key={index} srcSet={source.src} media={source.media}></source>
        ))}
      <img
        className={getStyles('image', {
          'is-rounded': isRounded,
          'with-border': withBorder,
        })}
        style={{ maxWidth: width, height: isRounded ? width : height }}
        src={src}
        alt={alt}
        role={!alt || alt === '' ? 'presentation' : ''}
      />
    </picture>
  )
}

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      media: PropTypes.string,
    })
  ),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isRounded: PropTypes.bool,
  withBorder: PropTypes.bool,
}

Picture.defaultProps = {
  alt: '',
  width: 200,
  height: 'auto',
  isRounded: false,
  withBorder: false,
}

export default Picture
