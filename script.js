const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');
button?.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('is-open', !open);
});
document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
  nav?.classList.remove('is-open'); button?.setAttribute('aria-expanded', 'false');
}));
const marketsTrack = document.getElementById("marketsTrack");
const marketsPrev = document.getElementById("marketsPrev");
const marketsNext = document.getElementById("marketsNext");

if (marketsTrack) {

  const getScrollAmount = () => {
    const card = marketsTrack.querySelector(".market-card");

    return card
      ? card.offsetWidth + 18
      : 400;
  };

  marketsNext.addEventListener("click", () => {
    marketsTrack.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth"
    });
  });

  marketsPrev.addEventListener("click", () => {
    marketsTrack.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth"
    });
  });

}