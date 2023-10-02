import Key from "./key.js";

export default class Keyboard {
  constructor() {
    this.keys = [
      { keyCode: "q", note: "b4" },
      { keyCode: "w", note: "c5" },
      { keyCode: "3", note: "db5" },
      { keyCode: "e", note: "d5" },
      { keyCode: "4", note: "eb5" },
      { keyCode: "r", note: "e5" },
      { keyCode: "t", note: "f5" },
      { keyCode: "6", note: "gb5" },
      { keyCode: "y", note: "g5" },
      { keyCode: "7", note: "ab5" },
      { keyCode: "u", note: "a5" },
      { keyCode: "8", note: "bb5" },
      { keyCode: "ı", note: "b5" },
    ].map((key) => new Key(key.keyCode, key.note));
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    document.addEventListener("keyup", this.handleKeyUp.bind(this));
  }

  setPressedNote(note){
     document.getElementsByClassName('pressed__note')[0].innerText = note;
  }

  findKeyByEvent(event) {
    const key = event.key.toLowerCase();
    return this.keys.find((k) => k.keyCode === key);
  }

  handleKeyDown(event) {
    const keyObject = this.findKeyByEvent(event);
    if (keyObject && !keyObject.isKeyPressed) {
      keyObject.play();
      document.getElementById(`${keyObject.note}Key`).classList.add("pressed");
      this.setPressedNote(keyObject.note.charAt(0).toUpperCase()+keyObject.note.slice(1));
    }
  }

  handleKeyUp(event) {
    const keyObject = this.findKeyByEvent(event);
    if(keyObject){
        keyObject.stop();
        document.getElementById(`${keyObject.note}Key`).classList.remove("pressed");    
    }
    this.setPressedNote('');
  }
}
