import React, {
    HTMLProps, PureComponent, createContext, useContext,
} from 'react';

const ActiveTabWidgetContext = createContext('');

type TabProps = HTMLProps<HTMLElement> & {
    header: string,
    url: string,
};

export const Tab = (props: TabProps) => {
    const { header, children, url } = props;
    const active = useContext(ActiveTabWidgetContext) === url;
    return (
        <>
            <header className="tabs-widget-tab-header" data-active={active}>
                {header}
            </header>
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
