const burger = document.querySelector('.burger'),
        menu = document.querySelector('.menu');

        burger.addEventListener('click', () => {
            burger.classList.toggle('active')
            menu.classList.toggle('active')
            document.body.classList.toggle('lock');
        })