import React from "react";
import "./event.css";

import Heading from "../../components/shared/Heading/Heading";
import Header from "../../components/shared/Title-page/Header";
import Filter from "../../components/Filter/Filter";
import { useEffect } from "react";
const Event = () => {
  
  return (
    <div className="event-page">
      <Header
        title="Event"
        backgroundImage="https://res.cloudinary.com/dmsr8ttrz/image/upload/v1742146040/snsgujwh0tpajysm5ntz.webp"
      />
      <Heading title="Events in Focus" />
      <div className="container my-5">
        <div className="row column-gap-0 mx-4">
          <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-center ">
            <img src="https://res.cloudinary.com/sahincloudinary/image/upload/f_auto,q_auto/v1/nss_events/team/jvw4nonbn9no8y77ntjl" className="img-fluid w-55" alt="about img" />
          </div>
          <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-center text-center">
            <h2 className="fs-1 mb-5 text-uppercase fw-bold">
              NSS Inauguration
            </h2>
            <p>
              The NSS inauguration at NIT Silchar, held on 11th August 2023, was
              a momentous occasion, uniting students, faculty, and
              administration in the Bhupen Hazarika Auditorium. With meticulous
              planning, the event commenced with the ceremonial lighting of
              diyas, symbolizing enlightenment and service.
            </p>
            <p className="mb-5">
              Our esteemed Director Professor Dilip Kumar Baidya inaugurated NSS
              NIT Silchar, setting the stage for a purposeful journey. This was
              followed by insightful speeches from him, the Deans, the NSS
              Programme Officer, and the NSS President, inspiring collaboration,
              and a commitment to service. NSS NIT Silchar pledges to sustain
              impactful service, uplifting communities and enhancing the
              college's reputation.
            </p>
          </div>
        </div>

        <div className="events my-4 row gap-10">
  

       
        


          <div className="past-events">
            <Heading title="Past Events" />
            <Filter/>

          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Event;