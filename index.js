// Test one
function shout(string) {
    return string.toUpperCase();
}
shout('hello');

// Test two
function whisper(string) {
    return string.toLowerCase()
}
whisper('HELLO');

// Test three
function logShout(string) {
    console.log(string.toUpperCase());
}
logShout('hello');

// Test four
function logWhisper(string) {
    console.log(string.toLowerCase())
}
logWhisper('HELLO');

// Test five
function  sayHiToHeadphonedRoommate(string) {
    if(string === string.toLowerCase()) {
        return 'I can\'t hear you!';
    } else if(string === string.toUpperCase()) {
        return 'YES INDEED!';
    } else if(string === 'Let\'s have dinner together!') {
        return 'I would love to!'
    }
}
sayHiToHeadphonedRoommate('HELLO');