import { describe, expect, test } from 'vitest';
import { useCounter } from './useCounter';
import { act, renderHook } from '@testing-library/react';

describe('useCounter', () => {
  // let result;

  // Levanta el hook antes de cada test.
  // beforeEach(() => {
  //   const { result: hookValue } = renderHook(() => useCounter());
  //   result = hookValue;
  // });

  test('should initialize with default value of 10', () => {
    const { result } = renderHook(() => useCounter()); // Levanta el hook.

    expect(result.current.counter).toBe(10); // Valida que el contador inicie en 10.
  });

  test('should initialize with value 20', () => {
    const initialValue = 20;
    const { result } = renderHook(() => useCounter(initialValue));
    expect(result.current.counter).toBe(initialValue);
  });

  test('should increment counter when handleAdd is called', () => {
    const { result } = renderHook(() => useCounter());

    // Es necesario usar act para simular la llamada al hook. Si no lo usamos, el test falla.
    // Esto es porque el hook modifica el estado del contador, y por lo tanto, es necesario
    // que se actualice el DOM antes de validar el resultado.
    act(() => {
      result.current.handleAdd();
    });

    // Si vamos a llamar a mas de una modificacion de estado es necesario usar act para cada una de ellas.
    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(12);
  });

  test('should decrement counter when handleSubtract is called', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleSubtract();
    });

    expect(result.current.counter).toBe(9);
  });

  test('should reset to initialValue the counter when handleReset is called', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleSubtract();
      result.current.handleSubtract();
      result.current.handleSubtract();
      result.current.handleSubtract();
      result.current.handleSubtract();
    });

    expect(result.current.counter).toBe(5);

    act(() => {
      result.current.handleReset();
    });

    expect(result.current.counter).toBe(10);
  });
});
