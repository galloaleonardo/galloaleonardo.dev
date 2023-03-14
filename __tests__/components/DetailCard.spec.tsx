import { render } from "@testing-library/react";
import React from "react";
import DetailCard from "../../src/components/content/DetailCard";
import { Language } from "../../src/enums/Language";

test('should render VisualContent component', () => {
    const { getByTestId } = render(<DetailCard language={Language.EN} />);

    expect(getByTestId('visual-content')).toBeInTheDocument();
});

test('should render TextContent component', () => {
    const { getByTestId } = render(<DetailCard language={Language.EN} />);

    expect(getByTestId('text-content')).toBeInTheDocument();
});