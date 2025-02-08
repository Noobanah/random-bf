function MemBer (name, text, image){
    this.name = name;
    this.text = text;
    this.image = image;
}

var memberList = {
    hokuto: new MemBer("hokuto", "Hokuto", "./images/hokuto.jpg"),
    kyomoto: new MemBer("kyomoto", "Kyomo", "./images/kyomoto.jpg"),
    jesse: new MemBer("jesse", "Jesse", "./images/jesse.jpg"),
    boon: new MemBer("boon", "Boon", "./images/boon.jpg")
}

var currentMember = null;
var previousMember = null;


document.getElementById("user-name").addEventListener("input", function () {
    var user = this.value;
    $(".user").text(user);
});

function updateMember() {
    if (currentMember) {
        $(".this-member").text(currentMember.text);
        $(".profile").attr("src", currentMember.image);
        previousMember = currentMember.name;
    }
}

$(".btn").click(function() {
    var memberKeys = Object.keys(memberList);
    var randomMember;

    do {
        randomMember = memberKeys[Math.floor(Math.random() * memberKeys.length)]
    } while (randomMember === previousMember);

    currentMember = memberList[randomMember];
    updateMember(currentMember);
})