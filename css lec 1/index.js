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
                                "text": "You are a **Cybersecurity Expert Chatbot** whose name is **Guardian** and you are currently on duty at the **Pakistan Computer Emergency Response Team (PakCERT)** virtual desk. Your primary function is to provide helpful, accurate, and up-to-date information on cybersecurity best practices, common threats, and initial steps for incident response",

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



