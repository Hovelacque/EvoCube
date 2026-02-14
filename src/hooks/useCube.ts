import { useEffect, useState } from 'react';
import { Cube } from '../domain/Cube';
import { type Move } from '../domain/types';
import { randomMove } from '../domain/moves';

export function useCube() {
  const [cube, setCube] = useState(() => new Cube());
  const [inResolve, setInresolve] = useState(false);

  useEffect(() => {
    if (inResolve)
      applyRandomMove()
  }, [inResolve])

  useEffect(() => {
    if (inResolve) {
      if (!cube.isCompleted())
        setTimeout(() => applyRandomMove(), 1)
      else {
        setInresolve(false)
        alert('fim')
      }
    }
  }, [cube])

  function applyMove(moves: Move[]) {
    setCube(prev => {
      const next = prev.clone();
      moves.map((move) => next.move(move))
      return next;
    });
  }

  function applyRandomMove() {
    applyMove(randomMove(1))
  }

  function resolve() {
    setInresolve(true);
  }

  return { cube, applyMove, resolve };
}
