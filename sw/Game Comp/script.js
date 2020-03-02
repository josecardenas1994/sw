

class Character {
    constructor(image, name, energy, hp, id) {
        this.name = name;
        this.energy = energy;
        this.hp = hp;
        this.id = id;
        this.image = image;
    }
    display = function () {
        document.getElementById("img" + this.id).innerHTML = `<img class="character" src="${this.image}" >`;
        document.getElementById(this.id).innerHTML = `Name: ${this.name} <br> Energy: ${this.energy} <br> hp: ${this.hp} `;
        
    }


    


    attack = function (opponent,item) {
        var newEnergy = opponent.energy - item.imagic;
        opponent.energy = newEnergy;
        opponent.display();
        var los=document.getElementById('console');
        los.innerHTML=`${this.name} is attacking with ${item.iname}`;
       
       
        var el = document.getElementById('mani');
        el.innerHTML=`<img id ="x" src="${item.img}">`;
        var pos=0;
        var fr= setInterval(frame,10);
        function frame(){
            if(pos == 200){
                clearInterval(fr);
            }else{
                pos++;
                el.style.top = pos + 'px';
                
            }
        }
        // display game over message
        if(c2.energy<=0){

            c2.display(c2.energy=0);
                los.innerHTML=`Game over Vorki wins`;
           }
           if(c1.energy<=0){ 
        
          c1.display(c1.energy=0);
          los.innerHTML=`Game over Bandos wins`;
          
          
          
        }
       
    }



}

    
const c1 = new Character("img/vorki.png", "Vorki", 100, 10,"c1");
const c2 = new Character("img/bandos.png", "Bandos", 100, 8, "c2");


c1.display();
c2.display();



class Item{
    constructor(iname,imagic,img){
        this.iname=iname;
        this.imagic=imagic;
        this.img=img;
    }
}
const item1 = new Item("fireball",27,'img/fireball.png');
const item2 = new Item("poisonball",25,'img/greenball.png');
const item3 = new Item("bandosgs",30,'img/sword.png');

var items = [item1,item2,item3];

function select(){
    let selection = Math.floor(Math.random()*3);

    return items[selection];
}




