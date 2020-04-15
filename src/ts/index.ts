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


let colors = ["yellow", "orange", "red", "pink", "purple", "blue", "teal", "green"]

let container = document.createElement("div")// <HTMLDivElement>document.getElementById("container")
{
    container.classList.add("w-160")
    container.classList.add("h-120")
    container.classList.add("grid")
    container.classList.add("grid-rows-6")
    container.classList.add("grid-flow-col")
    container.classList.add("gap-0")
    container.classList.add("col-gap-0")
}
colors.forEach((color) => {
    for (let i = 3; i < 9; i++) {
        let button = document.createElement("button")
        button.classList.add("w-20")
        button.classList.add("h-20")
        button.classList.add("focus:outline-none")
        button.classList.add(`bg-${color}-${i}00`)
        button.classList.add(`_nmp_`)
        button.classList.add(`-nmp_src--lt`)
        button.classList.add(`active:-nmp_light--${color}-${i - 1}00`)
        button.classList.add(`active:-nmp_shadow--${color}-${i + 1}00`)
        button.classList.add(`-nmp_dist--xs`)
        button.classList.add(`active:-nmp_shape--inner`)
        container.appendChild(button)
    }
})
document.body.classList.add("flex")
document.body.classList.add("justify-center")
document.body.appendChild(container)