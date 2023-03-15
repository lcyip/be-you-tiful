import '../../scss/Screens/ProductDetailsScreen.scss';
import TopHeader from './TopHeader';
import Tabs from '../Reusable/Tabs';
import {updateScreen} from '../../redux/actions/screensActions';
import { connect } from 'react-redux';

const ProductDetailsScreen = ({
    updateScreen,
}) => {
    return (
        <div className='product-screen-container'>

        </div>
    )
}


const mapDispatches = {updateScreen};

export default connect(null, mapDispatches)(ProductDetailsScreen);