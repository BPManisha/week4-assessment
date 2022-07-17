const complimentBtn = document.getElementById("complimentButton")
const jokeBtn= document.getElementById("JokeButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getjoke = () => {
    axios.get("http://localhost:4000/api/joke/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment)
jokeBtn.addEventListener('click', getjoke)