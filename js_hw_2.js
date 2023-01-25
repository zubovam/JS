console.log('----   Task 1   ----')
function f1(p1, p2){
    let a = p1;
    let b = p2;
    console.log(a + b);
}

f1(5, 7);

console.log('----   Task 2   ----')
function f2(p1){
    let a = p1;
    return a**2;
}

let result_f2 = f2(5);
console.log(result_f2);

console.log('----   Task 3   ----')
function f3(s, n, m){
    let result_json = {
        "name": n,
        "surname": s,
        "middlename": m
    }
    return JSON.stringify(result_json);
}

let result_f3 = f3('Zubov', 'Alexey', 'Mihailovich');
console.log(result_f3);

console.log('----   Task 4   ----')
function f4(m){
    let result_arr = new Array();
    for (let i = 0; i < m.length; i++){
        if (m[i] % 2 == 0){
            result_arr.push(m[i]);
        }
    }
    if (result_arr.length == 0){
        return "No even numbers";
    } else{
        return result_arr;
    }
}

let arr1 = [1, 2, 5, 8, 13, 14];
let arr2 = [41, -12, 5, 9999.5, 13, 14.6, 10000];
let arr3 = [1, 5, 5, 81, 13, 147];

let result_f4 = f4(arr1);
console.log(result_f4);

console.log('----   Task 5   ----')
function f5(p){
    let result_n = 0;
    let symb = 'a';
    for (let i = 0; i < p.length; i++){
        if (p[i] == symb){
            result_n++;
        }
    }
    if (result_n == 0){
        return "No " + symb + " charaters";
    } else{
        return result_n;
    }
}

let result_f5 = f5("abracadabra");
console.log(result_f5);

console.log('----   Task 6   ----')
function f6(p){
    if (p == "Phone number field"){
        console.log(
            "1. Check valid phone number",
            "2. Check invalid phone number",
        )
    } else if (p == "CheckBox"){
        console.log(
            "1. Select Checkbox",
            "2. Deselect Checkbox",
        )
    } else if (p == "SignIn Button"){
        console.log(
            "1. Click on the SignIn Button with the left mouse button"
        )
    }
}

f6("Phone number field");

// Downloaded from web :)
console.log('----   Task 7   ----')
function OBJtoXML(obj) {
    let xml = '';
    for (let prop in obj) {
      xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
      if (obj[prop] instanceof Array) {
        for (let array in obj[prop]) {
          xml += "<" + prop + ">";
          xml += OBJtoXML(new Object(obj[prop][array]));
          xml += "</" + prop + ">";
        }
      } else if (typeof obj[prop] == "object") {
        xml += OBJtoXML(new Object(obj[prop]));
      } else {
        xml += obj[prop];
      }
      xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
    }
    xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
    return xml
  }

let json_obj = {
	"name" : "Alexey",
	"surname" : "Zubov",
	"age" : 39,
	"number_of_pets" : 0,
	"desired_salary" : 200000
}

let result_f7 = OBJtoXML(json_obj);
console.log(result_f7);