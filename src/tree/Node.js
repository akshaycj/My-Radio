import React, { Fragment } from 'react'
import {Icon} from 'antd'
import './Node.css'


function Node({ node, onClick }) {
  const width = node.data.name.length*8
  const height = 20
  return (
    <Fragment style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}>

      {node.depth ===0 && (
        <circle r={25} fill="#000" onClick={onClick}>

        </circle>

      )}



      {node.depth !== 0 && (
        <rect
          height={height}
          width={width}
          y={-height / 2}
          x={-width / 2}
          fill={'#272b4d'}
          fill-opacity=".8"
          stroke={node.data.children ? '#03c0dc' : '#26deb0'}
          strokeWidth={1}
          strokeDasharray={!node.data.children ? '2,2' : '0'}
          strokeOpacity={!node.data.children ? 0.6 : 1}
          rx={!node.data.children ? 10 : 0}
          onClick={onClick}
        />
      )}
      <text
        dy={'.33em'}
        fontSize={node.depth === 0 ?12:9}
        fontFamily="Arial"
        textAnchor={'middle'}
        style={{ pointerEvents: 'none' }}
        fill={
          node.depth === 0 ? '#71248e' : node.children ? 'white' : '#26deb0'
        }>
        {node.data.name}
      </text>

    </Fragment>
  )
}

export default Node
