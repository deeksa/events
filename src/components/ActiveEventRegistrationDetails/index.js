// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props
  switch (registrationStatus) {
    case 'Initial':
      return (
        <div>
          <p>Click on an event, to view its registration details</p>
        </div>
      )
    case 'YET_TO_REGISTER':
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="image2"
          />
          <p>
            A live performance brings so much to your relationship with dance
          </p>
          <button type="button">Register Here</button>
        </div>
      )
    case 'REGISTERED':
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="image2"
          />
          <h1>You have already registered for the event</h1>
        </div>
      )
    case 'REGISTRATIONS_CLOSED':
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="image2"
          />
          <h1>Registrations Are Closed Now!</h1>
          <p>Stay tuned. We will reopen</p>
        </div>
      )

    default:
      return <div />
  }
  //   if (registrationStatus === 'Initial') {
  //     return (
  //       <div>
  //         <p>Click on an event,to view its registration details</p>
  //       </div>
  //     )
  //   }
  //   if (registrationStatus === 'YET_TO_REGISTER') {
  //     return (
  //       <div>
  //         <img
  //           src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
  //           alt="yet to register"
  //         />
  //         <p>live</p>
  //         <button>Register Here</button>
  //       </div>
  //     )
  //   }
}
export default ActiveEventRegistrationDetails
