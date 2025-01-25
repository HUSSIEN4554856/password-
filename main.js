"use strict";
var _a, _b;
let but = (_a = document.querySelector(".choose")) === null || _a === void 0 ? void 0 : _a.children[5].children[0];
let rande = document.querySelector(".number");
let v = document.querySelector(".choose");
let dis = document.querySelector(".display");
let a1 = Array.from("apcdefghijklnopqrswvyxz");
let a2 = Array.from("APCDEFGHIJKLNOPQRSWVYXZ");
let a3 = Array.from("!@#$%&*()-_=+|[]{};:/?.>");
let a4 = Array.from("123456789");
const p = (_b = document.querySelector(".choose")) === null || _b === void 0 ? void 0 : _b.children[4].children[2];
rande === null || rande === void 0 ? void 0 : rande.addEventListener("input", () => {
    if (p) {
        p.innerHTML = rande.value;
    }
});
but.addEventListener("click", () => {
    if (v.children[0].children[0].checked || v.children[1].children[0].checked || v.children[2].children[0].checked || v.children[3].children[0].checked) {
        random(parseInt(rande.value));
        let r = document.createElement("button");
        r.innerHTML = "Copy";
        r.className = "copy";
        v.appendChild(r);
        r.addEventListener("click", () => {
            navigator.clipboard.writeText(v.textContent);
            window.alert("Copied");
            window.location.reload();
        });
    }
});
function random(length) {
    let pass = "";
    while (pass.length < length) {
        if (v.children[0].children[0].checked) {
            pass += a2[Math.floor(Math.random() * a2.length)];
        }
        if (v.children[1].children[0].checked) {
            pass += a1[Math.floor(Math.random() * a1.length)];
        }
        if (v.children[2].children[0].checked) {
            pass += a3[Math.floor(Math.random() * a3.length)];
        }
        if (v.children[3].children[0].checked) {
            pass += a4[Math.floor(Math.random() * a4.length)];
        }
    }
    v.innerHTML = pass;
}