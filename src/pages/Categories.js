import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addaCategory } from '../redux/categories/categories';
import '../styles/Categories.css';

function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(addaCategory());
  };
  return (
    <div className="categories-section">
      <p>{categories}</p>
      <button type="button" onClick={onClickHandler}>CHECK STATUS</button>
    </div>
  );
}

export default Categories;
