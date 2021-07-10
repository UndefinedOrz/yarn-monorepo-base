import styled from '@emotion/styled'
import Button, { ButtonProps } from '@material-ui/core/Button'
import React from 'react'

export const StyledButton = styled(Button)`
  color: red;
`

export const RepButton: React.FC<ButtonProps> = (props) => <StyledButton {...props} />
