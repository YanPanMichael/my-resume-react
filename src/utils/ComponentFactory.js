import React from 'react'
import HoverContainer from './HoverContainer'

const componentFactory = ({...args}) => {
  React.createElement(HoverContainer, {...args});
}