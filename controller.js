module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getJoke: (req, res) => {
        const joke = ["What happens to the illegaly parked Frog?...........it gets TOAD away......"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * joke.length);
        let randomCompliment = joke[randomIndex];
      
        res.status(200).send(randomCompliment);
    }


}