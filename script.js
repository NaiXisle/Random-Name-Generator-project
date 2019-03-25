
function boy(){


var Mfirst= document.querySelector(".fn").value;
var Mlast= document.querySelector(".ln").value;
var MBoth= Mfirst + " " + Mlast;
console.log(MBoth);
console.log(Mfirst); 
console.log(Mlast);

var Male = ["Sir","Sire","King", "Lord", "The Great", "The Knight of the night","The horrendous" , "The Silent Arrow","Blacksmith","Prince" , "The Sorcerer of Saints","Warlock"     
    ];
var Mnumber = Male[Math.round(11 * Math.random())];


switch (MBoth){
    case ' ':    
    alert('Please enter a name');
    break;              
    
    default: document.querySelector(".target").innerHTML = Mnumber + " " + Mfirst + " " + Mlast;
    
    case 'Nai':
    //alert(Mnumber + " " + MBoth);
 }
}



function girl(){
var Ffirst= document.querySelector(".fn").value;     
var Flast= document.querySelector(".ln").value;    
var FBoth= Ffirst + " " + Flast; 
console.log(Ffirst);    
console.log(Flast);
console.log(FBoth);    
    

var Female = ["Lady", "Queen" ,"Princess" , "Mistress" , "Godess" , "The Seductive Sorceress" , "The Lady of The Blade","The Veluptuous Witch"];
   
var Fnumber = Female[Math.round(9 * Math.random())];

switch (FBoth){
    case ' ': 
    alert('Please enter a name');
    break;
default: document.querySelector(".target").innerHTML = Fnumber + " " + Ffirst + " " + Flast;

    //alert(Fnumber + " " + FBoth);
 }
} 
