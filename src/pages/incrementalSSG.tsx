import { GetStaticProps } from "next";
import Link from "next/link";

type Props = {
    stars: number;
    buildTime: string;
};
export default ({ stars, buildTime }: { stars: number; buildTime: string }) => {
    console.log(`page: component ${new Date().toString()}`);
    return (
        <>
            <p>getStaticProps</p>
            <p>
                <Link href="/">
                    <a>Go Home</a>
                </Link>
            </p>
            <div>
                Build Time : ({buildTime}) , The number of Next stars: {stars}
            </div>
        </>
    );
};

// getStaticProps will be Executed when you build
export const getStaticProps: GetStaticProps<Props> = async () => {
    const res: Response = await fetch(
        "https://api.github.com/repos/zeit/next.js"
    );
    const json = await res.json();
    console.dir(json);
    const stars = json?.stargazers_count || 0;
    const buildTime = new Date().toString();
    return {
        props: {
            stars: stars,
            buildTime: buildTime,
        },
        revalidate: 30,
    };
};
