export class View {
    static render(view) {
        const root = document.getElementById("root");
        root.innerHTML = view();
    }
}
