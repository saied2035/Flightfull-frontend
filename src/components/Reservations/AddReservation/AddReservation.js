import {useSelector} from 'react-redux'
const AddReservation = () => {
	const flights = useSelector((state) => state.flightsReducer);
     return (
     	  <main>
     	    <label for="city">City: </label>
     	    <input type="text" name="city"/>
     	    <label for="date">Date: </label>
     	    <input type="date" name="date"/>
     	    {
     	      flights && <label for="flight">Flight: </label> &&
     	      <select name='flight'>
                <option disabled selected value> -- select a flight -- </option>
                {flights.map(flight => <option value={flight.id}>{flight.name}</option> )}
              </select>
            }
            <button type='button'>Reserve</button>
     	  </main>
     	)
}

export default AddReservation;