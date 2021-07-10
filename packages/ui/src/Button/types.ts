import type { ButtonProps } from '@material-ui/core/Button'
import type { FlexboxProps } from '@material-ui/system'
import React from 'react'

export interface KButtonProps extends Partial<ButtonProps>, FlexboxProps {
  /**
   * If `true`, the button will show a spinner.
   */
  isLoading?: boolean
  /**
   * The label to show in the button when `isLoading` is true
   * If no text is passed, it only shows the spinner
   */
  loadingText?: string
  /**
   * If added, the button will show an icon before button's label.
   * @type React.ReactElement
   */
  prefixIcon?: React.ReactElement
  /**
   * If added, the button will show an icon after button's label.
   * @type React.ReactElement
   */
  suffixIcon?: React.ReactElement
  children?: React.ReactElement | string
  /**
   * Just the special case which need to force height of button
   */
  height?: string
}
