// // import React, { Fragment,useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import "./internship.css";
// // import InternLogo from "../../../public/img/logo.png";
// // import Stamp from "../../../public/img/sign.png";

// // const InternshipOfferLetter = () => {
// //     const { id } = useParams();
// //     const [candidate, setCandidate] = useState(null);
  
// //     useEffect(() => {
// //         const fetchCandidateData = async () => {
// //           try {
// //             const response = await fetch("/data1.json");
// //             if (!response.ok) {
// //               throw new Error(`HTTP error! status: ${response.status}`);
// //             }
// //             const data = await response.json();
// //             const selectedCandidate = data.find((item) => item.id === parseInt(id));
// //             if (!selectedCandidate) {
// //               throw new Error("Candidate not found!");
// //             }
// //             setCandidate(selectedCandidate);
// //           } catch (error) {
// //             console.error("Error fetching data:", error.message);
// //           }
// //         };
// //         fetchCandidateData();
// //       }, [id]);
      
  
// //     const handlePrint = () => {
// //       window.print();
// //     };
  
// //     if (!candidate) {
// //       return <p>Loading candidate details...</p>;
// //     }

// //   return (
// //     <Fragment>
// //     <div className="a4-page">
// //       <div className="header1">
// //         <img src={InternLogo} alt="Company Logo" className="logo1" />
// //         <h1 style={{fontSize:"32px"}}>Appmarked</h1>
// //       </div>
// //       <div className="content1">
// //         <h2 className="title1">Internship Offer Letter</h2>
// //         <p><strong>Date:</strong> January 30, 2025</p>
// //         <p><strong>To,</strong></p>
// //         <p>{candidate?.name}</p>
// //         <p>{candidate?.address}</p>
// //         <p><strong>Subject:</strong> {candidate?.subject}</p>
// //         <p>
// //           Dear {candidate?.name},  
// //           <br />
// //           We are pleased to offer you an opportunity to join <strong>Appmarked</strong> as an Intern. 
// //           Based on our assessment, we find that you require proper skill training to meet industry 
// //           standards. Your current knowledge is insufficient compared to the market demands, but we 
// //           believe in your potential and are committed to helping you improve in key areas.
// //         </p>

// //         <h3>Internship Details:</h3>
// //         <ul>
// //           <li>
// //             <strong>Non-Prime Internship:</strong> Unpaid, 3-month duration with a certificate of 
// //             completion.
// //           </li>
// //           <li>
// //             <strong>Prime Member Internship:</strong> Comprehensive training with mentorship from 
// //             senior developers, hands-on client projects, and after three months:
// //             <ul>
// //               <li>Five (5) job referrals to our client companies</li>
// //               <li>Professional resume, interview preparation, and project details</li>
// //               <li>Opportunity for full-time roles with packages starting from ₹5 LPA to ₹12 LPA</li>
// //             </ul>
// //           </li>
// //         </ul>
// //         <p className="highlight1">
// //           If you select the <strong>Prime Member Internship</strong>, after paying the one-time 
// //           registration fee of ₹1299, you will be added to the Prime Club. Additionally, a virtual 
// //           Appmarked I-card will be allocated to you.
// //         </p>

// //         <p>
// //           Please confirm your decision and selected internship type by replying to this email. 
// //           Further details about the commencement and process will be shared upon confirmation.
// //         </p>

// //         <p>Sincerely,</p>
// //         <p><strong>HRD</strong></p>
// //       </div>
// //       <div className="stamp-signature">
// //           <img src={Stamp} alt="Stamp" className="stamp" />
// //           <p className="signature">Authorized Signature</p>
// //           <p style={{float:"right",fontSize:"8px",fontWeight:"bold"}}>Visit for more detail:- https://www.appmarked.com</p>
// //         </div>
// //       <div className="footer1">
// //         <p className="footer-text1">© 2025 Appmarked. All rights reserved.</p>
// //       </div>
     
// //       <button className="print-button" onClick={handlePrint}>
// //         Print as PDF
// //       </button>
// //     </div>
// //     </Fragment>
// //   );
// // };

// // export default InternshipOfferLetter;

// // import React from "react";
// // import { Button } from "@mui/material";
// // import { Card, CardContent } from "@mui/material";
// // import "./internship.css";
// // import InternLogo from "../../../public/img/logo.png";
// // import Stamp from "../../../public/img/sign.png";

// // const InternshipOfferLetter = () => {
// //   const handlePrint = () => {
// //     window.print();
// //   };

// //   return (
// //     <div className="offer-container">
// //       <Card className="offer-card" variant="outlined">
// //         <div className="offer-header">
// //           <img src={InternLogo} alt="Company Logo" className="company-logo" />
// //           <h1 className="offer-title">Offer of Employment</h1>
// //         </div>
// //         <CardContent>
// //           <p className="company-details">AppMarked Private Limited, In</p>
// //           <p className="company-details">Narpatkhera, Raj Bhavan Colony</p>
// //           <p className="company-details">Bangalore-560034, Karnataka India</p>
// //           <p className="company-details">[support@appmarked.com] | [+91 7608829869]</p>
// //           <p className="offer-date">Date: January 29, 2025</p>

// //           <p style={{marginTop:"10px",fontWeight:"bold"}}>Dear Pratik Waghela,</p>
// //           <p>
// //             We are pleased to offer you the position of <b>Associate Software Engineer (React.js)</b> at
// //             <b> APPMARKED</b>, with your joining date set as <b>January 30, 2025</b>.
// //           </p>
// //           <p className="mt-4">As part of your initial engagement, you will undergo a <b>3-month internship</b> during which you will receive a <b>stipend of ₹15,000 per month (in-hand)</b>. Upon successful completion, your full-time role will have an <b>annual CTC of ₹4.5 LPA</b>.</p>
          
// //           <table className="salary-table">
// //             <thead>
// //               <tr>
// //                 <th>Component</th>
// //                 <th>Amount (₹)</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               <tr>
// //                 <td>Gross Annual CTC</td>
// //                 <td>4,50,000</td>
// //               </tr>
// //               <tr>
// //                 <td>Employee Provident Fund (EPF)</td>
// //                 <td>-1,800/month</td>
// //               </tr>
// //               <tr>
// //                 <td>Medical Insurance</td>
// //                 <td>-2,000/month</td>
// //               </tr>
// //               <tr>
// //                 <td>Other Deductions</td>
// //                 <td>[Some Charge]</td>
// //               </tr>
// //               <tr>
// //                 <td className="bold-text">Net In-Hand Salary</td>
// //                 <td className="bold-text">₹30,500/month</td>
// //               </tr>
// //             </tbody>
// //           </table>
          
// //           <p className="mt-4">Please confirm your acceptance of this offer by signing below and returning a copy by **January 31, 2025**.</p>
          
// //           <div className="signature-section">
// //             <div>
// //               <p className="bold-text">Human Resource Development</p>
// //               <p>APPMARKED Private Limited</p>
// //               <p>Website:- https://www.appmarked.com</p>
// //             </div>
// //             <img src={Stamp} alt="Company Stamp" className="company-stamp" />
// //           </div>

// //           <div className="acknowledgment-section">
// //             <p className="bold-text">**Acknowledgment and Acceptance**</p>
// //             <p>I, **Pratik**, have read, understood, and accept the terms and conditions of this offer. I confirm my joining on **January 30, 2025**.</p>
// //             <p className="signature-line">**Signature:** ______________</p>
// //             <p className="signature-line">**Date:** ______________</p>
// //           </div>
          
// //           <div className="print-button-container">
// //             <Button onClick={handlePrint} variant="contained" color="primary">Print Offer Letter</Button>
// //           </div>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // };

// // export default InternshipOfferLetter;

// import React from "react";
// import { Button } from "@mui/material";
// import { Card, CardContent } from "@mui/material";
// import "./internship.css";
// import InternLogo from "../../../public/img/logo.png";
// import Stamp from "../../../public/img/sign.png";

// const InternshipOfferLetter = () => {
//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <div className="offer-container">
//       <Card className="offer-card" variant="outlined">
//         <div className="offer-header">
//           <img src={InternLogo} alt="Company Logo" className="company-logo" />
//           <h1 className="offer-title">Offer of Employment</h1>
//         </div>
//         <CardContent>
//           <p className="company-details">AppMarked Private Limited, In</p>
//           <p className="company-details">Narpatkhera, Raj Bhavan Colony</p>
//           <p className="company-details">Bangalore-560034, Karnataka India</p>
//           <p className="company-details">[support@appmarked.com] | [+91 7608829869]</p>
//           <p className="offer-date">Date: January 29, 2025</p>

//           <p style={{marginTop:"10px",fontWeight:"bold"}}>Dear Prashant S,</p>
//           <p>
//             We are pleased to offer you the position of <b>Junior Business Analyst</b> at
//             <b> APPMARKED</b>, with your joining date set as <b>January 30, 2025</b>.
//           </p>
//           <p className="mt-4">As part of your initial engagement, you will undergo a <b>3-month internship</b> during which you will receive a <b>stipend of ₹15,000 per month (in-hand)</b>. Upon successful completion, your full-time role will have an <b>annual CTC of ₹4.5 LPA</b>.</p>
          
//           <table className="salary-table">
//             <thead>
//               <tr>
//                 <th>Component</th>
//                 <th>Amount (₹)</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Gross Annual CTC</td>
//                 <td>4,50,000</td>
//               </tr>
//               <tr>
//                 <td>Employee Provident Fund (EPF)</td>
//                 <td>-1,800/month</td>
//               </tr>
//               <tr>
//                 <td>Medical Insurance</td>
//                 <td>-2,000/month</td>
//               </tr>
//               <tr>
//                 <td>Other Deductions</td>
//                 <td>[Some Charge]</td>
//               </tr>
//               <tr>
//                 <td className="bold-text">Net In-Hand Salary</td>
//                 <td className="bold-text">₹30,500/month</td>
//               </tr>
//             </tbody>
//           </table>
          
//           <p className="mt-4">Please confirm your acceptance of this offer by signing below and returning a copy by **January 31, 2025**.</p>
          
//           <div className="signature-section">
//             <div>
//               <p className="bold-text">Human Resource Development</p>
//               <p>APPMARKED Private Limited</p>
//               <p>Website:- https://www.appmarked.com</p>
//             </div>
//             <img src={Stamp} alt="Company Stamp" className="company-stamp" />
//           </div>

//           <div className="acknowledgment-section">
//             <p className="bold-text">**Acknowledgment and Acceptance**</p>
//             <p>I, **Prashant**, have read, understood, and accept the terms and conditions of this offer. I confirm my joining on **January 30, 2025**.</p>
//             <p className="signature-line">**Signature:** ______________</p>
//             <p className="signature-line">**Date:** ______________</p>
//           </div>
          
//           <div className="print-button-container">
//             <Button onClick={handlePrint} variant="contained" color="primary">Print Offer Letter</Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default InternshipOfferLetter;