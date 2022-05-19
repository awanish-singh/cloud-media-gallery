import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import SignUp from "../components/auth/signup";

const SignUpPage = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/", { replace: true });
    }
  });
  return <SignUp />;
};

export default SignUpPage;
