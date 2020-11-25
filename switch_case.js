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

