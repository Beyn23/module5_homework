const x = false;
switch (typeof x){
    case "boolean":
        console.log("X - это логическое выражение");
        break;
    case "string":
        console.log("X - это строка");
        break;
    case "number":
        console.log("X - это число");
        break;
    case NaN:
        console.log("Тип x неопределен");
        break;
}