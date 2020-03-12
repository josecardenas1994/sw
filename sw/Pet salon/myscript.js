// object literal

const salon = {
    name: "The Fashion Pet",
    phone: "3255-78493",
    address: {
        street: "Av. Insurgentes",
        number: "456"
    },
    workingHours: {
        days: "Mon-Fri",
        open: "9:00 am",
        close: "5:00 pm"
    },
    pets: []
}


let {
    name,
    phone,
    address: {
        street,
        number
    },
    workingHours: {
        dyas,
        open,
        close
    }
} = salon;

document.querySelector('.info').innerHTML = `Contact us ${phone},${street} ${number}<br> it's open from ${open} to ${close}`;

// object contructor
var c = 0;
class pet {
    constructor(name, age, gender, breed, service, ownerName, ownerContact) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.ownerName = ownerName;
        this.ownerContact = ownerContact;
        this.hunger = 10;
        this.happiness = 5;
        this.id = 'pet' + c;
        c += 1;

    }
    ownerInfo = function () {
        console.log("Owner Name:" + this.ownerName + "\n" + "Contact phone:" + this.ownerContact);
    }
    feed = function () {
        this.hunger -= 5;
        this.happiness += 5;
        console.log("Feeding ....");
    }
    status = function () {
        console.log("Hunger:" + this.hunger + "\n" + "Happiness:" + this.happiness);
    }
}

const pet1 = new pet("Shaggy", 2, "male", "boxer", "Shower", "Samantha", "4857348");
const pet2 = new pet("Janis", 3, "Female", "Boxer", "Hair cut", "Sabrina", "78657459");
const pet3 = new pet("oze", 6, "Male", "Mixed", "Shower", "omar", "5876844");


//pet1.ownerInfo();
//pet2.ownerInfo();
//pet3.ownerInfo();

//pet1.status();
//pet1.feed();

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

var textname = document.getElementById('txtname');
var textage = document.getElementById('txtage');
var textgender = document.getElementById('txtgender');
var textbreed = document.getElementById('txtbreed');
var textservice = document.getElementById('txtservice');
var textowner = document.getElementById('txtOname');
var textcontact = document.getElementById('txtcontact');


function register() {


    const thePet = new pet(textname.value, textage.value, textgender.value, textbreed.value, textservice.value, textowner.value, textcontact.value);
    salon.pets.push(thePet);
    display(thePet);
    alert("you registered a new pet");
    clear();
}

function clear() {
    textname.value = "";
    textage.value = "";
    textgender.value = "";
    textbreed.value = "";
    textservice.value = "";
    textowner.value = "";
    textcontact.value = "";
}

function display(aPet) {
    var tbody = document.getElementById('rowPet');

    var row = `<tr id='${aPet.id}'>
    <td>${aPet.name}</td>
    <td>${aPet.gender}</td>
    <td>${aPet.breed}</td>
    <td>${aPet.service}</td>
    <td>${aPet.ownerName}</td>
    <td>${aPet.ownerContact}</td>
    <td><button onclick="deletePet('${aPet.id}')">Delete</button></td>
    </tr>`;
    tbody.innerHTML += row;


}

display(pet1);
display(pet2);
display(pet3);
function deletePet(petId){
    var tr = document.getElementById(petId);
    var indexDelete;
// search

for(var i=0;i<salon.pets.length;i++){
    var selected = salon.pets[i];
    if(selected.id===pet.id){
        indexDelete=i;
    }
}
    salon.pets.splice(indexDelete,1);
    tr.remove();
}

function Search() {
    var searchString = document.getElementById('petSearch').value;
    var ss = searchString.toLowerCase();

    for (var j = 0; j < salon.pets.length; j++) {
        var searchPet = salon.pets[j];
        document.getElementById('pet'+j).setAttribute('class','disa');
        if (ss === searchPet.name.toLowerCase() || ss==searchPet.id) {
            document.getElementById('pet'+j).setAttribute('class','selected');

        } else if(ss!= searchPet.name.toLowerCase() || ss!=searchPet.id){

        }
    }
}