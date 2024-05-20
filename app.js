let colorGame = document.getElementById('color-game')
let color = document.getElementById('t-color')
let colors = document.querySelectorAll('.b-color')
let NewColor = document.getElementById('b-new-color')
let result = document.getElementById('t-result')
let topSection = document.getElementById('t-top')
let easy = document.getElementById('b-easy')
let hard = document.getElementById('b-hard')
let harder = document.getElementById('b-harder')
let bottom = document.getElementById('cg-bottom')
let correctColor;
let alreadyWon;
let normalHeight = window.getComputedStyle(colorGame).height
let theWindowHeight = window.innerHeight
let heightChanger = () => {
    if (theWindowHeight > 800) {
        colorGame.style.height = `${theWindowHeight}px`
    }
}
heightChanger()
let randomColor = () => {
    let red = Math.round(Math.random() * 255)
    let green = Math.round(Math.random() * 255)
    let blue = Math.round(Math.random() * 255)
    color.innerText = `rgb(${red}, ${green}, ${blue})`
    correctColor = `rgb(${red}, ${green}, ${blue})`
}
let newColors = () => {
    colors.forEach(item => {
        item.style.backgroundColor = 'white'
    });
    topSection.style.backgroundColor = 'deeppink'
    colors.forEach((item) => {
        item.style.visibility = 'visible';
    });
    result.innerText = 'tap on a color'
    alreadyWon = false
    randomColor()
    randomColors()
    onColorClick()
}
let opacityFunction = (item, oppArray) => {
    // es funqcia stackoferflowdan
    var x = 0;
    (function next() {
        item.style.opacity = oppArray[x];
        if(x++ < oppArray.length) {
            setTimeout(next, 45); 
        }
    })();
}
NewColor.addEventListener('click', function() {
    newColors()
})
let randomColors = () => {
    let correctColorIndex = Math.round(Math.random() * (colors.length - 1))
    colors[correctColorIndex].style.backgroundColor = correctColor
    colors.forEach((item, index) => {
        if (index !== correctColorIndex) {
            let red = Math.round(Math.random() * 255)
            let green = Math.round(Math.random() * 255)
            let blue = Math.round(Math.random() * 255)
            colors[index].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
        }
    });
}
let onColorClick = () => (
    colors.forEach(item => {
        item.addEventListener('click', function() {
            if (!alreadyWon) {
                if (window.getComputedStyle(item).backgroundColor == correctColor) {
                    result.innerText = 'GOOD JOB!'
                    alreadyWon = true
                    topSection.style.backgroundColor = 'rgb(40, 150, 84)'
                    colors.forEach(element => {
                        element.style.visibility = 'visible'
                        opacityFunction(element,["0.2", "0.4", "0.6", "0.8", "1"])
                        element.style.backgroundColor = correctColor
                    });
                } else {
                    result.innerText = 'TRY AGAIN!'
                    topSection.style.backgroundColor = 'rgb(250, 15, 10)'
                    opacityFunction(item,["0.8", "0.6", "0.4", "0.2", "0"])
                    setTimeout(() => {
                        item.style.visibility = 'hidden'
                    }, 180);
                }
            }
        })
    })
)
onColorClick()
easy.addEventListener('click', function() {
    colors.forEach(element => {
        element.style.opacity = '1'
        element.style.visibility = 'visible'
    });
    colorGame.style.height = normalHeight
    bottom.style.flex = '1'
    easy.style.color = 'deeppink'
    hard.style.color = 'black'
    harder.style.color = 'black'
    while (colors.length > 3) {
        bottom.removeChild(bottom.firstElementChild)
        colors = document.querySelectorAll('.b-color')
    }
    newColors()
    heightChanger()
})
hard.addEventListener('click', function() {
    colors.forEach(element => {
        element.style.opacity = '1'
        element.style.visibility = 'visible'
    });
    colorGame.style.height = normalHeight
    bottom.style.flex = '1'
    easy.style.color = 'black'
    hard.style.color = 'deeppink'
    harder.style.color = 'black'
    while (colors.length > 6) {
        bottom.removeChild(bottom.firstElementChild)
        colors = document.querySelectorAll('.b-color')
    }
    while (colors.length < 6) {
        let newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'b-color')
        bottom.appendChild(newDiv)
        colors = document.querySelectorAll('.b-color')
    }
    newColors()
    heightChanger()
})
harder.addEventListener('click', function() {
    colors.forEach(element => {
        element.style.opacity = '1'
        element.style.visibility = 'visible'
    });
    colorGame.style.height = '56350px'
    bottom.style.flex = '146.4'
    easy.style.color = 'black'
    hard.style.color = 'black'
    harder.style.color = 'deeppink'
    while (colors.length < 840) {
        let newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'b-color')
        bottom.appendChild(newDiv)
        colors = document.querySelectorAll('.b-color')
    }
    newColors()
    heightChanger()
})
randomColor()
randomColors()