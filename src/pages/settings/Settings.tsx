import { Button } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import UploadInput from '../../components/form/UploadInput';
import UserinfoForm from '../../components/form/UserinfoForm';
import HeaderBackButton from '../../components/sections/HeaderBackButton';
import { TabsWidget, Tab } from '../../components/sections/TabsWidget/TabsWidget';
import { useAppSelector } from '../../store/hooks';
import './Settings.scss';
import UserSettingsApi from '../../api/user/user-settings';
import { UserDataType, UserPasswordType } from '../../api/user/types';

const Settings = () => {
    const { activeTab } = useParams();
    const user = useAppSelector((state) => state.user);
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
        <main className="settings-page">
            <HeaderBackButton header="Settings" />
            <TabsWidget activeTab={activeTab || 'profile'}>
                <Tab header="Profile" url="profile">
                    <section className="avatar-upload-wrapper">
                        <div className="avatar-img-cont">
                            <img src={user.avatar} alt="avatar" />
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
                </Tab>
                <Tab header="Controls" url="controls">
                    [PLACEHOLDER]
                </Tab>
                <Tab header="Other" url="other">
                    [PLACEHOLDER-2]
                </Tab>
            </TabsWidget>
        </main>
    );
};

export default Settings;
