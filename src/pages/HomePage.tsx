// import { useState, useEffect } from 'react'
// export function Home() {
//     useEffect(() => {
//         localStorage.clear()
//       }, [])
    
//     const [ logInStatus, setLogInStatus] = useState(false)
//     useEffect(() => {
//       window.addEventListener('storage', handleStorage)
    
//       return () => {
//         window.removeEventListener('storage', handleStorage)
//       }
//     }, [])
    
//     const handleStorage = () => {
//         if (localStorage.length === 2) {
//             setLogInStatus(true);
//         }
//     }

//     const greet = logInStatus ? localStorage.getItem('name') : 'Guest'

//     return (
//         <div className="home">
//             <h1>{`Welcome ${localStorage.getItem('name')}`}</h1>
//         </div>
//     )
// }


import { useState, useEffect } from 'react'
export function Home() {
    useEffect(() => {
        localStorage.clear()
        return () => {
            localStorage.clear()
        }
      })
    
    const [greet, setGreet] = useState('Guest')
    useEffect(() => {
      const handleStorage = () => {
        if (localStorage.length === 2) {
            setGreet(localStorage.getItem('name')!);
        }
      }
      window.addEventListener('storage', handleStorage)
    
      return () => {
        window.removeEventListener('storage', handleStorage)
      }
    })
    

    return (
        <div className="home">
            <h1 id='wordle-header'>{`Welcome ${greet}`}</h1>
        </div>
    )
}

