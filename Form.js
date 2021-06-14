class Form{
    constructor(){
        this.acess1 = createInput("Clue 1");
        this.acess1.position(100, 90);
        this.acess1.style("background", "white");

        this.button1 = createButton("Check");
        this.button1.position(100, 120);
        this.button1.style("background", "lightgrey");
    }
    display(){
        this.button1.mousePressed(()=>{
            if(system.authenticate(accessCode1, this.acess1.value())){
                this.button1.hide();
                this.acess1.hide();
                score++
            }
        })
    }
}