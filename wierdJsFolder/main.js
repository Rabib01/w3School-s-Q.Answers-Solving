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


// properties can be accessed in an object in two ways, either using hte dot notation or using hte bracket notaiton 
const foofoo = {
    name: "kitten"
}
console.log(foofoo);
console.log(foofoo.name);
console.log(foofoo["name"]);



