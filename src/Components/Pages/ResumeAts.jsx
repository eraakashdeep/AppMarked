import React, { useState, useEffect } from "react";
import Preloader from "../Preloader";
import useFormHandlers from "../../components/Handler";
import ATSChecker from "../../components/ATSChecker";
import "./ResumeMaker.css";

const ResumeAts = () => {
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);

  const {
    formData: formData1,
    handleChange: handleChange1,
    handleArrayChange: handleArrayChange1,
    handleNestedArrayChange: handleNestedArrayChange1,
    addSkill: addSkill1,
    addEducation: addEducation1,
    addCertificate: addCertificate1,
    addLanguage: addLanguage1,
    handleAddExperience: handleAddExperience1,
    handleDelete: handleDelete1,
    handleSubmit: handleSubmit1,
  } = useFormHandlers();

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setLoading1(false);
    }, 2000);

    const timeout2 = setTimeout(() => {
      setLoading2(false);
    }, 2000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  if (loading1 || loading2) {
    return <Preloader />;
  }

  return (
    <>
      <div className="ats-checker-wrapper">
        <ATSChecker resumeText={formData1} />{" "}
      </div>
    </>
  );
};
export default ResumeAts;
