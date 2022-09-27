import React from 'react';
import { Button } from 'antd';
import { UserDataType, UserPasswordType } from 'src/api/user/types';
import UploadInput from 'src/components/form/UploadInput';
import UserinfoForm from 'src/components/form/UserinfoForm';
import { getAvatar } from 'src/store/helpers';
import { useAppSelector } from 'src/store/hooks';
import UserSettingsApi from '../../api/user/user-settings';

const ProfileTab = () => {
    const { data: user } = useAppSelector((state) => state.user);
    const avatar = getAvatar(user.avatar);
    const changeUserFn = UserSettingsApi.changeUser;
    const changePasswordFn = UserSettingsApi.changePassword;
    const valuesToSendUser: UserDataType = {
        first_name: 'Иван',
        second_name: 'Дачный',
        display_name: '',
        login: '',
        email: '',
        phone: '89999999999',
    };
    const valuesToSendPassword: UserPasswordType = {
        oldPassword: '',
        newPassword: '',
    };
    return (
        <>
            <section className="avatar-upload-wrapper">
                <div className="avatar-img-cont">
                    <img src={avatar} alt="avatar" />
                </div>
                <form className="avatar-buttons-form">
                    <UploadInput label="Upload" name="avatar" />
                    <br />
                    <Button htmlType="submit" type="primary">
                        Delete
                    </Button>
                </form>
            </section>
            <section className="login-password-forms-wrapper">
                <div className="col-left">
                    <UserinfoForm
                        formInputs={['login', 'email', 'submit']}
                        submitTitle="Save changes"
                        valuesToSend={valuesToSendUser}
                        user={user}
                        callbackFn={changeUserFn}
                    />
                </div>
                <div className="col-right">
                    <UserinfoForm
                        formInputs={['oldPassword', 'newPassword', 'submit']}
                        submitTitle="Change password"
                        valuesToSend={valuesToSendPassword}
                        callbackFn={changePasswordFn}
                    />
                </div>
            </section>
        </>
    );
};

export default ProfileTab;
