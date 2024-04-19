

for (i = 1; i <= 100; i++) {
    // SE NON HA IL RESTO ALLORA SIGNIFICA CHE E UN MULTIPLO
    if (i % 3 == 0 && i % 5 == 0) {
        let div = document.createElement("div");
        let main = document.querySelector("main")
        // ASSEGNO DELLE CLASSI AL DIV CREATO
        div.className = "square red"
        div.innerHTML = "fizzbuzz";
        // COLLEGO IL DIV CREATO AL MAIN
        main.append(div);
        // STAMPO NEL CONSOLE.LOG
        console.log("fizzbuzz");
    } else if (i % 3 == 0) {
        let div = document.createElement("div");
        let main = document.querySelector("main");
        div.innerHTML = "fizz";
        div.className = "square blue"
        main.appendChild(div);
        console.log("fizz");
    } else if (i % 5 == 0) {
        let div = document.createElement("div");
        let main = document.querySelector("main");
        div.innerHTML = "buzz";
        div.className = "square grey"
        main.append(div);
        console.log("buzz");
    } else {
        let div = document.createElement("div");
        let main = document.querySelector("main");
        div.innerHTML = `${i}`;
        div.className = "square white"
        main.append(div);
        console.log(i);
    }
}