const body = document.querySelector("body");
const headerBody = document.querySelector(".header__body");
const headerBurger = document.querySelector(".header__burger");
const links = document.querySelectorAll(".header__item");

const about = document.querySelector(".header__item>#about");
const stories = document.querySelector(".header__item>#stories");
const photos = document.querySelector(".header__item>#photos");
const contacts = document.querySelector(".header__item>#contacts");

const targetAbout = document.querySelector(".how");
const targetStories = document.querySelector(".stories");
const targetPhotos = document.querySelector(".make");
const targetContacts = document.querySelector(".join");

headerBurger.addEventListener("click", function () {
    body.classList.toggle("lock");
    headerBody.classList.toggle("active");
    headerBurger.classList.toggle("active");
});
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
        body.classList.remove("lock");
        headerBody.classList.remove("active");
        headerBurger.classList.remove("active");
        event.preventDefault(event);
    });
}

about.addEventListener('click', function() {
    targetAbout.scrollIntoView({ behavior: 'smooth' });
});
stories.addEventListener('click', function() {
    targetStories.scrollIntoView({ behavior: 'smooth' });
});
photos.addEventListener('click', function() {
    targetPhotos.scrollIntoView({ behavior: 'smooth' });
});
contacts.addEventListener('click', function() {
    targetContacts.scrollIntoView({ behavior: 'smooth' });
});