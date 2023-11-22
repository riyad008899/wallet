import * as React from 'react'
import colors from 'src/styles/colors'
import Svg, { Path } from 'svgs'

interface Props {
  color?: colors
}
const QuestionIcon = ({ color = colors.black }: Props) => (
  <Svg width={9} height={15} viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M3.64648 10.2351V10.1136C3.65501 9.32102 3.73384 8.69034 3.88299 8.22159C4.0364 7.75284 4.25373 7.37358 4.53498 7.08381C4.81623 6.79403 5.15501 6.52983 5.55131 6.29119C5.807 6.12926 6.03711 5.94815 6.24166 5.74787C6.4462 5.54758 6.60813 5.31747 6.72745 5.05753C6.84677 4.79758 6.90643 4.50994 6.90643 4.1946C6.90643 3.81534 6.81694 3.48722 6.63796 3.21023C6.45898 2.93324 6.22035 2.72017 5.92205 2.57102C5.62802 2.41761 5.29989 2.34091 4.93768 2.34091C4.60955 2.34091 4.29634 2.40909 3.99805 2.54545C3.69975 2.68182 3.45259 2.89489 3.25657 3.18466C3.06055 3.47017 2.94762 3.83878 2.91779 4.29048H0.974609C1.00444 3.52344 1.19833 2.87571 1.55629 2.3473C1.91424 1.81463 2.38725 1.41193 2.97532 1.1392C3.56765 0.866477 4.22177 0.730113 4.93768 0.730113C5.72177 0.730113 6.40785 0.87713 6.99592 1.17116C7.58398 1.46094 8.03995 1.8679 8.36381 2.39205C8.69194 2.91193 8.856 3.51918 8.856 4.21378C8.856 4.69105 8.78143 5.12145 8.63228 5.50497C8.48313 5.88423 8.27006 6.22301 7.99308 6.52131C7.72035 6.8196 7.39222 7.08381 7.0087 7.31392C6.64648 7.53977 6.35245 7.77415 6.1266 8.01705C5.90501 8.25994 5.74308 8.54758 5.6408 8.87997C5.53853 9.21236 5.48313 9.62358 5.47461 10.1136V10.2351H3.64648ZM4.61168 14.1214C4.26225 14.1214 3.96183 13.9979 3.7104 13.7507C3.45898 13.4993 3.33327 13.1967 3.33327 12.843C3.33327 12.4936 3.45898 12.1953 3.7104 11.9482C3.96183 11.6967 4.26225 11.571 4.61168 11.571C4.95685 11.571 5.25515 11.6967 5.50657 11.9482C5.76225 12.1953 5.89009 12.4936 5.89009 12.843C5.89009 13.0774 5.83043 13.2926 5.71112 13.4886C5.59606 13.6804 5.44265 13.8338 5.25089 13.9489C5.05913 14.0639 4.84606 14.1214 4.61168 14.1214Z"
      fill={color}
    />
  </Svg>
)

export default QuestionIcon
