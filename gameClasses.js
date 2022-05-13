// basket class
export class Basket  {
    #left;
    constructor(){
        this.#left=0;
        this.body="";
        this.createBasket();
        this.addStyle();
    }
    createBasket(){
        let basketBody = document.createElement('img');
        this.body=basketBody;
        basketBody.className="basket";
        this.body.src='./objects/object_001_basket.png';
        window.document.body.prepend(this.body);
    }
    addStyle(){
        this.body.style.position='absolute';
        this.body.style.height='auto';
        this.body.style.width='150px';
        this.body.style.left=this.#left +'px';
        this.body.style.top= window.innerHeight-160+'px';
    }
    moveLeft(value){
        this.#left -= value;
        this.body.style.left=this.#left +'px';
        if(this.#left<=0)
        {this.#left=0;}
    }
    moveRight(value){
        this.#left += value;
        this.body.style.left=this.#left +'px';
        if(this.#left>=window.innerWidth-180)
        {this.#left=innerWidth-180;}
    }
};
// Create Ball Class (inherits from Shape class) which has only one public property called body
export class Egg {
    #left;
    #top;
    constructor(){
        this.body="";
        this.createEgg();
        this.addStyle();
        this.fallenEgg();
    }
    
    createEgg(){
        let eggBody = document.createElement('img');
        this.body=eggBody;
        eggBody.className='egg';
        this.body.src='./objects/whiteEgg.png';
        window.document.body.append(this.body);
    }
     addStyle(){
        this.body.style.visibility='visible';
        this.body.style.position='absolute';
        this.body.style.width='40px';
        this.body.style.left=this.generateRandom() +'px';
        this.body.style.top= '-100px';
    };
    moveDown(){
        this.body.style.top=`${this.body.offsetTop+10}px`;
    }
    fallenEgg(){
         let moveEgg= setInterval(()=>{
                    this.moveDown();
                    if(this.body.offsetTop>=window.innerHeight-50) {
                        clearInterval(moveEgg);
                        this.body.src='./objects/object_012_broken_egg.png';
                        this.body.style.width='60px';
                        setTimeout(() => {
                            this.body.style.visibility='hidden';
                        }, 1000);     
                   }
        },30) 
        }
    generateRandom(){
        let min =60;
        let max = window.document.body.offsetWidth-100;
        return Math.floor(Math.random() * (max - min)) + min;
    }

};


