import { useEffect, useState } from 'react';

// Hook para atrasar a atualização de um valor.
// Útil para buscas em tempo real que consomem API.
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Define um timer para atualizar o valor após o delay
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Se o valor mudar antes do tempo acabar, limpa o timer anterior
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
