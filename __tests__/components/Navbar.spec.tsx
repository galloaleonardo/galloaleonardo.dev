import { render } from "@testing-library/react";
import React from "react";
import Navbar from "../../src/components/base/Navbar";
import { Language } from "../../src/enums/Language";

test('should render itself', () => {
    const { getByTestId } = render(<Navbar onChangeLanguage={Language.EN} />);

    expect(getByTestId('navbar')).toBeInTheDocument();
});