// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function move_box() {
    let box = document.getElementById("moving_box");
    let pos = 0;
    let direction = 1;
    let phase = 1;

    let interval = setInterval(() => {
        if (phase === 1) {
            // Move right
            pos += 2;
            if (pos >= 200) {
                phase = 2;
            }
        } else if (phase === 2) {
            // Move left
            pos -= 2;
            if (pos <= -200) {
                phase = 3;
            }
        } else if (phase === 3) {
            // Move back to center
            pos += 2;
            if (pos >= 0) {
                pos = 0;
                clearInterval(interval);
            }
        }
        box.style.left = pos + "px";
    }, 5);
}