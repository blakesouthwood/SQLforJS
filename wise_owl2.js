//wise_owl2.js

 // TAP BACK BUTTON ON BROWSER TO RETURN TO PROGRAM

function assert(condition,val,message){ //I am passing it as true or false in val
  if(val == true || val == "true" ){
    console.log("%c%s","color:black; background:palegreen", "FN ASSERt " + condition + " " + message);
   }else{ //meaning false
    console.log("%c%s","color:black; background:red", "FN ASSERT " + condition +  " " + message);
   }
} //end function


function delete_output_below(){
  console.log('fn delete_output_below called');
  var cleared = "<table width = 100 bgcolor=red><tr><td>test</td></tr></table>"//"<table width = 650 border=0 bgcolor=lightgrey ><tr><td><font face = 'Menlo'><font color=lightcoral>";
//  cool +=  " no matches";
 // cool += "</td><td><font face = 'Menlo'><font color=black>";
//  cool += "</td><td><font face = 'Menlo'><font color=black></td><td><font face = 'Menlo'>"
//  cool += "<font color=black></td><td><font face = 'Menlo'><font color=black></td></tr>";
//  cool += "</table><br><br>";
  document.getElementById("sql_output_results").innerHTML = cleared;
  console.log("%c%s","color:black; background:orange", " " + "zapped out previous results table" );
  var felix = "0"; //testing
  //document.getElementById("counter_result_of_conditions").innerHTML = felix;

} //end function



// this will be filled with data from an array with a function call.

//donuts function now triggers TahoeTime() to do the SQL search
//this simulates the input

//saturday january 26th 2019
//I need to write the code with some flags to determine
// how many conditions are being used  (the number of conditions)
// currently below it's hardcoded and it is merely told how many conditions
 var the_counter = 0;  //used to count boolean CONDITIONS
 the_counter = the_counter -0;

 var choices = [];
     choices[choices.length] = "0"
//var felix;





function get_number_of_conditions(){


} //end function


//hard coded rightnow for testing
     var the_conditions= []; //this will be filled in from the interface before the search
         the_conditions[the_conditions.length] ="2"; //"2";  //it was 2



 var number_of_conditions = "0";


//#################################
//         D O N U T S
//#################################
function donuts(){
  console.log('donuts func called');
  delete_output_below(); //zaps out bottom results from previous search_results
//this force feeds the values into the state and city

////console.log("before filling it try setting it to -1 if nothing entered yet into the variable");

// testing filter sniffer now


if(document.getElementById('field1').value != null){
    choices[1]  =   document.getElementById('field1').value; //put field1 into choices[1]
   //console.log('choices[1]=' + choices[1]);
   number_of_conditions = "1";
    the_conditions[0] = "1";
    document.getElementById("counter_result_of_conditions").innerHTML = "1";
}

if(document.getElementById('field1').value == null || document.getElementById('field1').value == ""){
  //console.log("it seems to be an empty field for the state")
  number_of_conditions = "0";
  the_conditions[0] = "0";
    document.getElementById("counter_result_of_conditions").innerHTML = "0";
}
//making porgress here detemring if sometihnghas been added and getting the countof inputSQLfor
//the number of booleans utilized

if(document.getElementById('field2').value != null){
    choices[2]  = document.getElementById('field2').value;
    number_of_conditions = "2";
     the_conditions[0] = "2";
}

  //}//put field2 into choices[2]
 var boolean1 =   document.getElementById('field3').value;
//if (boolean1  is empty then only one condition)
  //choices[3]  =   document.getElementById('field4').value; //put field2 into choices[2]
//foundthe bug
////console.log('it says it can read value of null')
 //var boolean2 =   document.getElementById('field4').value;
  choices[3]  =   document.getElementById('field5').value; //put field2 into choices[2]
//console.log(choices[3]);

  var boolean3 =   document.getElementById('field6').value;
  choices[4]  =    document.getElementById('field7').value; //put field2 into choices[2]

  var boolean4 =   document.getElementById('field8').value;
  choices[3]  =    document.getElementById('field9').value; //put field2 into choices[2]

  var boolean5 =   document.getElementById('field10').value;
//  choices[3]  =    document.getElementById('field11').value; //put field2 into choices[2]


 //var boolean3 = "and"; //testing purposes rammed in here
 //========================================

//console.log("boolean1 =" + boolean1);
////console.log("boolean2 =" + boolean2);
////console.log("boolean3 =" + boolean3);
////console.log("boolean4 =" + boolean4);
////console.log("boolean5 =" + boolean5);
//lert("choices[1] =" + choices[1]);
////console.log("choices[2] =" + choices[2]);
////console.log("choices[3] =" + choices[3]);
////console.log("choices[4] =" + choices[4]);
////console.log("choices[5] =" + choices[5]);

if( boolean1 == "" || boolean1 == " "){
  console.log("no boolean value so only one  meaning just the state");
  the_counter = "1";
   the_conditions[0] = "1";
  ////console.log(the_counter);
  //console.log("then")
}
 // and you have to continue to get buzzed by what you're doing
   choices[1] =choices[1].trim();
  if(choices[1] == null || choices [1] == undefined || choices[1] == "" || choices[1] == " " || choices[1] == "  " || choices[1] == "  "){
    console.log("nothing in field1");
    //if nothing in field 1
      document.getElementById("counter_result_of_conditions").innerHTML = "0";
    }else{
    console.log("the field1 has some text in it");
    //this means something in field one so at least 1 condition is confirmed for state by default
    conditions = "1";
     the_conditions[0] = "1";
  //  the_counter++;
   } //end if

   //field3
    boolean1 =boolean1.trim();

    if (boolean1 == null || boolean1 == "undefined"){
     //console.log("only one condition no and here");
     // I will need to set a flag here for boolean1 false means no second condition.
    }
  if(boolean1 == "and" || boolean1 == "or"||  boolean1== "not"){
    console.log("there is a 2nd condition");
    //console.log("2nd condition");
    //the_counter++; //this means 2 conditions
    conditions = "2";
     the_conditions[0] = "2";
    }else{
    console.log("no 2nd condition");
   } //end if

   if(boolean1 != "and" && boolean1 != "or" && boolean1 != "not"){
       //the_counter = 1;
       conditions = "1";
        the_conditions[0] = "1";
   }

//// I need to determine what fields are empty and which booleans are empty first

//================
///###########################################
   //field5  if field5 == "" ) it's empty
   var flag2 = "";
   if(document.getElementById('field5').value == ""){
    //console.log("field5 = empty");
    flag2 = "false";

   }
   /*
     boolean2 =boolean2.trim();
  if(boolean2 == "and" || boolean2 == "or"||  boolean2== "not"){
  console.log("there is a third condition");
  counter = "3";
    }else{
      //the_counter++;

  console.log("no third condition");
   } //end if

   */




    //field7
     boolean3 =boolean3.trim();
  if(boolean3 == "and" || boolean3 == "or"||  boolean3== "not"){
  console.log("there is a 4th condition");
 // the_counter++;
  counter = "4";
    }else{
  console.log("no 4th condition");
   } //end if


    //field9
     boolean4 =boolean4.trim();
  if(boolean4 == "and" || boolean4 == "or"||  boolean4== "not"){
   console.log("there is a 5th condition");
   //the_counter++;
   counter = "5";
    }else{
  console.log("no 5th condition");
   } //end if

/*
rules
if field3 = "" then only 1 booleans
if field4 = "' then only 2 booleans
*/


//counter is not defined weird
console.log('the_counter for boolean conditions = ' + the_counter);
//console.log("counter = " + the_counter);
console.log('conditions = ' +  the_conditions[0]);
console.log("conditions = " +  the_conditions[0]);
//=========================================
//=========================================

  //this is key to the database working because these are the labels at the top of the search
var f1a = "state";
var mid1 = "==";
var f1b = choices[1]; //"Utah";
//======
var f2a = "city";
var mid2 = "==";
var f2b = choices[2]; //"Layton";

var f3a = "car";
var mid3 = "==";
var f3b = choices[3]; //"porsche";



var bool1 = "and";
var bool2 = "and";
var bool3 = "and";

var conditions = the_counter; //this is currently hard coded

//console.log("(see if this works from above) conditions = " + conditions);


if(boolean1 == "and"){ b[1] = "&&";}
if(boolean1 == "or"){  b[1] = "||";}
if(boolean1 == "not"){ b[1] = "!"; }
/*
if(boolean2 == "and"){ b[2] = "&&";}
if(boolean2 == "or"){  b[2] = "||";}
if(boolean2 == "not"){ b[2] = "!"; }

if(boolean3 == "and"){ b[3] = "&&";}
if(boolean3 == "or"){  b[3] = "||";}
if(boolean3 == "not"){ b[3] = "!"; }

console.log('boolean1 = ' + b[1])
console.log('boolean2 = ' + b[2])
console.log('boolean3 = ' + b[3])
console.log('boolean4 = ' + b[4])
console.log('boolean5 = ' + b[5])
console.log('boolean6 = ' + b[6])
*/


// just added these below
/*
if(boolean3 == "and"){ b[3] = "&&";}
if(boolean3 == "or"){  b[3] = "||";}
if(boolean3 == "not"){ b[3] = "!"; }

if(boolean4 == "and"){ b[4] = "&&";}
if(boolean4 == "or"){  b[4] = "||";}
if(boolean4 == "not"){ b[4] = "!"; }

if(boolean5 == "and"){ b[5] = "&&";}
if(boolean5 == "or"){  b[5] = "||";}
if(boolean5 == "not"){ b[5] = "!"; }

if(boolean6 == "and"){ b[6] = "&&";}
if(boolean6 == "or"){  b[6] = "||";}
if(boolean6 == "not"){ b[6] = "!"; }

if(boolean7 == "and"){ b[7] = "&&";}
if(boolean7 == "or"){  b[7] = "||";}
if(boolean7 == "not"){ b[7] = "!"; }

if(boolean8 == "and"){ b[8] = "&&";}
if(boolean8 == "or"){  b[8] = "||";}
if(boolean8 == "not"){ b[8] = "!"; }

if(boolean9 == "and"){ b[10] = "&&";}
if(boolean9 == "or"){  b[10] = "||";}
if(boolean9 == "not"){ b[10] = "!"; }
*/


// THIS W WHERE TAHOETIME IS CALLED
TahoeTime(); //SQL search triggered here

  //document.getElementById("inputSQL").innerHTML = "<br>" +
  // "called before sql search starts <br>" +
   //" simulating this feeding in input onload right now &nbsp;<br>" +
    var whynot = "<table bgcolor=yellow><tr><td>"
   //this is the yellow area on the gui interface

  // "# of conditions = <b>" + conditions + " </b>" +"</td></tr>"  +
   whynot +=  " <tr><td> "+ f1a + " " + mid1 + " "+ choices[1]  + "</td></tr>"
   whynot +=   "<tr><td> " + "<b>" +bool1 +"</b>" +"</td></tr> "
   whynot +=   "<tr><td>"+  f2a + " " + mid2 + " "+ choices[2]   + "<td></tr>"
   //
   whynot +=   "<tr><td> " + "<b>" +bool2 +"</b>" +"</td></tr> "
   whynot +=   "<tr><td>"+  f3a + " " + mid2 + " "+ choices[3]   + "<td></tr>"
   //
    whynot +=  "<tr><td> "+ "condition 3"  + "<td></tr>"
    whynot +=   "<tr><td> "+ "condition 4"  + "<td></tr></table>";

    document.getElementById("inputSQL").innerHTML = whynot;
 }//end function
 //--------------------------



















 //============================
    var arrayLength= 12;  //add 1 more to it to make it work due to row 0 has nothing  //IMPORTANT this number must be the same as the number of excelDB rows
    //be sure to change this number if more rows are added otherwise it won't see that data

    var excelDB = new Array(arrayLength);
    for(var i = 0;i< excelDB.length;i++){
      excelDB[i] = new Array(arrayLength);
    } //end loop



//I will need to store two image names or 1 and then call them front.#.jpg and back.#.jpg
//                  0      1           2         3                   4          5               6                 7
 excelDB[0][0]   = ['0',  'state',    'city',     'car',           'color',  'Idtag',      'title',          'price', 'pic1',     'pic2',  'largepic']; //key labels
 excelDB[0][1]   = ['1',  'Utah', 'Layton','Porsche',          'white',      'MDN786',     'Rugby Shirt',      '52',   'greyshirt',     'redshirt_back',     'ten'];
 excelDB[0][2]   = ['2',  'California', 'Tahoe',  'Cruiser',             'hoodie',    'MDN786',     'Jersey',          '87',   'greyshirt',     'redshirt',     'ten'];
 excelDB[0][3]   = ['3',  'Montana',    'Bear Mouth',  'Maseratti',                 'hat',     'MDN782',     'Ocean Pacif',     '50',     'hat2',     'hat3',         'ten'];
 excelDB[0][4]   = ['4',  'Nevada',  'Carson City','GTI',                  'hoodie',    'MDN381',     'Nike',          '65', 'greyshirt',     'redshirt',       'ten'];
 excelDB[0][5]   = ['5',  'Florida',  'Clermont', 'matchbox GTI',              'blue',    'MDN771',     'adidas',        '65', 'greyshirt',     'redshirt',    'ten'];
 excelDB[0][6]   = ['6',  'California', 'South Shore','GTI',                   'hoodie',    'MDN799',     'Fruit of Loom',   '55', 'greyshirt',     'redshirt',    'ten'];
 excelDB[0][7]   = ['7',  'Colorado',    'Aspen', 'S',                  'hat',      'MDN100',     'Hello Kitty',      '55', 'hat2', 'hat3',    'ten'];
 excelDB[0][8]   = ['8',  'California',  'Cool', 'Honda Civic Si',    'orange',     'MDN789',     'cat',                 '45', 'greyshirt',     'redshirt',       'ten'];
 excelDB[0][9]   = ['9',  'Utah',  'Layton',  'SubarWRX',        'pink',   'MDN755',     'Gap',           '56', 'greyshirt',     'redshirt',       'ten'];
 excelDB[0][10]  = ['10', 'Nevada',  'Carson City', 'Golf R',            'green',       'MDN725',     'North Face',      '88', 'greyshirt',  'redshirt',    'ten'];
 excelDB[0][11]  = ['11', 'California', 'Tahoe',  'GTI',   'hoodie',    'MDN786',     'Jersey',          '87',   'greyshirt',     'redshirt',     'ten'];






//booleans
  var b = [];//will store and,or,not
     b[b.length] = 0;   //if they are all ands they all have to be true
     b[b.length] = "";  // b[1]  = and   &&
     b[b.length] = " && ";  // b[2]  = or   ||
     b[b.length] = " && ";  // b[3]  = not  will also user !=



 var mountain = [];
     mountain[mountain.length] = 0;
     mountain[mountain.length] = "apple";
     mountain[mountain.length] = "pear";
     mountain[mountain.length] = "plum";
     mountain[mountain.length] = "peach";

     //the user would enter from a form for now for more control and structure

     //simpulating input here from sql
      var choices = [];
     choices[choices.length] = 0;
     choices[choices.length] = "";   // choices[1] California
     choices[choices.length] = "";   // choices[2]  Ashland it was Ashlandish
     choices[choices.length] = "Porsche";
     choices[choices.length] = "0"; //4
     choices[choices.length] = " ";  //5 city
     choices[choices.length] = " ";  //6 state  this one here


     var coolness = [];
     coolness[coolness.length] = "==";
     coolness[coolness.length] = "&&";

     var boolv=  [];
      boolv[boolv.length] = "";
      boolv[boolv.length] = "or";
      boolv[boolv.length] = "not";
      boolv[boolv.length] = "xor";
      boolv[boolv.length] = "nor";
      boolv[boolv.length] = "nand";


    var operator = [];
    operator[operator.length] = "&&";

     var eq1 = []; //0
     eq1[eq1.length] = "==";  //position 0

      var eq2 = [];//1
     eq2[eq2.length] = "==";

      var eq3 = [];//2
     eq3[eq3.length] = "==";

      var eq4 = [];//3
     eq4[eq4.length] = "==";

//hard coded rightnow for testing
    // var the_conditions= []; //this will be filled in from the interface before the search
     //    the_conditions[the_conditions.length] ="2"; //"2";  //it was 2


 console.log('the_counter total = ' + "2");
 //window.document.test1.the_count_total.value = the_counter;
 // I will later feed this into the_counditions


 //===========================================================

 //this simulates the input
 /*
var f1a = "state";
var mid1 = "==";
var f1b = choices[1]; //"Utah";
//======
var f2a = "city";
var mid2 = "==";
var f2b = choices[2]; //"Layton";

var bool1 = "and";
var bool2 = "and";
var bool3 = "and";

var conditions = "2";
*/



function trace(x){
 console.log("%c%s","color:black; background:palegreen", "FN " +  x );
}

var fog = "2"; // so this means that I can possibly put the value into a local storage memory
//open that storage and get the value after reloading the page and then call teh function
//or get the new name of the js file to flip.
var array = [];
//var tahoetime;
array[array.length] = fog;























//fun();
main(); //see what happens <<<================ main() funciton is here.

//############################@@@@@@@@@@@@!##$$$$$$#############################
//#### MAIN just like in C since I need more control
function main(){
trace("################ MAIN ################");
//keepgoing();

trace("main function called");


 return; //this should kill everything else from running
 //actually it only kills this function.

 }//end main
//#############################
//#############################

















// sql_input();  //testing input of sql  currently does nothing









//NOTE this uses indexOf and includes
//successful search uses
//Big STrings


//##########################
//###### CHRISTMAS TRY Function
//##########################



//icestorm("for little ones");

//## icestorm function search engine testing Thursday, August 30th
var thelist = [];
//thelist[thelist.length] = christmas_poem;
//thelist[thelist.length] = bookstore_poem;
//thelist[thelist.length] = really;





















var chunk = 0; chunk = 0 - 0;
//how many times does it go thru the loop

var array_adder = [];
array_adder[array_adder] = 0;


//I am not even calling flywheel imagine that





















//=======
 //myFunction(); //testing new search technique

//the tricky part will
//displaying each highlighted phrase


function zap(){
trace('zap called');
chunk = 0;
array_adder =[]; //put empty into array array_adder
 window.document.one.candy.value = " ";
 window.document.one.words.value = " ";
 window.document.one.count_total.value = " ";
 window.document.one.index_numbers.value = " ";
}









 // global variables here now I can access them inside any function
 //'
 var a         = true;
//var b         = eval(str);
var equals    = "==";  //works
var notequals = "!= ";  //works
var and       = "&&"; //works
var or        = "||";  //works
var not       = "!=";  //works

var compare1 = equals;
var compare2 = equals;
var compare3 = equals;
var compare4 = equals;
var val1 = "one";
var val2 = "two";
var val3 = "three";
var val4 = "four";
var choice1 = "one";
var choice2 = "two";
var choice3 = "three";
var choice4 = "four";
var comparer = "";
var slot1 = "";




//declaring this above -hoisting it so it can see it
// otherwise it won't let me use it before it's created.

var  tustle = [];
tustle[tustle.length] = "0"; //slot 0




/*
important feb 8th,2019

before TahoeTime is called I need to nuke the previous output  results
and zero reinitialize the variables which I can do with a function called
to zap them out

*/

var conditions = the_conditions[0];
conditions = conditions -0;








//######################################
//        TAHOE TIME FUNCTION
//######################################

 //#######################
 // TahoeTime function  !!!  PROOF OF CONCEPT PORSCHE SQL ENGINE
 //                 WORKING TOTALLY DYANMIC CAN CHANGE AND OR NOT on the fly
 //######################
 function TahoeTime(){ //started working Tuesday October 9th, 2018
 ////console.log("tahoe time called");
 console.log('fn TahoeTime called');
delete_output_below(); ////deletes output table at bottom if it's there.
 //debugger; //breakpoint
  var xmas = [];
      xmas[xmas.length] = "1";
      xmas[xmas.length] = "2";
      xmas[xmas.length] = "3";
      xmas[xmas.length] = "4";
       //2darray accessed later here

 var filler = []; //this will be an array that holds other array names
     filler[filler.length] = "alpha";
     filler[filler.length] = "beta";

      var cool =  " ";
    //  var  tustle = [];
    //  tustle[tustle.length] = "0"; //slot 0

    ////console.log("the number of conditions = " + the_conditions[0]);
    console.log("number of conditions = " + conditions)
//  loop thru excelDB
console.log('excelDB length =' + excelDB.length);

var matches = 0; matches = matches-0;

  for(var j = 0;j< excelDB.length;j++){    // j is the counter//so I can change the == , != ,
  var equals = coolness[0]; //"=="; //feeding array value into a variable
         //these are the 4 conditions all have to be true
         if( j== 0){ continue;}//skip the first one which is zero

         //first if condition meaning one condition == this needs an if to detrmine whether to do this
//based on the number of conditions I will need if's here or a
//## switch case actually to determine which of these variables that it "sees".
//## so these will be conditional and branches based on
//##  the number of conditions that are fed and this is known
//##  before this code is run.

//so this makes me think that I will need to have
// these variables declared above before I use them or choose
// not to use them so it(the compiler)  doesn't flag and error

// February 8th 2019
//working on parser to write conditions with (   ) for complex queries
//below is the dynanmic filling of the conditions and boolean value
//which is added below to an if to determine if teh constructed condition is true or false
// if it's true then the flow down continues for correctness.

// ERROR CHECK
// I need a flag for if search is clicked with nothing hardcoded
////console.log("the number of conditions = " + the_conditions[0]);

//I will need ifs here to determine which of these to do and whenb


  var coffee = j; //coffee equals counter number j in loop

  console.log("coffee = " + coffee);
// htere has to be at least one condition
//only does this if there is at least 1 or more
////console.log(" [1] determine number of conditions");
////console.log('number of conditions = ' + conditions)
////console.log("conditions = " + felix);
//var conditions = felix;

console.log("conditions = " + conditions);
//console.log("first condition comparision = " + excelDB[0][j][1] + eq1[0] + choices[1]);
if(conditions >= 1){ //might need to make it a string

//IMPORTANT right now it's hard coded with state = field for conditoin 1
  var cat   = "(excelDB[0][j][1] " + eq1[0] + "choices[1])";
  var fun   = eval(cat); //notice no ' ' and it works
  console.log("fun first condition=" + fun);
}


//bug if only 1 condition make sure it does the search  for state only
////console.log("if boolean1 is true and boolean2 is empty");
////console.log("this is the test the_conditions[0] == 1");
////console.log('I have to see what the machine sees - at each juncture - so I know what it does wrong')


//second if condition
//this needs an if to detemrine whether to run this - likely a flag
// only does this if there are at least 2

// IMPoRTANT right now it's hard coded city = field
//so I need to make it possible to change what is being compared. with a menu for now.

if(conditions >= 2){
   var cat2  = "(excelDB[0][j][2] " + eq2[0]  +  " choices[2])";
   //console.log("second condition comparision = " + excelDB[0][j][2] + eq2[0] + choices[2]);
   var fun2  = eval(cat2);
   console.log("fun2 2nd condition=" + fun2);
}//end if

//only does this if there are at least 3
if(conditions >= 3){
   var cat3  = "(excelDB[0][j][4] " + eq3[0] +  " choices[4])"; //green
   var fun3  = eval(cat3); //what this does is treat the above as one continuous string
   console.log("fun3 3rd condition=" + fun3);
}//end if


  // I really need to explain WHY I am doing this below
  var op1   = coolness[1]; //feeding in data into a variable from an  array  //"&&";
  //now I can change and, or, not dynamic boolean time!!1
  var mistletoe = 0; mistletoe = mistletoe - 0;
  //it's also three words I could have the words in an array and then glue them togetehr
  var cafe = "tustle.push(coffee)";  //this says: append coffee to tustle// tustle.append(coffee);
  //this is building the array tustle
console.log('cafe = ' + cafe);
  //this switch is for checking if just plain vanilla straight bland CONDITIONS//
  // the next switch that I add will be parsed first for grouping with ( ) for more complex search_results
console.log('the_conditions[0] = ' + the_conditions[0]);
console.log('starting switch ');

//sunday 2.10.19
//based on the number of conditions it dictates the switch case for
// creating the correct if statement choice

//console.log("the_conditions[0] = " + the_conditions[0]); //meaning conditions of search

    switch(the_conditions[0]){ /// the number of conditions is known before the search
     //---------
     // note. I need to add the inputs for the second and third condition
     // currently it's just doing one condition.
     case "1" :
     console.log('case 1 called');
     var string1="if(fun)"+"{"+ cafe+"}";break;
     //-----------------
       case "2" :
       console.log('case 2 called');
     var string1="if(fun"+b[1]+"fun2)"+"{"+ cafe + "}";break;
     //-----------------
     case "3" :
     console.log('case 3 called');
      var string1="if(fun"+b[1]+"fun2"+b[2]+"fun3)"+"{"+cafe+"}";break;
     //-----------------
     case "4" :
     console.log('case 4 called');
     var string1="if(fun"+b[1] +"fun2"+b[2]+"fun3"+b[3]+"fun4)"+"{"+cafe+"}";break;

    case "5" :
    console.log('case 5 called');
     var string1="if(fun"+b[1]+"fun2"+b[2] +"fun3"+b[3]+"fun4"+b[4]+"fun5)"+"{"+cafe+"}";break;

      default:
   }//end switch


   ////console.log(" the_conditions = " + the_conditions[0]);
   if(the_conditions[0] > 0){
       eval(string1); //this executes the creation of the complex if inside the loop
       console.log("string1 =" + string1)
       //console.log(eval(string1));
   }// end if



   // so I could evaluate string1 after leaping out of the switch case
   // I can append the trail and ... yeah it's possible.
   // it's jsut a series of ands to begin with(hmm, in the function conditions I can have ( ) there

     var testing = "one" + " " + " two";
     //matches++ //add one to match
 } //end LOOP

//console.log("the number of matches = " + matches);
console.log("possible matches coffee sees " + coffee);
console.log("the number of matches coffee = " + coffee);
//======================
  if (coffee > 0){ //meaning at least one match, we have the total
 console.log("%c%s","color:black; background:orange", "all true " + " ALL CONDITIONS TRUE" );
 // smart_//console.log("tustle.length = " + tustle.length);
  var danger = 0;
  var lazy = tustle.length -1;   //this grabs teh number of MATCHES
  console.log('total matches = ' + lazy);

  var oper1 = b[1]; //does it work
    if(oper1 == "&&"){ oper1  = "and"; }
    if(oper1 == "||"){ oper1  = "or";  }
       oper1 = oper1.toUpperCase();
       var oper2 = b[2]; //testing
       var oper3 = b[3]; //testing

  //lime green on black background here
 var filler = "<tr><td colspan =8><font face = 'Menlo'><font color";
 cool += "<table width = 750 bgcolor = black border=0 >";
 cool += filler + "=lime>" +"turbo_radio_flyer 2.html" + "</td></tr>";
 cool += filler + "=black>words here" + "</td></tr>";
 cool += filler + "=lime>SELECT * " + "</td></tr>";
 cool += filler + "=lime>FROM excelDB " + "</td></tr>";
 cool += filler + "=lime>WHERE " + excelDB[0][0][1] + " = '" + choices[1] + "';" + " </td></tr>";
 cool += filler + "=lime> " + oper1 + "  " + excelDB[0][0][2] + " = '" + choices[2] + "';" + " </td></tr>";
 // cool += filler + "=lime>WHERE " + excelDB[0][0][1] + " = '" + choices[1] + "';" + " </td></tr>";
 cool += filler + "=lime> " + oper2 + "  " + excelDB[0][0][3] + " = '" + choices[3] + "';" + " </td></tr>";
 cool += filler + "=black>words here" + "</td></tr>";

var tryit = eval(lazy > 0);// result: true or false
//so determine if it's true or false before sending it
//assert("lazy > 0", tryit, " if matches = true ");

// I need to know what the design behavior is how it works and why it
// is doing what it's doing in human terms for human communication
// to udnerstand the behavior and what it does and how it works and why
// and the logic
//#############################################
//                     ASSERTION
//#############################################
if(lazy > 0){ //this means no matches
    cool += filler + "=lime>results = " + lazy + "</td></tr>";
    }else{
     cool += filler + "=salmon>results = " + "no matches" + "</td></tr>";
    }
    cool += filler + "=lime>conditions = " + the_conditions[0] + "</td></tr>" ;
} //end if

    //THIS BUILDS THE TABLE ROWS OUTPUT
  for(var y = 0;y< tustle.length;y++){ //this goes thru the entire array length
    // smart_//console.log("inside db  y = " + y);
     if( y== 0){
     continue;
     }// end if       skip the first one

         var candy = tustle[y];   //breakthrough bug fix
             cool += "</table><table width = 750 border=1 bgcolor=lightgrey ><tr><td width=11%><font face = 'Menlo'><font color=black>";
             cool +=  excelDB[0][candy][3];
             cool += "</td><td width=12%><font face = 'Menlo'><font color=black>";
             cool +=  excelDB[0][candy][1];
             cool +=  "</td><td width=12%><font face = 'Menlo'><font color=black>";
             cool +=  excelDB[0][candy][2];
             cool += "</td><td width=11%><font face = 'Menlo'><font color=black>";
             cool +=  excelDB[0][candy][4];    //color
             cool += "</td><td width=11%><font face = 'Menlo'><font color=black>";
             cool += "three</td><td width=11%><font face = 'Menlo'><font color=black>one</td><td width=11%><font face = 'Menlo'><font color=black>one</td><td width=11%> <font face = 'Menlo'><font color=black>one</td></tr>";

       } //end loop


// meaning no matches
 if(lazy == 0 || lazy == null){  //if no matches
   console.log("no matches");

             cool += "</table><table width = 650 border=0 bgcolor=lightgrey ><tr><td><font face = 'Menlo'><font color=lightcoral>";
             cool +=  " no matches";
            // cool += "</td><td><font face = 'Menlo'><font color=black>";
             cool += "</td><td><font face = 'Menlo'><font color=black></td><td><font face = 'Menlo'>"
             cool += "<font color=black></td><td><font face = 'Menlo'><font color=black></td></tr>";
   }//end if


             cool += "</table><br><br>";
             document.getElementById("sql_output_results").innerHTML = cool;
             console.log("%c%s","color:black; background:orange", " " + "end of tahoe time function" );
} //end function
  //----------------------
