import App from "next/app";
import type { AppProps, AppContext } from "next/app";
import withReduxSaga from "next-redux-saga";
import React, { ReactElement } from "react";
import { wrapper } from "../redux/store";

const WrappedApp = ({ Component, pageProps }: AppProps): ReactElement => {
    console.log("_app: component");
    return (
        <>
            <Component {...pageProps} />
        </>
    );
};

WrappedApp.getInitialProps = async (appContext: AppContext) => {
    console.log("_app: getInitialProps1");
    const appProps = await App.getInitialProps(appContext);
    console.log("_app: getInitialProps2");

    return { ...appProps };
};
export default wrapper.withRedux(withReduxSaga(WrappedApp));
