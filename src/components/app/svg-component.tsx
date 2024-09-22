'use client'
import { useEffect, useRef } from 'react'
export type SvgComponentProps = React.ComponentPropsWithoutRef<'span'> & {
  content: string
}

/**
 * This component renders an SVG content as a React component.
 * @param props
 * @returns
 */
const SvgComponent = (props: SvgComponentProps) => {
  const { content, className } = props
  const svgWrapperRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const parser = new DOMParser()
    const svgDoc = parser.parseFromString(content, 'image/svg+xml')
    const svgElement = svgDoc.documentElement
    className && svgElement.setAttribute('class', className)

    if (svgWrapperRef.current) {
      svgWrapperRef.current.innerHTML = ''
      svgWrapperRef.current.appendChild(svgElement)
    }
  }, [content, className])

  return <span ref={svgWrapperRef} />
}

export { SvgComponent }
