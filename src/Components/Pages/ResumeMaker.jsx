import React, { useState, useEffect } from "react";
import Form from "../Form";
import Resume from "../../components/Resume";
import Preloader from "../Preloader";
import useFormHandlers from "../../components/Handler";
import "./ResumeMaker.css";

const ResumeMaker = () => {
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
      <div className="form-and-resume">
        <div className="form-wrapper">
          <Form
            formData={formData1}
            handleChange={handleChange1}
            handleArrayChange={handleArrayChange1}
            addSkill={addSkill1}
            addEducation={addEducation1}
            addCertificate={addCertificate1}
            addLanguage={addLanguage1}
            handleAddExperience={handleAddExperience1}
            handleNestedArrayChange={handleNestedArrayChange1}
            handleSubmit={handleSubmit1}
            handleDelete={handleDelete1}
          />
        </div>
        <div className="resume-wrapper">
          <Resume resumeData={formData1} />
        </div>
      </div>
    </>
  );
};
export default ResumeMaker;
