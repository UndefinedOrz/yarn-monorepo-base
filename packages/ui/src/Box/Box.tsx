import { BoxProps } from '@material-ui/core/Box'
import React from 'react'
import { StyledBox } from './styles'

export const RepBox: React.FC<BoxProps> = ({ color = 'text.primary', ...props }) => (
  <StyledBox {...props} color={color} />
)
