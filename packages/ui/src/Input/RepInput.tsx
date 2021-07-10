import { uuidV4 } from '@rep/utils'
import { FormControl, InputAdornment, Input } from '@material-ui/core'
import React from 'react'

export const RepInput = ({
  id = uuidV4(),
  label,
  size = '',
  helperText,
  error,
  prefixElement,
  suffixElement,
  ...props
}) => (
  <FormControl fullWidth>
    <Input
      id={id}
      error={error}
      endAdornment={
        suffixElement && (
          <InputAdornment style={{ marginLeft: 0 }} position="end">
            {suffixElement}
          </InputAdornment>
        )
      }
    />
  </FormControl>
)
