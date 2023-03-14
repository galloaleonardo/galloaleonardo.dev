import { render } from "@testing-library/react";
import React from "react";
import TextContent from "../../src/components/content/TextContent";
import { Language } from "../../src/enums/Language";

test('should render itself in english', () => {
    const { getByTestId } = render(<TextContent language={Language.EN} />);

    expect(getByTestId('text-content')).toBeInTheDocument();
});

test('should render itself in portuguese', () => {
    const { getByTestId } = render(<TextContent language={Language.PTBR} />);

    expect(getByTestId('text-content')).toBeInTheDocument();
});