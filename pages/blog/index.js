import Head from "next/head";
import Link from "next/link";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Blog() {
    return (
        <div className="container">
            <Head>
                <title>Next.js Blog!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header title="Welcome to my blog!" />
                <p className="description">
                    Get started blogging!
                </p>
                <Link href="/">
                    <a>Go back home</a>
                </Link>
            </main>

            <Footer />
        </div>
    );
}
