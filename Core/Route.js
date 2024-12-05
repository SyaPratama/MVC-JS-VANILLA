export class Route {
  static #RouteList = [];
  static add(path, controller, method) {
    const RouteData = {
      path,
      controller,
      method,
    };
    this.#RouteList.push(RouteData);
  }

  static run() {
    let uri = this.sanitizeURL();
    for (let routing of this.#RouteList) {
      let path = routing.path.replace("/", "");
      document.body.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
          uri = e.target.getAttribute("href").replace("#", "");
          const route = this.#RouteList.find(
            (item) => item.path.replace("/", "") === uri
          );
          path = route.path.replace("/", "") || "";
          if (uri === path) {
            const method = route.method;
            const controller = new route.controller();
            const root = document.getElementById("root");
            root.innerHTML = "";
            return window.addEventListener("hashchange", controller[method]());
          }
        }
      });
      if (path === uri) {
        const method = routing.method;
        const controller = new routing.controller();
        return controller[method]();
      }
    }
  }

  static sanitizeURL() {
    const uri = window.location.hash.slice(1);
    return uri;
  }
}
