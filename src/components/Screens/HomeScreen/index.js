import '../../../scss/Screens/HomeScreen.scss'
import TopHeader from '../TopHeader'
import Tabs from '../../Reusable/Tabs'
import { searchSelector } from '../../../redux/selectors/screensSelectors';
import { updateProductDetail, updateScreen, updateSearch } from '../../../redux/actions/screensActions';
import { connect } from 'react-redux';
import UserInput from './UserInput';
import { useEffect, useRef } from 'react';
import confettiIcon from '../../../imageSources/confettiicon.png';
import liquidBlush from '../../../imageSources/liquidblush.png';
import selena from '../../../imageSources/selena.png';
import liquidBlushSwatches from '../../../imageSources/liquidblushswatches.png';
import {RETAILER_DETAILS_SCREEN} from '../../../redux/constants/screensConstants';

const HomeScreen = ({
    search,
    updateSearch,
    updateScreen,
    updateProductDetail,
}) => {
    return (
        <div className='home-screen-container'>
            <div className='home-screen-scroll'>
                <TopHeader/>
                <HomeContent
                    search={search}
                    updateSearch={updateSearch}
                    updateScreen={updateScreen}
                    updateProductDetail={updateProductDetail}
                />
            </div>
            <Tabs/>
        </div>
    );
};


// AS long as the value is not: null, undefined, 0, or empty string ('', "")

const HomeContent = ({
    search,
    updateSearch,
    updateScreen,
    updateProductDetail,
}) => {
    const productDetails = [
        {
            brand: 'Rare Beauty',
            name: 'Soft Pinch Liquid Blush',
            images: [
                liquidBlush,
                selena,
                liquidBlushSwatches,
            ],
            price: 21,
        },
        {
            brand: 'Rare Beauty',
            name: 'Soft Pinch Liquid Blush',
            images: [
                liquidBlush,
                selena,
                liquidBlushSwatches,
            ],
            price: 19,
            lowestPrice: true
        },
        {
            brand: 'Rare Beauty',
            name: 'Soft Pinch Liqu]id Blush',
            images: [
                liquidBlush,
                selena,
                liquidBlushSwatches,
            ],
            price: 22,
        },
        {
            brand: 'Rare Beauty',
            name: 'Soft Pinch Liquid Blush',
            images: [
                'https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Liquid-Blush-Matte-BLISS-SKU.jpg?v=1639020840',
            ],
            price: 20,
        },
    ];

    return ( //parentheses are only used for react for returns
        <div>
            <div className='welcome-caption'>
                Welcome Back
            </div>
            <UserInput text='Search'
                value={search}
                action={(ref) => updateSearch(ref.target.value)}
                type='text'
            />
            <div className='product-section-title'>
                Most Popular
            </div>
            <div className='product-container'>
                {productDetails.map((productDetail, index) => (
                    <ProductDetails
                        key={index}
                        productDetail={productDetail}
                        updateScreen={updateScreen}
                        updateProductDetail={updateProductDetail}
                    />
                ))}
            </div>
            <div className='product-section-title'>
                Recently Viewed
            </div>
            <div className='product-container'>
                {productDetails.map((productDetail, index) => (
                    <ProductDetails
                        key={index}
                        productDetail={productDetail}
                        updateScreen={updateScreen}
                        updateProductDetail={updateProductDetail}
                    />
                ))}
            </div>
            <div className='product-section-title'>
                New Arrivals
            </div>
            <div className='product-container'>
                {productDetails.map((productDetail, index) => (
                    <ProductDetails
                        key={index}
                        productDetail={productDetail}
                        updateScreen={updateScreen}
                        updateProductDetail={updateProductDetail}
                    />
                ))}
            </div>
        </div>
    );
};

const ProductDetails = ({
    productDetail,
    updateScreen,
    updateProductDetail,
}) => {
    const widthRef = useRef();
    const { brand, name, images, price, lowestPrice } = productDetail;

    useEffect(() => {
        if (widthRef.current) {
            widthRef.current.width = widthRef.current.height * 0.3;
        }
    }, [widthRef]);

    // = -> setting a value
    // == -> lazily checking the conditions: 123 == '123' -> true
    // === -> checking the conditions with types: 123 === '123' -> false
    

    return (
        <div className='product-details-container' 
            onClick={() => {
                updateScreen(RETAILER_DETAILS_SCREEN);
                updateProductDetail(productDetail);
            }}
        >
            {lowestPrice === true && (
                <div className='confetti-icon-container'>
                    <img
                        style={{
                            height: '100%',
                            width: '100%',
                        }}
                        src= {confettiIcon}/>
                </div>
            )}
            <img src={images[0]}
                className='product-detail-image'
                ref={widthRef}
            />
            <div className='product-description-container'>
                <div className='brand-container'>
                    {brand}
                </div>
                <div>
                    {name}
                </div>
                <div className='price-container'
                    style={{
                        color: lowestPrice
                            ? 'red'
                            : 'black' 
                    }}
                >
                    ${price}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({search: searchSelector(state)});


const mapDispatches = {
    updateSearch,
    updateScreen,
    updateProductDetail,
};

export default connect(mapStateToProps, mapDispatches)(HomeScreen);
