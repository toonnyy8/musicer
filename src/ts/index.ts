import "core-js/stable"
import "regenerator-runtime/runtime"

import * as Tone from "tone"

// import * as Piano from "../js/instruments/piano"

let canvas = document.createElement("canvas")
canvas.width = 500
canvas.height = 500

document.body.appendChild(canvas)

let ctx = canvas.getContext("2d")

{
    let gradient = ctx.createLinearGradient(0, 0, 0, 500);
    gradient.addColorStop(0, 'rgba(255,100,50,1)');
    gradient.addColorStop(0.5, 'rgba(50,255,255,1)');
    gradient.addColorStop(1, 'rgba(255,50,255,1)');
    ctx.fillStyle = gradient;
    ctx.rect(0, 0, 500, 500);
    ctx.fill();
}

{
    let gradient = ctx.createLinearGradient(0, 0, 500, 0);
    gradient.addColorStop(0, 'rgba(0,0,0,0.7)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.rect(0, 0, 500, 500);
    ctx.fill();
}

let down = false
let frequencies = new Array(200).fill(1).reduce((prev, curr) => {
    prev.push(curr + prev[prev.length - 1])
    return prev
}, [0])

var synth = new Tone.PolySynth(6, Tone.Synth).toMaster();
//set the attributes using the set interface
// synth.set("detune", -1200);
console.log(synth.voices)

canvas.onmousedown = (e => {
    console.log(e.offsetX)
    console.log(e.offsetY)
    synth.triggerAttack([(1 - e.offsetY / 500) * 1000])
    down = true
})

canvas.onmousemove = (e => {
    if (down) {
        console.log(e.offsetX)
        console.log(e.offsetY)
        synth.voices[0].frequency.value = (1 - e.offsetY / 500) * 1000
    }
})

canvas.onmouseup = (e => {
    down = false
    // synth.triggerRelease([0])
    synth.voices.map(voice => {
        voice.triggerRelease()
    })
    // synth.voices[0].frequency.value = 0
})