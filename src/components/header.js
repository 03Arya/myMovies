export default function Header() {
    return (
        <header className="px-8 py-8  pr-6 grid grid-cols-3 mx-auto">
            <h1 className="text-center pl-10 text-indigo-950 font-bold text-lg col-start-2">MyMovies</h1>
            <input type="checkbox" id="switch" class="switch__checkbox" />
            <label class="switch" for="switch"></label>
        </header>
    );
}