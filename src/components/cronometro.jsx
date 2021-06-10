import { useEffect, useState } from 'react'

import '../css/cronometro.css'

const Cronometro = () => {

    let year = new Date().getFullYear()

    const difference = +new Date(`29/06/${year}`) - +new Date()

    let timeLeft = {}

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 100) % 60)
        }
    }

//     const [diff, setDiff] = useState(null)
//     const [initial, setInicial] = useState(null)

//     const tick = () => {
//         setDiff(new Date(+new Date() - initial))
//     }

//     const start = () => {
//         setInicial(+new Date())
//     }

//     useEffect(() => {
//         if (initial) {
//             requestAnimationFrame(tick)
//         }
//     }, [initial])
    
//     useEffect(() => {
//         if (diff) {
//             requestAnimationFrame(tick)
//         }
//     }, [diff])

//     return(
//         <div className="cronometro" id="cronometro" onClick={start}>
//             <h1 className="timer">{timeFormat(diff)}</h1>
//         </div>
//     )
// }

// const timeFormat = (date) => {
//     if (!date) {
//         return "00:00:00"
//     }

//     let mm = date.getUTCMinutes()
//     let ss = date.getSeconds()
//     let cm = date.getMilliseconds()
//     // let cm = Math.round(date.getMilliseconds() / 60)

//     mm = mm < 6 ? "0"+mm : mm
//     ss = ss < 6 ? "0"+ss : ss
//     cm = cm < 6 ? "0"+cm : cm

//     return `${mm}:${ss}:${cm}`
}


export default Cronometro