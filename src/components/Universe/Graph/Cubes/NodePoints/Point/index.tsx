import { Billboard, Instance } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useRef } from 'react'
import { Group, Mesh } from 'three'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { useSimulationStore } from '~/stores/useSimulationStore'
import { NodeExtended } from '~/types'
import { generatePalette } from '~/utils/palleteGenerator'
import { nodeSize } from '../../constants'

type Props = {
  color: string
  scale: number
  name: string
  index: number
  node: NodeExtended
  nodeType: string
}

export const Point = memo(({ color, scale: scaleValue, name, index, node, nodeType }: Props) => {
  const scale = scaleValue
  const nodeRef = useRef<Group | null>(null)
  const helperRef = useRef<Mesh | null>(null)

  useFrame(() => {
    if (!nodeRef.current || !helperRef.current) {
      return
    }

    const { searchQuery, selectedNodeTypes, selectedLinkTypes, selectedNode, hoveredNodeSiblings, hoveredNode } =
      useGraphStore.getState()

    const { simulation } = useSimulationStore.getState()

    const { nodesNormalized } = useDataStore.getState()
    const normalizedNode = nodesNormalized.get(node.ref_id)

    const selectedNodeNormalized = selectedNode ? nodesNormalized.get(selectedNode?.ref_id) : null

    const selectedNodeSiblings = selectedNodeNormalized
      ? [...(selectedNodeNormalized?.targets || []), ...(selectedNodeNormalized.sources || [])]
      : []

    const simulationNode = simulation?.nodes()[index]

    if (true || typeof simulationNode?.fx === 'number') {
      nodeRef.current.scale.set(scale, scale, scale)
    }

    const isHovered = node.ref_id === hoveredNode?.ref_id
    const isSelected = node.ref_id === selectedNode?.ref_id
    const isHoveredSibling = hoveredNodeSiblings.includes(node.ref_id)
    const isSelectedSibling = selectedNodeSiblings.includes(node.ref_id)

    const highlight = isHovered || isSelected || isHoveredSibling || isSelectedSibling

    if (highlight) {
      nodeRef.current.scale.set(scale * 2, scale * 2, scale * 2)

      return
    }

    nodeRef.current.scale.set(scale, scale, scale)

    if (searchQuery) {
      const includesQuery = name.toLowerCase().includes(searchQuery.toLowerCase())
      const dynamicScale = includesQuery ? scale : 0.1
      const isVisible = !!includesQuery

      helperRef.current.visible = isVisible

      nodeRef.current.scale.set(dynamicScale, dynamicScale, dynamicScale)
    } else if (selectedNodeTypes.length) {
      const includesSelectedType = selectedNodeTypes.includes(nodeType)

      const dynamicScale = includesSelectedType ? scale : 0.1
      const isVisible = !!includesSelectedType

      helperRef.current.visible = isVisible

      nodeRef.current.scale.set(dynamicScale, dynamicScale, dynamicScale)
    } else if (selectedLinkTypes.length) {
      const includesSelectedType = normalizedNode?.edgeTypes?.some((i) => selectedLinkTypes.includes(i))

      const dynamicScale = includesSelectedType ? scale : 0.1
      const isVisible = !!includesSelectedType

      helperRef.current.visible = isVisible

      nodeRef.current.scale.set(dynamicScale, dynamicScale, dynamicScale)
    } else if (selectedNode) {
      const show = selectedNodeSiblings.includes(node.ref_id) || selectedNode.ref_id === node.ref_id

      const dynamicScale = show ? scale : 0.1
      const isVisible = !!show

      helperRef.current.visible = isVisible

      nodeRef.current.scale.set(dynamicScale, dynamicScale, dynamicScale)
    } else {
      nodeRef.current.scale.set(scale, scale, scale)
      helperRef.current.visible = true
    }
  })

  const newColor = generatePalette(color, 3, 10)

  return (
    <Billboard ref={nodeRef} follow lockX={false} lockY={false} lockZ={false} name="group-name" visible={false}>
      <mesh ref={helperRef} name="instance-helper" userData={node}>
        <sphereGeometry args={[nodeSize / 2, 16, 16]} />
        <meshBasicMaterial color="white" opacity={1} transparent={false} />
      </mesh>
      <Instance color={newColor.at(3)} name="instance" />
    </Billboard>
  )
})

Point.displayName = 'Point'
