import React from 'react'
import { ViewStyle } from 'react-native'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: number
  height?: number
  color?: string
  style?: ViewStyle
}

export default function Leaf({ width = 296, height = 177, style }: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 296 177" fill="none" style={style}>
      <Path
        d="M261.565 147.11C260.442 147.87 258.926 147.616 257.132 146.329C256.423 145.824 255.817 145.214 255.272 144.573C245.63 133.406 235.76 122.348 226.43 110.99C219.435 102.472 212.691 93.7234 209.349 83.4902C207.496 77.8213 206.239 72.0002 204.722 66.2414C204.454 65.2235 204.261 64.178 203.779 61.9308C199.968 67.1848 196.939 71.2837 194.015 75.4158C179.427 96.1106 161.063 114.417 139.573 130.719C122.023 144.045 103.596 156.434 83.0356 166.311C75.8075 169.782 67.9251 172.233 60.3016 175.078C58.8315 175.622 57.1922 175.884 55.6112 176.13C51.3845 176.77 49.1463 174.82 50.5829 171.476C53.1483 165.48 55.7805 159.495 58.793 153.623C68.931 133.803 78.2975 113.744 90.8811 94.6824C102.078 77.7288 114.678 61.4092 128.825 45.847C130.023 44.5341 131.009 43.0987 132.822 40.7798C130.208 41.6776 128.784 42.1188 127.413 42.6526C110.541 49.1199 93.8161 55.9187 76.7737 61.967C67.6246 65.2066 57.9749 67.3436 48.4558 69.6708C38.7346 72.0434 28.921 74.0947 19.1207 76.1484C13.7245 77.2768 3.28976 81.8545 0.943047 77.6568C2.63028 76.6145 14.2963 70.6194 16.0955 69.5703C41.967 54.3308 67.9742 39.2549 93.6858 23.8336C114.416 11.4021 133.661 -2.56385 152.679 -16.7933C166.443 -27.0878 180.579 -37.1473 196.424 -45.2435C219.299 -56.9312 242.406 -58.6175 265.472 -50.9197C273.195 -48.3383 279.52 -44.0384 285.139 -39.1366C290.282 -34.655 291.097 -28.3903 292.876 -22.6244C295.781 -13.164 295.646 -3.27198 295.387 6.69374C294.803 29.3654 292.234 52.0006 284.964 74.3995C283.279 79.6053 281.473 84.7888 279.598 89.9733L261.56 147.137L261.565 147.11Z"
        fill="#CAF27A"
      />
    </Svg>
  )
}
