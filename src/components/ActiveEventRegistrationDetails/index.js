import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props

  if (registrationStatus === 'YET_TO_REGISTER') {
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="registration-image"
        />
        <p>A live performance brings so much to your relationship with dance</p>
        <button type="button">Register Here</button>
      </div>
    )
  }

  if (registrationStatus === 'REGISTER') {
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="registration-image"
        />
        <h1>You have already registered for the event</h1>
      </div>
    )
  }

  if (registrationStatus === 'REGISTRATIONS_CLOSED') {
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
          className="registration-image"
        />
        <h1>Registrations Are Closed Now!</h1>
        <p>Stay tuned. We will reopen the registrations soon.</p>
      </div>
    )
  }

  return null
}

export default ActiveEventRegistrationDetails
