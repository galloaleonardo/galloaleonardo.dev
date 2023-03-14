import { render } from "@testing-library/react";
import React from "react";
import Home from './../../src/Home';

test('should render itself', () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId('home')).toBeInTheDocument();
});

test('should render Navbar component', () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId('navbar')).toBeInTheDocument();
});

test('should render DetailCard component', () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId('detail-card')).toBeInTheDocument();
});

test('should render Footer component', () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId('footer')).toBeInTheDocument();
});

