const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

const startBtn = document.querySelector('.startBtn');
const pauseBtn = document.querySelector('.pauseBtn');
const resetBtn = document.querySelector('.resetBtn');

let timeSec;

/* 초 단위를 눌렀을 때 start, reset버튼 활성화 */
second.addEventListener('click', (e) => {
    
    if (e.target.value === '00') {
        e.target.value = "10";
    }

    startBtn.querySelector('img').setAttribute('src', './images/start-default.png');
    resetBtn.querySelector('img').setAttribute('src', './images/reset-default.png');
})

/* 버튼 클릭시 나타나는 기능 */
startBtn.addEventListener('click', (e) => {
    
})

pasueBtn.addEventListener('click', (e) => {
    
})

resetBtn.addEventListener('click', (e) => {
    
})

/* 시간 조절을 잘못했는지 한게 없어요ㅠㅠ */