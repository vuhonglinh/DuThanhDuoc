/*
Basic type
*/

//String
let car = 'Toyota';
let bike: string;
bike = "Winners";

//Number
let number = 10;

//Boolean
let isLoading = false;

//Undefined
// let body: undefined
body = undefined;

//Null
let footer: null;

//Any(Có thể là bất cứ kiểm dữ liệu nào cũng được)
let any: any;
any = undefined;
any = 123;
any = "any";

//Oject
let house: {
    name: string;
    color?: string
    address: string
};
house = {
    name: "House",
    address: "Street Cau Giay"
};
house['price'] = 123;


//Array
let products: any[] = []
products.push(1);
products.push("Sản phẩm 1");

//[]
let names = ["Lĩnh", 'Hoàng', 123, []]

//Oject[]
let person: {
    name: string,
    age: number
}[] = []

person = [
    {
        name: '123',
        age: 123,
    }
];


//Function 
const total = (num1: number, num2: number): number => {
    return num1 + num2;
}
total(1, 123);

let sub: (num1: number, num2: number) => number = (num1: number, num2: number) => {
    return 1;
}

const handle = (): void => {
    //Không return
}


//Union
let price: number | string | boolean
price = true

let body: { name: string } | { age: number }
body = { age: 123 }


//Emun
enum Sizes {
    S = "okF", L = 12, SL, LL
}

let size = Sizes.S

// // //Interfaces(Có thể có nhiều interface giống nhau gộp lại)
// interface States {
//     name: string,
//     isLoading: boolean
// }
// //+
// interface States {
//     age: number
// }
// //=
// let states: States = {
//     name: "loading",
//     isLoading: false,
//     age: 123
// }

// // TYPE
// type States {
//     name: string,
//     isLoading: boolean
// }


// let states: States = {
//     name: "loading",
//     isLoading: false
// }


// type Name = {
//     name: string
// }
// type Age = {
//     age: number
// }
// type Person = Name & Age //Có thể hợp nhất vào 1 & |


//
const handleClick = <Type>(value: Type) => value//Có thể truyền vào bất cứ kiểu dữ liệu nào
handleClick(21231)//Có thể truyền bats kỳ kiểu dữ liệu nào cũng được
handleClick<string>("ádad")//Quy định trước khi cho truyền tham số vào hàm 

//Class
class Person {
    public name: string
    age: number;
    readonly money: number = 40;//Thuộc tính readonly chỉ được đọc
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public handle() {
        this.name
    }
}

const alex = new Person("alex", 20);

alex.name


class Animal {
    constructor(public name: string, private age: number) {//Có thể khai báo như này mà không cần gán giá trị như trên
    }
}