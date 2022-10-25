/// <reference types="Cypress" />

import { configs } from "../../../../e2e/TestController";

/**
 * This class is wrapped up some method of cypress to be invoked when interact with webpage
 */
class WebPage {

    url = configs.ui.url;

    /**
     * Navigate to webpahe url
     * @returns 
     */
    open() {
        return cy.visit(this.url);
    }

    /**
     * Navigate back
     * @returns 
     */
    goBack() {
        return cy.go('back');
    }

    /**
     * Navigate forward
     * @returns 
     */
    goForward() {
        return cy.go('forward');
    }

    /**
     * Reload page
     * @param {*} usingCache 
     * @returns 
     */
    reload(usingCache = false) {
        return cy.reload(!usingCache);
    }

}

export default WebPage;