import classes from "./MeetupDetails.module.css";

export default function MeetupDetails(props) {

  return (
    <section className={classes.details}>
      <img src={props.image} layout="fill" alt={props.title} />
      {!props.isEditing ? (
        <>
          <h1>{props.title}</h1>
          <address>{props.address}</address>
          <p>{props.description}</p>
          <div className={classes.actions}>
            <button onClick={() => props.onEditMeetup(true)}>
              Edit Meetup
            </button>
            <button onClick={props.onDeleteMeetup}>Delete Meetup</button>
          </div>
        </>
      ) : (
        <div className={classes.editDetails}>
          <input
            type="text"
            value={props.editedMeetup.title}
            onChange={(e) => props.onChange(e, "title")}
          />
          <input
            type="text"
            value={props.editedMeetup.address}
            onChange={(e) => props.onChange(e, "address")}
          />
          <input
            type="text"
            value={props.editedMeetup.description}
            onChange={(e) => props.onChange(e, "description")}
          />
          <div className={classes.actions}>
            <button onClick={() => props.onEditMeetup(false)}>Cancel</button>
            <button
              disabled={props.isDisabled}
              onClick={props.onUpdateMeetup}
            >
              Save
            </button>
          </div>
        </div >
      )}
    </section>
  );
}
