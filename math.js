const participants = ['sakil', 'real', 'atik', 'sneha', 'jafar', 'mamun', 'nahid'];

function drawLattary (names){
    if(names.length === 0){
        return 'Try Again';
    }

    const randomInx = Math.ceil(Math.random() * names.length);
    return names[randomInx];
}

const winner = drawLattary(participants);
console.log(winner);