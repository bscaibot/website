class Invite {

    constructor() {
        var h = window.location.href;
        var r = h.split("?r=")[1];
        if (r != undefined) {
            var url = document.getElementById("url");
            url.value = url.value + "?r=" + r;
            var code = document.getElementById("code");
            code.innerHTML = r;
        }
    }

    copyDappLink() {
        var copyText = document.getElementById("url");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
      
        // Alert the copied text
        alert("Copied the text: " + copyText.value);
    }

}

const inv = new Invite();
window["inv"] = inv;