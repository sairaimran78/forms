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
                                "text": "Flowers, also known as blossoms and blooms, are the reproductive structures of flowering plants. Typically, they are structured in four circular levels around the end of a stalk. These include: sepals, which are modified leaves that support the flower",

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



