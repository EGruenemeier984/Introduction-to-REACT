import { useRouter } from "next/router";
import Layout from "../components/myLayout";

const Page = () => {
    const router = useRouter();
    return(
        <Layout>
            <h1>{router.query.title}</h1>
            <p>This is the blog post content </p> 
        </Layout>
    );
}

export default Page;