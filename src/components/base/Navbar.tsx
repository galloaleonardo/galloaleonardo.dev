import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Language } from "../../enums/Language";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface Props {
    onChangeLanguage: Dispatch<SetStateAction<string>>
}

export default function Navbar({ onChangeLanguage }: Props) {
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

    const changeThemeIcon = () => {
        return theme === 'dark' ? faSun : faMoon;
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
                                data-testid="menu-mobile"
                            >

                                <FontAwesomeIcon icon={faBars} className="h-6 w-6" />

                            </button>
                        </div>
                        <a onClick={languageSwitch} className="pr-5 py-2 flex items-center text-xs uppercase font-bold leading-snug text-dark dark:text-white hover:opacity-75" href="# ">
                            {languageLabel}
                        </a>
                        <a className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="# ">
                            <FontAwesomeIcon icon={changeThemeIcon()} className="h-6 w-6 text-purple-700 hover:text-purple-500" onClick={themeSwitch}/>
                        </a>
                    </div>
                    <div className={ "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden") } id="navbar-danger">
                        <ul className="flex flex-col pt-4 lg:pt-0 lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <a className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75" href="https://github.com/galloaleonardo" target={"_blank"} rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75" href="https://twitter.com/galloaleonardo" target={"_blank"} rel="noreferrer">
                                    <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75" href="https://www.linkedin.com/in/galloaleonardo/" target={"_blank"} rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedinIn} className="h-5 w-5" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75" href="mailto:galloaleonardo@gmail.com">
                                    <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                                </a>
                            </li>
                            <div className="flex items-center space-x-3 lg:space-x-5">
                                <li className="nav-item lg:ml-5 hidden lg:contents">
                                    <div className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-dark dark:text-white hover:opacity-75">
                                        |
                                    </div>
                                </li>

                                <li className="nav-item lg:ml-5 hidden lg:contents">
                                    <a onClick={languageSwitch} className="lg:px-3 w-12 py-2 flex items-center text-xs uppercase font-bold leading-snug text-dark dark:text-white hover:opacity-75" href="# " data-testid="language-changer">
                                        {languageLabel}
                                    </a>
                                </li>

                                <li className="nav-item lg:ml-5 hidden lg:contents">
                                    <a className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="# ">
                                        <FontAwesomeIcon icon={changeThemeIcon()} className="h-6 w-6 text-purple-700 hover:text-purple-500" onClick={themeSwitch} data-testid="theme-changer" />
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
            {theme === 'dark' ? <span className="hidden" data-testid="theme-color">dark</span> : <span className="hidden" data-testid="theme-color">light</span>}
        </>
    );
}