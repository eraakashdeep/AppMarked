import React, { useState, useEffect } from "react";
import Form2 from "../../components/Form2";
import Resume2 from "../Resume2";
import Preloader from "../Preloader";
import useFormHandlers2 from "../../components/Handler2";
import "./ResumeMaker.css";

const ResumeSecond = () => {
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);

  const {
    formData: formData2,
    handleChange: handleChange2,
    handleArrayChange: handleArrayChange2,
    handleNestedArrayChange: handleNestedArrayChange2,
    addSkill: addSkill2,
    addEducation: addEducation2,
    addCertificate: addCertificate2,
    addLanguage: addLanguage2,
    handleAddExperience: handleAddExperience2,
    handleDelete: handleDelete2,
    handleSubmit: handleSubmit2,
    handleFileChange: handleFileChange2,
  } = useFormHandlers2();

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
          <Form2
            formData={formData2}
            handleChange={handleChange2}
            handleArrayChange={handleArrayChange2}
            addSkill={addSkill2}
            addEducation={addEducation2}
            addCertificate={addCertificate2}
            addLanguage={addLanguage2}
            handleAddExperience={handleAddExperience2}
            handleNestedArrayChange={handleNestedArrayChange2}
            handleSubmit={handleSubmit2}
            handleDelete={handleDelete2}
            handleFileChange={handleFileChange2}
          />
        </div>
        <div className="resume-wrapper">
          <Resume2 resumeData={formData2} />
        </div>
      </div>
    </>
  );
};
export default ResumeSecond;
