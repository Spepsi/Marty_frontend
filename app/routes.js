// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '',
      name: 'photoPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/PhotoPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'info',
      name: 'infoPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/InfoPage/reducer'),
          import('containers/InfoPage/sagas'),
          import('containers/InfoPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('infoPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'history',
      name: 'historyPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HistoryPage/reducer'),
          import('containers/HistoryPage/sagas'),
          import('containers/HistoryPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('historyPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'reco',
      name: 'recoPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/RecoPage/reducer'),
          import('containers/RecoPage/sagas'),
          import('containers/RecoPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('recoPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/',
      name: 'photoPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/PhotoPage/reducer'),
          import('containers/PhotoPage/sagas'),
          import('containers/PhotoPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('photoPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
