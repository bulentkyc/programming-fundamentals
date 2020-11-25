console.log('Switch Case...');

let baseSalary = 5000;
let finalSalary = 0;

let role = prompt(
    `Please type your role:
    [] Junior
    [] Specialist
    [] Senior
    [] Architect
    `
).toLowerCase();

switch (role) {
    case 'junior':
        finalSalary = baseSalary + 500;
        finalSalary *= 0.85;
        break;

    case 'specialist':
        finalSalary = baseSalary + 1000;
        finalSalary *= 0.85;
        break;

    case 'senior':
        finalSalary = baseSalary + 2000;
        finalSalary *= 0.85;
        break;

    case 'architect':
        finalSalary = baseSalary + 5000;
        finalSalary *= 0.85;
        break;

    default:
        console.log(`Sorry ${role} is not a proper role!`);
        break;
}

/*
HEADS-UP:  
0 = FALSE
0+ = TRUE
'' = FALSE
' ' = TRUE (1 LETTER OR ANY TEXT)
undefined = FALSE ( undefined is a data type)
*/

if (finalSalary > 0) {
    console.log(`Regarding to ${role} role, your salary is ${finalSalary} $`);
}


let age = parseInt(prompt('How old are you?'));
let day = prompt('Which day you wish to check?').toUpperCase();
let time = parseInt(prompt('What time you wish to check? \n (Please type just hour as a number 24h)'));

if (time >=9) {
    if (time <= 13) {
        time = 1
    } else if (time <= 15){
        time = 2
    } else if (time <= 16){
        time = 3
    } else {
        time = 4
    }
}

if (age >=0) {
    if (age <= 3) {
        age = 1
    } else if (age <= 6){
        age = 2
    } else if (age <= 12){
        age = 3
    } else if (age <= 18){
        age = 4
    } else {
        age = 5
    }
}




switch (day) {
    case 'FRIDAY':
        switch (age) {
            case 2:
                if (time == 1) {
                    alert(`${day} at ${time} o'clok you should be in Kindergarten`);
                }
                break;

            case 3:
                if (time == 1) {
                    alert(`${day} at ${time} o'clok you should be at School`);
                }
                break;

            case 4:
                if (time == 2) {
                    alert(`${day} at ${time} o'clok you should be at School`);
                }
                break;

            case 5:
                if (time == 3) {
                    alert(`${day} at ${time} o'clok you should be at work`);
                }
                break;
                
            default:
            alert(`There's nothing planned.
            But there's Corona!
            Stay at home.`);
                break;
        }
        break;

    case 'SATURDAY':
    case 'SUNDAY':
        alert(`There's nothing planned.
        But there's Corona!
        Stay at home.`);
        break;

    default:
        switch (age) {
            case 1:
                if (time == 1) {
                    alert(`${day} at ${time} o'clok you should be in Kindergarten`);
                }
                break;

            case 2:
                if (time == 1) {
                    alert(`${day} at ${time} o'clok you should be in Kindergarten`);
                }
                break;

            case 3:
                if (time == 1) {
                    alert(`${day} at ${time} o'clok you should be at School`);
                }
                break;

            case 4:
                if (time == 2) {
                    alert(`${day} at ${time} o'clok you should be at School`);
                }
                break;

            case 5:
                if (time == 3) {
                    alert(`${day} at ${time} o'clok you should be at work`);
                }
                break;
                
            default:
                alert(`There's nothing planned.
                But there's Corona!
                Stay at home.`);
                break;
        }
        break;
}
