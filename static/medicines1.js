let A = document.getElementsByClassName('A');
let B = document.getElementsByClassName('B');
let C = document.getElementsByClassName('C');
let D = document.getElementsByClassName('D');
let E = document.getElementsByClassName('E');
let F = document.getElementsByClassName('F');
let G = document.getElementsByClassName('G');
let H = document.getElementsByClassName('H');
let I = document.getElementsByClassName('I');
let J = document.getElementsByClassName('J');
let K = document.getElementsByClassName('K');
let L = document.getElementsByClassName('L');
let M = document.getElementsByClassName('M');
let N = document.getElementsByClassName('N');
let O = document.getElementsByClassName('O');
let P = document.getElementsByClassName('P');
let Q = document.getElementsByClassName('Q');
let R = document.getElementsByClassName('R');
let S = document.getElementsByClassName('S');
let T = document.getElementsByClassName('T');
let U = document.getElementsByClassName('U');
let V = document.getElementsByClassName('V');
let W = document.getElementsByClassName('W');
let X = document.getElementsByClassName('X');
let Y = document.getElementsByClassName('Y');
let Z = document.getElementsByClassName('Z');

let AB = document.getElementById('atozid1');
AB.addEventListener('click', () => {
    aAndb();
    cAndd();
});

let CD = document.getElementById('atozid2');
CD.addEventListener('click', () => {
    cAndd();
    aAndb();

});

let EF = document.getElementById('atozid3');
EF.addEventListener('click', eAndf);

let GH = document.getElementById('atozid4');
GH.addEventListener('click', gAndh);

let IJ = document.getElementById('atozid5');
IJ.addEventListener('click', iAndj);

let KL = document.getElementById('atozid6');
KL.addEventListener('click', kAndl);

let MN = document.getElementById('atozid7');
MN.addEventListener('click', mAndn);
let sm = document.getElementById("medicines1id")

function aAndb() {
    for (let a = 0; a < A.length; a++) {
        if (A[a].style.display !== 'flex') {
            A[a].style.display = 'flex';
        } else {
            A[a].style.display = "none";

        }
    }
    for (let b = 0; b < B.length; b++) {
        if (B[b].style.display !== 'flex') {
            B[b].style.display = 'flex';
        } else {
            B[b].style.display = 'none'
        }
    }

}

function cAndd() {
    for (let c = 0; c < C.length; c++) {
        if (C[c].style.display !== 'flex') {
            C[c].style.display = 'flex';
        } else {
            C[c].style.display = 'none'
        }
    }
    for (let d = 0; d < D.length; d++) {
        if (D[d].style.display !== 'flex') {
            D[d].style.display = 'flex';
        } else {
            D[d].style.display = 'none'
        }
    }

}

function eAndf() {
    for (let i = 0; i < E.length; i++) {
        if (E[i].style.display = 'none') {
            E[i].style.display = 'flex';
        } else {
            E[i].style.display = 'none'
        }
    }
    for (let i = 0; i < F.length; i++) {
        if (F[i].style.display = 'none') {
            F[i].style.display = 'flex';
        } else {
            F[i].style.display = 'none'
        }
    }
}

function gAndh() {
    for (let i = 0; i < G.length; i++) {
        if (G[i].style.display = 'none') {
            G[i].style.display = 'flex';
        } else {
            G[i].style.display = 'none'
        }
    }
    for (let i = 0; i < H.length; i++) {
        if (H[i].style.display = 'none') {
            H[i].style.display = 'flex';
        } else {
            H[i].style.display = 'none'
        }
    }
}

function iAndj() {
    for (let i = 0; i < I.length; i++) {
        if (I[i].style.display = 'none') {
            I[i].style.display = 'flex';
        } else {
            I[i].style.display = 'none'
        }
    }
    for (let i = 0; i < J.length; i++) {
        if (J[i].style.display = 'none') {
            J[i].style.display = 'flex';
        } else {
            J[i].style.display = 'none'
        }
    }
}

function kAndl() {
    for (let i = 0; i < K.length; i++) {
        if (K[i].style.display = 'none') {
            K[i].style.display = 'flex';
        } else {
            K[i].style.display = 'none'
        }
    }
    for (let i = 0; i < L.length; i++) {
        if (L[i].style.display = 'none') {
            L[i].style.display = 'flex';
        } else {
            L[i].style.display = 'none'
        }
    }
}

function mAndn() {
    for (let i = 0; i < M.length; i++) {
        if (M[i].style.display = 'none') {
            M[i].style.display = 'flex';
        } else {
            M[i].style.display = 'none'
        }
    }
    for (let i = 0; i < N.length; i++) {
        if (N[i].style.display = 'none') {
            N[i].style.display = 'flex';
        } else {
            N[i].style.display = 'none'
        }
    }
}