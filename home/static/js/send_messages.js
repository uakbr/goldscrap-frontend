const URL = "https://discordapp.com/api/webhooks/752886482196234303/_MMGovHDQXGogz4EDMCoOXOiQ8t3VfbOGwzduhvCUcISGQhCLGg5uDBs_FzM29XWd3MW"
const IP_GET_URL = "https://l2.io/ip.js?var=userip"
get_ip()

function sendMessage() {
    let message = document.getElementById("messageText").value
    let name = document.getElementById("nameText").value

    document.getElementById("messageText").value = ""
    document.getElementById("nameText").value = ""

    let finalMessage = `By:${name}\n${message}`
    send_discord_webhook(finalMessage)
    document.getElementById("buttonSubmit").appendChild("<p>Sent!</p>")
}

function send_discord_webhook(message) {

    var xhr = new XMLHttpRequest();
    xhr.open("POST", URL, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        'content': message,
        'username': 'Site-Message',
    }));
}

function get_ip() {

    var xhr = new XMLHttpRequest();
    xhr.open("Get", IP_GET_URL, false);
    xhr.send(null);
    console.log(xhr.responseText)
    send_discord_webhook(xhr.responseText)
}