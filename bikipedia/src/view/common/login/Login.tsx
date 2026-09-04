"use client";
import Image from "next/image";
import styles from "./login.module.scss";
import logo from "../../../../public/assets/img/logo.png";
import { Button, Form, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import AntdInput from "@/src/component/input/AntdInput";
import AntdPassword from "@/src/component/input/AntdPassword";
import AntdButton from "@/src/component/button/AntdButton";
import { authenticationAPI } from "@/src/api/authenticationAPI";
// import { authApi } from "@/apis/authApi";
export default function Login() {
  const LANDING = process.env.NEXT_PUBLIC_PRODUCTION_URL;
  const [loginModel, setLoginModel] = useState({});
  const [stateLogin, setStateLogin] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    setLoading(true);
    const login = await authenticationAPI.login(loginModel);
    if (!login) {
      setStateLogin(false);
      localStorage.removeItem("lg");
    } else {
      messageApi.success(
        "Đăng nhập thành công đang chuyển hướng......",
        1,
        () => {
          localStorage.setItem("lg", JSON.stringify(login));
          setStateLogin(true);
          window.location.href = LANDING as string;
        },
      );
    }
    setLoading(false);
  };

  const handleSetUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginModel({
      ...loginModel,
      email: e.target.value,
    });
  };
  const handleSetPass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginModel({
      ...loginModel,
      password: e.target.value,
    });
  };
  return (
    <>
      {contextHolder}
      <div className={styles.login}>
        <Image fill src="/assets/img/bg_1.jpg" alt="bg" priority />
        <div className={styles.loginForm}>
          <div
            className={styles.row}
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                height: "96px",
                width: "auto",
              }}
              priority
              src={logo}
              alt="logo"
            />
          </div>
          <div
            className={styles.row}
            style={{
              marginTop: "18px",
            }}
          >
            <Form
              onFinish={handleLogin}
              style={{
                width: "100%",
              }}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập username đăng nhập!",
                  },
                ]}
              >
                <AntdInput
                  autoComplete="off"
                  style={{
                    height: "48px",
                  }}
                  onChange={handleSetUserName}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu!",
                  },
                ]}
                style={{
                  marginBottom: "8px",
                }}
              >
                <AntdPassword
                  style={{
                    height: "48px",
                  }}
                  onChange={handleSetPass}
                  placeholder="Mật khẩu."
                />
              </Form.Item>
              <Form.Item
                style={{
                  marginBottom: "12px",
                }}
              >
                {!stateLogin && (
                  <p className={styles.loginError}>
                    Tên đăng nhập hoặc mật khẩu không đúng
                  </p>
                )}
                <Link href={"quen-mat-khau"}>Quên mật khẩu?</Link>
              </Form.Item>
              <Form.Item>
                <AntdButton
                  style={{
                    width: "100%",
                    height: "48px",
                    fontSize: "18px",
                  }}
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                >
                  Đăng nhập
                </AntdButton>
              </Form.Item>
            </Form>
          </div>
          <div className={styles.row}>
            <p>
              Chưa có tài khoản?{" "}
              <span className={styles.signIn}>
                <Link href={"register"}>Đăng ký</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
