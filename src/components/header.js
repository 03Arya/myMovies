import useDarkMode from "@/hooks/useDarkmode";

export default function Header() {
    const [theme, toggleTheme] = useDarkMode();
    return (
        <header className="px-8 py-8  pr-6 grid grid-cols-3 mx-auto">
            <h1 className="dark:text-indigo-200 transition duration-500 text-center pl-10 text-indigo-950 font-bold text-lg col-start-2">MyMovies</h1>
            <input checked={theme === 'dark'} onChange={toggleTheme} type="checkbox" id="switch" class="switch__checkbox" />
            <label class="switch" for="switch"></label>
        </header>
    );
}