import { IThemeManager } from '@jupyterlab/apputils';
/**
 * Initialization data for the purpletheme extension.
 */
const plugin = {
    id: 'purpletheme:plugin',
    autoStart: true,
    requires: [IThemeManager],
    activate: (app, manager) => {
        console.log('JupyterLab extension purpletheme is activated!');
        const style = 'purpletheme/index.css';
        manager.register({
            name: 'purpletheme',
            isLight: true,
            load: () => manager.loadCSS(style),
            unload: () => Promise.resolve(undefined)
        });
    }
};
export default plugin;
//# sourceMappingURL=index.js.map