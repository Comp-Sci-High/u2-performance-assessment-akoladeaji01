const prompt = require('prompt-sync')()
let apiKey = "BQBkO_6PoXnHQfwDGz-sOtydHuJaJ_g6NokdXHsGs5ldHEHYXM6cre8ZNu01m4MzoDa-Wy8NOxdC3dhcmGrWr83I-NrcTgHtiofXs5vG1v1p1ZOtKvmPL2pL-NHa881h-i-6jn4pHvTATz5_c73qqAE12rxRVfxKbueshHZj887f0fRbMsh4uJcEexcmXMnHVgnHuGCUcy7Dm4JdDozK8w6kTQNjdgMjHtvoJcfLnafRHcY4IRhShW6cxK564u1eihxBL6migFvJCI4kefq9Y6kc0FaLvDG67XtP2M807vUAjK0zh4kBIwehkfIbrkIA2TF97xkcYms0twna384iNXrhTkRb"
let apikey2 = ""
async function findSong(answer){
    const options = {
        method: "GET",
        headers: {
            Authorization: "Bearer " +  apiKey, 
            "Content-Type": "application/json",
    
        }
    }
    const response = await fetch("https://api.spotify.com/v1/search?query=" + answer + "&type=track", options);
    const data = await response.json();
    console.log(data);
    console.log(data.tracks.items[0].album.images[0].url);
}

let answer = prompt("What song would you like to hear?") 



findSong(answer)


async function muskjr(muskdata){
    const options = {
        method : "POST",
        header:{
            Authorization: "Bearer " + apikey2,
            "Content-Type":"application/json"
        },
        body:JSON.stringify(muskdata)
    }

    let response = await fetch("", options)
    let data = await response.json()
    return data
}

let muskjrbody = {
    model: "gpt-4o-mini",
    messages: [
        {
            "role": "system",
            "content": "you are an assistant."
        },
        {
            "role": "user",
            content: ""
        }
    ]
}

async function inputer(){
    let repeat = true
    console.log("Hello im a chatbot")
    console.log("what is your favorite song")
}

while(repeat){
    let userInput = prompt("")
    muskjrbody.messages[1].content = userInput
    let response = await muskjr(muskjrbody)
    console.log(response.choices[0].message.content)
    if(userInput == "end"){
        console.log("ending")
        repeat = false
    }
}

inputer()