(() => {
    const DATA = [
        {
            "category": "Reaction",
            "score": 80,
            "icon": "./assets/images/icon-reaction.svg"
        },
        {
            "category": "Memory",
            "score": 92,
            "icon": "./assets/images/icon-memory.svg"
        },
        {
            "category": "Verbal",
            "score": 61,
            "icon": "./assets/images/icon-verbal.svg"
        },
        {
            "category": "Visual",
            "score": 72,
            "icon": "./assets/images/icon-visual.svg"
        }
    ]

    function createComponentScoreDiv(obj) {
        const componentScoreDiv = document.createElement('div');
        componentScoreDiv.classList.add('component-score-wrapper', obj.category);

        const iconImg = document.createElement('img');
        iconImg.src = obj.icon;
        iconImg.setAttribute('alt', `icon of ${obj.category}`);

        const componentHeading = document.createElement('h3');
        componentHeading.innerText = obj.category;

        const scoreP = document.createElement('p');
        scoreP.classList.add('component-score');
        scoreP.innerText = obj.score;

        const scoreTotalP = document.createElement('p');
        scoreTotalP.innerText = '/ 100';

        componentScoreDiv.append(iconImg, componentHeading, scoreP, scoreTotalP);

        return componentScoreDiv;
    }

    const componentScoreResultDiv = document.querySelector('.component-score-result');
    const continueBtn = document.querySelector('button');

    for (obj of DATA) {
        componentScoreResultDiv.insertBefore(createComponentScoreDiv(obj), continueBtn);
    }
    
})();

