// When the user scrolls down 50px from the top of the document, resize the header's font size

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("section-links").style.fontSize = "14px";

        document.getElementById("header-logo").classList.remove("flex-column");
        document.getElementById("header-logo").classList.add("flex-row");
        document.getElementById("header-logo").classList.add("align-items-center");
        document.getElementById("logo-triangle").classList.add("p-1");
    } else {
        document.getElementById("section-links").style.fontSize = "";

        document.getElementById("header-logo").classList.add("flex-column");
        document.getElementById("header-logo").classList.remove("flex-row");
        document.getElementById("header-logo").classList.remove("align-items-center");
        document.getElementById("logo-triangle").classList.remove("p-1");
    }
}