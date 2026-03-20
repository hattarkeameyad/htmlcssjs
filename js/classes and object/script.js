// ----------------------------------code for the class 
class parentclass {

    constructor() {
        this.a = 25;
        this.b = 50;
        console.log("constructor is running");
    }
    printingfromanotherclass() {
        console.log(this.a, this.b);
        console.log("This is another class");
    }
}

class myclass extends parentclass {

    constructor(puname, pemailid) {
        super();
        this.uname = puname;
        this.emailid = pemailid;
    }

    printhello() {

        console.log("Hello World this is first method in the class");
        return 0;
    }

    takeinput() {

        console.log("takeinput working");
        this.uname = document.getElementById('uname').value;
        this.emailid = document.getElementById('emailid').value;
        console.log(this.uname, this.emailid);

    }
    giveoutput() {

        console.log("output is thrown");

        document.getElementById('output').value = this.uname + this.emailid;

        console.log(this.uname, this.emailid)
        super.printingfromanotherclass();
    }
}
// -------------------------------------

let btn = document.getElementById('pull');
btn.addEventListener('click', () => {
    let uname = document.getElementById('uname').value;
    let emailid = document.getElementById('emailid').value;
    let op = new myclass(uname, emailid);
    op.printhello();
    // op.takeinput();
    op.giveoutput();
     let op2 = new myclass('Ameya', "ameya@gmail.com");
     let myvar=setTimeout(() => {
        op2.printhello();
        op2.giveoutput();
     }, 5000);

     console.log(op.uname,op2.uname);
});

