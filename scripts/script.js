let words = ['kys', 'fuck you', 'inbread', 'nigger', 'npc', 'diff', 'top', 'mid', 'sup', 'adc', 'jg', 'retard', 'stupid', 'idiot', 'tallony from balcony', 'go',
             'zero iq', 'throw', 'fuck', 'goddamn', 'feeder', 'bullshit', 'jump out of window', 'asshole', 'shit on', 'get rekt', 'fat fuck', 'shitter', 'shit'];
let len_words = words.length;

function generator(){
    return words[Math.floor(Math.random() * (len_words))];
}


let generated_words = [];


for (let i = 0; i < 20; i++){
    let word = generator()
    generated_words.push(word);
    word = word + " "
    document.getElementById("words").innerHTML += word;
    console.log(word);
}


for (let i = 0; i < 20; i++){
    const userInput = document.getElementById('userInput');
    if (generated_words[i] == userInput)



}


