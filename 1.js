const num = +prompt("Введите число");
if (isNaN(num)){
        console.log("Упс, кажется, вы ошиблись");
    }
    else{
        if (num%2==0)
        {
            console.log("число четное");
        }
        else{
            console.log("число не четное");
        }
    }