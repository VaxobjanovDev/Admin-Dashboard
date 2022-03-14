import { BsUpload } from "react-icons/bs";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummy";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product__title-container">
        <h1 className="product__title-title">Product</h1>
        <Link to="/newproduct">
          <button className="product-button">Create</button>
        </Link>
      </div>
      <div className="product__top">
        <div className="product-left">
          <Chart data={productData} dataKey="Sales" title="Sales Info" />
        </div>
        <div className="product-right">
          <div className="product__top-top-info">
            <img
              className="product-image"
              src="https://www.randomlists.com/img/things/cell_phone.webp"
              alt="Product"
            />
            <span className="product-name">Phone</span>
          </div>
          <div className="product__top-bottom-info">
            <div className="product-info-item">
              <span className="product-info-key">Id: </span>
              <span className="product-info-value">51</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Sales: </span>
              <span className="product-info-value">51</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Avtive: </span>
              <span className="product-info-value">Yes</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">In Stock: </span>
              <span className="product-info-value">No </span>
            </div>
          </div>
        </div>
      </div>
      <div className="product__bottom">
        <form className="product-form">
          <div className="product-form-left">
            <label>Product Name</label>
            <input type="text" placeholder="Phone" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product-form-right">
            <div className="product-upload">
              <img
                className="product-upload-image"
                src="https://www.randomlists.com/img/things/cell_phone.webp"
                alt="Product"
              />
              <label for="file" className="upload">
                <BsUpload />
              </label>
              <input type="file" id="file" className="upload-input" />
            </div>
            <button className="update-item-button">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
