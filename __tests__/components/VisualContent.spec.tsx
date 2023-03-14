import { render } from "@testing-library/react";
import React from "react";
import VisualContent from "../../src/components/content/VisualContent";

test('should render itself', () => {
    const { getByTestId } = render(<VisualContent />);

    expect(getByTestId('visual-content')).toBeInTheDocument();
});