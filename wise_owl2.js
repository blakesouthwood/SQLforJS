//wise_owl2.js


function assert(condition,val,message){ //I am passing it as true or false in val
  if(val == true || val == "true" ){
    console.log("%c%s","color:black; background:palegreen", "FN ASSERt " + condition + " " + message);
   }else{ //meaning false
    console.log("%c%s","color:black; background:red", "FN ASSERT " + condition +  " " + message);
   }
} //end function




// this will be filled with data from an array with a function call.

//donuts function now triggers TahoeTime() to do the SQL search
//this simulates the input

//saturday january 26th 2019
//I need to write the code with some flags to determine
// how many conditions are being used  (the number of conditions)
// currently below it's hardcoded and it is merely told how many conditions

function donuts(){
//this force feeds the values into the state and city
  choices[1]  =   document.getElementById('field1').value; //put field1 into choices[1]
  choices[2]  =   document.getElementById('field2').value; //put field2 into choices[2]
 var boolean1 =   document.getElementById('field3').value;

  //choices[3]  =   document.getElementById('field4').value; //put field2 into choices[2]
 var boolean2 =   document.getElementById('field5').value;
  choices[3]  =   document.getElementById('field6').value; //put field2 into choices[2]

  var boolean3 =   document.getElementById('field5').value;
  choices[4]  =   document.getElementById('field6').value; //put field2 into choices[2]

  var boolean4 =   document.getElementById('field5').value;
  choices[3]  =   document.getElementById('field6').value; //put field2 into choices[2]

  var boolean5 =   document.getElementById('field5').value;
  choices[3]  =   document.getElementById('field6').value; //put field2 into choices[2]


 var boolean3 = "and"; //testing purposes rammed in here
 //========================================
 // Stephen King's advice from YouTube
 // to become a writer you have to read a lot and write a lot
 // and you have to continue to get buzzed by what you're doing
   choices[1] =choices[1].trim();
  if(choices[1] == null || choices [1] == undefined || choices[1] == "" || choices[1] == " " || choices[1] == "  " || choices[1] == "  "){
    console.log("nothing in field1");
    }else{
    console.log("the field1 has some text in it");
   } //end if

   //field3
    boolean1 =boolean1.trim();
  if(boolean1 == "and" || boolean1 == "or"||  boolean1== "not"){
    console.log("there is a 2nd condition");
    }else{
    console.log("no 2nd condition");
   } //end if

   //field5
     boolean2 =boolean2.trim();
  if(boolean2 == "and" || boolean2 == "or"||  boolean2== "not"){
  console.log("there is a third condition");
    }else{
  console.log("no third condition");
   } //end if


    //field7
     boolean3 =boolean3.trim();
  if(boolean3 == "and" || boolean3 == "or"||  boolean3== "not"){
  console.log("there is a 4th condition");
    }else{
  console.log("no 4th condition");
   } //end if


    //field9
     boolean4 =boolean4.trim();
  if(boolean4 == "and" || boolean4 == "or"||  boolean4== "not"){
   console.log("there is a 5th condition");
    }else{
  console.log("no 5th condition");
   } //end if



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

var conditions = "2"; //this is currently hard coded

if(boolean1 == "and"){ b[1] = "&&";}
if(boolean1 == "or"){  b[1] = "||";}
if(boolean1 == "not"){ b[1] = "!"; }

if(boolean2 == "and"){ b[2] = "&&";}
if(boolean2 == "or"){  b[2] = "||";}
if(boolean2 == "not"){ b[2] = "!"; }

if(boolean3 == "and"){ b[3] = "&&";}
if(boolean3 == "or"){  b[3] = "||";}
if(boolean3 == "not"){ b[3] = "!"; }

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



TahoeTime(); //SQL search triggered here

  document.getElementById("inputSQL").innerHTML = "<br>" +
   "called before sql search starts <br>" +
   " simulating this feeding in input onload right now &nbsp;<br>" +
   "<table bgcolor=yellow><tr><td>" +
  // "# of conditions = <b>" + conditions + " </b>" +"</td></tr>"  +
   " <tr><td> "+ f1a + " " + mid1 + " "+ choices[1]  + "</td></tr>" +
   "<tr><td> " + "<b>" +bool1 +"</b>" +"</td></tr> "  +
   "<tr><td>"+  f2a + " " + mid2 + " "+ choices[2]   + "<td></tr>" +
   //
   "<tr><td> " + "<b>" +bool2 +"</b>" +"</td></tr> "  +
   "<tr><td>"+  f3a + " " + mid2 + " "+ choices[3]   + "<td></tr>" +
   //
   "<tr><td> "+ "condition 3"  + "<td></tr>" +
    "<tr><td> "+ "condition 4"  + "<td></tr></table>";
 }//end function
 //--------------------------


 //============================
    var arrayLength= 12;  //add 1 more to it to make it work due to row 0 has nothing  //IMPORTANT this number must be the same as the number of excelDB rows
    //be sure to change this number if more rows are added otherwise it won't see that data

    var excelDB = new Array(arrayLength);
    for(var i = 0;i< excelDB.length;i++){
      excelDB[i] = new Array(arrayLength);
    } //end loop


//commented out below  is the   code from a 4 boolean and shopping search engine called GTI I made recently
// After I got the boolean search engine working I figure out how to add or and not
// to make true SQL searching which is still under development
/*
  smart1 += "<div id='search_results'><a href='#' onclick='show_instructions();'";
  smart1 += " style='display:block;text-decoration:none;'><table width = 450><tr><td align=left>";
  smart1 += "<table  style ='border: 1px solid #D8D8D8;' width = 450 bgcolor=honeydew >";
  smart1 += "<tr><td align=center><font face='Arial'>";
  smart1 += "<font size=3>&nbsp;&nbsp;search results</font></td></tr></table>";
  smart1 += "</td><td><td align=right>";
  smart1 += "</td></tr></table></a></div>";
  //document.getElementById("search_results").innerHTML = smart1;  //this didn't work because this div wasn't there yet


 //===============================================================================================
 //===============================/////shirts search engine //////////==============================
 //===============================================================================================
 //debugger;
if ( choices[1] == "shirts" ) { //then continue with this 4 boolean shirts search engine   //bypass to 3 boolean search engine
//alert("shirts LOOP triggered");

//============= LOOP ===================
for(var j = 0;j< excelDB.length;j++){   //da j is the counter, too funny

// 4 Boolean ifs for category AND gender AND size AND type
//this is a dynamic search engine with the column labels the same
//but the selected filter items change automatically based on choice
//all 4 criteria must be met for the search to commense.

if((excelDB[0][j][1] == choices[1]) &&
   (excelDB[0][j][2] == choices[2]) &&
   (excelDB[0][j][3] == choices[3]) &&
   (excelDB[0][j][4] == choices[4])){
 testing++;    //add 1 to the count of matches if all 4 criteria met

 //this grab the first match number in loop for shirts but doesn't test if only one loop
 // and it puts it into row_capture[first_row_num];
//++++++++++++++
 row_capture[first_row_num] = excelDB[0][j][0];

 //alert(row_capture[first_row_num]);
//++++++++++
 //this writes out one row with the information about the shirt item
 //I will comment this out later. for now I need to see if for confirmation of information

 //I might have to print the row out into an array
 //but if I know the array row number I should still be able to access it at my leisure.

 // THE YELLOW ROWS ARE HERE
//row info my meat and potatoes
//============================================================================================
//============================================================================================
//this is the LIGHT YELLOW ROWS WHICH WORKS PERFECTLY AND CAN SOLVE ALL OF MY PROBLEMS

// TEMPORARILY TURNED OFF ON SATURDAY OCT 7, 2017 AT 4PM PACIFIC TIME FOR TESTING

smart1 += "<table><tr bgcolor=lightyellow><td>" + "row #" + excelDB[0][j][0] + "</td><td>";
smart1 +=  excelDB[0][j][1] + "</td><td>" + excelDB[0][j][2]  +  "</td><td>" + excelDB[0][j][3];
smart1 += "</td><td>" + excelDB[0][j][4]  +   "</td><td>" + excelDB[0][j][5] + "</td><td>" + excelDB[0][j][6];
smart1 += "</td><td>" + excelDB[0][j][7]  +   "</td><td>" + excelDB[0][j][8] + "</td><td>" + excelDB[0][j][9];
smart1 +=  "</td></tr></table><br><br>";




//what to work on Thursday october 5th
//this does one item per row. I need to do 2 items per row
//I =====> think that what I need to do is put into memory the row#
// at this point I know that I have a match with excelDB[0][j][0] and I need to add it an array
// and I can use the standard method arrayname[arrayname.length] so they are in order


row_capture[row_capture.length] = excelDB[0][j][0]; //this should fill up the array starting with count 1 since 0 already is full
//this fills up an array with the matches in the correct order



} //end if else
} //END LOOP

*/



//I will need to store two image names or 1 and then call them front.#.jpg and back.#.jpg
//                  0      1           2         3                   4          5               6                 7
 excelDB[0][0]  = ['0',  'state',    'city',     'car',           'color',  'Idtag',      'title',          'price', 'pic1',     'pic2',  'largepic']; //key labels
 excelDB[0][1]  = ['1',  'Utah', 'Layton','Porsche',          'white',      'MDN786',     'Rugby Shirt',      '52',   'greyshirt',     'redshirt_back',     'ten'];
 excelDB[0][2]  = ['2',  'California', 'Tahoe',  'Cruiser',             'hoodie',    'MDN786',     'Jersey',          '87',   'greyshirt',     'redshirt',     'ten'];
 excelDB[0][3]  = ['3',  'Montana',    'Bear Mouth',  'Maseratti',                 'hat',     'MDN782',     'Ocean Pacif',     '50',     'hat2',     'hat3',         'ten'];
 excelDB[0][4]  = ['4',  'Nevada',  'Carson City','GTI',                  'hoodie',    'MDN381',     'Nike',          '65', 'greyshirt',     'redshirt',       'ten'];
 excelDB[0][5]  = ['5',  'Florida',  'Clermont', 'matchbox GTI',              'blue',    'MDN771',     'adidas',        '65', 'greyshirt',     'redshirt',    'ten'];
 excelDB[0][6]  = ['6',  'California', 'South Shore','GTI',                   'hoodie',    'MDN799',     'Fruit of Loom',   '55', 'greyshirt',     'redshirt',    'ten'];
 excelDB[0][7]  = ['7',  'Colorado',    'Aspen', 'S',                  'hat',      'MDN100',     'Hello Kitty',      '55', 'hat2', 'hat3',    'ten'];
 excelDB[0][8]  = ['8',  'California',  'Cool', 'Honda Civic Si',    'orange',     'MDN789',     'cat',                 '45', 'greyshirt',     'redshirt',       'ten'];
 excelDB[0][9]  = ['9',  'Utah',  'Layton',  'SubarWRX',        'pink',   'MDN755',     'Gap',           '56', 'greyshirt',     'redshirt',       'ten'];
 excelDB[0][10] = ['10', 'Nevada',  'Carson City', 'Golf R',            'green',       'MDN725',     'North Face',      '88', 'greyshirt',  'redshirt',    'ten'];
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





      var the_conditions= []; //this will be filled in from the interface before the search
          the_conditions[the_conditions.length] = "2";  //it was 2


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
var tahoetime;
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











//============================ TAHOE TIME FUNCTION ==================

 //#######################
 // TahoeTime function  !!!  PROOF OF CONCEPT PORSCHE SQL ENGINE
 //WORKING TOTALLY DYANMIC CAN CHANGE AND OR NOT on the fly
 //######################
 function TahoeTime(){ //started working Tuesday October 9th, 2018
 //alert("tahoe time called");

 debugger; //breakpoint
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

    //alert("the number of conditions = " + the_conditions[0]);
    console.log("number of conditions = " + the_conditions[0])
//  loop thru excelDB
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


  var coffee = j; //coffee equals counter number j in loop
  var cat   = "(excelDB[0][j][1] " + eq1[0] + "choices[1])";
  var fun   = eval(cat); //notice no ' ' and it works


//second if condition this needs an if to detemrine whether to run this - likely a flag

   var cat2  = "(excelDB[0][j][2] " + eq2[0]  +  " choices[2])";
   var fun2  = eval(cat2);


  //testing third condition this needs a flag to determine if to do this section of code.

   var cat3  = "(excelDB[0][j][4] " + eq3[0] +  " choices[4])"; //green
   //var cat33 = "(excelDB[0][j][4] " + eq3[0] +  " choices[5])"; //blue
   var fun3  = eval(cat3); //what this does is treat the above as one continuous string

//right now testing up to 3 CONDITIONS


  // I really need to explain WHY I am doing this below
  var op1   = coolness[1]; //feeding in data into a variable from an  array  //"&&";
  //now I can change and, or, not dynamic boolean time!!1
  var mistletoe = 0; mistletoe = mistletoe - 0;
  //it's also three words I could have the words in an array and then glue them togetehr

  var cafe = "tustle.push(coffee)";  //this says: append coffee to tustle// tustle.append(coffee);

//this switch is for checking if just plain vanilla straight bland CONDITIONS//
// the next switch that I add will be parsed first for grouping with ( ) for more complex search_results

    switch(the_conditions[0]){ /// the number of conditions is known before the search

    //based on the number of conditions but this is all just ands
    // I will need a separate one for paranthes dance in pairs.

     //----------------- looking at knowns and unknowns
     //---------
     // note. I need to add the inputs for the second and third condition
     // currently it's just doing one condition.
     case "1" :
     //alert('it sees 1 condition');
       var string1="if(fun)"+"{"+ cafe+"}";
     //eval(sting1);
     break;  //just added this back to see if it now works
     //it's crucial to look at the flow of control top down
     // and using traces and with in a function I need to see the path
     // that the code takes running through the code.

     //-----------------

     case "2" :
    // alert('it sees 2');
      var string1="if(fun"+b[1]+"fun2)"+"{"+ cafe + "}";
      //eval(sting1);
       break;
     //-----------------

     case "3" :
    // alert('it sees 3 conditions');
      var string1="if(fun"+b[1]+"fun2"+b[2]+"fun3)"+"{"+cafe+"}";
      break;
     //-----------------

     case "4" :
     var string1="if(fun"+b[1] +"fun2"+b[2]+"fun3"+b[3]+"fun4)"+"{"+cafe+"}";
      break;

       case "5" :
     var string1="if(fun"+b[1]+"fun2"+b[2] +"fun3"+b[3]+"fun4"+b[4]+"fun5)"+"{"+cafe+"}";
     break;

      default:
   }//end switch


   //alert(" the_conditions = " + the_conditions[0]);
   if(the_conditions[0] > 0){

   eval(string1);

   }

     //eval(sting1);break;

   // so I could evaluate string1 after leaping out of the switch case
   // I can append the trail and ... yeah it's possible.
   // it's jsut a series of ands to begin with(hmm, in the function conditions I can have ( ) there

     var testing = "one" + " " + " two";
 } //end LOOP



console.log("the number of matches coffee = " + coffee);
//======================
  if (coffee > 0){ //meaning at least one match, we have the total
 console.log("%c%s","color:black; background:orange", "all true " + " ALL CONDITIONS TRUE" );
 // smart_alert("tustle.length = " + tustle.length);
  var danger = 0;
  var lazy = tustle.length -1;
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


    //THIS BUILDS THE TABLE ROWS OUTPUT
  for(var y = 0;y< tustle.length;y++){ //this goes thru the entire array length
    // smart_alert("inside db  y = " + y);
     if( y== 0){ continue;}//skip the first one

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
      }//end if

// meaning no matches
 if(lazy == 0 || lazy == null){  //if no matches
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
