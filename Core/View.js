export class View {
    static render(view) {
        const root = document.getElementById("root");
        return root.innerHTML = view();
    }
}
