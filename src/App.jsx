import { useState } from 'react'
import Apparel from './Components/Apparel'

function App() {
  const [email, setEmail] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const emailDetails = () => {
    window.alert(`We have successfully stored your email address`)
  }
 

  return (
    <>
     <Apparel
     email={email}
     onChangeEmail={onChangeEmail}
    onSubmitEmail={emailDetails}
     />
    </>
  )
}

export default App
