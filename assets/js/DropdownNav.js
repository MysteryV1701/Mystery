window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("Navbar").style.top = "0";
    document.getElementById("backToTop").style.display="block";
} else {
    document.getElementById("Navbar").style.top = "-100px";
    document.getElementById("Navbar").style.transition= "top 0s"
    document.getElementById("backToTop").style.display="none";
}
}