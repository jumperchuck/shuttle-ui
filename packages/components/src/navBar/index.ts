import NavBar, { NavBarProps } from './NavBar';
import NavBarTitle, { NavBarTitleProps } from './NavBarTitle';
import NavBarLeft, { NavBarLeftProps } from './NavBarLeft';
import NavBarRight, { NavBarRightProps } from './NavBarRight';

export default Object.assign(NavBar, {
  Title: NavBarTitle,
  Left: NavBarLeft,
  Right: NavBarRight,
});

export type { NavBarProps, NavBarTitleProps, NavBarLeftProps, NavBarRightProps };
