import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ServicesDetailPage = () => {
  const allServices = useSelector((state) => state.service.services);

  const { id } = useParams();

  const currentService = allServices.find((ser) => ser.id === id);
  console.log(currentService);

  return (
    <div className="container my-5 w-75 border border-light shadow p-3 mb-5 bg-body rounded">
      <div className="card text-center border-0">
        <div className="card-body">
          <h3 className="card-title">{currentService.service}</h3>
        </div>
        <ul className="list-group list-group-flush border-0">
          <li className="list-group-item border-0">
            <h4 className="card-title">{currentService.name}</h4>
            <p className="card-text">{currentService.description}</p>
          </li>
          <li className="list-group-item border-0">
            <em className="card-text">version: {currentService.version}</em>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesDetailPage;
