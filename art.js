/*
// Art Page Indicator
const indicator = document.querySelector('.indicator');
const links = document.querySelectorAll('.art-filters ul li a');

function updateIndicator() {
  indicator.style.transition = 'all 0.25s ease';
  const activeLink = document.querySelector('.art-filters ul li.active a');
  if (activeLink) {
    const { width, left } = activeLink.getBoundingClientRect();
    indicator.style.width = `${width}px`;
    indicator.style.left = `${left}px`;
  }
}

function updateIndicatorResize() {
  indicator.style.transition = 'none';
  const activeLink = document.querySelector('.art-filters ul li.active a');
  if (activeLink) {
    const { width, left } = activeLink.getBoundingClientRect();
    indicator.style.width = `${width}px`;
    indicator.style.left = `${left}px`;
  }
}

links.forEach(link => {
  link.addEventListener('click', function() {
    const activeLink = document.querySelector('.art-filters ul li.active');
    activeLink.classList.remove('active');
    this.parentNode.classList.add('active');
    updateIndicator();
  });
});

window.addEventListener('resize', updateIndicatorResize);

updateIndicator();
//End Art Page Indicator
*/

const indicator = document.querySelector('.indicator');
const buttons = document.querySelectorAll('.art-filters ul li button');
const filtersUl = document.querySelector('.art-filters ul');

function updateIndicator() {
    indicator.style.transition = 'all 0.25s ease';
    const activeButton = document.querySelector('.art-filters ul li.active button');
    if (activeButton) {
        const { width, left } = activeButton.getBoundingClientRect();
        indicator.style.width = `${width}px`;
        indicator.style.left = `${left}px`;
        indicator.style.height = `${filtersUl.offsetHeight}px`;
    }
}

function updateIndicatorResize() {
    indicator.style.transition = 'none';
    const activeButton = document.querySelector('.art-filters ul li.active button');
    if (activeButton) {
        const { width, left } = activeButton.getBoundingClientRect();
        indicator.style.width = `${width}px`;
        indicator.style.left = `${left}px`;
        indicator.style.height = `${filtersUl.offsetHeight}px`;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const activeListItem = document.querySelector('.art-filters ul li.active');
        activeListItem.classList.remove('active');
        this.parentNode.classList.add('active');
        updateIndicator();
    });
});

window.addEventListener('resize', updateIndicatorResize);

updateIndicator();