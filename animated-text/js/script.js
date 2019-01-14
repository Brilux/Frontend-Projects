const wrapper = document.querySelector('.wrapper');
const tagH1 = document.querySelector('.h1');
const tagP = document.querySelector('.p');
const tagSpan = document.querySelector('.span');
const tagDiv = document.querySelector('.div');
const textCont = tagH1.textContent + tagP.textContent + tagSpan.textContent + tagDiv.textContent;
tagH1.style.display = 'none';
tagP.style.display = 'none';
tagSpan.style.display = 'none';
tagDiv.style.display = 'none';

for (let i = 0; i < textCont.length; i++) {
    setTimeout(() => {
        const texts = document.createTextNode(textCont[i]);
        const span = document.createElement('span');
        span.appendChild(texts);
        wrapper.appendChild(span);
    }, 100 * i);
}
