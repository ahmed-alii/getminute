const left_panel_toggler = document.querySelector("main > aside.left-aside > button.toggler");
const right_panel_toggler = document.querySelector("main > aside.right-aside > button.toggler");
const grid = document.querySelector("main.main-grid");


const e = "expanded" //default state
const c = "collapsed"

left_panel_toggler.onclick = () => {
    if (grid.dataset.left === c && grid.dataset.right === c) {
        grid.setAttribute("data-left", e);
        grid.setAttribute("data-right", e);
    } else if (grid.dataset.left === e) { //default
        grid.setAttribute("data-left", c);
    } else if (grid.dataset.left === c) {
        grid.setAttribute("data-left", e);
    }

}

right_panel_toggler.onclick = () => {
    if (grid.dataset.right === e) { //default
        grid.setAttribute("data-right", c);
        grid.setAttribute("data-left", c);
    } else if (grid.dataset.right === c) {
        grid.setAttribute("data-right", e);
        grid.setAttribute("data-left", e);

    }
}