import React, { Component } from 'react'
import { connect } from 'react-redux';
import Footer from '../footer/Footer';
import Categories from './Categories';
import { getSingleProduct } from '../../actions/products';

export class SingleProduct extends Component
{
    componentDidMount()
    {
        const { getSingleProduct } = this.props;
        const { id } = this.props.match.params;
        getSingleProduct(id);

    }
    render()
    {
        const { product } = this.props;
        return (
            <div className="N95Masks">
                <Categories />
                <section className="sec333">
                    <div className="container">
                        <div className="content col-sm-12">
                            <h1>{product.product_name}</h1>
                            <div className="img-holder col-sm-6">
                                <img className="col-sm-12" src={product.image} />
                            </div>
                            <div className="paragraph col-sm-6">
                                <h2>Description</h2>
                                <p>{product.description}
                                    <a href="/homepage#contact" className="btn-orange">Contact Us</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    product: state.productReducer.product
})

export default connect(mapStateToProps, { getSingleProduct })(SingleProduct)
