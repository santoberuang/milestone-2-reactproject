import React from "react";

interface CategoryProps {
  id: number;
  name: string;
  image: string;
}

interface CardProps {
  title: string;
  images: string;
  categories: CategoryProps[];
  filterByCategory: (categoryID: number) => void;
}

const CategoryContent: React.FC<CardProps> = ({
  categories,
  filterByCategory,
}) => {
  return (
    <div className="bg-black p-4 text-white pt-8 h-screen w-48 top-0 left-0 bottom-0 fixed margin-right-10 gap-4 align-middle align-center justify-center margin-top-30">
      <ul className="pt-2">
        <li
          onClick={() => filterByCategory(0)}
          className="bg-black p-4 text-white flex items-center gap-x-4 cursor-pointer hover:bg-gray-200"
        >
          All Categories
        </li>
        {categories.map((category: CategoryProps) => (
          <li
            key={category.id}
            onClick={() => filterByCategory(category.id)}
            className="bg-black p-4 text-white flex items-center gap-x-4 cursor-pointer hover:bg-gray-200"
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryContent;
