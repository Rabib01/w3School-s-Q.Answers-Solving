// All of the wierd and counterintuitive parts of js
console.log("Yo bitch");

// who the fuck thougt you could toString a false
console.log(false.toString());
console.log([1, 2, 3].toString());

// guess what they say is true, every fucking thing in Js is a fucking string, except for a number, even that has fucking exceptions
function Foo() {}
Foo.bar = 1;
console.log(Foo.bar);


// 2.toString()
// This wont work because of a flaw in JS parser tries to parse the dot notation on numbers as a floating point number - This will not work

console.log(2..toString(), typeof 2..toString());
// Here is a workaround to make number literals act like objects 
console.log(2 .toString())
console.log((2).toString());

const foo = {}
const bar= {
    test: 12
}


{
    /**
    * properties can be accessed in an object in two ways, either using hte dot notation or using hte bracket notaiton 
    *  with the only difference being that the square bracket notation allows for dynamic setting of properties and the use of property names that would otherwise lead to a syntax error.
    * {
    *  another rabbit hole - \
    * } 
    * Something that i will forget the next day - 
    * Dot notation is convenient when you know the property name and it's a valid identifier. Square brackets are more flexible because the property name can be dynamic or contain characters that aren't allowed with dot notation.
    * 
    */
}


const foofoo = {
    name: "kitten",
    "first-name":"luvlu" // the object data structure can only have striungs as their keys. This is not a problem with maps that can hold anything
}
console.log(foofoo);
console.log(foofoo.name);
console.log(foofoo["name"]);
const propertyName = "name"
console.log(foofoo[propertyName]); // this is the dynamic setting of properties 
console.log(foofoo.first-name);    // this is not giving an error, it gives NaN - not a number - as the - is evaluated as a string 
console.log(foofoo["first-name"]); // this is also the dynamic setting of properties 
console.log('');
console.log('');
 
 
// the only way to rewmove the property from objects is to use the delete operator - setting the value of a key of an object to undefined or null removes the value but not the key 

const foofoofoo = {
    bar:"yo yo honey singh", 
    anotherfoofoofoo: 1,
    baz: 2,
    disco: 4
}

foofoofoo.anotherfoofoofoo = undefined // this will give undefined 
foofoofoo.disco = null    // this will give null

console.log(foofoofoo);
console.log(foofoofoo.hasOwnProperty(bar)); // why the fuck is this false and the lower one is true ? - bar without quotes means the variable named bar 
console.log(foofoofoo.hasOwnProperty("bar")); // this meansx the key whose value is a string always for objects and find the value of that string 
console.log(foofoofoo.hasOwnProperty([bar])); // undefined - ?? god knows why    
console.log(foofoofoo[bar]);  

// foofoofoo.bar      → literal property "bar"
// foofoofoo["bar"]   → literal property "bar"
// foofoofoo[bar]     → property whose name is whatever `bar` evaluates to

// console.log(foofoofoo.hasOwnProperty(3)); // false 

// motherfucker on hte first iteration i is name and not 1 because for in iteratiotes over keys one by one and not through indexes 
for ( let i in foofoofoo){
    if(foofoofoo.hasOwnProperty(i)){
        console.log(i + " : "+ foofoofoo[i]);
     {
        /**
         *  i = "bar"
            i = "anotherfoofoofoo"
            i = "baz"
            i = "disco"

            foofoofoo[i] -> foofoofoo["bar"] -> "yo yo honey singh"            
         */
     }   
    }
}

// the smarter way of doing this : 
// for (const [key, value] of Object.entries(obj)) {
//   console.log(key, value);
// }





