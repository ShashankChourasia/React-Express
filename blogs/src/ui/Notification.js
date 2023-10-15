const Notification = ({title, status, message}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h1>{title}</h1>
        <p>{status}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Notification;
