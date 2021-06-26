const GetInitialPropsPage = () => {
    console.log("page: component");
    return <p>getInitialProps</p>;
};

GetInitialPropsPage.getInitialProps = async () => {
    console.log("page: getInitialProps");
    return {};
};

export default GetInitialPropsPage;
