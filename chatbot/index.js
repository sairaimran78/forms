function getChatbot() {
    const inputRef = document.querySelector("#query")
    const query = inputRef.value
    
    const resultDiv = document.querySelector("#result")


    const res = axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
        {
            "contents": [
                {
                    "parts": [
                     {
                          "text":"A robot is a machine designed to perform tasks autonomously or semi-autonomously. Robots follow programmed instructions or use artificial intelligence to carry out these tasks. They mimic human actions or handle repetitive, dangerous, or complex tasks more efficiently than humans."

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

    res
        .then((data) => {
            const answer = data.data.candidates[0].content.parts[0].text
            resultDiv.innerHTML = answer
        })
        .catch((error) => {
            console.log(error)
        })

}