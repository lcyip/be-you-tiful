import '../../scss/Screens/RetailerDetailsScreen.scss'
import TopHeader from './TopHeader'
import Tabs from '../Reusable/Tabs'
import {updateScreen} from '../../redux/actions/screensActions';
import { connect } from 'react-redux';
import liquidBlush from '../../imageSources/liquidblush.png';
import ultaLogo from '../../imageSources/ultalogo.png';
import sephoraLogo from '../../imageSources/sephoralogo.png';
import rareBeautyLogo from '../../imageSources/rarebeautylogo.png';
import { productDetailSelector } from '../../redux/selectors/screensSelectors';
import { PRODUCT_DETAILS_SCREEN } from '../../redux/constants/screensConstants';

const RetailerDetailsScreen = ({
    productDetail,
    updateScreen,
}) => {
    const { brand, name, images, price, lowestPrice } = productDetail;

    return (
        <div className='retailer-details-container'>
            <div className='retailer-details-scroll'>
                <TopHeader/>
                <div className='brand-name-container'>
                    {brand}
                </div>
                <div className='product-name-container'>
                    {name}
                </div>
                <div className='retailer-details-images-container'>
                    {images?.map((imageSource, index) => (
                        <img className='retailer-details-image'
                            src={imageSource}
                            key={index}
                        />
                    ))}
                </div>
                <div className='retailer-store-details'>
                        <img className='ulta-blush-container'
                            src= {liquidBlush}   
                        />
                        <img className='ulta-logo'
                            src= {ultaLogo}
                        />
                        <div className='retailer-brand-container'>
                            Rare Beauty
                        </div>
                        <div className='retailer-product-container'>
                            Soft Pinch Liquid Blush
                        </div>
                        <div className='retailer-store-distance'>
                            nearest store: 0.8 mi
                        </div>
                        <div className='retailer-price-container'
                        style={{color: 'red'}}
                        >
                            $19
                        </div>
                </div>
                <div className='retailer-store-details'>
                        <img className='ulta-blush-container'
                            src= {liquidBlush}   
                        />
                        <img className='sephora-logo'
                            src= {sephoraLogo}
                        />
                        <div className='retailer-brand-container'>
                            Rare Beauty
                        </div>
                        <div className='retailer-product-container'>
                            Soft Pinch Liquid Blush
                        </div>
                        <div className='retailer-store-distance'>
                            nearest store: 0.5 mi
                        </div>
                        <div className='retailer-price-container'>
                            $23
                        </div>
                </div>
                <div className='retailer-store-details'>
                        <img className='ulta-blush-container'
                            src= {liquidBlush}   
                        />
                        <img className='rare-beauty-logo'
                            src= {rareBeautyLogo}
                        />
                        <div className='retailer-brand-container'>
                            Rare Beauty
                        </div>
                        <div className='retailer-product-container'>
                            Soft Pinch Liquid Blush
                        </div>
                        <div className='retailer-store-distance'>
                            nearest store: none
                        </div>
                        <div className='retailer-price-container'>
                            $21
                        </div>
                </div>
            </div>
            <Tabs/>
        </div>
    )
}

const mapStateToProps = (state) => ({productDetail: productDetailSelector(state)});

const mapDispatches = {updateScreen};

export default connect(mapStateToProps, mapDispatches)(RetailerDetailsScreen);