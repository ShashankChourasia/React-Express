import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const BlogHighlighter = ({ description }) => {
  return <SyntaxHighlighter style={a11yLight}>{description}</SyntaxHighlighter>;
};

export default BlogHighlighter;
