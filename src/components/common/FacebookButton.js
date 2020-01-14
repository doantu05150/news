// /* global FB */
// import React, { useEffect } from 'react'
// // import styled from 'styled-components'

// export default function FacebookButton(props) {
//   /**
//    * Handle login response
//    */
//   const facebookLoginHandler = response => {
//     if (response.status === 'connected') {
//       FB.api('/me', userData => {
//         const result = {
//           ...response,
//           user: userData,
//         }
//         props.onLogin(true, result)
//       })
//     } else {
//       props.onLogin(false)
//     }
//   }
//   /**
//    * Check login status
//    */
//   const checkLoginStatus = () => {
//     FB.getLoginStatus(facebookLoginHandler)
//   }
//   /**
//    * Init FB object and check Facebook Login status
//    */
//   const initializeFacebookLogin = () => {
//     { FB } = window.FB
//     checkLoginStatus()
//   }

//   /**
//    * Check login status and call login api is user is not logged in
//    */
//   const facebookLogin = () => {
//     if (!FB) return

//     FB.getLoginStatus(response => {
//       if (response.status === 'connected') {
//         facebookLoginHandler(response)
//       } else {
//         FB.login(facebookLoginHandler, { scope: 'public_profile' })
//       }
//     })
//   }

//   useEffect(() => {
//     document.addEventListener('FBObjectReady', initializeFacebookLogin)
//     return () => {
//       document.removeEventListener('FBObjectReady', initializeFacebookLogin)
//     }
//   })

//   const { children } = props
//   return (
//     <button type="button" onClick={facebookLogin}>
//       {children}
//     </button>
//   )
// }
