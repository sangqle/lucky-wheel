import React from 'react';
import { Button, Input } from 'zmp-ui';
import 'zmp-ui/zaui.css';
import { login } from "zmp-sdk/apis";
import { getAppInfo } from "zmp-sdk/apis";
import { getUserInfo } from "zmp-sdk/apis";


const LoginPage = () => {


    getAppInfo({
        success: (data) => {
            // xử lý khi gọi api thành công
            const { name, version } = data;
        },
        fail: (error) => {
            // xử lý khi gọi api thất bại
            console.log(error);
        }
    });


    

    return (
        <div>
            <Button size="large">Hello</Button>
        </div>
    );
};

export default LoginPage;