import { render, screen } from "@testing-library/react"
import Greet from './greet'

test('renders greet successfully', () => {
    render(<Greet />)
    const element = screen.getByText(/Hello/)
    expect(element).toBeInTheDocument()
})