const WHATSAPP_NUMBER = '27632455006';

const colourClass = {
  Black: 'Black', Red: 'Red', Cream: 'Cream', Gray: 'Gray', Pink: 'Pink', White: 'White', Blue: 'Blue', Yellow: 'Yellow'
};

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll('.colour-picker').forEach((picker) => {
  const colours = picker.dataset.colours.split(',');
  colours.forEach((colour) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'colour-option';
    button.dataset.colour = colourClass[colour] || colour;
    button.setAttribute('aria-label', colour);
    button.setAttribute('title', colour);
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      picker.querySelectorAll('.colour-option').forEach((option) => {
        option.classList.remove('selected');
        option.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('selected');
      button.setAttribute('aria-pressed', 'true');
      picker.dataset.selected = colour;
      const error = picker.parentElement.querySelector('.colour-error');
      if (error) error.remove();
    });
    picker.appendChild(button);
  });
});

function showColourError(button) {
  const content = button.closest('.product-content');
  const picker = content.querySelector('.colour-picker');
  let error = content.querySelector('.colour-error');
  if (!error) {
    error = document.createElement('p');
    error.className = 'colour-error';
    error.setAttribute('role', 'alert');
    picker.appendChild(error);
  }
  error.textContent = 'Please select a colour before ordering.';
}

document.querySelectorAll('.order-button').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.product-card');
    const picker = card.querySelector('.colour-picker');
    const colour = picker.dataset.selected;
    if (!colour) {
      showColourError(button);
      return;
    }

    let message;
    const kind = button.dataset.kind;
    if (kind === 'tshirt280') {
      message = `Hi Vanilla Kit Branding, I would like to order the Vanilla Kit T-shirt for R280. My preferred colour is ${colour}. Please let me know the available sizes and ordering details.`;
    } else if (kind === 'tshirt350') {
      message = `Hi Vanilla Kit Branding, I would like to order the Vanilla Kit x G5 Luffy T-shirt for R350. My preferred colour is ${colour}. Please let me know the available sizes and ordering details.`;
    } else if (kind === 'beanie') {
      message = `Hi Vanilla Kit Branding, I am interested in ordering a Vanilla Kit Beanie for R150. My preferred colour is ${colour}. Please let me know the ordering details.`;
    } else {
      message = `Hi Vanilla Kit Branding, I am interested in ordering a Vanilla Kit Cap for R120. My preferred colour is ${colour}. Please let me know the ordering details.`;
    }
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener');
  });
});

document.querySelectorAll('.whatsapp-link').forEach((link) => {
  const message = link.dataset.message;
  if (message) link.href = buildWhatsAppUrl(message);
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener');
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
  });
});

document.querySelectorAll('.image-frame img').forEach((image) => {
  const showMissing = () => {
    const frame = image.closest('.image-frame');
    if (!frame.querySelector('.image-placeholder')) {
      const placeholder = document.createElement('div');
      placeholder.className = 'image-placeholder';
      placeholder.textContent = image.dataset.missing;
      frame.appendChild(placeholder);
    }
    frame.classList.add('is-missing');
  };
  image.addEventListener('error', showMissing);
  if (image.complete && image.naturalWidth === 0) showMissing();
});
