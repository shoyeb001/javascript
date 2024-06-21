var i;
for(i=0; i<4; i++){
    setTimeout(()=>console.log(i), 3000) //this will print 4 times 4 because the i is pointing to same variable or location of its value.
}
for(let i=0; i<4; i++){
    setTimeout(()=>console.log(i), 3000) // this will print 0,1,2,3 because every i is like diff variables because of using let.
}