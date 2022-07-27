import { Button } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import UploadInput from '../../components/form/UploadInput';
import UserinfoForm from '../../components/form/UserinfoForm';
import HeaderBackButton from '../../components/sections/HeaderBackButton';
import { TabsWidget, Tab } from '../../components/sections/TabsWidget/TabsWidget';
import { useAppSelector } from '../../store/hooks';
import './Settings.scss';

const Settings = () => {
    const { activeTab } = useParams();
    const user = useAppSelector(state => state);
    return (
        <main className="settings-page">
            <HeaderBackButton header="Settings" />
            <TabsWidget activeTab={activeTab || 'profile'}>
                <Tab header="Profile" url="profile">
                    <section className="avatar-upload-wrapper">
                        <div className="avatar-img-cont">
                            <img src={user.avatar} alt="avatar" />
                        </div>
                        <form action="/" method="post" className="avatar-buttons-form">
                            <UploadInput label="Upload" />
                            <br />
                            <Button htmlType="submit" type="primary">
                                Delete
                            </Button>
                        </form>
                    </section>
                    <section className="login-password-forms-wrapper">
                        <div className="col-left">
                            <UserinfoForm formInputs={['login', 'email', 'submit']} submitTitle="Save changes" user={user} />
                        </div>
                        <div className="col-right">
                            <UserinfoForm formInputs={['password', 'confirmPassword', 'submit']} submitTitle="Change password" />
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
