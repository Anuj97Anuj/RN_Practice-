import React, { useRef, useState, useReducer } from "react";
import { FormReducer, INITIAL_STATE } from "./FormReducer";

const Form = () => {
  /*
  // USING USESTATE
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    price: 0,
    category: "",
    tags: [],
    images: {
      sm: "",
      md: "",
      lg: "",
    },
    quantity: 0,
  });

  const handleChange = (e) => {
    setProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const tagRef = useRef(null);

  const handleTags = (e) => {
    const tags = tagRef.current.value.split(",");
    tags.forEach((tag) => {
      setProduct((prev) => ({
        ...prev,
        tags: [...prev.tags, tag],
      }));
    });

    const handleRemoveTag = (tag) => {
      setProduct((prev) => ({
        ...prev,
        tags: prev.tags.filter((t) => t !== tag),
      }));
    };

    const handleIncrease = () => {
      setProduct((prev) => ({
        ...prev,
        quantity: prev.quantity + 1,
      }));
    };

    const handleDecrease = () => {
      product.quantity > 0 &&
        setProduct((prev) => ({
          ...prev,
          quantity: prev.quantity - 1,
        }));
    };

    const uploading = () => {};

    const handleImage = (e) => {
      const res = uploading;
      setProduct((prev) => ({
        ...prev,
        images: {
          sm: res.sm,
          md: res.md,
          lg: res.lg,
        },
      }));
    };
    return (
      // USING USESTATE

      <div>
        <form>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="desc"
            onChange={handleChange}
            placeholder="Desc"
          />
          <input
            type="number"
            name="price"
            onChange={handleChange}
            placeholder="Price"
          />
          <p>Category:</p>
          <select name="category" id="category" onChange={handleChange}>
            <option value="sneakers">Sneakers</option>
            <option value="tshirts">T-shirts</option>
            <option value="jeans">Jeans</option>
          </select>
          <p>Tags:</p>
          <textarea
            ref={tagRef}
            placeholder="Seperate tags with commas..."
          ></textarea>
          <button type="button" onClick={handleTags}>
            Add Tags
          </button>
          <div className="tags">
            {product.tags.map((tag) => (
              <small key={tag} onClick={() => handleRemoveTag(tag)}>
                {tag}
              </small>
            ))}
          </div>
          <div className="quantity">
            <button type="button" onClick={handleDecrease}>
              -
            </button>
            <span>Quantity ({product.quantity})</span>
            <button type="button" onClick={handleIncrease}>
              +
            </button>
          </div>
        </form>
      </div>
    );
  };
  */

  const [state, dispatch] = useReducer(FormReducer, INITIAL_STATE);
  const tagRef = useRef();
  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    tags.forEach((tag) => {
      dispatch({
        type: "ADD_TAG",
        payload: {
          name: tag,
        },
      });
    });
  };

  console.log(state);
  return (
    <div>
      <form>
        <input
          type="text"
          name="desc"
          placeholder="Desc"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <p>Category:</p>
        <select name="category" id="category" onChange={handleChange}>
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-shirts</option>
          <option value="jeans">Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea
          placeholder="Seperate tags with commas..."
          ref={tagRef}
        ></textarea>
        <button onClick={handleTags} type="button">
          Add Tags
        </button>
        <div className="tags">
          {state.tags.map((tag) => (
            <small
              onClick={() => dispatch({ type: "REMOVE_TAG", payload: tag })}
              key={tag}
            >
              {tag}
            </small>
          ))}
        </div>
        <div className="quantity">
          <button type="button" onClick={() => dispatch({ type: "DECREASE" })}>
            -
          </button>
          <span>Quantity ({state.quantity})</span>
          <button type="button" onClick={() => dispatch({ type: "INCREASE" })}>
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
