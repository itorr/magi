
const finalVoteStatusEl = document.querySelector('.final-vote-status');
const casperEl = document.querySelector('.casper');
const randAll = _=>{
    document.querySelector('.code').innerHTML = 100 + Math.floor(Math.random() * 600);
};
const one = _=>{
    document.body.setAttribute(
        'data-status',
        document.body.getAttribute('data-status') === 'voting'?'voted':'voting'
    );

    const reject = Math.random() > .6;
    const items = [...document.querySelectorAll('.magi-item')];

    if(reject){
        items.forEach(el=>el.setAttribute('data-status','resolve'));
        if(Math.random() > .4){
            casperEl.setAttribute('data-status','reject');
        }else{
            items[Math.floor(items.length*Math.random())].setAttribute('data-status','reject');
        }
        // document.body.setAttribute('data-status','data-status="voted"')
        finalVoteStatusEl.setAttribute('data-status','reject');
    }else{
        items.forEach(el=>el.setAttribute('data-status','resolve'));
        finalVoteStatusEl.setAttribute('data-status','resolve');
    }

    randAll()
};
randAll();
document.body.onclick = one;
window.onkeydown = e=>{
    const { keyCode } = e;

    if(keyCode === 32){
        one();
    }

}

document.querySelector('.reset').onclick = e=>{
    e.stopPropagation();
    document.body.removeAttribute('data-status');
}

document.querySelector('footer').onclick=e=>e.stopPropagation();


