export default function Footer() {
    return (
        <>
            <footer className="lg:fixed inset-x-0 bottom-0 p-4 bg-gray-300 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © {new Date().getFullYear()} Development with 💜 by me.
                </span>
            </footer>
        </>
    );
}