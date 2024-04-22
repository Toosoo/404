import './style.css'
import gsap from 'gsap'

//eyeball1
//eyeball2
//ball2
//half2
//half1


const eye = document.getElementById('eye')
const eyeball1 = document.getElementById('eyeball1')
const ball = document.getElementById('ball2')
const half1 = document.getElementById('half1')
const half2 = document.getElementById('half2')

gsap.set([half1,half2,ball], {transformOrigin: 'center center'})


let half1Rotate = gsap.quickTo(half1, 'rotation',{ease:'sine',duration:1}) 
let half1X = gsap.quickTo(half1, 'x',{ease:'sine',duration:.5}) 

let half2Rotate = gsap.quickTo(half2, 'rotation',{ease:'sine',duration:.3}) 

let ballX = gsap.quickTo(ball, 'x',{ease:'power3'}) 


let eyeball1X = gsap.quickTo(eyeball1, 'x',{ease:'power3'}) 
let eyeball1Y = gsap.quickTo(eyeball1, 'y',{ease:'power3'}) 


let theEye = gsap.quickTo(eye, 'y',{ease:'power3'}) 


window.addEventListener('mousemove', (e) => {

    
    let rangeX = gsap.utils.mapRange(0, window.innerWidth, -15, 15,e.clientX)
    let rangeY = gsap.utils.mapRange(0, window.innerWidth, -15,40,e.clientY)
    


    half1Rotate(rangeX * 1.6)
    half1X(rangeX * 2)

    half2Rotate(rangeX)

    ballX(rangeX * 1.5)
    
    eyeball1X(rangeX)
    eyeball1Y(rangeY)
})