import { useState } from 'react';
import { Cube } from '../domain/Cube';
import type { Move } from '../domain/types';

export function useCube() {
  const [cube, setCube] = useState(() => new Cube());

  function applyMove(moves: Move[]) {
    setCube(prev => {
      const next = prev.clone();
      moves.map((move) => next.move(move))
      return next;
    });
  }

  return { cube, applyMove };
}
