// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addCart } from "../redux/action";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import { Link } from "react-router-dom";
// import medicineImage from "../Assets/medicine.jpg"
// const Products = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState(data);
//   const [loading, setLoading] = useState(false);
//   let componentMounted = true;

//   const dispatch = useDispatch();

//   const addProduct = (product) => {
//     dispatch(addCart(product))
//   }
  
//   useEffect(() => {
//     const getProducts = async () => {
//       setLoading(true);
//        const response = await fetch("https://testnodejs-api.vercel.app/api/medicines/");
//       if (componentMounted) {
//         setData(await response.clone().json());
//         setFilter(await response?.json());
//         setLoading(false);
//       }

//       return () => {
//         componentMounted = false;
//       };
//     };

//     getProducts();
//   }, []);

//   const Loading = () => {
//     return (
//       <>
//         <div className="col-12 py-5 text-center">
//           <Skeleton height={40} width={560} />
//         </div>
//         <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
//           <Skeleton height={592} />
//         </div>
//         <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
//           <Skeleton height={592} />
//         </div>
//         <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
//           <Skeleton height={592} />
//         </div>
//         <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
//           <Skeleton height={592} />
//         </div>
//         <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
//           <Skeleton height={592} />
//         </div>
//         <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
//           <Skeleton height={592} />
//         </div>
//       </>
//     );
//   };

//   const filterProduct = (cat) => {
//     const updatedList = data.filter((item) => item.category === cat);
//     setFilter(updatedList);
//   }
//   const ShowProducts = () => {
//     return (
//       <>
//         <div className="buttons text-center py-5">
//           <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
//           {/* <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
//           <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>
//             Women's Clothing
//           </button>
//           <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
//           <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>Electronics</button> */}
//         </div>

//         {filter.map((product) => {
//           return (
//             <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
//               <div className="card text-center h-100" key={product.id}>
//                 <img
//                   className="card-img-top p-3"
//                   // src={product?.image}
//                   src={medicineImage}
//                   alt="Card"
//                   height={300}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">
//                     {product.generic_name.substring(0, 12)}...
//                   </h5>
//                   <p className="card-text">
//                     {product.therapeutic_category.substring(0, 90)}...
//                   </p>
//                 </div>
//                 <ul className="list-group list-group-flush">
//                   <li className="list-group-item lead">INR {product.MRP}</li>
//                   {/* <li className="list-group-item">Dapibus ac facilisis in</li>
//                     <li className="list-group-item">Vestibulum at eros</li> */}
//                 </ul>
//                 <div className="card-body">
//                   <Link to={"/product/" + product.id} className="btn btn-dark m-1">
//                     Buy Now
//                   </Link>
//                   <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </>
//     );
//   };
//   return (
//     <>
//       <div className="container my-3 py-3">
//         <div className="row">
//           <div className="col-12">
//             <h2 className="display-5 text-center">Latest Products</h2>
//             <hr />
//           </div>
//         </div>
//         <div className="row justify-content-center">
//           {loading ? <Loading /> : <ShowProducts />}
//         </div>
//       </div>
//     </>
//   );
// };
// export default Products;
import React, { useState } from "react";
// import Navbar from "../Navbar";
import { Link } from "react-router-dom";
 import "./index.css";
import Job from "../components/jobs.json";
import Filter from "./Filter";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const experience = [
  { min: 0, max: 1 },
  { min: 2, max: 3 },
  { min: 4, max: 5 },
  { min: 5, max: 10 },
];

const Products = () => {
  const JobData = JSON.parse(localStorage.getItem("item")) || [];
  const [filteredJobs, setFilteredJobs] = useState([...JobData, ...Job]);
  const [searchterm, setSearchTerm] = useState("");
  const [active, setActive] = useState(false);
  function handleJobFilter(event) {
    const value = event.target.innerText;
    event.preventDefault();
    setFilteredJobs(
      Job.filter((job) => {
        return job.role === value;
      })
    );
  }
  function saveClick(id, logo, company, position, location, posted) {
    window.localStorage.setItem(
      "Job",
      JSON.stringify(id, logo, company, position, location, posted)
    );
    console.log(JobData);
  }
  const searchEvent = (event) => {
    const data = event.target.value;
    setSearchTerm(data);
    if (searchterm !== "" || searchterm.length > 2) {
      const filterData = Job.filter((item) => {
        if (item) {
          return Object.values(item)
            .join("")
            .toLowerCase()
            .includes(searchterm.toLowerCase());
        } else {
          return 0;
        }
      });
      setFilteredJobs(filterData);
    } else {
      setFilteredJobs(Job);
    }
  };
  function handleExperienceFilter(checkedState) {
    let filters = [];
    checkedState.forEach((item, index) => {
      if (item === true) {
        const filterS = Job.filter((job) => {
          return (
            job.experience >= experience[index].min &&
            job.experience <= experience[index].max
          );
        });
        filters = [...filters, ...filterS];
      }
      setFilteredJobs(filters);
    });
  }
  return (
    <>
      {/* <Navbar /> */}
      <div className="jobs-for-you">
        <div className="job-background">
          <div className="title">
            <h2>Our Jobs</h2>
          </div>
        </div>
        <div className="job-section">
          <div className="job-page">
            {filteredJobs.map(
              ({ id, logo, company, position, location, posted, role }) => {
                return (
                  <div className="job-list">
                    <div className="job-card">
                      <div className="job-name">
                        <img
                          src={
                            logo.length > 20
                              ? logo
                              : require(`../Assets/images/${logo}`)
                          }
                          alt="logo"
                          className="job-profile"
                        />
                        <div className="job-detail">
                          <h4>{company}</h4>
                          <h3>{position}</h3>
                          <div className="category">
                            <p>{location}</p>
                            <p>{role}</p>
                          </div>
                        </div>
                      </div>
                      <div className="job-button">
                        <div className="job-posting">
                          <Link to="/apply-jobs">Apply Now</Link>
                        </div>
                        <div className="save-button">
                          <Link
                            to="/product"
                            onClick={() => {
                              saveClick(
                                {
                                  id,
                                  logo,
                                  company,
                                  position,
                                  location,
                                  posted,
                                },
                                setActive(!active)
                              );
                            }}
                          >
                            {JSON.parse(localStorage.getItem("Job"))?.id ===
                            id ? (
                              <AiFillHeart />
                            ) : (
                              <AiOutlineHeart />
                            )}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>

          <Filter
            setFilteredJobs={setFilteredJobs}
            handleJobFilter={handleJobFilter}
            handleExperienceFilter={handleExperienceFilter}
            searchEvent={searchEvent}
          />
        </div>
      </div>
    </>
  );
};

export default Products;
