function main() {
    var text = ["Send a voice note saying that You love me.",
            "Tell me something you always wanted to say but you couldn't",
            "Give me a treat",
            "Tell me a secret about you",
            "Make my picture your dp for one day",
            "Record three minutes clip, saying something about me and send me.",
            "Take a picture of yourself & send it to me now",
            "Sing One song for me",
            "Like and comment on all of my Posts",
            "Write my name on your status saying you love me..!",
            "Describe me with a single Movie name",
            "What's your deepest secret?",
            "Update your status with message 'I am stupid'",
            "Update your status with message 'My love made me post this'"];

var counter = 0;
ele=document.getElementById("changeText");

setInterval(change, 1);

function change() {
    ele.innerHTML = text[counter];
    counter++;
    if(counter >= text.length)
        counter = 0;
}

}
setTimeout(main, 1);