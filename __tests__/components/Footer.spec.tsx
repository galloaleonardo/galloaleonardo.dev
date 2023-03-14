import { render } from "@testing-library/react";
import React from "react";
import Footer from "../../src/components/base/Footer";

test('should render itself', () => {
    const { getByTestId } = render(<Footer />);

    expect(getByTestId('footer')).toBeInTheDocument();
});