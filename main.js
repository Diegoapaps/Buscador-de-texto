// Select inputs and buttons
const submitText = document.querySelector('#submit-text');
const sumbitEnding = document.querySelector('#submit-ending');
const endings = document.querySelector('.endings');
const inputTerm = document.querySelector('#input');
const color = document.querySelector('#color');
const reset = document.querySelector('#reset');

// Select paragraph output
const output = document.querySelector('p');
const container = document.querySelector('.container');

// Listeners for submit button and reset
submitText.addEventListener('click', createPara);
sumbitEnding.addEventListener('click', createTerminations);
reset.addEventListener('click', resetSpans);

// select spans
let spans = output.childNodes;

// Create Paragraph
function createPara() {
    // Select text input
    const text = document.querySelector('textarea').value;

    if (text !== '') {
        // Create array of words for paragraph
        const r = /(\W)/g;
        const words = text.split(r);

        words.forEach(word => {
            let span = document.createElement('span');
            span.innerHTML = word;
            output.appendChild(span);

            let ing = /ces\b/;
            if (ing.test(word) === true) {
                span.style.backgroundColor = 'blue';
                span.style.color = 'white';
            }

            container.style.display = 'block';
            reset.style.display = 'block';
        });

        let h4 = document.createElement('h4');
        let matches = text.match(/\b\w+\b/g);
        h4.innerHTML = `Words: ${matches.length}`;
        container.appendChild(h4);
    }
}

// Create termnations
function createTerminations() {
    let txt = inputTerm.value;
    let col = color.value;

    if (txt !== '' && col !== '') {
        let btn = document.createElement('button');
        btn.innerHTML = txt;
        btn.style.backgroundColor = col;
        btn.className = 'term';
        endings.appendChild(btn);

        // Listener for termination
        btn.addEventListener('click', function () {
            let regexp = new RegExp(btn.innerHTML);

            // Check if paragraph hasbeen displayed
            if (container.style.display === 'block') {

                // Test the regular expressions for every word
                spans.forEach(item => {
                    if (regexp.test(item.textContent) === true) {
                        item.style.backgroundColor = btn.style.backgroundColor;
                    }
                });
            }
            else {
                console.log(1);
            }

        });

        inputTerm.value = '';
        color.value = '';
    }

}

// Reset color of spans
function resetSpans() {
    spans.forEach(el => {
        el.style.backgroundColor = 'darkslategray';
    });
}