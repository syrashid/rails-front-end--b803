import { Controller } from "@hotwired/stimulus";
import Typed from "typed.js";

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Change your day", "Learn to fly"],
      typeSpeed: 50,
      loop: true,
    });
  }
}
