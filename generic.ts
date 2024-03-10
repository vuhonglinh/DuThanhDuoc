type User = {
    name: string,
    age: number,
    address?: string
}

interface Identy<Input> { (value: Input): Input }


//Generic with arrow functions
// const identy = <Type>(value: Type) => value
// const result = identy<User>({
//     name: "Vũ Hồng Lĩnh",
//     age: 123
// });

//Generic with functions
function identy<Type>(value: Type) {
    return value
}

// const myIdenty: <Input>(value: Input) => Input = identy
// ===
const myIdenty: Identy<number> = identy

myIdenty(123)

// const result = myIdenty<User>({
//     name: "Vũ Hồng Lĩnh",
//     age: 123
// });

interface lengthObj {
    length: number
}

const logIdenty = <Type extends lengthObj>(value: Type) => {
    console.log(value.length)
}


logIdenty({
    length: 123,
})

const getValue = <Obj, Key extends keyof Obj>(obj: Obj, key: Key) => {
    return obj[key];
}

getValue({ test: 123, name: "Linh" }, "name")



//Default Generic\
interface Box<Type> {
    value: Type
}

const box: Box<number> = {
    value: 123,
}













