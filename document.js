
document.documentElement.setAttribute('data-device',String(navigator.userAgent.match(/steam|iPhone|iPad|iPod|macos/i)).toLowerCase())


const finalVoteStatusEl = document.querySelector('.final-vote-status');
const casperEl = document.querySelector('.casper');
const items = [...document.querySelectorAll('.magi-item')];

const randAll = _=>{
    document.querySelector('.code').innerHTML = 100 + Math.floor(Math.random() * 600);
};
const one = _=>{
    const voteStatus = document.body.getAttribute('data-status') === 'voting'?'voted':'voting';
    document.body.setAttribute(
        'data-status',
        voteStatus
    );
    
    if(voteStatus === 'voted') return;

    const reject = Math.random() > .6;

    if(reject){
        items.forEach(el=>el.setAttribute('data-status','resolve'));
        if(Math.random() > .5){
            casperEl.setAttribute('data-status','reject');
        }else{
            items[Math.floor(items.length*Math.random())].setAttribute('data-status','reject');
            if(Math.random() > .6)items[Math.floor(items.length*Math.random())].setAttribute('data-status','reject');
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



window._hmt = [];
window.dataLayer = [
    ['js', new Date()],
    ['config', 'G-13BQC1VDD8']
];
window.gtag = function(){dataLayer.push(arguments)};

const headEl = document.querySelector('head');
const loadScript = (src,cb=_=>{},el) =>{
	el = document.createElement('script');
	el.src = src;
	el.onload=cb;
	headEl.appendChild(el);
};

setTimeout(_=>{
	('//hm.baidu.com/hm.js?f4e477c61adf5c145ce938a05611d5f0');
	loadScript('//www.googletagmanager.com/gtag/js?id=G-13BQC1VDD8');
},400);