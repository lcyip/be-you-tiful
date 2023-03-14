import '../../scss/Reusable/Tabs.scss'
import homeIcon from '../../imageSources/homeicon.png'
import homeIconColored from '../../imageSources/homeiconcolored.png'
import cartIcon from '../../imageSources/carticon.png'
import cartIconColored from '../../imageSources/carticoncolored.png'
import profileIcon from '../../imageSources/profileicon.png'
import profileIconColored from '../../imageSources/profileiconcolored.png'
import { updateScreen, updateTab } from '../../redux/actions/screensActions';
import { connect } from 'react-redux';
import { CART_TAB, PROFILE_TAB, HOME_TAB } from '../../redux/constants/screensConstants';
import { tabSelector } from '../../redux/selectors/screensSelectors';


const Tabs = ({
    tab,
    updateTab
}) => {

    return (
        <div className="tabs-container">
            <TabsIconButton
                icons={[homeIconColored, homeIcon]}
                text='Home'
                active={tab === HOME_TAB}
                onClick = {() => updateTab(HOME_TAB)}
            />
            <TabsIconButton 
                icons={[cartIconColored, cartIcon]}
                text='Cart'
                active={tab === CART_TAB}
                onClick = {() => updateTab(CART_TAB)}
                />
            <TabsIconButton
                icons={[profileIconColored, profileIcon]}
                active={tab === PROFILE_TAB}
                onClick = {() => updateTab(PROFILE_TAB)}
                text='Profile'
            />
        </div>
    );
};

const TabsIconButton = ({
    icons,
    text,
    active,
    onClick,
}) => {

    // icons = [item1, item2]

    const color = active ? '#E7C7B5' : '#737274';
    const icon = active ? icons[0] : icons[1];

    return (
        <button className='tabs-icon-container' style={{ color }}
            onClick={onClick}
        >
            <img className='tabs-icon-image' src = {icon}/>
            <div
                style={{
                    color
                }}
            >
                {text}
            </div>
        </button>
    );
};

const mapStateToProps = (state) => ({
    tab: tabSelector(state)
});

const mapDispatches = {
    updateScreen,
    updateTab,
};

export default connect(mapStateToProps, mapDispatches)(Tabs);