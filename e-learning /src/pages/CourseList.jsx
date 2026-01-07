import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();

  const title = category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div style={{ padding: "120px 40px" }}>
      <h1>{title}</h1>
      <p>
        Courses and learning paths related to <strong>{title}</strong> will appear
        here.
      </p>
    </div>
  );
};

export default CategoryPage;
