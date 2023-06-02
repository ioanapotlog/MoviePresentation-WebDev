window.onload = function() {
    const myTimeout = setTimeout(showAnnouncement, 5000);
    
    /* Modificarea stilului unui element */
    var mainbodyElement = document.getElementById("nume");
    mainbodyElement.style.fontFamily = "Arial";
    mainbodyElement.style.color = "#e2e2ff";
    mainbodyElement.style.backgroundColor = "#3a1c9c";
    mainbodyElement.style.fontSize = "20px";
    mainbodyElement.style.textAlign = "center";
    mainbodyElement.style.padding = "7px";

    let element = document.getElementById("Plot");
    let computedStyle = window.getComputedStyle(element);

    var targetElement = document.getElementById("songs");
    targetElement.style.color = computedStyle.getPropertyValue("color");

    function showAnnouncement() {
        /* Crearea unui nou element din HTML */
        var newElement = document.createElement("div");
        newElement.id = "announcement";

        const placeholder = document.getElementById('placeholder');
        placeholder.appendChild(newElement);

        const colors = new Array("blue", "purple", "red", "pink");


        /* Schimbarea aleatoare a valorilor unei proprietăți - color */

        var hint = document.createElement("div");
        hint.id = "a_hint"
        hint.textContent = "[X] CLOSE";
        hint.style.color = colors[Math.floor(Math.random() * 4)];
        hint.style.cssFloat = "right";
        hint.style.cursor = "pointer";
        newElement.appendChild(hint);

        hint.addEventListener("click", function() {
            /* Stergerea unui element din HTML */
            var elementDelete = document.getElementById("announcement");
            elementDelete.remove();
        })

        var title = document.createElement("h2");
        title.id = "a_title"
        title.textContent = "Exciting News: La La Land Returns to Theaters!";
        newElement.appendChild(title);

        var details = document.createElement("p");
        details.textContent = "We are thrilled to announce that the beloved movie La La Land is making a comeback to theaters near you! Experience the magic of this Oscar-winning musical on the big screen once again.";
        newElement.appendChild(details);

        clearTimeout(myTimeout);
    }

    document.addEventListener("keydown", function(event) {
        if (event.key === "x") {
            /* Stergerea unui element din HTML */
            var elementDelete = document.getElementById("announcement");
            elementDelete.remove();
        }
    });

}