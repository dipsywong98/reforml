import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { useThemeUI } from 'theme-ui'
import { layout } from 'styled-system'

const color = '#61DAFB'
const color2 = '#0065ff'

const Svg = styled(({
  width,
  height,
  ...props
}) => <svg xmlns='http://www.w3.org/2000/svg' {...props} />)`
  transform: rotate3d(1, 1, 1, 0deg);
  ${layout}
`

const spin1 = keyframes`
  0% { transform: rotate(-30deg) rotate3d(0, 1, 0, 60deg); }
  50% { transform: rotate(30deg) translate(12px) rotate3d(0, 1, 0, 75deg); }
  100% { transform: rotate(90deg) rotate3d(0, 1, 0, 60deg); }
`
const spin2 = keyframes`
  0% { transform: rotate(-90deg) rotate3d(0, 1, 0, 60deg); }
  50% { transform: rotate(-30deg) translate(-12px)  rotate3d(0, 1, 0, 75deg); }
  100% { transform: rotate(30deg) rotate3d(0, 1, 0, 60deg); }
`
const spin3 = keyframes`
  0% { transform: rotate(30deg) rotate3d(0, 1, 0, 60deg); }
  50% { transform: translate(0,-12px) rotate(90deg) rotate3d(0, 1, 0, 75deg); }
  100% { transform: rotate(150deg) rotate3d(0, 1, 0, 60deg); }
`
const spin4 = keyframes`
  0% { 
  r: 4;
  stroke: ${color};
  fill: ${color};
   }
  50% { 
  r: 8;
  stroke: ${color2};
  fill: ${color2}; }
  100% { 
  
  r: 4;
  stroke: ${color};
  fill: ${color};
  }
`

const a = '4s'
const b = '7s'
const c = '8s'

const Electron1 = styled('circle')`
  transform-origin: 50% 50%;
  animation-name: ${spin1};
  animation-duration: ${a};
  animation-timing-function: cubic;
  animation-iteration-count: infinite;
`

const Electron2 = styled('circle')`
  transform-origin: 50% 50%;
  animation-name: ${spin2};
  animation-duration: ${a};
  animation-timing-function: cubic;
  animation-iteration-count: infinite;
`

const Electron3 = styled('circle')`
  transform-origin: 50% 50%;
  animation-name: ${spin3};
  animation-duration: ${a};
  animation-timing-function: cubic;
  animation-iteration-count: infinite;
`

const ElectronCore = styled('circle')`
  transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  animation-name: ${spin4};
  animation-duration: ${a};
  animation-timing-function: cubic;
  animation-iteration-count: infinite;
`

const ElectronStatic1 = styled('circle')`
  transform-origin: 50% 50%;
  transform: rotate(30deg) translate(12px) rotate3d(0, 1, 0, 75deg);
  stroke: ${color};
`

const ElectronStatic2 = styled('circle')`
  transform-origin: 50% 50%;
  transform: rotate(-30deg) translate(-12px)  rotate3d(0, 1, 0, 75deg);
  stroke: ${color};
`

const ElectronStatic3 = styled('circle')`
  transform-origin: 50% 50%;
  transform: translate(0,-12px) rotate(90deg) rotate3d(0, 1, 0, 75deg);
  stroke: ${color};
`

const ElectronCoreStatic = styled('circle')`
  transform-origin: 50% 50%;
  r: 8;
  stroke: ${color2};
  fill: ${color2};
`

const Logo = props => {
  const electronProps = {
    cx: 32,
    cy: 32,
    r: 24,
    strokeWidth: props.size / 32,
    vectorEffect: 'non-scaling-stroke',
    transformOrigin: '50% 50%',
    stroke: color
  }

  const electrons = props.static
    ? (
      <g>
        <ElectronStatic1 {...electronProps} stroke={color}/>
        <ElectronStatic2 {...electronProps} stroke={color}/>
        <ElectronStatic3 {...electronProps} stroke={color}/>
        <ElectronCoreStatic {...electronProps}/>
      </g>
    )
    : (
      <g>
        <Electron1 {...electronProps} />
        <Electron2 {...electronProps} />
        <Electron3 {...electronProps} />
        <ElectronCore {...electronProps}/>
      </g>
    )

  return (
    <Svg viewBox='0 0 64 64'
      style={{
        display: 'block',
        maxWidth: '100%',
        margin: 0,
        fill: 'none',
        stroke: color2
      }}
      vectorEffect='non-scaling-stroke'
      width={props.size}
      height={props.size}>
      {props.styles}
      <circle
        cx={32}
        cy={32}
        r={32}
        fill={props.bg}
        stroke='none'
      />
      <circle
        cx={32}
        cy={32}
        r={30}
        strokeWidth={props.strokeWidth / 2}
        vectorEffect='non-scaling-stroke'
        opacity={1 / 2}
      />
      {electrons}
    </Svg>
  )
}

Logo.defaultProps = {
  initial: false,
  color: color,
  bg: 'transparent',
  strokeWidth: 6,
  size: 512
}

export default Logo
