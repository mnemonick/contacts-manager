import {render, screen, fireEvent} from '@testing-library/react';
import Button from './Button';
import {describe, it, expect} from "vitest";

describe('Button component', () => {
  it('renders with given text', () => {
    const {container} = render(<Button>BUTTON</Button>);
    const root = container.firstChild;

    expect(root).toBeTruthy();
    expect(root?.textContent).toBe('BUTTON');
  });
});

