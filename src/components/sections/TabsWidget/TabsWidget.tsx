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
    const active = useContext(ActiveTabWidgetContext) === url;
    const baseUrl = window.location.pathname.split('/').slice(1, -1).join('/');
    return (
        <>
            <Link to={`/${baseUrl}/${url}`} className="tabs-widget-tab-header" data-active={active}>
                {header}
            </Link>
            <section className="tabs-widget-tab-content" data-active={active}>
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
