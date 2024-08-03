const EventInstance = ({ event, admin }) => {
  return (
    <section className="event">
      <h2 className="name">{event.name}</h2>
      <div className="event-info">
        <ul className="location-list">
          <li>
            <h3>Location</h3>
          </li>
          <li>{event.location.street}</li>
          <li>{event.location.streetNumber}</li>
          <li>{event.location.city}</li>
          <li>{event.location.postcode}</li>
        </ul>
        <div className="date">
          <h3>Date</h3>
          <p>{event.date}</p>
        </div>
        <div className="price">
          <h3>Price</h3>
          <p>{event.price}</p>
        </div>

        {!admin ? <button className="purchase-btn">Purchase</button> : ""}
      </div>
    </section>
  );
};

export default EventInstance;
