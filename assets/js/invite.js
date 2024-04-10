class Invite {

    referral;

    constructor() {
        this.referral = this.getRef();
        var h = window.location.href;
        var r = h.split("?r=")[1];
        if (r != undefined && this.referral.length == 0) {
            var url = document.getElementById("url");
            url.value = url.value + "?r=" + r;
            var code = document.getElementById("code");
            code.innerHTML = r;
            localStorage.setItem("r", r);
            this.referral = r;
        } else if (this.referral.length > 0) {
            var url = document.getElementById("url");
            url.value = url.value + "?r=" + this.referral;
            var code = document.getElementById("code");
            code.innerHTML = this.referral;
        }
    }

    copyDappLink() {
        var copyText = document.getElementById("url");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        alert("Copied the text: " + copyText.value);
    }

    getRef() {
        var r = localStorage.getItem("r");
        if (r != undefined && r.length > 0) {
            return r;
        } else if (this.referral != undefined && this.referral.length > 0) {
            return this.referral;
        } else {
            return "";
        }
    }

}

addEventListener("DOMContentLoaded", (event) => {
    const inv = new Invite();
    window["inv"] = inv;
});