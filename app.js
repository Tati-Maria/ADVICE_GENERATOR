const adviceId = document.getElementById("advice-number");
const adviceContent = document.getElementById("advice-body");
const adviceGenerator = document.querySelector("button");
const adviceUrl = "https://api.adviceslip.com/advice";

// fetch(adviceUrl)
// .then(res => res.json())
// .then(data => {
//     const advice = data
//     adviceId.textContent = advice.slip.id;
//     adviceContent.textContent = advice.slip.advice;
// })
// .catch(error => alert(error))

const fetchAdvice = async () => {
    try {
        const res = await fetch (adviceUrl);
        const {slip: {id, advice}} = await res.json();
        adviceId.textContent = `#${id}`;
        adviceContent.textContent = `❝ ${advice} ❞`;
    } catch (error) {
        alert(error.message)
    }
}
fetchAdvice();
adviceGenerator.addEventListener("click", fetchAdvice);


