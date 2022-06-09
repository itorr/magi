
document.documentElement.setAttribute('data-device',String(navigator.userAgent.match(/steam|iPhone|iPad|iPod|macos/i)).toLowerCase())

const $ = s=>document.querySelector(s);
const $$ = s=>[...document.querySelectorAll(s)];
const finalVoteStatusEl = $('.final-vote-status');
const casperEl = $('.casper');
const items = $$('.magi-item');
const bodyEl = document.body;

const randAll = _=>{
    $('.code').innerHTML = 100 + Math.floor(Math.random() * 600);
};

let volume = 60;
const one = _=>{
    const voteStatus = bodyEl.getAttribute('data-status') === 'voting'?'voted':'voting';
    bodyEl.setAttribute(
        'data-status',
        voteStatus
    );
    
    if(voteStatus === 'voted') return;

    const reject = (Math.random() * 100) > volume;

    if(reject){
        items.forEach(el=>el.setAttribute('data-status','resolve'));
        if(Math.random() > .5){
            casperEl.setAttribute('data-status','reject');
        }else{
            items[Math.floor(items.length*Math.random())].setAttribute('data-status','reject');
            if(Math.random() > .6)items[Math.floor(items.length*Math.random())].setAttribute('data-status','reject');
        }
        // bodyEl.setAttribute('data-status','data-status="voted"')
        finalVoteStatusEl.setAttribute('data-status','reject');
    }else{
        items.forEach(el=>el.setAttribute('data-status','resolve'));
        finalVoteStatusEl.setAttribute('data-status','resolve');
    }

    randAll()
};
randAll();
bodyEl.onclick = one;
window.onkeydown = e=>{
    const { keyCode } = e;

    if(keyCode === 32){
        one();
    }

}


//reset
$('.reset').onclick = e=>{
    e.stopPropagation();
    bodyEl.removeAttribute('data-status');
}

$('footer').onclick=e=>e.stopPropagation();


// ex mode
let exMode = false;
const exModeEl = $('.ex-mode');
exModeEl.onclick = e=>{
    e.stopPropagation();

    exMode = !exMode;
    bodyEl.setAttribute('data-ex-mode',exMode);

    exModeEl.innerHTML = exMode?'ON':'OFF';
}

// input file
const fileEl = $('.file');
fileEl.onclick = e=>{
    e.stopPropagation();
    fileEl.innerText = prompt('INPUT FILE',fileEl.innerText) || 'MAGI_SYS';
}


// volume
const volumeEl = $('.volume');
const volumes = [
    1,
    10,
    30,
    60,
    90,
    65535,
];
volumeEl.onclick = e=>{
    e.stopPropagation();
    const index = volumes.indexOf(volume);
        
    let nextIndex = index + 1;

    if(nextIndex >= volumes.length){
        nextIndex = 0;
    }

    volume = volumes[nextIndex];

    volumeEl.setAttribute('data-text',volume);
}

// priority
const priorityEl = $('.priority');
let priority = 'A';
const prioritys = [
    'E',
    'A',
    'AA',
    'AAA',
];
priorityEl.onclick = e=>{
    e.stopPropagation();
    const index = prioritys.indexOf(priority);
        
    let nextIndex = index + 1;

    if(nextIndex >= prioritys.length){
        nextIndex = 0;
    }

    priority = prioritys[nextIndex];

    priorityEl.setAttribute('data-text',priority);
}





setTimeout(_=>{
    bodyEl.removeAttribute('data-loading')
},1000);



window._hmt = [];
window.dataLayer = [
    ['js', new Date()],
    ['config', 'G-13BQC1VDD8']
];
window.gtag = function(){dataLayer.push(arguments)};

const headEl = $('head');
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