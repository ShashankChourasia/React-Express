import { serviceActions } from "./service-slice";

export const fetchServiceData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api/services");

      if (!response.ok) {
        throw Error("Could not fetch services.");
      }
      const data = await response.json();
      return data;
    };

    try {
      const serviceData = await fetchData();
      dispatch(
        serviceActions.allServices({
          services: serviceData.services || [],
        })
      );
    } catch (error) {
      dispatch(
        serviceActions.showError({
          status: "error",
          title: "Error fetching services",
        })
      );
    }
  };
};

export const createService = (service) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:8080/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(service),
      });

      if (response.status !== 201) {
        throw Error("Could not create new service booking.");
      }
      const data = await response.json();
      dispatch(serviceActions.createService(data.service));
    } catch (error) {
      dispatch(
        serviceActions.showError({
          status: "error",
          title: "Couldn't save service booking",
        })
      );
    }
  };
};
