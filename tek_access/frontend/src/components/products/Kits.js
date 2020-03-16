import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getKits } from '../../actions/products'
import Categories from './Categories';
import Footer from '../footer/Footer';
import '../../assets/scss/products.scss';

export class Kits extends Component
{
    componentDidMount()
    {
        const { getKits } = this.props;
        getKits();
    }
    render()
    {
        const { products, loading } = this.props;
        return (
            <div className='FoodnBeverages'>
                <Categories />
                {loading ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
                            <span className="sr-only">LOADING...</span>
                        </div>
                    </div>
                ) : (
                        <section className="sec222">
                            {products.lenght !== 0 ? (
                                products.map(product =>
                                    (

                                        <div className="container">
                                            <div className="shop col-sm-12">
                                                <div className="product col-sm-3">
                                                    <Link to={`/kit/${product.id}`}><img src={product.image} /></Link>
                                                    <div className="details">
                                                        <p className="name">{product.product_name}</p>
                                                        <p className="price">{product.product_category}</p>
                                                        <Link to={`/kit/${product.id}`} className="btn-orange">View More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                            ) : (
                                    <div className="d-flex align-items-center">
                                        <h2>
                                            Sorry No Products Found At The Moment.
                                        <br />
                                            Please Contact your administrator!!!
                                        </h2>
                                    </div>
                                )}
                        </section>
                    )}
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.productsReducer.products,
    loading: state.productsReducer.loading
})

export default connect(mapStateToProps, { getKits })(Kits);
