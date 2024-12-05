import nav from "./partials/nav.js";
export default function about()
{
    return (
        `
        ${nav()}
        <div class="min-h-screen mx-auto flex justify-center items-center">
            <h1 class="text-7xl text-[rgba(255,255,255,.2)] animate-bounce">About</h1>
        </div>
        `
    );
}