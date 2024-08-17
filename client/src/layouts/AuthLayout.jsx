import {Outlet} from "react-router-dom";

const AuthLayout = () => {
    return (
        <>
            <div className="authentication-wrapper authentication-cover authentication-bg">
                <div className="authentication-inner row">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}
export default AuthLayout;