import home  from "../View/home.js";
import about from "../View/about.js";
import { View } from "../Core/View.js";

export class Controller{
  index()
  {
    View.render(home);
  }
  test()
  {
    View.render(about);
  }
}