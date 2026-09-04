/* =========================
   ハンバーガーメニュー
========================= */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {

        const isOpen = hamburger.classList.toggle("open");

        navMenu.classList.toggle("open", isOpen);

        hamburger.setAttribute("aria-expanded", isOpen);

    });
}


/* =========================
   section フェードイン
========================= */

const sections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            } else {
                entry.target.classList.remove("is-visible");
            }

        });

    },
    {
        threshold: 0.1
    }
);

sections.forEach((section) => {
    sectionObserver.observe(section);
});