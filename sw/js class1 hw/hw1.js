
lib = [20,23,25,26];


sum = 0;

for(pos=0;pos<lib.length;pos++){
   alert("These arfe the numbers in the array:" + lib[pos]);
   
    sum += lib[pos]
    
    
}
alert("This is the Average : " + sum/lib.length);