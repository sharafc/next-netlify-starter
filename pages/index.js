import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push("/pokemon/pikachu");
    };

    return (
        <div className="container">
            <Head>
                <title>Next.js Starter!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header title="Welcome to my app!" />
                <p className="description">
                    Get started by editing <code>pages/index.js</code>
                </p>
                <button onClick={handleClick}>
                    Click me if you like Pokemon!
                </button>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
            </main>

            <Footer />
        </div>
    );
}
