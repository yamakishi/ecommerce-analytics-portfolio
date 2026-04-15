'use client';

import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  // Inicializamos com false para evitar erro de hidratação no Next.js
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Criamos uma função separada para atualizar o estado
    const onChange = () => {
      setMatches(media.matches);
    };

    // Chamamos uma vez para definir o valor inicial corretamente após a montagem
    onChange();

    // Ouvimos as mudanças
    media.addEventListener('change', onChange);

    return () => media.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}
