const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let symbols = [];
    let morseSymb = [];
    let outputLineup = [];

    //an array of encoded letters, the length of each encoded letter is 10
    for (let i = 0; i < expr.length; i = i + 10) {
        symbols.push(expr.substr(i, 10));
    }

    symbols.forEach((elem) => {
        if (elem == "**********") outputLineup.push(" ");
        let part = elem.split("");

        //Remove zeros
        for (let i = 0; i < part.length; i++) {
            if (part[i] == 0) {
                part.shift();
                i = -1;
            } else break;
        }
        //10 is a dot, 11 is a dash
        for (let i = 0; i < part.length; i = i + 2) {
            if (part[i].concat(part[i + 1]) == "10") {
                morseSymb.push(".");
            } else if (part[i].concat(part[i + 1]) == "11") {
                morseSymb.push("-");
            }
        }
        let morseLine = morseSymb.join("");

        for (let key in MORSE_TABLE) {
            if (key == morseLine) {
                outputLineup.push(MORSE_TABLE[key]);
            }
        }
        morseSymb = [];
    });

    let endOutput = outputLineup.join("");
    return endOutput;

}

module.exports = {
    decode,
};
