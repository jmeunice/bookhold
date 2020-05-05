const myButton = document.querySelector('.my-button')
myButton.addEventListener('click', async function () {
    const username = document.querySelector('.username').value
    const book = document.querySelector('.book').value
    const teacher = document.querySelector('.teacher').value
    const fetchResult = await fetch(
        `https://5lgh1zjb86.execute-api.us-east-2.amazonaws.com/default/adelphi-my-lambda-example?action=putUser&username=${username}&book=${book}&teacher=${teacher}`
        )
    const fetchParsed = await fetchResult.json()
    console.log(fetchParsed)
})
