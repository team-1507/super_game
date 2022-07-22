import React from 'react';
import { useParams } from 'react-router-dom';
import FormButton from '../../components/form/FormButton';
import TextInput from '../../components/form/TextInput';
import UploadInput from '../../components/form/UploadInput';
import EnterKey from '../../components/icons/EnterKey';
import HeaderBackButton from '../../components/sections/HeaderBackButton';
import { TabsWidget, Tab } from '../../components/sections/TabsWidget/TabsWidget';
import './Settings.scss';

const Settings = () => {
    const { activeTab } = useParams();
    return (
        <main className="settings-page">
            <HeaderBackButton />
            <TabsWidget activeTab={activeTab || 'profile'}>
                <Tab header="Profile" url="profile">
                    <section className="avatar-upload-wrapper">
                        <div className="avatar-img-cont">
                            <img src="https://i.pravatar.cc/300" alt="avatar" />
                        </div>
                        <form action="/" method="post" className="avatar-buttons-form">
                            <UploadInput label="Upload" />
                            <br />
                            <FormButton type="button" className="delete-avatar-button">
                                Delete
                            </FormButton>
                        </form>
                    </section>
                    <section className="login-password-forms-wrapper">
                        <div className="col-left">
                            <form action="/" method="post">
                                <TextInput name="login" label="Login" />
                                <TextInput name="email" label="E-mail" />
                                <FormButton type="submit">
                                    Save
                                    <EnterKey />
                                </FormButton>
                            </form>
                        </div>
                        <div className="col-right">
                            <TextInput name="password" type="password" label="Password" />
                            <TextInput name="password-repeat" type="password" label="Password (one more time)" />
                            <FormButton type="submit">
                                Change password
                                <EnterKey />
                            </FormButton>
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
