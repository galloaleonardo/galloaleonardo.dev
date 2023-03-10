export default function Footer() {
    return (
        <>
            <footer className="lg:fixed inset-x-0 bottom-0 p-4 bg-gray-300 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 mt-10">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © {new Date().getFullYear()} Developed with <a className="text-purple-600" href="https://reactjs.org/" target={"_blank"} rel="noreferrer"><strong>React</strong></a> and <a className="text-purple-600" href="https://vitejs.dev/" target={"_blank"} rel="noreferrer"><strong>Vite</strong></a>.
                </span>
            </footer>
        </>
    );
}