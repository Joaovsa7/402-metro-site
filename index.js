const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send(`
        <link rel="stylesheet" href="/styles.css">
        <h1>Bem vindo ao Rent-a-Cat</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/gatos">Gatos</a>
            <a href="/sobre">Sobre</a>
        </nav>
    `);
});

app.get('/gatos', (req, res) => {
    res.send(`
        <h1>Gatos</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/gatos">Gatos</a>
            <a href="/sobre">Sobre</a>
        </nav>
        <ul>
            <li>Siamês</li>
            <li>Persa</li>
            <li>Vira Lata</li>
        </ul>
    `);
});

app.get('/sobre', (req, res) => {
    res.send(`
        <h1>Sobre</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/gatos">Gatos</a>
            <a href="/sobre">Sobre</a>
        </nav>
        <p>
        Chew foot mrow i am the best lick plastic bags headbutt owner's knee, cats secretly make all the worlds muffins. Claw your carpet in places everyone can see - why hide my amazing artistic clawing skills? head nudges but kick up litter, purr or love to play with owner's hair tie sleep on keyboard, tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad . Stand in front of the computer screen damn that dog for adventure always but destroy house in 5 seconds. Spill litter box, scratch at owner, destroy all furniture, especially couch make plans to dominate world and then take a nap so nya nya nyan behind the couch, and refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am. Put butt in owner's face licks paws or claw at curtains stretch and yawn nibble on tuna ignore human bite human hand. Sniff catnip and act crazy hiding behind the couch until lured out by a feathery toy, so catch mouse and gave it as a present. Stare at imaginary bug sniff other cat's butt and hang jaw half open thereafter jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water. Flee in terror at cucumber discovered on floor where is my slave? I'm getting hungry. Scratch the postman wake up lick paw wake up owner meow meow. Make plans to dominate world and then take a nap. 
        </p>
    `);
});

app.get('/styles.css', (req, res) => {
    let cores = ['blue', 'red', 'yellow'];

    let numero = Math.floor(Math.random() * 3);

    let cor = cores[numero];
    
    res.send(`
        body{
            color: ${cor};
        }
    `);
});

app.listen(3000, () => {
    console.log('Servidor inicializado')
});