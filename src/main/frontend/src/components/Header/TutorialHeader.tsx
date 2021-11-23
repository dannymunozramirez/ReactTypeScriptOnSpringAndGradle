import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import HeaderContainer from "carbon-components-react/lib/components/UIShell/HeaderContainer";
import {
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  Switcher,
  HeaderPanel,
  SwitcherItem,
} from "carbon-components-react/lib/components/UIShell";
import { Fade16 } from "@carbon/icons-react";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { toggle } from "../../store/leftside-slide";

const TutorialHeader = () => {
  const leftSideMenuVisibility = useAppSelector(
    (state) => state.ui.isVisibleLeftSideMenu
  );
  const dispatch = useAppDispatch();

  const toggleLeftSideMenu = () => {
    dispatch(toggle());
  };

  return (
    <div>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="IBM Platform Name">
              <SkipToContent />

              <HeaderMenuButton
                aria-label="Open menu"
                onClick={toggleLeftSideMenu}
                isActive={leftSideMenuVisibility}
              />
              <HeaderName href="#" prefix="IBM">
                [Platform]
              </HeaderName>
              <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                  <Search20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="Notifications"
                  onClick={() => {}}
                >
                  <Notification20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="App Switcher"
                  isActive={isSideNavExpanded}
                  onClick={() => {
                    onClickSideNavExpand();
                  }}
                >
                  <AppSwitcher20 />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
              <SideNav
                aria-label="Side navigation"
                expanded={leftSideMenuVisibility}
              >
                <SideNavItems>
                  <SideNavMenu renderIcon={Fade16} title="Category title">
                    <SideNavMenuItem href="javascript:void(0)">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem
                      aria-current="page"
                      href="javascript:void(0)"
                    >
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                      Link
                    </SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavMenu renderIcon={Fade16} title="Category title">
                    <SideNavMenuItem href="javascript:void(0)">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem
                      aria-current="page"
                      href="javascript:void(0)"
                    >
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                      Link
                    </SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavMenu renderIcon={Fade16} title="Category title">
                    <SideNavMenuItem href="javascript:void(0)">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem
                      aria-current="page"
                      href="javascript:void(0)"
                    >
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                      Link
                    </SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
                    Link
                  </SideNavLink>
                  <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
                    Link
                  </SideNavLink>
                </SideNavItems>
              </SideNav>

              <HeaderPanel expanded={isSideNavExpanded}>
                <Switcher>
                  <SwitcherItem>Link</SwitcherItem>
                  <SwitcherItem>Link</SwitcherItem>
                  <SwitcherItem>Link</SwitcherItem>
                  <SwitcherItem>Link</SwitcherItem>
                  <SwitcherItem>Link</SwitcherItem>
                  <SwitcherItem>Link</SwitcherItem>
                </Switcher>
              </HeaderPanel>
            </Header>
          </>
        )}
      />
    </div>
  );
};
export default TutorialHeader;
