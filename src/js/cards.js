import cardsTpl from '../templates/cards.hbs';
import items from '../menu.json';

const menuContainer = document.querySelector('.js-menu');
menuContainer.innerHTML = createCardsMarkup(items);

function createCardsMarkup(items) {
  return cardsTpl(items);
}
