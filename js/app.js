let intro = document.querySelector('.intro');
let nickname = document.querySelector('.nickname-header');
let nicknameSpan = document.querySelectorAll('.nickname');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        nicknameSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(() => {
            nicknameSpan.forEach((span, idx) => {

                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        },2400)

    });
})