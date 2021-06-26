import { GetServerSideProps } from "next";

export default (): JSX.Element => {
    console.log("page: component");
    return <p>getServerSideProps</p>;
};

export const getServerSideProps: GetServerSideProps = async () => {
    console.log("page: getServerSideProps");
    return { props: {} };
};
