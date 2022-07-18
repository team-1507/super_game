import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderBackButton from '../../components/sections/header-back-button';
import { TabsWidget, Tab } from '../../components/sections/TabsWidget/TabsWidget';
import './Settings.scss';

const Settings = () => {
    const { activeTab } = useParams();
    return (
        <main className="settings-page">
            <HeaderBackButton />
            <TabsWidget activeTab={activeTab || 'profile'}>
                <Tab header="Profile" url="profile">
                    PROFILE_CONTENT
                </Tab>
                <Tab header="Controls" url="controls">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio corrupti aut
                    , distinctio corporis cumque aliquid sint facere nobis fugiat quisqua
                    m officia eligendi voluptas architecto officiis dignissimos iure molest
                    iae a eaque.
                </Tab>
                <Tab header="Other" url="other">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio corrupti aut
                    , distinctio corporis cumque aliquid sint facere nobis fugiat quisqua
                    m officia eligendi voluptas architecto officiis dignissimos iure molest
                    iae a eaque.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio corrupti aut
                    , distinctio corporis cumque aliquid sint facere nobis fugiat quisqua
                    m officia eligendi voluptas architecto officiis dignissimos iure molest
                    iae a eaque.
                </Tab>
            </TabsWidget>
        </main>
    );
};

export default Settings;
