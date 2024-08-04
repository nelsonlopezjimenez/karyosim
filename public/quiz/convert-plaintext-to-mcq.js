import data from './questionArr.js'
// convert-plaintext-to-mcq.js node.exe convert-plaintext-to-mcq.js > test.test.html
function makeStyle() {
    return `<style>
    .ibpage-problems__item {
        background-color: rgb(241, 245, 241);
    }

    .form-check {
        display: flex;
        justify-content: space-between;
    }

    .form-check[data-correct='true'] {
        background-color: green;
    }

    .form-check--v2[data-correct='false'] {
        background-color: rgb(176, 27, 27);
    }

    .form-check__icon {
        display: inline;
    }
</style>`
}

function makeHeader(title, currentDate ) {
    return `<!DOCTYPE html>
<html lang="en">
 <!-- last modified: 8.4.2024${currentDate} -->
<head>
    <meta charset="UTF-8">
    <meta name="keywords" content="convert plaintext to multiple choice format questions">
    <meta name="description" content="programmatically convert plaintext to html">
    <meta name="author" content="Nelson Lopez">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${makeStyle()}
    <title>${title}</title>
</head>
<body>`
}

function makeBodySectionHeader(questionNumber, title){
    let stub = 'Add variable'
    return `<section class="ibpage-problems__item" id="${title}">
    <div class="ibpage-problems__header">
        <span class="m-r-5 h3">${questionNumber}</span>
        <div>
            <p>${title}.</p>
        </div>
    </div>`
}

function makeBodyFormCheck(questionNumber, unique, content, j){
    return `<div class="ibpage-problems__options">
    <div class="form-check" data-correct="${j++ === 0 ? true : false}"
        data-problem-index=${questionNumber}>
        <input class="form-check__input " type="radio" name="${unique+questionNumber}"
            id="${unique + content}" value="">
        <label class="form-check__label" for="${unique + content}">
            ${content}
        </label>
        <img class="form-check__icon form-check__icon--success"
            src="green-check-99d545.svg" />
        <img class="form-check__icon form-check__icon--error"
            src=" cross-616d53c.svg" />
    </div>
</div>\n`
}

function makeLocalScript(){
    return `<script>
        let questionSection = document.querySelectorAll('.ibpage-problems__item');
        let myRadio  = document.querySelectorAll('input');
        let myImg = document.querySelectorAll('img');

        for (let i = 0; i < myImg.length; i++){
            myImg[i].setAttribute('hidden', true);

        }
        console.log(questionSection.length)
        console.log(myRadio.length)
        console.log(myImg.length)

        // console.dir(questionSection[0].childNod
        for (let i = 0 ; i < myRadio.length; i++){
            // console.log(questionSection[parseInt(i/4)].childNodes[3].childNodes[7].childNodes[5].setAttribute('hidden', true))
            myRadio[i].addEventListener('click', (event) => {
            

            })
        }
    </script>`
}
function makeAfterFormCheck(){
    return `\n</div>\n</section>\n${makeLocalScript()}\n</html>`
}
function repeat4times(questionNumber){
    let result = '';
    for (let i = 0; i < 4; i++){
        result += makeBodyFormCheck(questionNumber, 'cxg', data[questionNumber].questions[i], (i === 0 ? 0:1));
    }
    return result;
}

function main10(){
    console.log(makeHeader('Midterm', '8.4.2024')) 
    console.log(makeBodySectionHeader(0, data[0].title ))
    console.log(makeBodyFormCheck(1, 'cxg', data[0].questions[0], 0));
    console.log(makeBodyFormCheck(1, 'cxg', data[0].questions[1], 1));
    console.log(makeBodyFormCheck(1, 'cxg', data[0].questions[2], 1));
    console.log(makeBodyFormCheck(1, 'cxg', data[0].questions[3], 1));
    console.log(makeAfterFormCheck())
}
function main(){
    console.log(makeHeader('Midterm', '8.4.2024')) 
    console.log(makeBodySectionHeader(0, data[0].title ))
    console.log(repeat4times(0))
    console.log(makeAfterFormCheck())
}
main()