import { NextPage, NextPageContext } from "next";

/**
 *
pages/_error.tsxを作ると、SSR(Server Side Rendering)時やCSR(Client Side Rendering)時に例外が起きるなどした時やルーティングが存在しないエラーが発生した時に、そのページを表示してくれる
このページで400エラー、404エラー、500エラーをハンドリングして、自前のページを作成すれば良い
pages/_error.tsxはproduction環境時(next build -> next startした時)にしか使われないので注意。デバッグするときはnext buildをする必要がある
statusCode算出周りはハマりどころなので、自前でやったほうが良い場合がある
next/errorのgetInitialPropsではCSR時に例外が起きた時、err.statusCodeに何も入っていないという問題がある
参考
next/errorによるとstatusCodeには400、404、405、500が入ってくるようなので、エラーページではそれらに対応すれば良い
 */

// production時(next buildの成果物を使っている時)のエラー表示に使われる
// See Also: https://nextjs.org/docs/advanced-features/custom-error-page

type Props = {
    statusCode: number;
};
const Error: NextPage<Props> = ({ statusCode }) => {
    // ここでエラーページをちゃんと構築する。statusCodeが400の時BadRequest、
    // 404/405の時Not Found、500の問Internal Server Errorが出るように正しく処理すれば良いだろう
    return <div>{statusCode}エラーが発生しました</div>;
};

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
    // statusCodeを算出する。
    // - resが存在する時はSSRであり、res.statusCodeをそのまま利用すれば良い。
    // - resがない場合はCSRである。
    //   - err.statusCodeがあればそれをそのまま利用する
    //   - 意図しない例外が起きてerrがここに渡ってくる場合、単なるErrorオブジェクトが入っていてstatusCodeプロパティがない。errがある時点でISEなので500にする
    // See Also: https://nextjs.org/docs/advanced-features/custom-error-page
    const statusCode = res ? res.statusCode : err ? err.statusCode ?? 500 : 404;

    return { statusCode };
};

export default Error;
