import * as actionTypes from "./actions";
import config from "./../config";

const initialState = {
  isOpen: [], //for active default menu
  isTrigger: [], //for active default menu, set blank for horizontal
  ...config,
  isFullScreen: false // static can't change
};

const reducer = (state = initialState, action) => {
  let trigger = [];
  let open = [];

  switch (action.type) {
    case actionTypes.COLLAPSE_MENU:
      return {
        ...state,
        collapseMenu: !state.collapseMenu
      };
    case actionTypes.COLLAPSE_TOGGLE:
      if (action.menu.type === "sub") {
        open = state.isOpen;
        trigger = state.isTrigger;

        const triggerIndex = trigger.indexOf(action.menu.id);
        if (triggerIndex > -1) {
          open = open.filter(item => item !== action.menu.id);
          trigger = trigger.filter(item => item !== action.menu.id);
        }

        if (triggerIndex === -1) {
          open = [...open, action.menu.id];
          trigger = [...trigger, action.menu.id];
        }
      } else {
        open = state.isOpen;
        const triggerIndex = state.isTrigger.indexOf(action.menu.id);
        trigger = triggerIndex === -1 ? [action.menu.id] : [];
        open = triggerIndex === -1 ? [action.menu.id] : [];
      }

      return {
        ...state,
        isOpen: open,
        isTrigger: trigger
      };
    case actionTypes.NAV_CONTENT_LEAVE:
      return {
        ...state,
        isOpen: open,
        isTrigger: trigger
      };
    case actionTypes.NAV_COLLAPSE_LEAVE:
      if (action.menu.type === "sub") {
        open = state.isOpen;
        trigger = state.isTrigger;

        const triggerIndex = trigger.indexOf(action.menu.id);
        if (triggerIndex > -1) {
          open = open.filter(item => item !== action.menu.id);
          trigger = trigger.filter(item => item !== action.menu.id);
        }
        return {
          ...state,
          isOpen: open,
          isTrigger: trigger
        };
      }
      return { ...state };
    case actionTypes.FULL_SCREEN:
      return {
        ...state,
        isFullScreen: !state.isFullScreen
      };
    case actionTypes.FULL_SCREEN_EXIT:
      return {
        ...state,
        isFullScreen: false
      };
    case actionTypes.CHANGE_LAYOUT:
      return {
        ...state,
        layout: action.layout
      };
    case actionTypes.CHANGE_PRE_LAYOUT:
      return {
        ...state,
        preLayout: action.preLayout
      };
    case actionTypes.LAYOUT_TYPE:
      return {
        ...state,
        layoutType: action.layoutType,
        navBackColor:
          action.layoutType === "dark" &&
          initialState.navBackColor === "navbar-dark"
            ? "navbar-dark"
            : state.navBackColor,
        navBrandColor:
          action.layoutType === "dark" &&
          initialState.navBrandColor === "brand-default"
            ? "brand-dark"
            : state.navBrandColor,
        navBackImage: initialState.navBackImage,
        headerBackColor: initialState.headerBackColor
      };
    case actionTypes.NAV_BACK_COLOR:
      return {
        ...state,
        navBackColor: action.navBackColor,
        navBackImage: initialState.navBackImage,
        navBrandColor: "brand-default",
        layoutType:
          state.layoutType === "menu-light" ? "menu-light" : state.layoutType
      };
    case actionTypes.NAV_BACK_IMAGE:
      return {
        ...state,
        layoutType: "menu-dark",
        navBackImage: action.navBackImage,
        navBrandColor: "",
        navBackColor: ""
      };
    case actionTypes.NAV_BRAND_COLOR:
      return {
        ...state,
        navBrandColor: action.navBrandColor
      };
    case actionTypes.HEADER_BACK_COLOR:
      return {
        ...state,
        headerBackColor: action.headerBackColor
      };
    case actionTypes.NAV_ICON_COLOR:
      return {
        ...state,
        navIconColor: !state.navIconColor
      };
    case actionTypes.RTL_LAYOUT:
      return {
        ...state,
        rtlLayout: !state.rtlLayout
      };
    case actionTypes.NAV_FIXED_LAYOUT:
      return {
        ...state,
        navFixedLayout: !state.navFixedLayout
      };
    case actionTypes.HEADER_FIXED_LAYOUT:
      return {
        ...state,
        headerFixedLayout: !state.headerFixedLayout,
        headerBackColor:
          !state.headerFixedLayout &&
          initialState.headerBackColor === "header-default"
            ? "header-blue"
            : state.headerBackColor,
        navBrandColor: !state.headerFixedLayout
          ? "brand-default"
          : initialState.navBrandColor
      };
    case actionTypes.BOX_LAYOUT:
      return {
        ...state,
        boxLayout: !state.boxLayout
      };
    case actionTypes.LAYOUT6_BACKGROUND:
      return {
        ...state,
        layout6Background: action.value.layout6Background,
        layout6BackSize: action.value.layout6BackSize
      };
    case actionTypes.NAV_DROPDOWN_ICON:
      return {
        ...state,
        navDropdownIcon: action.navDropdownIcon
      };
    case actionTypes.NAV_LIST_ICON:
      return {
        ...state,
        navListIcon: action.navListIcon
      };
    case actionTypes.NAV_ACTIVE_LIST_COLOR:
      return {
        ...state,
        navActiveListColor: action.navActiveListColor
      };
    case actionTypes.NAV_LIST_TITLE_COLOR:
      return {
        ...state,
        navListTitleColor: action.navListTitleColor
      };
    case actionTypes.NAV_LIST_TITLE_HIDE:
      return {
        ...state,
        navListTitleHide: !state.navListTitleHide
      };
    case actionTypes.CONFIG_BLOCK:
      return {
        ...state,
        configBlock: !state.configBlock
      };
    case actionTypes.RESET:
      return {
        ...state,
        layout: initialState.layout,
        preLayout: initialState.preLayout,
        collapseMenu: initialState.collapseMenu,
        layoutType: initialState.layoutType,
        navIconColor: initialState.navIconColor,
        headerBackColor: initialState.headerBackColor,
        navBackColor: initialState.navBackColor,
        navBrandColor: initialState.navBrandColor,
        navBackImage: initialState.navBackImage,
        rtlLayout: initialState.rtlLayout,
        navFixedLayout: initialState.navFixedLayout,
        headerFixedLayout: initialState.headerFixedLayout,
        boxLayout: initialState.boxLayout,
        navDropdownIcon: initialState.navDropdownIcon,
        navListIcon: initialState.navListIcon,
        navActiveListColor: initialState.navActiveListColor,
        navListTitleColor: initialState.navListTitleColor,
        navListTitleHide: initialState.navListTitleHide,
        layout6Background: initialState.layout6Background
      };
    default:
      return state;
  }
};

export default reducer;
