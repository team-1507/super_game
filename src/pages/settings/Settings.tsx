import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderBackButton from '../../components/sections/HeaderBackButton';
import { TabsWidget, Tab } from '../../components/sections/TabsWidget/TabsWidget';
import './Settings.scss';
import ProfileTab from './ProfileTab';
import ThemeTab from './ThemeTab';

const Settings = () => {
    const { activeTab } = useParams();

    return (
        <main className="settings-page">
            <HeaderBackButton header="Settings" />
            <TabsWidget activeTab={activeTab || 'profile'}>
                <Tab header="Profile" url="profile">
                    <ProfileTab />
                </Tab>
                <Tab header="Theme" url="theme">
                    <ThemeTab />
                </Tab>
            </TabsWidget>
        </main>
    );
};

export default Settings;
