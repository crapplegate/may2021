let max = 2; 
S
//Generates a random photo path from the image directory
function getRandomPicture(max) {
    const tmp = Math.floor( Math.random() * max + 1 );
    return `img/tibble${tmp}.JPG`;
}

//puts the image in the column that called it
document.querySelector('#column-1').innerHTML = `<img class="images" src=${getRandomPicture(max)} alt="Randomly Generated Picture">`



