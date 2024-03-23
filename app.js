const p = document.querySelector('p')
const timeP = document.querySelector('h2')
const inp = document.querySelector('input')
inp.value = '_Type to start'
inp.focus()

const words = [
    'container',
    'me',
    'why',
    'I',
    'am',
    'going',
    'through',
    'changes',
    'qeshela',
    'another',
    'stars',
    'you',
    'wow',
    'good',
    'girl',
    'missy',
    'andrew',
    'big',
    'me too',
    'mouth',
    'mari',
    'nvm',
    '<3',
    'shut up',
    'gyatt',
    'omg',
    'fuck',
    'shit',
    'pro',
    'qurtaulo',
    'bro',
    'instagram',
    'facebook',
    'add',
    'me',
    'love u',
    'mine all mine',
    'wtf?',
    'dkd',
    'idk',
    'idc',
    'off',
    'sike',
    'skate',
    'mom',
    'daddy',
    'I like 12 yos',
    'u??',
    'no',
    'yes',
    'ofc',
    'HER',
    'slay',
    'queen',
    'period',
    'horse',
    'cock',
    'cow',
    'sexy',
    'nigga',
    'nigeria',
    'oh no',
    'hmm',
    'pussy CAT',
    'nuts',
    'yummy',
    'coke',
    'drugs',
    'dawn syndrome',
    'autism',
    'you have',
]

const l = words.length;
let mainText = '', 
            n = 1,
            m = 1, 
        time = 30,
        total = 0,
     oldWord = '', 
    ended = false,
       changeTime;

timeP.textContent = time;

function rand(){
    const R =  Math.floor( Math.random() * l );
    const word = words[R]
    if(word != oldWord){
        oldWord = word;
        return word;
    }
    else return rand()
}

function SetUp(){
    for(let i = 0; i < 25; i++){
        mainText += `${ rand() } `
    }
    for(let i = 0; i < mainText.length; i++){
        const span = document.createElement('span')
        span.textContent = mainText[i]
        span.classList.add('white')
        span.id = i + 1;
        p.appendChild(span)
        total++
    }
}
SetUp();

function Time(){
    changeTime = setInterval(() => {
        if(time > 0){
            time--
            timeP.textContent = time;
        }
        else{
            end()
        }
    }, 1000)
}

function write(key){

    if(m == 1) Time() 
    if(key == mainText[n - 1]){
        document.getElementById(n).classList.replace('white', 'green')
        n++;
    }
    if(n == total) end()
    m++;

}

inp.addEventListener('input', () => {
    inp.value = '_Type to start'
})

document.addEventListener('keydown', (e) => {
    if(!ended){
        const Key = e.key;
        if(Key.length < 2) write(Key)
    }
})

function end(){
    clearInterval(changeTime)
    ended = true;
    timeP.innerHTML = `
        your speed is <b> ${Math.floor(2*n/4.7)} words/minute.</b>
        click this to try again.
    `
    timeP.addEventListener('click', () => window.open('./index.html', '_parent'))
}