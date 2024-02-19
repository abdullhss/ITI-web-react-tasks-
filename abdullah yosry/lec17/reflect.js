/*

1 - 
Reflect.set()
A function that assigns values to properties. Returns a boolean that is true if the update was successful.

2- 
Reflect.has()
Returns a boolean indicating whether the target has the property. Either as own or inherited. Works like the in operator as a function.

3-
Reflect.ownKeys()
Returns an array of the target object's own (not inherited) property keys.
4- 
Reflect.getOwnPropertyDescriptor()
Similar to Object.getOwnPropertyDescriptor(). Returns a property descriptor of the given property if it exists on the object, undefined otherwise.
5-
Reflect.isExtensible()
Same as Object.isExtensible(). Returns a boolean that is true if the target is extensible

*/

let data = {name: "abdullah" , course: "ITI"};
Reflect.set(data, 'user', "1");
console.log(data.course);

let h = Reflect.has(data, 'course');
    console.log(h)


let own = Reflect.ownKeys(data);
console.log(own);


let des = Reflect.getOwnPropertyDescriptor(data, 'course');
console.log(des);

let isEx = Reflect.isExtensible(data);
console.log(isEx);