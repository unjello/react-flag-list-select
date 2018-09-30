import React from 'react'
import PropTypes from 'prop-types'

export default class FlagListSelect extends React.Component {
  render () {
    return <div />
  }
}

FlagListSelect.defaultProps = {
  customLabels: {}
}

FlagListSelect.propTypes = {
  countries: PropTypes.array,
  customLabels: PropTypes.object,
  onSelect: PropTypes.func
}
