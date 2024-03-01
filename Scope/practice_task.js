//creating a block using {} and declaring variables using let, const and Var.

{
    var $cont1 = 11;
    let $cont2 = 12;
    const $cont3 = 13;

    //.log before reassignment - 
    console.log($cont1);
    console.log($cont2);
    console.log($cont3);
    
    //Reassinging values to container - 
    $cont1 = 21;
    $cont2 = 22;
    $cont3 = 23;

    //.log after reassignment of values to variables.
    console.log($cont1);
    console.log($cont2);
    console.log($cont3);

    //result: practice_task.js:16  Uncaught TypeError: Assignment to constant variable. at practice_task.js:16:12
}

// Try to reassing the same variables outside the block {}, and checking the same...

//Reassinging values to container - 
$cont1 = 21;
$cont2 = 22;
$cont3 = 23;

//.log after reassignment of values to variables.
console.log($cont1);
console.log($cont2);
console.log($cont3);