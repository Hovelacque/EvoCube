import { useState } from 'react';
import { Cube } from '../domain/Cube';
import type { Move } from '../domain/types';

export function useCube() {
  const [cube, setCube] = useState(() => new Cube());

  function applyMove(move: Move) {
    setCube(prev => {
      const next = prev.clone();
      next.move(move);
      return next;
    });
  }

  return { cube, applyMove };
}
