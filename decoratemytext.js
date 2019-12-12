/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



window.onload = function () {
    document.getElementById("txt").value = "";
    const txtArea = document.getElementById("txt");

    const fontSize = parseInt(getComputedStyle(document.getElementById("txt")).getPropertyValue('font-size'));
    var f1 = 0;
    var i = 2;
    document.getElementById("btn").onclick = function () {
        delayMsg(fontSize);
        if (document.getElementById("checked").checked === true) {
            txtArea.style.fontWeight = "bold";
            txtArea.style.color = "green";
            txtArea.style.textDecoration = "underline";
            onchangeClick();
        }
    };

    document.getElementById("checked").onchange = function () {
        const body = document.body;
        if (this.checked === true) {
            txtArea.style.fontWeight = "bold";
            txtArea.style.color = "green";
            txtArea.style.textDecoration = "underline";

            body.style.background = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        } else {
            body.style.background = txtArea.style.textDecoration = txtArea.style.fontWeight = txtArea.style.color = "";
        }
    };
    
    function onchangeClick() {
        alert("Bling has been added!!!");
    }
    
   document.getElementById("IgpayAtinlayBtn").onclick = function() {
        const originalText = txtArea.value;
        let newText = "";
        let nextWord = "";
        for(let i = 0; i < originalText.length; ++i) {
            let letter = originalText.substring(i, i+1);
            nextWord += letter;
            if(letter === ' ' || letter === '\n' || i >= originalText.length-1) {
                nextWord = pigLatinizeWord(nextWord);
                newText += nextWord;
                nextWord = "";
            }
        }
        txtArea.value = newText;
    };
    function pigLatinizeWord(word) {
        const firstLetter = word.substring(0,1);
        
        if(!checkIfVowel(firstLetter)) {
            let consonantClusterSize = 1;
            for(let i = 1; i < word.length; ++i) {
                let letter = word.substring(i, i+1);
                if(!checkIfVowel(letter)) {
                    consonantClusterSize++;
                } else {
                    break;
                }
            }
            word = word.substring(consonantClusterSize, word.length).trim() + word.substring(0,consonantClusterSize);
        }
        return word.trim() + "ay ";
     }
    function checkIfVowel(letter) {
        const l = letter.toLowerCase();
        return l === 'a' || l === 'e' || 
        l === 'i' || l === 'o' || l === 'u';
    }
    document.getElementById("MalkovitchBtn").onclick = function() {
        const originalText = txtArea.value;
        let newText = "";
        let nextWord = "";
        for(let i = 0; i < originalText.length; ++i) {
            let letter = originalText.substring(i, i+1);
            nextWord += letter;
            if(letter === ' ' || letter === '\n' || i >= originalText.length-1) {
                if(nextWord.trim().length >= 5)
                    nextWord = "Malkovitch ";
                newText += nextWord;
                nextWord = "";
            }
        }
        txtArea.value = newText;
    };
    var timer = null;
    function delayMsg(fontSize) {
        if (timer === null) {
            timer = setInterval(increaseFont, 500, fontSize);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }
    function increaseFont(fontSize) {
        f1 = fontSize + i;
        i += 2;
        document.getElementById("txt").style.fontSize = f1 + "pt";
    }

};