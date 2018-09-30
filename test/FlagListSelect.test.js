import React from 'react'
import FlagListSelect from '../src/index'
import renderer from 'react-test-renderer'

describe('FlagListSelect', () => {
  const component = renderer.create(
    <FlagListSelect />
  )

  let tree

  it('should render correctly', () => {
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
