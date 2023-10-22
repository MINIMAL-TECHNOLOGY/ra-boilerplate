import { useDynamicSvgImport } from '@/hooks'
import React from 'react'

interface IProps {
  iconName: string
  wrapperStyle?: string
  svgProp?: React.SVGProps<SVGSVGElement>
}

function SvgIcon(props: IProps) {
  const { iconName, wrapperStyle, svgProp } = props
  const { loading, SvgIcon } = useDynamicSvgImport(iconName)

  return (
    <React.Fragment>
      {loading && <p> Loading </p>}
      {SvgIcon && (
        <div className={wrapperStyle}>
          <SvgIcon {...svgProp} />
        </div>
      )}
    </React.Fragment>
  )
}

export default SvgIcon
