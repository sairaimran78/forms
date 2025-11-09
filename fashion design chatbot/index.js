async function getChatbot() {
    const inputRef = document.querySelector("#query")
    const query = inputRef.value


    try {

        const res = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
            {
                "contents": [
                    {
                        "parts": [
                            {
                                "text": "Fashion design involves applying design principles, aesthetics, and clothing construction techniques to create garments and accessories. It encompasses a wide range of products, including dresses, suits, pants, skirts, shoes, and handbags. Fashion designers blend creativity with technical skills to craft pieces that are not only visually appealing but also functional and marketable",

                            },
                            {
                                "text": query,
                            }
                        ]
                    }
                ]
            },
            {
                headers: {
                    "Content-Type": " application/json",
                    "x-goog-api-key": "AIzaSyDELYR0SBXEH2Et_FNrEKyMyvYylEK-37s",
                }
            }

        )
        console.log(res)

        const resultDiv = document.querySelector("#result")
        const answer = res.data.candidates[0].content.parts[0].text
        resultDiv.innerHTML = answer
    } catch (err) {
        console.log("Error", err)
    }

}

// Error handling 

function callMe() {
    try {
        let x = 23;
        console.log(x)
        console.log("I am in try block")
    } catch (err) {
        console.log(err)
        console.log("I am in catch block")
    }
}
callMe()



