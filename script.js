const tags = document.getElementById('tags');
const tarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10);

        randomSelect();
    }
});

function createTags(input){
    const choices = input.split(',').filter(choice => choice.trim() !== '').map(choice => choice.trim());

    tags.innerHTML = '';

    choices.forEach(choice => {
        const choiceEl = document.createElement('span');
        choiceEl.classList.add('tag');
        choiceEl.innerText = choice;
        tags.appendChild(choiceEl);
    });
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(()=> {
            unhighlightTag(randomTag);
        }, 100);

    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100)
    }, times * 100);

};

function pickRandomTag() {
    const tages = document.querySelectorAll('.tag');

    return tages[Math.floor(Math.random() * tages.length)];
};

function highlightTag(tag) {
    return tag.classList.add('highlight');
}

function unhighlightTag(tag) {
    return tag.classList.remove('highlight');
}