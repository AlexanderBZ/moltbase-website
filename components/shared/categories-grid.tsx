import { CategoryCard } from "@/components/shared/category-card";

export function CategoriesGrid({ categories }: { categories: models.ICategory[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {categories.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </div>
  );
}
