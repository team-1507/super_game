import React, {
    HTMLProps, createContext, useContext,
} from 'react';
import { Link } from 'react-router-dom';
import './TabsWidget.scss';

const ActiveTabWidgetContext = createContext('');

type TabProps = HTMLProps<HTMLElement> & {
    header: string,
    url: string,
};

export const Tab = (props: TabProps) => {
    const { header, children, url } = props;
    const activeTab = useContext(ActiveTabWidgetContext);
    const isActive = activeTab === url;
    const pathnameTrimmed = window.location.pathname.replace(/\/$/, '');
    const baseUrl = new RegExp(`${activeTab}[/]?$`).test(window.location.pathname)
        ? pathnameTrimmed.split('/').slice(1, -1).join('/')
        : pathnameTrimmed.replace(/^\//, '');
    return (
        <>
            <Link to={`/${baseUrl}/${url}`} className="tabs-widget-tab-header" data-active={isActive}>
                {header}
            </Link>
            <section className="tabs-widget-tab-content" data-active={isActive}>
                {children}
            </section>
        </>
    );
};

type TabsWidgetProps = HTMLProps<HTMLDivElement> & {
    children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[],
    activeTab: string,
};

export const TabsWidget = (props: TabsWidgetProps) => {
    const { children, activeTab } = props;
    return (
        <div className="tabs-widget">
            <ActiveTabWidgetContext.Provider value={activeTab}>
                {children}
            </ActiveTabWidgetContext.Provider>
        </div>
    );
};

export default { TabsWidget, Tab };
