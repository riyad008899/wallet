import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import colors from 'src/styles/colors'

interface Props {
  color?: string
  width?: number
  height?: number
}

const Lock = ({ color = colors.accent, width = 20, height = 20 }: Props) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 20 20">
    <Path
      fill={color}
      d="M5 18.334c-.458 0-.85-.164-1.177-.49a1.605 1.605 0 0 1-.49-1.177V8.333c0-.458.164-.85.49-1.177.326-.326.719-.49 1.177-.49h.833V5c0-1.153.407-2.135 1.22-2.948C7.865 1.24 8.847.833 10 .833s2.136.407 2.948 1.219c.813.813 1.219 1.795 1.219 2.948v1.667H15c.458 0 .85.163 1.177.489.327.327.49.72.49 1.178v8.333c0 .458-.163.85-.49 1.177-.326.326-.719.49-1.177.49H5Zm0-1.667h10V8.333H5v8.334Zm5-2.5c.458 0 .85-.163 1.178-.49.326-.326.489-.718.489-1.177 0-.458-.163-.85-.49-1.177a1.607 1.607 0 0 0-1.177-.49c-.458 0-.85.164-1.177.49-.326.326-.49.719-.49 1.177 0 .459.164.851.49 1.178.326.326.719.489 1.177.489Zm-2.5-7.5h5V5a2.41 2.41 0 0 0-.73-1.77A2.411 2.411 0 0 0 10 2.5a2.41 2.41 0 0 0-1.77.73A2.41 2.41 0 0 0 7.5 5v1.667Z"
    />
  </Svg>
)
export default Lock
