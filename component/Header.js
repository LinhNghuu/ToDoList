import html from '../core.js';

function Header() {
  return html`<header class="header">
    <h1>TODO LIST</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus
    onkeyup="event.keyCode===13 && dispatch('add', this.value.trim())" //
  </header>`; ///      onkeyup="event.keyCode===13 && dispatch('add', this.value.trim())"  13 is enter key.
}

export default Header;
