let collapsible_state = false;

print = console.log

const toggle_collapse = document.getElementById("toggle-collapse");
const collapsible = document.getElementById("collapsible");
const mobile_nav = document.getElementById("mobile-nav");

toggle_collapse.onclick = function() {
    if (collapsible_state) {
        collapsible.style.display = "none";
        collapsible_state = !collapsible_state;
    } else {
        collapsible.style.display = "block";
        collapsible_state = !collapsible_state;
    }
}

