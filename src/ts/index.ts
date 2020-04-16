import "core-js/stable"
import "regenerator-runtime/runtime"

import * as Tone from "tone"

// import * as Piano from "../js/instruments/piano"

// let canvas = document.createElement("canvas")
// canvas.width = 500
// canvas.height = 500

// document.body.appendChild(canvas)

// let ctx = canvas.getContext("2d")

// {
//     let gradient = ctx.createLinearGradient(0, 0, 0, 500);
//     gradient.addColorStop(0, 'rgba(255,100,50,1)');
//     gradient.addColorStop(0.5, 'rgba(50,255,255,1)');
//     gradient.addColorStop(1, 'rgba(255,50,255,1)');
//     ctx.fillStyle = gradient;
//     ctx.rect(0, 0, 500, 500);
//     ctx.fill();
// }

// {
//     let gradient = ctx.createLinearGradient(0, 0, 500, 0);
//     gradient.addColorStop(0, 'rgba(0,0,0,0.7)');
//     gradient.addColorStop(1, 'rgba(0,0,0,0)');
//     ctx.fillStyle = gradient;
//     ctx.rect(0, 0, 500, 500);
//     ctx.fill();
// }

// let down = false
// let frequencies = new Array(200).fill(1).reduce((prev, curr) => {
//     prev.push(curr + prev[prev.length - 1])
//     return prev
// }, [0])

// var synth = new Tone.PolySynth(6, Tone.Synth).toMaster();
// //set the attributes using the set interface
// // synth.set("detune", -1200);
// console.log(synth.voices)

// canvas.onmousedown = (e => {
//     console.log(e.offsetX)
//     console.log(e.offsetY)
//     synth.triggerAttack([(1 - e.offsetY / 500) * 1000])
//     down = true
// })

// canvas.onmousemove = (e => {
//     if (down) {
//         console.log(e.offsetX)
//         console.log(e.offsetY)
//         synth.voices[0].frequency.value = (1 - e.offsetY / 500) * 1000
//     }
// })

// canvas.onmouseup = (e => {
//     down = false
//     // synth.triggerRelease([0])
//     synth.voices.map(voice => {
//         voice.triggerRelease()
//     })
//     // synth.voices[0].frequency.value = 0
// })
document.oncontextmenu = function () {
    window.event.returnValue = false; //將滑鼠右鍵事件取消
}

let tunes = ["C", "D", "E", "F", "G", "A", "B"]
let colors = ["yellow", "orange", "red", "pink", "purple", "blue", "teal"]

let container = document.createElement("div")
{
    container.classList.add("w-168")
    container.classList.add("h-144")
    container.classList.add("grid")
    container.classList.add("grid-rows-6")
    container.classList.add("grid-flow-col")
    container.classList.add("gap-0")
    container.classList.add("col-gap-0")
}
colors.forEach((color, idx) => {
    for (let i = 0; i < 6; i++) {
        let button = document.createElement("button")
        button.classList.add("w-24")
        button.classList.add("h-24")
        button.classList.add("focus:outline-none")
        button.classList.add(`bg-${color}-${i + 3}00`)
        button.classList.add(`_nmp_`)
        button.classList.add(`-nmp_src--lt`)
        button.classList.add(`active:-nmp_light--${color}-${i + 3 - 1}00`)
        button.classList.add(`active:-nmp_shadow--${color}-${i + 3 + 1}00`)
        button.classList.add(`-nmp_dist--xs`)
        button.classList.add(`-nmp_shape--inner`)
        container.appendChild(button)

        let polySynth = new Tone.PolySynth(4, Tone.Synth).set({
            oscillator: {
                type: "sine",
                // partials: new Array(441).fill(1).map((value, index) => value / (index + 1))
            }
        }).toMaster()

        //play a middle 'C' for the duration of an 8th note

        button.onpointerdown = () => {
            console.log(`${tunes[idx]}${(5 - i) + 2}`)
            polySynth.triggerAttack([`${tunes[idx]}${(5 - i) + 2}`])

        }
        button.onpointerup = () => {
            polySynth.triggerRelease([`${tunes[idx]}${(5 - i) + 2}`])
            console.log(polySynth.get()["oscillator"])
        }
    }
})
document.body.classList.add("flex")
document.body.classList.add("justify-center")
document.body.appendChild(container)