import { Route } from "./Core/Route.js";
import { Controller } from "./Controller/Controller.js";

Route.add("/",Controller,"index");
Route.add("/about",Controller,"about");
Route.run();