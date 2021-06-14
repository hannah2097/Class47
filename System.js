class System{
    constructor(){

    }
    authenticate(actualCode, enteredCode){
        textSize(50);
        fill("black");
        text(code, 300, 300);
        if(actualCode === enteredCode.toLowerCase())
        return true;
        else
        return false;
    }
}