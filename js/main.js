function showElement() {
    document.getElementById("navside").className = ("show");
    document.getElementById("gray-background").className = ("show");
}
function unshowElement() {
    document.getElementById("navside").className = ("hide");
    document.getElementById("gray-background").className = ("hide");
}

function openA() {
    window.location.replace("https://fibotax.com/multistepsForm/name");
}

function openB() {
    window.location.replace("https://fibotax.com/");
}
function openC() {
    window.location.replace("https://fibotax.com/pricing");
}

function openD() {
    window.location.replace("https://fibotax.com/faq");
}

function openE() {
    window.location.replace("https://fibotax.com/about-us");
}

function openF() {
    window.location.replace("https://magazine.fibotax.com/?utm_source=homepage");
}
function openG() {
    window.location.replace("https://fibotax.com/#ContactUs");
}

function showSpinner() {
    const button = document.getElementById("toopen");
    const span = document.querySelector("#toopen span");
    const spinner = document.getElementById("spinner");

    span.classList.add("hidden");
    spinner.classList.remove("hidden");

    setTimeout(() => {
        button.style.display = "none"
        spinner.classList.add("hidden");
    }, 4000);
}
