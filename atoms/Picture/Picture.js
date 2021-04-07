import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '.'
import withStyles from '../../hocs/withStyles'

export const Picture = ({
  src,
  alt,
  sources,
  width,
  height,
  isRounded,
  withBorder,
  getStyles,
}) => {
  return (
    <picture className={getStyles('picture')}>
      {sources &&
        sources.map((source) => (
          // eslint-disable-next-line react/jsx-key
          <source
            key={source.src}
            srcSet={source.src}
            media={source.media}
          ></source>
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
  getStyles: PropTypes.func.isRequired,
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

export default withStyles(styles)(Picture)
