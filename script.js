const header = document.getElementById("header");

interval = 0;

function clicked() {
    if (interval == 0) {
        header.innerHTML = "Hello Everyone";
    } else if (interval == 1) {
        header.innerHTML = "I just want to know if you're doing alright";
    } else if (interval == 2) {
        header.innerHTML = "Thank you for reading this";
    } else if (interval == 3) {
        header.innerHTML = "Goodbye, Everyone";
    } else if (interval >= 4) {
        header.innerHTML = "";
        document.getElementById("button").remove();
    }

    interval += 1;
    console.log(interval);
}


