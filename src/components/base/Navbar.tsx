import { useEffect, useState } from "react";
import { Bars3Icon, EnvelopeIcon, MoonIcon } from '@heroicons/react/24/solid'
import { Language } from "../../enums/Language";

export default function Navbar({ onChangeLanguage }) {
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false)
    const [theme, setTheme] = useState<string>('dark')
    const [language, setLanguage] = useState<string>(Language.EN)
    const [languageLabel, setLanguageLabel] = useState<string>(Language.PTBR)

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const themeSwitch = () => {
        setTheme(theme === "dark" ? 'light' : 'dark')
    }

    const languageSwitch = () => {
        const changeToLanguage: Language = language === Language.EN ? Language.PTBR : Language.EN;
        const changeToLanguageLabel: Language = languageLabel === Language.PTBR ? Language.EN : Language.PTBR;

        setLanguage(changeToLanguage)
        setLanguageLabel(changeToLanguageLabel)

        onChangeLanguage(changeToLanguage)
    }

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-300 dark:bg-gray-800 mb-3" data-testid="navbar">
                <div className="container px-4 mx-auto flex-wrap items-center justify-between lg:max-w-6xl">
                    <div className="flex items-center lg:hidden">
                        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                            <button
                                className="text-dark dark:text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                type="button"
                                onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                                <Bars3Icon className="h-6 w-6" />

                            </button>
                        </div>
                        <a onClick={languageSwitch} className="pr-5 py-2 flex items-center text-xs uppercase font-bold leading-snug text-dark dark:text-white hover:opacity-75" href="# ">
                            {languageLabel}
                        </a>
                        <a className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="# ">
                            <MoonIcon className="h-6 w-6 text-purple-700 hover:text-purple-500" onClick={themeSwitch} />
                        </a>
                    </div>
                    <div className={ "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden") } id="navbar-danger">
                        <ul className="flex flex-col pt-4 lg:pt-0 lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <a className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="https://github.com/galloaleonardo" target={"_blank"} rel="noreferrer">
                                    <svg className="h-6 w-6 text-gray-800 dark:text-white hover:text-purple-500 fill-current" viewBox="0 0 496 512" ><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                                    <span className="pl-3 text-gray-800 dark:text-white">GitHub</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="https://twitter.com/galloaleonardo" target={"_blank"} rel="noreferrer">
                                    <svg className="h-6 w-6 text-gray-800 dark:text-white hover:text-purple-500 fill-current" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                                    <span className="pl-3 text-gray-800 dark:text-white">Twitter</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="https://www.linkedin.com/in/galloaleonardo/" target={"_blank"} rel="noreferrer">
                                    <svg className="lg:h-6 lg:w-6 text-gray-800 dark:text-white hover:text-purple-500 fill-current" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                                    <span className="pl-3 text-gray-800 dark:text-white">LinkedIn</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="mailto:galloaleonardo@gmail.com">
                                    <EnvelopeIcon className="h-6 w-6 text-gray-800 dark:text-white hover:text-purple-500" />
                                    <span className="pl-3 text-gray-800 dark:text-white">E-mail</span>
                                </a>
                            </li>

                            <li className="nav-item lg:ml-5 hidden lg:contents">
                                <div className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-dark dark:text-white hover:opacity-75" href="# ">
                                    |
                                </div>
                            </li>

                            <li className="nav-item lg:ml-5 hidden lg:contents">
                                <a onClick={languageSwitch} className="lg:px-3 w-12 py-2 flex items-center text-xs uppercase font-bold leading-snug text-dark dark:text-white hover:opacity-75" href="# " data-testid="language-changer">
                                    {languageLabel}
                                </a>
                            </li>

                            <li className="nav-item lg:ml-5 hidden lg:contents">
                                <a className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="# " data-testid="theme-changer">
                                    <MoonIcon className="h-6 w-6 text-purple-700 hover:text-purple-500" onClick={themeSwitch} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}