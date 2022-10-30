const btns = document.querySelectorAll('.rounds__wrapper'),
      selected = document.querySelector('.start__item-you'),
      main = document.querySelector('.main'),
      start = document.querySelector('.start'),
      paper = document.querySelector('[data-paper]'),
      scissors = document.querySelector('[data-scissors]'),
      rock = document.querySelector('[data-rock]'),
      computer = document.querySelector('.start__item-computer'),
      roundsWrapper = document.querySelectorAll('.start__rounds-wrapper'),
      comp = document.querySelectorAll('[data-Comp]'),
      result = document.querySelector('.result'),
      resultText = document.querySelector('.start__item-result'),
      score = document.querySelector('.game__score-point'),
      againBtn = document.querySelector('.again'),
      animationWrappers = document.querySelectorAll('.start__animation-wrapper'),
      compWrapper = document.querySelector('[data-compWrapper]'),
      rulesBtn = document.querySelector('.rules'),
      modal = document.querySelector('.modal'),
      closeRulesBtn = document.querySelector('.modal__close');

let i = getRandomInRange(0, 2);
let scoreCounter = 0;

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function btnsSelect(btns) {
    btns.forEach(item => {
        item.addEventListener('click', (e) => {
            main.classList.add('hide');
            main.classList.add('display');
            start.classList.remove('hide');
            start.classList.remove('display');
            start.classList.add('show');
            function chacking(mainParent, imgParent, mainClass, oneOfIt) {
                if((e.target.parentElement.classList.contains(`${mainParent}`) || e.target.parentElement.classList.contains(`${imgParent}`) || e.target.classList.contains(`${mainClass}`))){
                    oneOfIt.classList.remove('hide');
                    oneOfIt.classList.remove('display');
                    oneOfIt.classList.add('show');
                }
                function changeText() {
                    let winAnimationElement = oneOfIt.firstElementChild.lastElementChild;
                    if((e.target.parentElement.classList.contains(`${mainParent}`) || e.target.parentElement.classList.contains(`${imgParent}`) || e.target.classList.contains(`${mainClass}`))){
                        if((oneOfIt === paper) && i === 0) {
                            resultText.innerHTML = 'YOU LOOSE';
                            scoreCounter--;
                            comp[0].firstElementChild.lastElementChild.classList.remove('hide');
                        }else if((oneOfIt === paper) && i === 1){
                            resultText.innerHTML = 'DRAW';
                        }else if((oneOfIt === paper) && i === 2) {
                            resultText.innerHTML = 'YOU WIN';
                            scoreCounter++;
                            winAnimationElement.classList.remove('hide');
                        } else if((oneOfIt === scissors) && i === 0) {
                            resultText.innerHTML = 'DRAW';
                        } else if((oneOfIt === scissors) && i === 1) {
                            resultText.innerHTML = 'YOU WIN';
                            scoreCounter++;
                            winAnimationElement.classList.remove('hide');
                        } else if((oneOfIt === scissors) && i === 2) {
                            resultText.innerHTML = 'YOU LOOSE';
                            scoreCounter--;
                            comp[2].firstElementChild.lastElementChild.classList.remove('hide');
                        }else if((oneOfIt === rock) && i === 0) {
                            resultText.innerHTML = 'YOU WIN';
                            scoreCounter++;
                            winAnimationElement.classList.remove('hide');
                        } else if((oneOfIt === rock) && i === 1) {
                            resultText.innerHTML = 'YOU LOOSE';
                            scoreCounter--;
                            comp[1].firstElementChild.lastElementChild.classList.remove('hide');
                        } else if((oneOfIt === rock) && i === 2) {
                            resultText.innerHTML = 'DRAW';
                        }
                    }
                } 
                setTimeout(changeText, 500);
                againBtn.addEventListener('click', () => {
                    start.classList.remove('show');
                    start.classList.add('hide');
                    start.classList.add('display');
                    main.classList.remove('display');
                    main.classList.remove('hide');
                    animationWrappers.forEach(item => {
                        item.classList.add('hide');
                    });
                    start.style.width = '65%';
                    result.classList.remove('show');
                    result.classList.add('hide');
                    oneOfIt.classList.add('hide');
                    oneOfIt.classList.add('display');
                    comp.forEach(item => {
                        item.classList.add('hide');
                        item.classList.add('display');
                    });
                    computer.classList.remove('hide');
                    computer.classList.remove('display');
                    i = getRandomInRange(0, 2);
                    compWrapper.classList.add('hide');
                    compWrapper.classList.add('display');
                });
            }
            chacking('paper', 'paper__wrapper', 'paper', paper);
            chacking('scissors', 'scissors__wrapper', 'scissors', scissors);
            chacking('rock', 'rock__wrapper', 'rock', rock);
            setTimeout(computerSelect, 500);

        });
    });
}
btnsSelect(btns);




function computerSelect() {
    function interval () {
        computer.classList.add('hide');
        computer.classList.add('display');
        roundsWrapper[1].classList.remove('display');
        roundsWrapper[1].classList.remove('hide');
        roundsWrapper[1].classList.add('show');
        if(i === 0) {
            comp[0].classList.remove('display');
            comp[0].classList.remove('hide');
            comp[0].classList.add('show');
        } else if(i === 1) {
            comp[1].classList.remove('display');
            comp[1].classList.remove('hide');
            comp[1].classList.add('show');
        } else if(i === 2) {
            comp[2].classList.remove('display');
            comp[2].classList.remove('hide');
            comp[2].classList.add('show'); 
        }
        result.classList.remove('display');
        result.classList.remove('hide');
        result.classList.add('show');
        start.style.width = '80%';
    }
    interval();
    if(scoreCounter < 0) {
        scoreCounter = 0;
    }
    score.innerHTML = `${scoreCounter}`;
}

function openRules() {
    rulesBtn.addEventListener('click', () => {
        modal.classList.remove('hide');
    });
}
openRules();

function closeRules() {
    closeRulesBtn.addEventListener('click', () => {
        modal.classList.add('hide');
    });
}
closeRules();



