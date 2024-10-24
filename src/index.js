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
    let s = expr;
    let result = '';
    while (s.length > 0) {
        let b = '';
        for (let i = 0; i < 5; i++) {
            if ((s[i*2] + s[i*2+1]) == '10') {
                b = b + '.';
            }
            else if ((s[i*2] + s[i*2+1]) == '11') {
                b = b + '-';
            }
            else if ((s[i*2] + s[i*2+1]) == '**') {
                b = b + ' ';
                result = result +' ';
                break;
            }
        }
        s = s.substr(10);
        for (let m of Object.entries(MORSE_TABLE))
            {
                if (m[0] == b){
                    result=result+m[1];
                    break;
                }
            }


    }
    return result;
}

module.exports = {
    decode
}