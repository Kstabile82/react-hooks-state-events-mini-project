import React from "react";
//event listener on button -- onClick: 
//- button clicked should have class of selected. 
//handleClick function: 
//- !All, tasks displayed should be filtered to match category
//- else, all tasks displayed
// if (category !== "ALL") {
//   return (<option value={category} key={category}>{category}</option>)
// }
function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
    <div className="categories">
      <button value={category} key={category} className={className} onClick={() => onSelectCategory(category)}>{category}</button>
    </div>
  );
    });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  )
}

export default CategoryFilter;
