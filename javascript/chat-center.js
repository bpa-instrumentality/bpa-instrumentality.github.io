// localStorage.removeItem("chatcenter")
let chats = localStorage.getItem("chatcenter");

if (!chats) {
    let chatData = []

    let safeChatData = JSON.stringify(chatData);

    localStorage.setItem("chatcenter", safeChatData)
}

chats = JSON.parse(chats);

let ccc = document.getElementById("cccChats");
let input = document.getElementById("cccInput");

const scrollToBottom = (id) => {
    const element = document.getElementById(id);
    element.scrollTop = element.scrollHeight;
}

function refreshChats() {
    console.warn("refreshed!")
    ccc.innerHTML = "";
    for (i in chats) {
        let curr = chats[i];
    
        if (curr.sender == "other") {
            ccc.innerHTML += `<div class="message other">${curr.message}
            </div>`
        }
        else {
            ccc.innerHTML += `<div class="message yours">${curr.message}
            </div>`
        }
    }  
    
    scrollToBottom("cccChats")
}

if (chats.length == 0) {
    let chatData = [{
        "sender": "other",
        "message": "Hello! Welcome to InstruSupport! How may I help you today? (Question, Associate, or Other)"
    }]

    let safeChatData = JSON.stringify(chatData);
    localStorage.removeItem("chatcenter")
    localStorage.setItem("chatcenter", safeChatData);
    chats = localStorage.getItem("chatcenter");
    chats = JSON.parse(chats);
    refreshChats()
}

function sendMsg(message) {

    console.log("sent")
    if (message.trim() == "") {
        return
    } else {
        document.getElementById("cccInput").value = ""
        let chats1 = localStorage.getItem("chatcenter");
        chats1 = JSON.parse(chats1);

        let msg = {
            "sender": "you",
            "message": message
        }

        chats1.push(msg);
        let safeChatData = JSON.stringify(chats1);

        localStorage.setItem("chatcenter", safeChatData)
    }
    chats = localStorage.getItem("chatcenter");
    chats = JSON.parse(chats);
    refreshChats()

    setTimeout(() => {
        let lowerMsg = message.toLowerCase()
        if (lowerMsg.includes("question")) {

            let chats1 = localStorage.getItem("chatcenter");
            chats1 = JSON.parse(chats1);

            let msg = {
                "sender": "other",
                "message": "What question do you have? I will try to be of assistance."
            }

            chats1.push(msg);
            let safeChatData = JSON.stringify(chats1);

            localStorage.setItem("chatcenter", safeChatData)
        } else if (lowerMsg.includes("associate")) {
            let chats1 = localStorage.getItem("chatcenter");
            chats1 = JSON.parse(chats1);

            let msg = {
                "sender": "other",
                "message": "Hold on, while I connect you to an associate..."
            }

            chats1.push(msg);
            let safeChatData = JSON.stringify(chats1);

            localStorage.setItem("chatcenter", safeChatData)
        } else if (lowerMsg.includes("bug")) {
            let chats1 = localStorage.getItem("chatcenter");
            chats1 = JSON.parse(chats1);

            let msg = {
                "sender": "other",
                "message": "I will notify the support team of this bug. If you have not already, please enter the issue you are having."
            }

            chats1.push(msg);
            let safeChatData = JSON.stringify(chats1);

            localStorage.setItem("chatcenter", safeChatData)
        } else if (lowerMsg.includes('other')) {
                let chats1 = localStorage.getItem("chatcenter");
                chats1 = JSON.parse(chats1);
    
                let msg = {
                    "sender": "other",
                    "message": "Please hold on, and I will connect you to an associate who will assist you."
                }
    
                chats1.push(msg);
                let safeChatData = JSON.stringify(chats1);
    
                localStorage.setItem("chatcenter", safeChatData)
        } else {
            let chats1 = localStorage.getItem("chatcenter");
                chats1 = JSON.parse(chats1);
    
                let msg = {
                    "sender": "other",
                    "message": "I do not understand... Please repeat your statement."
                }
    
                chats1.push(msg);
                let safeChatData = JSON.stringify(chats1);
    
                localStorage.setItem("chatcenter", safeChatData)
        }

        chats = localStorage.getItem("chatcenter");
        chats = JSON.parse(chats);
        refreshChats()
    }, 1500);
}

refreshChats()
console.log("hello")