let name = 'Bulent';

let age = parseInt(prompt('How old are you?'));

if (age < 18) {
    console.log('18-');
    console.log(job);
} else {
    console.log('18+');
    let job = prompt('What is your job?').toLowerCase();

    console.log(
    'Hello ' +
    name +
    ' you are '+
    age +
    ' and work as '+
    job
    );

    if (job == 'developer') {
        console.log(`Wow ${age} years old ${job}`);
    }
}

/* 
console.log(
    'Hello ' +
    name +
    ' you are '+
    age +
    ' and work as '+
    job // out of scope
);
 */

let role = prompt('What is your role?').toLowerCase();
//Founder, Manager, Trainer


