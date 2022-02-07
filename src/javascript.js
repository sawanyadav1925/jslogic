function myFunction()
{
    var name = document.getElementById('name_id').value;
    var age = document.getElementById('age_id').value;
    var weight = document.getElementById('weight_id').value;

    checkEmpty(age, weight, name);
    checkName(name);
    checkAgeAndWeight(age, weight, name);
    // display(age);

}

function checkEmpty(age , weight, name)
{
    if (age == "" && weight == "" && name == "")
    {
        alert("Your name , weight and age field are empty");
    }
    else if(age == "" && weight == "")
    {
        alert("Your age and weight field is empty");
    }
    else if(age == "" && name == "")
    {
        alert("Your age and name field is empty");
    }
    else if(name == "" && weight == "")
    {
        alert("your name and weight field is empty");
    }
    else if(age == "")
    {
        alert("your age field is empty");
    }
    else if(name == "")
    {
        alert("your name field is empty");
    }
    else if(weight == "")
    {
        alert("your weight field is empty");
    }
    else{
        return true;
    }
}

function checkAgeAndWeight(age1, weight1, name1)
{
    if(age1 >= 5 && age1 <= 7)
    {
        if(weight1 >= 15 && weight1 <= 20)
        {
            displayPerfect(name1);
        }
        else if(weight1 < 15 ){
            displayLess(name1,age1);
        }
        else if(weight1 > 20 ){
            displayGreater(name1,age1);
        }
    }
    else if(age1 >= 8 && age1 <= 10)
    {
        if(weight1 >= 21 && weight1 <= 25)
        {
            displayPerfect(name1);
        }
        else if(weight1 < 21 ){
            displayLess(name1,age1);
        }
        else if(weight1 > 25 ){
            displayGreater(name1,age1);
        }
    }
    else if(age1 >= 11 && age1 <= 15)
    {
        if(weight1 >= 26 && weight1 <= 30)
        {
            displayPerfect(name1);
        }
        else if(weight1 < 26 ){
            displayLess(name1,age1);
        }
        else if(weight1 > 30 ){
            displayGreater(name1,age1);
        }
    }
    else if(age1 >= 16 && age1 <= 20)
    {
        if(weight1 >= 31 && weight1 <= 40)
        {
            displayPerfect(name1);
        }
        else if(weight1 < 31 ){
            displayLess(name1,age1);
        }
        else if(weight1 > 40 ){
            displayGreater(name1,age1);
        }
    }
    else{
        alert("enter between age 5 - age 20")
    }
}

function checkName(name1)
{
    if(isNaN(name1))
    {
        
    }
    else{
        alert("enter valid string");
    }
}

function display(value)
{
    document.getElementById("p1").innerHTML = value;
}

function displayPerfect(name1)
{
    document.getElementById("p2").innerHTML = "Hello "+name1+" !!! "+ "Your weight is perfect" ;
}

function displayLess(name1,age1)
{
    document.getElementById("p2").innerHTML = "Hello "+name1+" !!! "+ "Your weight is less than recommended value of 15KG at an age of"+age1 ;
}

function displayGreater(name1,age1)
{
    document.getElementById("p2").innerHTML = "Hello "+name1+" !!! "+ "Your weight is more than recommended value of 20KG at an age of "+age1 ;
}