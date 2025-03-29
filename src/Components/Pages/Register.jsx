import React, { Fragment, useState } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Modal,
  Radio,
  Checkbox,
} from "antd";
import { useNavigate } from "react-router-dom";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  WhatsAppOutlined,
  EnvironmentOutlined,
  UserAddOutlined,
  CheckCircleOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import dayjs from "dayjs";
import Picture from "../../../public/img/Lgo.png";

const { Option } = Select;
const coursesList = [
  " Process Management ",
  " Business Analysis ",
  "MOBILE APPLICATION (IOS AND ANDROID)",
  "WEB APPLICATION ",
  "PRODUCT TESTING",
  " TEST PLANNING",
  " TEST REPORTING",
  "MANUAL ",
  "Business Process Specialist",
  "Business Analyst",
  "Data Analysis",
  "Business Analysis",
  "Business Processes Management",
  "Collections Recovery Management",
  "Customer Correction Analysis",
  "SQL",
  "SAS",
  "Business Objects",
  "Cognos",
  "Pentaho",
  "Qlikview",
  "QA Testing",
  "Fusion Middleware dba ",
  " Weblogic ",
  " MySQL dba  ",
  " Oracle DBA ",
  " MS SQL Server dba",
  "VB.NET",
  " C#.NET",
  " Web Services",
  " SQL Server",
  "Core Java ",
  "Service virtualization",
  " Selenium",
  " Automation Testing",
  "ASP.NET 4.0",
  "ASP.Net 3.5",
  " ASP.NET 2.0",
  " C#",
  " VB.NET",
  " XML",
  " ADO.NET",
  " SQL Server",
  " Linq to SQL",
  " SSIS",
  "Oracle DBA",
  " RMAN",
  " Oracle Golden Gate",
  " Oracle 11g RAC",
  " Data guard",
  " ASM",
  " shell scripting",
  " Ptuning",
  "Node js",
  "Angular",
  "Python",
  "Java",
  "Javascript",
  "jQuery",
  "bootstrap",
  "Manual Testing",
  " regression testing",
  " retesting",
  " sanity testing",
  " GUI testing",
  " Bugzilla",
  " JIRA",
  " QC",
  "Core JAVA",
  " ADVANCE JAVA",
  "ORACLE 11g",
  "AWS",
  "react",
  "java",
  "node",
];
const Register = () => {
  const [form] = Form.useForm();
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [qualification, setQualification] = useState("");
  const totalExperience = years * 365 + months * 30;
  const currentYear = dayjs().year();
  const [val, setVal] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onFinish = (values) => {
    const formattedDob = values.dob
      ? dayjs(values.dob).format("YYYY-MM-DD")
      : "";
    const formattedPassoutYear = values.passoutYear
      ? dayjs(values.passoutYear).format("YYYY")
      : "";
    const payload = {
      ...values,
      dob: formattedDob,
      passoutYear: formattedPassoutYear,
      experience: totalExperience,
    };
    // setVal(values);
    console.log("Payload: ", payload);
    // form.resetFields();
    // setYears(0);
    // setMonths(0);
    // setIsModalVisible(true);
    fetch(
      "https://script.google.com/u/0/home/projects/1DT8YxAzHnDVIHVJ_w2KysvoKOKq_EGp4HFgUemuIqm0QtXFloDWDyLxc/edit",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVal(values);
        form.resetFields();
        setYears(0);
        setMonths(0);
        setIsModalVisible(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleReset = () => {
    form.resetFields();
    setYears(0);
    setMonths(0);
  };
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/signin", { replace: true });
  };

  return (
    <Fragment>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          marginTop: "30px",
        }}
      >
        <Card
          title={
            <span>
              Register for <img src={Picture} width="160px" height="auto" />
            </span>
          }
          style={{ width: 600, textAlign: "center" }}
        >
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            layout="horizontal"
          >
            <Form.Item
              label={
                <span style={{ fontWeight: "bold", color: "black" }}>
                  <UserOutlined /> Username
                </span>
              }
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              label={
                <span style={{ fontWeight: "bold", color: "black" }}>
                  <MailOutlined /> Email
                </span>
              }
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              label={
                <span style={{ fontWeight: "bold", color: "black" }}>
                  <LockOutlined /> Password
                </span>
              }
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item
              label={
                <span style={{ fontWeight: "bold", color: "black" }}>
                  <UserAddOutlined /> FullName
                </span>
              }
              name="fullname"
              rules={[
                { required: true, message: "Please input your full name!" },
              ]}
            >
              <Input placeholder="Full Name" />
            </Form.Item>
            <Form.Item
              name="dob"
              label={
                <span style={{ fontWeight: "bold", color: "black" }}>
                  <UserAddOutlined /> Date of Birth
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "Please select your date of birth!",
                },
              ]}
            >
              <DatePicker
                style={{ width: "100%" }}
                placeholder="Select Date"
                disabledDate={(current) => current && current > new Date()}
              />
            </Form.Item>
            <Form.Item
              label={
                <span style={{ fontWeight: "bold", color: "black" }}>
                  {" "}
                  <UserAddOutlined /> Gender
                </span>
              }
              name="gender"
              rules={[
                { required: true, message: "Please select your gender!" },
              ]}
            >
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="other">Other</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label={
                <span style={{ fontWeight: "bold", color: "black" }}>
                  <WhatsAppOutlined /> Contact Number
                </span>
              }
              name="contact"
              rules={[
                {
                  required: true,
                  message: "Please input your contact number!",
                },
                {
                  validator: (_, value) => {
                    const numericPart = value.replace(/\D/g, "");
                    if (numericPart.length >= 10 && numericPart.length <= 15) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Enter a valid 10-digit contact number!")
                    );
                  },
                },
              ]}
            >
              <PhoneInput
                country={"in"}
                onlyCountries={["us", "in", "gb", "au", "ca"]}
                onChange={(value) => form.setFieldsValue({ contact: value })}
                inputStyle={{ width: "100%" }}
              />
            </Form.Item>

            <Form.Item
              label={
                <span style={{ fontWeight: "bold", color: "black" }}>
                  <EnvironmentOutlined /> Full Address
                </span>
              }
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your address!",
                  type: "text",
                },
              ]}
            >
              <Input placeholder="Full Address" />
            </Form.Item>

            <Form.Item
              label={
                <span style={{ fontWeight: "bold", color: "black" }}>
                  Qualification
                </span>
              }
              name="qualification"
              rules={[
                {
                  required: true,
                  message: "Please input your qualification!",
                  type: "text",
                },
              ]}
            >
              <Select
                placeholder="Select Qualification"
                onChange={setQualification}
              >
                <Option value="btech">B.Tech</Option>
                <Option value="mtech">M.Tech</Option>
                <Option value="phd">PhD</Option>
                <Option value="bachelor">Bachelor's Degree</Option>
                <Option value="master">Master's Degree</Option>
                <Option value="bba">BBA</Option>
                <Option value="mba">MBA</Option>
                <Option value="bsc">B.Sc</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
            {qualification === "other" && (
              <Form.Item style={{ width: 250 }} name="otherQualification">
                <Input placeholder="Enter your other qualification" />
              </Form.Item>
            )}
            <Form.Item
              label={
                <span style={{ fontWeight: "bold", color: "black" }}>
                  Passout Year
                </span>
              }
              name="passoutYear"
              rules={[
                {
                  required: true,
                  message: "Please input your passout!",
                },
              ]}
            >
              <DatePicker
                style={{ width: "100%" }}
                picker="year"
                placeholder="Select Year"
                disabledDate={(current) =>
                  current && current.year() > currentYear + 5
                }
              />
            </Form.Item>

            <Form.Item
              label={
                <span style={{ fontWeight: "bold", color: "black" }}>
                  Total Experience
                </span>
              }
              name="experience"
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <Select
                  value={years}
                  onChange={setYears}
                  style={{ width: 100 }}
                >
                  {[...Array(11).keys()].map((year) => (
                    <Option key={year} value={year}>
                      {year} {year === 1 ? "year" : "years"}
                    </Option>
                  ))}
                </Select>
                <Select
                  value={months}
                  onChange={setMonths}
                  style={{ width: 100 }}
                >
                  {[...Array(13).keys()].map((month) => (
                    <Option key={month} value={month}>
                      {month} {month === 1 ? "month" : "months"}
                    </Option>
                  ))}
                </Select>
                <Input
                  value={totalExperience}
                  readOnly
                  style={{ width: 80 }}
                  placeholder="Total Experience"
                />
              </div>
            </Form.Item>
            <Form.Item
              label={
                <span style={{ fontWeight: "bold", color: "black" }}>
                  Interested Area's
                </span>
              }
              name="courses"
            >
              <Checkbox.Group options={coursesList} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Register
              </Button>
              <Button style={{ marginTop: 10 }} onClick={handleReset} block>
                Reset
              </Button>
              <Button
                style={{ marginTop: 10 }}
                type="link"
                onClick={handleRedirect}
                block
              >
                <ArrowLeftOutlined />
                &nbsp; Login - Already User
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <Modal
          title={
            <>
              <CheckCircleOutlined style={{ color: "green" }} /> Registration
              Successful
            </>
          }
          visible={isModalVisible}
          onOk={() => setIsModalVisible(false)}
          onCancel={() => setIsModalVisible(false)}
        >
          <p>Welcome, {val.fullname}.</p>
          <p>Thank You for choosen the APPMARKED. </p>
        </Modal>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Register;
