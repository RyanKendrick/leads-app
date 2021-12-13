// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import LeadForm from './components/LeadForm.js'

test('render leads form', () => {
    render(<LeadForm />);
    const leadFormComponent = screen.getByTestId('lead-form');
    expect(leadFormComponent).toBeInTheDocument();
})
