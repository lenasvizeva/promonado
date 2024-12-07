window.addEventListener('load', function () {
    new Glide('.glide', {
      type: 'slider',
      startAt: 0,
      perView: 4,
      bound: true,
      gap: 36,
      breakpoints: {
        1200: {
          perView: 3,
          gap: 24,
        },
        860: {
          perView: 2,
          gap: 20,
        },
        600: {
          perView: 2,
          gap: 14,
        },
        320: {
          perView: 1,
        }
      }
    }).mount()
    
})


const toggleSelect = function(event) {
    let selectElement = event.target.parentNode
    selectElement.classList.toggle('active')
}

const checkboxes = document.querySelectorAll('.options input[type="checkbox"]')
const selectText = document.querySelector('.select-text')

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        updateSelectText();
    });
});

// выводит выбранные опции в консоли
function updateSelectText() {
    const selectedOptions = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedOptions.push(checkbox.parentElement.textContent.trim());
        }
    });

    console.log(selectedOptions)
}


document.addEventListener('click', function (e) {
    const selectElement = document.querySelector('.custom-select');
    if (!selectElement.contains(e.target)) {
        selectElement.classList.remove('open');
    }
});

