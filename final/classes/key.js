export default class Key{
    constructor(keyCode,note){
        this.keyCode = keyCode;
        this.note = note;
        this.audioElement = new Audio(`sounds/${note}.mp3`);
        this.isKeyPressed = false;
    }

    play(){
        this.audioElement.currentTime=0;
        this.audioElement.play();
        this.isKeyPressed= true;
    }

    stop(){
        this.isKeyPressed = false;
    }
}
