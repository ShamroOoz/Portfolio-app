import Head from "next/head";
import { useRouter } from "next/router";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Home | WebDev Portfolio",
  description: "Awesome WebDev Portfolio built with NEXTJS",
  keywords: "dev,jobs, Frontend, Full-Stack, portfolio",
};
