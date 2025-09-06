import {
  NavCategory,
  NavCategoryItem,
  NavDrawer,
  NavDrawerBody,
  NavItem,
  NavSubItem,
  NavSubItemGroup,
} from '@fluentui/react-components';

import { makeStyles, tokens } from '@fluentui/react-components';
import {
  bundleIcon,
  Home20Filled,
  Home20Regular,
  SlideMultipleSearch20Filled,
  SlideMultipleSearch20Regular,
  SlideArrowRight20Regular,
  SlideArrowRight20Filled,
  TextboxCheckmark20Regular,
  TextboxCheckmark20Filled,
  VehicleTruckProfile20Filled,
  VehicleTruckProfile20Regular,
  ColumnTripleEdit20Regular,
  ColumnTripleEdit20Filled,
  CodeTextEdit20Filled,
  CodeTextEdit20Regular,
  Money20Filled,
  Money20Regular,
  SlideMultipleArrowRight20Filled,
  SlideMultipleArrowRight20Regular,
  TransparencySquare20Filled,
  TransparencySquare20Regular,
  Settings20Filled,
  Settings20Regular,
} from '@fluentui/react-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
    display: 'flex',
    height: 'calc(100vh - 51px)',
  },
  nav: {
    minWidth: '260px',
  },
  content: {
    flex: '1',
    padding: '16px',
    display: 'grid',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  field: {
    display: 'flex',
    marginTop: '4px',
    marginLeft: '8px',
    flexDirection: 'column',
    gridRowGap: tokens.spacingVerticalS,
  },
});

const HomeIcon = bundleIcon(Home20Filled, Home20Regular);
const ViewStockICon = bundleIcon(SlideMultipleSearch20Filled, SlideMultipleSearch20Regular);
const GoodReceivedIcon = bundleIcon(SlideArrowRight20Filled, SlideArrowRight20Regular);
const StockCheckIcon = bundleIcon(TextboxCheckmark20Filled, TextboxCheckmark20Regular);
const StockReleaseIcon = bundleIcon(VehicleTruckProfile20Filled, VehicleTruckProfile20Regular);

const StockAdjustmentIcon = bundleIcon(ColumnTripleEdit20Filled, ColumnTripleEdit20Regular);
const RecodeIcon = bundleIcon(CodeTextEdit20Filled, CodeTextEdit20Regular);
const RevalueIcon = bundleIcon(Money20Filled, Money20Regular);
const StockTransferIcon = bundleIcon(
  SlideMultipleArrowRight20Filled,
  SlideMultipleArrowRight20Regular,
);
const KitmanagementIcon = bundleIcon(TransparencySquare20Filled, TransparencySquare20Regular);
const ItemMasterIcon = bundleIcon(SlideMultipleSearch20Filled, SlideMultipleSearch20Regular);
const AdministrationIcon = bundleIcon(Settings20Filled, Settings20Regular);

export const NavBar = () => {
  const mode = useSelector((state: RootState) => state.navbar.mode);
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <NavDrawer
        defaultSelectedValue="1"
        defaultSelectedCategoryValue=""
        open={mode === 'open' ? true : false}
        type="inline"
        multiple={false}
        className={styles.nav}
      >
        <NavDrawerBody>
          <NavItem href="/" icon={<HomeIcon />} value="1">
            Home
          </NavItem>
          <NavItem href="/" icon={<ViewStockICon />} value="2">
            View Stock
          </NavItem>
          <NavItem href="/" icon={<GoodReceivedIcon />} value="3">
            Goods Received
          </NavItem>
          <NavItem icon={<StockCheckIcon />} href="/" value="4">
            Stock Checks
          </NavItem>

          <NavCategory value="5">
            <NavCategoryItem icon={<StockReleaseIcon />}>Stock Release</NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem href="#" value="6">
                Stock Release
              </NavSubItem>
              <NavSubItem href="#" value="7">
                Release Schedule
              </NavSubItem>
            </NavSubItemGroup>
          </NavCategory>
          <NavItem icon={<StockAdjustmentIcon />} value="8">
            Stock Adjustments
          </NavItem>
          <NavItem icon={<RecodeIcon />} value="9">
            Recode
          </NavItem>
          <NavItem icon={<RevalueIcon />} value="10">
            Revalue
          </NavItem>
          <NavItem icon={<StockTransferIcon />} value="11">
            Stock Transfer
          </NavItem>
          <NavCategory value="12">
            <NavCategoryItem icon={<KitmanagementIcon />}>Kit Management</NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem href="#" value="13">
                Stock Release
              </NavSubItem>
              <NavSubItem href="#" value="14">
                Release Schedule
              </NavSubItem>
            </NavSubItemGroup>
          </NavCategory>
          <NavCategory value="15">
            <NavCategoryItem icon={<ItemMasterIcon />}>Item Master</NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem href="#" value="16">
                Stock Release
              </NavSubItem>
              <NavSubItem href="#" value="17">
                Release Schedule
              </NavSubItem>
            </NavSubItemGroup>
          </NavCategory>
          <NavCategory value="18">
            <NavCategoryItem icon={<AdministrationIcon />}>Administration</NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem href="#" value="19">
                Stock Release
              </NavSubItem>
              <NavSubItem href="#" value="20">
                Release Schedule
              </NavSubItem>
            </NavSubItemGroup>
          </NavCategory>
        </NavDrawerBody>
      </NavDrawer>
    </div>
  );
};
