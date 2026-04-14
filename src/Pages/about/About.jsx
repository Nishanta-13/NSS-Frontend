// import React from "react";
// import "./about.css";
// import {
//   Card,
//   CardBody,
//   CardText,
//   CardFooter,
//   CardTitle,
// } from "react-bootstrap";
// import data from "../../db/about-data.json";
// import Header from "../shared/Title-page/Header";
// function About() {
//   return (
//     <div className="about-page">
//       <Header
//         title="About Us"
//         backgroundImage="https://res.cloudinary.com/dmsr8ttrz/image/upload/v1742139222/dmjmtfxwbtcwr94agmrh.webp"
//       />

//       <div className="container my-5 text-center">
//         <p className="mb-2">
//           Welcome to the official website of the{" "}
//           <span className="font-weight-bold">National Service Scheme</span>(NSS)
//           unit of the National Institute of Technology (NIT) Silchar!
//         </p>
//         <p>
//           Established with a vision to foster a spirit of social responsibility
//           and community engagement among the youth, our NSS unit is committed to
//           bringing about positive change through various initiatives and
//           projects. With a team of enthusiastic volunteers and mentors, we
//           strive to make a meaningful impact in the lives of people, especially
//           those from marginalized communities. Our mission encompasses a wide
//           array of activities, including awareness campaigns, cleanliness
//           drives, health camps, educational outreach programs, and environmental
//           conservation efforts. Through these initiatives, we aim to empower
//           individuals, uplift communities, and contribute to the holistic
//           development of society.
//         </p>

//         <div className="row gap-0 my-4 px-sm-2">
//           <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center ">
//             <img
//               src="https://res.cloudinary.com/dmsr8ttrz/image/upload/v1742146618/zykzsldogecldr4fsypw.webp"
//               className="img-fluid h-3/4 w-3/4 rounded mb-3 mb-lg-0"
//               alt=""
//             />
//           </div>
//           <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
//             <img
//               src="https://res.cloudinary.com/dmsr8ttrz/image/upload/v1742146615/naxe25wkdmept52gls60.webp"
//               className="img-fluid h-3/4 w-3/4 rounded ml-md-3 "
//               alt=""
//             />
//           </div>
//         </div>

//         <p>
//           Driven by the values of empathy, integrity, and inclusivity, we
//           believe in the power of collective action to bring about
//           transformative change. Whether it's organizing blood donation camps to
//           save lives or conducting skill development workshops to empower youth,
//           every endeavor of our NSS unit is rooted in the spirit of service and
//           solidarity. As we embark on this journey of service and social
//           responsibility, we invite you to join hands with us in making a
//           difference. Together, let's work towards building a more equitable and
//           sustainable future for all. Get involved. Make a difference. Be the
//           change.
//         </p>
//       </div>
//       <div className="content-section container p-5">
//         <div className="row ">
//           {data.map((item, index) => {
//             return (
//               <div className="col-lg-6 deta">
//                 <Card className="h-100 shadow">
//                   <CardBody>
//                     <div className="p-4 xyz">
//                       <CardText>
//                         <strong> {item.info}</strong>
//                       </CardText>
//                     </div>
//                   </CardBody>
//                   <CardFooter className="d-flex align-items-center">
//                     <div style={{ width: "5rem", height: "5rem"}}>
//                       <img
//                         src={item.imageUrl}
//                         className="img-fluid rounded-circle shadow"
//                         alt={item.name}
//                         style={{
//                           width: "100%",
//                           height: "100%",
//                           objectFit: "cover",
//                         }}
//                       />
//                     </div>
//                     <CardTitle className="text-success ml-4">
//                       {item.name}
//                       <br />
//                       {item.designation}
//                     </CardTitle>
//                   </CardFooter>
//                 </Card>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;



import React from "react";
import "./about.css";
import {
  Card,
  CardBody,
  CardText,
  CardFooter,
  CardTitle,
} from "react-bootstrap";
import data from "../../db/about-data.json";
import Header from "../../components/shared/Title-page/Header";

function About() {
  return (
    <div className="about-page">
      <Header
        title="About Us"
        backgroundImage="https://res.cloudinary.com/dmsr8ttrz/image/upload/v1742139222/dmjmtfxwbtcwr94agmrh.webp"
      />

      <div className="container my-5 text-center">
        <p className="mb-2">
          Welcome to the official website of the{" "}
          <span className="font-weight-bold">National Service Scheme</span>(NSS)
          unit of the National Institute of Technology (NIT) Silchar!
        </p>
        <p>
          Established with a vision to foster a spirit of social responsibility
          and community engagement among the youth, our NSS unit is committed to
          bringing about positive change through various initiatives and
          projects. With a team of enthusiastic volunteers and mentors, we
          strive to make a meaningful impact in the lives of people, especially
          those from marginalized communities. Our mission encompasses a wide
          array of activities, including awareness campaigns, cleanliness
          drives, health camps, educational outreach programs, and environmental
          conservation efforts. Through these initiatives, we aim to empower
          individuals, uplift communities, and contribute to the holistic
          development of society.
        </p>

        <div className="row gap-0 my-4 px-sm-2">
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center ">
            <img
              src="https://res.cloudinary.com/dmsr8ttrz/image/upload/v1742146618/zykzsldogecldr4fsypw.webp"
              className="img-fluid h-3/4 w-3/4 rounded mb-3 mb-lg-0"
              alt=""
            />
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <img
              src="https://res.cloudinary.com/dmsr8ttrz/image/upload/v1742146615/naxe25wkdmept52gls60.webp"
              className="img-fluid h-3/4 w-3/4 rounded ml-md-3"
              alt=""
            />
          </div>
        </div>

        <p>
          Driven by the values of empathy, integrity, and inclusivity, we
          believe in the power of collective action to bring about
          transformative change. Whether it's organizing blood donation camps to
          save lives or conducting skill development workshops to empower youth,
          every endeavor of our NSS unit is rooted in the spirit of service and
          solidarity. As we embark on this journey of service and social
          responsibility, we invite you to join hands with us in making a
          difference. Together, let's work towards building a more equitable and
          sustainable future for all. Get involved. Make a difference. Be the
          change.
        </p>
      </div>

      <div className="content-section container p-5">
        <div className="row">
          {data.map((item, index) => {
            return (
              <div key={index} className="col-lg-6 deta mb-4">
                <Card className="h-100 shadow p-4"> {/* Added padding here */}
                  <CardBody>
                    <CardText>
                      <strong>{item.info}</strong>
                    </CardText>
                  </CardBody>
                  <CardFooter className="d-flex align-items-center">
                    <div style={{ width: "5rem", height: "5rem" }}>
                      <img
                        src={item.imageUrl}
                        className="img-fluid rounded-circle shadow"
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <CardTitle className="text-success ml-4 mb-0">
                      {item.name}
                      <br />
                      {item.designation}
                    </CardTitle>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
