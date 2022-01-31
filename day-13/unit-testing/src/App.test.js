import { fireEvent, render, screen, act, waitFor } from '@testing-library/react';
import App from './App';

test('check component is having h1', () => {
  render(<App/>)

  const hdr = screen.getByTestId('hdr')
  const hdr1 = screen.getByRole('hd')
  const hdr2 = screen.getByTitle('ttl')

  expect(hdr2.textContent).toBe('0')
})

test('check after clicking', () => {
  render(<App/>)

  const btn = screen.getByTestId('btn')
  fireEvent.click(btn)

  const hdr = screen.getByTestId('hdr')

  expect(hdr).toHaveTextContent('1')
})

test('check style after clicking', () => {
  render(<App/>)

  const btn = screen.getByTestId('btn')
  fireEvent.click(btn)

  const hdr = screen.getByTestId('hdr')

  expect(hdr.style.backgroundColor).toBe('red')
})

test('check input box working', () => {
  render(<App/>)

  const ip = screen.getByTestId('ip')
  fireEvent.change(ip, { target : { value : 'abc' } })

  const hdr = screen.getByTitle('nm')
  expect(hdr).toHaveTextContent('abc')
})

