import React from 'react'
import { ParentSize } from '@vx/responsive'
import Tree from './Tree'
import data from './data'

const TreeBase = () => (
<div>
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '100%',
      background: '#272b4d',
    }}>
    <Tree
      data={data}
      width={1000}
      height={700}
    />
  </div>
</div>
)

export default TreeBase
