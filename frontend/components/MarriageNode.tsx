import React from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

interface MarriageNodeData {
  label: string;
  spouse1: string;
  spouse2: string;
  nodeType: 'marriage';
}

export default function MarriageNode({ data, selected }: NodeProps<MarriageNodeData>) {
  return (
    <div className="marriage-node flex items-center justify-center">
      <Handle type="target" position={Position.Top} id="top" className="!bg-pink-500 !border-pink-500" />
      
      <div className={`w-10 h-10 backdrop-blur-xl bg-pink-500/20 border-2 rounded-full flex items-center justify-center transition-all duration-200 ${
        selected ? 'border-pink-500 shadow-lg shadow-pink-500/25 scale-110' : 'border-pink-400/50 hover:shadow-md hover:scale-105 hover:border-pink-400'
      }`}>
        <div className="text-sm text-pink-400 font-bold">♥</div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="bottom" className="!bg-pink-500 !border-pink-500" />
    </div>
  );
}
