import axios from "axios";
import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/services").then((data) => {
      setServices(data.data);
    });
  }, []);
  return (
    <div>
      <div className="text-center space-y-5 mt-10 w-2/3 mx-auto">
        <h3 className="text-xl font-bold text-[#FF3811]">Service</h3>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {
            services?.map(service=><Service service={service} key={service._id}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;
