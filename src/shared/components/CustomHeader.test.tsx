import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CustomHeader } from './CustomHeader';

describe('CustomHeader', () => {
  const title = 'Test Title';

  test('should render the title correctly', () => {
    render(<CustomHeader title={title} />); // Levanta el componente.

    expect(screen.getByText(title)).toBeDefined(); // Valida que el titulo exista
  });

  test('should render the description when provided', () => {
    const description = 'Test Description';
    render(<CustomHeader title={title} description={description} />); // Levanta el componente.
    //screen.debug();
    expect(screen.getByText(description)).toBeDefined(); // Valida que el parrafo exista
    expect(screen.getByRole('paragraph')).toBeDefined(); // Valida que el parrafo exista
    expect(screen.getByRole('paragraph').innerHTML).toBe(description); // Valida que el contenido del parrafo sea el mismo que el proporcionado
  });

  test('should not render description when not provided', () => {
    const { container } = render(<CustomHeader title={title} />); // Levanta el componente.
    const divElement = container.querySelector('.content-center'); // Busca el div con la clase content-center
    const h1 = divElement?.querySelector('h1'); // Busca el h1 dentro del div
    const p = divElement?.querySelector('p'); // Busca el p dentro del div

    expect(h1?.innerHTML).toBe(title); // Valida que el contenido del h1 sea el mismo que el proporcionado
    expect(p).toBeNull(); // Valida que no exista un parrafo
  });
});
