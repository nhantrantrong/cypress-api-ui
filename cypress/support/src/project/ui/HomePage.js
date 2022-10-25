/// <reference types="Cypress" />

import WebPage from '../../core/ui/WebPage';
import { allureReporter } from '../../../../e2e/TestController';

/**
 * Page Object class of HomePage
 */
class HomePage extends WebPage {

    menuItem = () => { return cy.get('div.navbar li.nav-menu__item a'); }
    subMenu = () => { return cy.get('div.navbar li.nav-submenu span'); }
    subMenuItem = () => { return cy.get('.is-open > .nav-submenu__container > .nav-submenu__items div'); }

    MENU_ITEMS = {
        INVESMENT: "Investment",
        STATISTIC: "Statistic",
        REFER: "Refer"
    };

    SUB_MENU_ITEMS = {
        SME_LOANS: {
            ELEVATE_VIRTUAL_CARD: "SME Loans->EleVate Virtual Card",
            MICRO_LOANS: "SME Loans->Micro Loans"
        },
        ABOUT_US: {
            OUR_COMPANY: "About us->Our Company",
            LEADERSHIO_TEAM: "Leadership Team"
        }
    };

    /**
     * Click on menu item by name
     * @param {MENU_ITEMS} itemName 
     * @returns 
     */
    _clickMenuItem(itemName) {
        return this.menuItem()
            .contains(itemName)
            .click();
    }

    /**
     * Click on 'Statistic' Navigation menu item
     */
    clickStatisticNavigationItem() {
        allureReporter.startStep(`Click on 'Statistic' Navigation menu item`);
        this._clickMenuItem(this.MENU_ITEMS.STATISTIC);
        allureReporter.endStep();
    }

    /**
     * Open Navigation Menu Item, click on Sub Menu Item
     * @param {SUB_MENU_ITEMS} subMenuItem 
     */
    clickSubMenuItem(subMenuItem) {
        const menuItems = subMenuItem.split('->');
        this.subMenu()
            .contains(menuItems[0])
            .click();
        cy.contains(menuItems[1])
            .click();
    }
}

export default HomePage;