import Layout from '../components/myLayout';
import Link from 'next/link';

const PostLink = props => (
    <li>
      <Link href='/p/[id]' as={`/p/${props.id}`}>
        <a>{props.id}</a>
      </Link>  
    </li>
  );
  
  export default function Blog(){
    return(
      <Layout>
        <h1>My Blog</h1>
        <ul>
          <PostLink id="Hello Next.js"></PostLink>
          <PostLink id="Learning Next.js is awesome"></PostLink>
          <PostLink id="Deploy Next.js"></PostLink>
        </ul>
      </Layout>
    )
  };