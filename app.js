const listaTweets=document.getElementById('lista-tweets');

eventListeners();

function eventListeners() {
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
    console.log('Funciona');
    listaTweets.addEventListener('click', borrarTweet);
    document.addEventListener('DOMContentLoaded', localStorageListo)
}

function agregarTweet(e) {
    e.preventDefault();
    const tweet=document.getElementById('tweet').value;
    const botonBorrar=document.createElement('a');
    botonBorrar.classList='borrar-tweet';
    botonBorrar.innerText='X';
    const x=document.createElement('div');
    x.classList='elem row';
    x.innerText=tweet;
    const y=document.createElement('div');
    y.classList='col-2 left';
    y.innerHTML+="<img src='https://picsum.photos/50/50' style='border: solid;'>";
    x.appendChild(y);
    const w=document.createElement('div');
    w.classList='col-1 right';
    w.appendChild(botonBorrar);
    x.appendChild(w);
    listaTweets.appendChild(x);
    agregarTweetLocalStorage(tweet);
}

function borrarTweet(e) {
    e.preventDefault();
    if(e.target.className==='borrar-tweet') {
        e.target.parentElement.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.parentElement.innerText);
    }
}

function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets=obtenerTweetsLocalStorage();
    tweets.push(tweet);
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function obtenerTweetsLocalStorage() {
    let tweets;
    if(localStorage.getItem('tweets')===null) {
        tweets=[];
    }
    else {
        tweets=JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

function localStorageListo() {
    let tweets;
    tweets=obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet) {
        const botonBorrar=document.createElement('a');
        botonBorrar.classList='borrar-tweet';
        botonBorrar.innerText='X';
        const x=document.createElement('div');
        x.classList='elem row';
        x.innerText=tweet;
        const y=document.createElement('div');
        y.classList='col-2 left';
        y.innerHTML+="<img src='https://picsum.photos/50/50' style='border: solid;'>";
        x.appendChild(y);
        const w=document.createElement('div');
        w.classList='col-1 right';
        w.appendChild(botonBorrar);
        x.appendChild(w);
        listaTweets.appendChild(x);
    });
}

function borrarTweetLocalStorage(tweet) {
    let tweets, tweetBorrar;
    tweetBorrar=tweet.substring(0, tweet.length-1);
    tweets=obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet, index) {
        if(tweetBorrar===tweet) {
            tweets.splice(index, 1);
        }
    });
    localStorage.setItem('tweets', JSON.stringify(tweets));
}