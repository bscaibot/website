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
            console.log(r);
            code.value = r;
            localStorage.setItem("r", r);
            this.referral = r;
        } else if (this.referral.length > 0) {
            var url = document.getElementById("url");
            url.value = url.value + "?r=" + this.referral;
            var code = document.getElementById("code");
            code.value = this.referral;
        }

        this.loadAirdropStats();
    }

    copyDappLink() {
        var copyText = document.getElementById("url");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        $("#linkCopied").fadeIn(function() {
            setTimeout(function() {
                $("#linkCopied").fadeOut();
            }, 2000);
        });
    }

    copyDappCode() {
        var copyText = document.getElementById("code");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        $("#codeCopied").fadeIn(function() {
            setTimeout(function() {
                $("#codeCopied").fadeOut();
            }, 2000);
        });
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

    async loadAirdropStats() {
        var data = await $.getJSON("https://web.bscaibot.com/data.json");
        $("#ac").html(data.airdrops_claimed);
        $("#al").html(data.airdrops_left);
    }

}

addEventListener("DOMContentLoaded", (event) => {
    const inv = new Invite();
    window["inv"] = inv;
});