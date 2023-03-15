import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { Dispatch, SetStateAction } from "react";
import Navbar from "../../src/components/base/Navbar";

test('should render itself', () => {
    const mockDispatch = jest.fn() as Dispatch<SetStateAction<string>>;

    const { getByTestId } = render(<Navbar onChangeLanguage={mockDispatch} />);

    expect(getByTestId('navbar')).toBeInTheDocument();
});

test('should change language when click in language button', async () => {
    const mockDispatch = jest.fn() as Dispatch<SetStateAction<string>>;

    render(<Navbar onChangeLanguage={mockDispatch} />)

    await userEvent.click(screen.getByTestId('language-changer'))

    expect(screen.getByTestId('language-changer').innerHTML).toBe('EN');

    await userEvent.click(screen.getByTestId('language-changer'))

    expect(screen.getByTestId('language-changer').innerHTML).toBe('PTBR');
});

test('should change theme when click in theme button', async () => {
    const mockDispatch = jest.fn() as Dispatch<SetStateAction<string>>;

    render(<Navbar onChangeLanguage={mockDispatch} />)

    await userEvent.click(screen.getByTestId('theme-changer'));
    expect(screen.getByTestId('theme-color').innerHTML).toBe('light')

    await userEvent.click(screen.getByTestId('theme-changer'));
    expect(screen.getByTestId('theme-color').innerHTML).toBe('dark')
});

test('should open more menu options on mobile', async () => {
    const mockDispatch = jest.fn() as Dispatch<SetStateAction<string>>;

    render(<Navbar onChangeLanguage={mockDispatch} />)

    await userEvent.click(screen.getByTestId('menu-mobile'));
});