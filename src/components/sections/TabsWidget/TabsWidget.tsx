import React, {
    HTMLProps, PureComponent, createContext, useContext,
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
    const baseUrl = new RegExp(`${activeTab}[/]?$`).test(window.location.pathname)
        ? window.location.pathname.replace(/\/$/, '').split('/').slice(1, -1).join('/')
        : window.location.pathname.replace(/\/$/, '').replace(/^\//, '');
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

export class TabsWidget extends PureComponent<TabsWidgetProps> {
    render() {
        const { children, activeTab } = this.props;
        return (
            <div className="tabs-widget">
                <ActiveTabWidgetContext.Provider value={activeTab}>
                    {children}
                </ActiveTabWidgetContext.Provider>
            </div>
        );
    }
}

export default { TabsWidget, Tab };
