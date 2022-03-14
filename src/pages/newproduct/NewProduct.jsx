import "./NewProduct.css";

const NewProduct = () => {
  return (
    <div className="newproduct">
      <h1 className="newproduct__title">New Product</h1>
      <form className="newproduct__form">
        <div className="newproduct__item">
          <label>Image</label>
          <input type="file" placeholder="No file chosen" />
        </div>
        <div className="newproduct__item">
          <label>Name</label>
          <input type="text" placeholder="Phone" />
        </div>
        <div className="newproduct__item">
          <label>Stock</label>
          <input type="number" placeholder="1" />
        </div>
        <div className="newproduct__item">
          <label>Active</label>
          <select name="active" id="active" className="newproduct__select">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newproduct__item">
          <button className="newproduct-button">Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
