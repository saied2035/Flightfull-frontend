import React from 'react';

const DeleteItem = () => (
  <div>
    <h1>Delete Item</h1>
    <form>
      <label htmlFor="name">
        Name:
        <input type="text" name="name" />
      </label>
      <label htmlFor="flightNumber">
        Flight Number:
        <input type="text" name="flightNumber" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);
export default DeleteItem;
