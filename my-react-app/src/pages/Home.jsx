import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const allServices = useSelector((state) => state.service.services);

  return (
    <div className="container">
      {allServices.length === 0 && (
        <h3 className="py-2">No services found please try after sometime.</h3>
      )}
      {allServices.length > 0 && (
        <ul className="list-group py-5">
          {allServices.map((ser) => (
            <li key={ser.id} className="list-group-item">
              <Link
                to={`/services/${ser.id}`}
                className="card-body"
                style={{ textDecoration: "none" }}
              >
                <h2>{ser.service}</h2>
                <p>{ser.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
