/* String Class

    String in typescript is considered as sequence of characters.

    There are mutiple methods of string class that we can use while writing application
*/

// Create objects if string class as:

var str = new String("Marvellous");
var ptr = new String("Infosystems");


// CharAt function gives character at specific index:
console.log("str.charCodeAt(0) is:" + str.charCodeAt(0));
console.log("str,charCodeAt(1) is:" + str.charCodeAt(0));

// length gives length of the string
console.log("length of str is" + str.length);
console.log("length of ptr is" + ptr.length);

// create object of string class as
var str = "Marvellous";
var ptr = "Infosystems";

// concat method is used to concat two strings
var final = str.concat(ptr)

console.log("string after concatention :" + final);

//indexOf method is used to find index of speciifc substring inn string

var ret = ptr.indexOf("sys");
console.log("Index os sys is:" + ret);

var ret = ptr.indexOf("Pune");
console.log("Index of Pune is:" + ret);

//lastIndexOf method is used to find last index of specific substring in string
var str2 = "MarvellousInfosystemMarvellosPuneAndNashik";

var ret = str2.lastIndexOf("Marvellous");
console.log("Last Index of Marvellous is:" + ret);

//replace method is used to replace substring with another substring 

var replace = /Marvellous/gi;
var str3 = "Marvellous Infosystem Pune and Marvellous Magic Thoughts Pune";
var newstr = str3.replace(replace, "NewMarvellous");
console.log(newstr);


//search method is used to check whether specific substring is present or not
var replace = /Marvellous/gi;
var str4 = "Marvellous Infosystems Pune and Marvellous Magic Thoughts Pune";
if (str4.search(replace) == -1) {
    console.log("Does not contain Marvellous");
}
else {
    console.log("Contains Marvellous");
}

//It is used to break string by considering specific delimiter
var str5 = "Marvellous Infosystem Educating for better tomorrow";
var arr = str5.split("", 6);


//toString method is used to convrt any type of data type into string 
var MarvellousStr: number = 112151;
console.log(MarvellousStr.toString());
