import React, { Fragment, useState, useContext, useEffect } from "react";
import { Button, Card, Input, Form } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Picture from "../../../public/img/Lgo.png";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../Routes/AuthContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

const Sign = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const Email = "aakashdeep983@gmail.com";
  const Password = "Aakash@983";
  // const { authenticated, setAuthenticated } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const passReg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,16}$/;
  const [enableReset, setEnableReset] = useState(false);
  useEffect(() => {
    password.length > 0 && passReg.test(password) && emailReg.test(email)
      ? setEnableReset(true)
      : setEnableReset(false);
  }, [password, email]);

  const loginHandler = () => {
    if (email === Email && password === Password) {
      toast.success("Log Admin Successful !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
        // setAuthenticated(true);
        form.resetFields();
        navigate("/MainMenu", { replace: true });
      }, 3000);
    } else {
      toast.error("Invalid Credential !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  const handleReset = () => {
    form.resetFields();
  };
  const handleRedirect = () => {
    navigate("/register", { replace: true });
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
              Login for <img src={Picture} width="160px" height="auto" />
            </span>
          }
          style={{ width: 400, textAlign: "center" }}
        >
          <Form
            style={{ maxWidth: 400 }}
            form={form}
            name="login"
            layout="horizontal"
          >
            <Form.Item
              label={
                <span style={{ fontWeight: "bold", color: "black" }}>
                  <MailOutlined /> Email
                </span>
              }
              name="email_id"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                  type: "email",
                },
              ]}
            >
              <Input
                type="text"
                minLength={6}
                maxLength={64}
                placeholder="Enter Your Email ID"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
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
              <Input.Password
                placeholder="Enter your password"
                minLength={8}
                maxLength={16}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                onClick={loginHandler}
                disabled={!enableReset}
                block
              >
                Login
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
                New Registration - Register
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
      <ToastContainer />
      <Footer />
    </Fragment>
  );
};

export default Sign;
