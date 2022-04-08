var floatTextMenuLinks = document.querySelectorAll(".lable1");
floatTextMenuLinks.forEach(function(link) {
    var letters = link.textContent.split("");
    link.textContent = "";
    letters.forEach(function(letter, i) {
        var span = document.createElement("span");
        span.textContent = letter;
        span.style.transitionDelay = i / 600 + "s";
        span.dataset.text = letter;
        link.append(span);
    });
});



 