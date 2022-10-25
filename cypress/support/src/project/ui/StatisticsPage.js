/// <reference types="Cypress" />

import WebPage from '../../core/ui/WebPage';
import StatisticGeneralTab from './tab/StatisticGeneralTab';
import StatisticRepaymentTab from './tab/StatisticRepaymentTab';
import StatisticDisbursementTab from './tab/StatisticDisbursementTab';
import { allureReporter } from '../../../../e2e/TestController';

/**
 * Page Object class of StatisticPage
 */
class StatisticPage extends WebPage {

    generalTab = new StatisticGeneralTab();
    repaymentTab = new StatisticRepaymentTab();
    disbursementTab = new StatisticDisbursementTab();

    statisticText = () => { return cy.get('.statisticDetailRow .detailNumber'); }
    statisticTabButton = () => { return cy.get('.tab-button'); }

    STATISTIC_NAME = {
        TOTAL_FUNDED: "Total funded",
        NO_OF_FINANCING: "No. offinancing",
        DEFAULT_RATE: "Defaultrate",
        FINANCING_FULFILLMENT_RATE: "Financingfulfillment rate"
    };

    STATISTIC_TAB_NAME = {
        GENERAL: "General",
        REPAYMENT: "Repayment",
        DISBURSEMENT: "Disbursement"
    };

    /**
     * Validate Statiscic data values should be displayed correctly
     * @param {number} index start from 1
     * @param {STATISTIC_NAME} statisticName
     * @returns 
     */
    _validateStatisticValueNotEmpty(index, statisticName) {
        allureReporter.startStep(`Validate value of '${statisticName}' should be displayed`);
        this.statisticText()
            .eq(index - 1)
            .invoke('text')
            .then(statisticText => {
                const statisticValue = statisticText.slice(0, statisticText.indexOf(statisticName)).trim();
                expect(statisticValue).to.not.empty;
            });
        allureReporter.endStep();
    }

    /**
     * Validate Statistic Data Should Be Displayed
     */
    validateStatisticDataShouldBeDisplayed() {
        this._validateStatisticValueNotEmpty(1, this.STATISTIC_NAME.TOTAL_FUNDED);
        this._validateStatisticValueNotEmpty(2, this.STATISTIC_NAME.NO_OF_FINANCING);
        this._validateStatisticValueNotEmpty(3, this.STATISTIC_NAME.DEFAULT_RATE);
        this._validateStatisticValueNotEmpty(4, this.STATISTIC_NAME.FINANCING_FULFILLMENT_RATE);
    }

    /**
     * Validate 'General' Tab should be displayed
     */
    validateGeneralTabShouldBeDisplayed() {
        this.statisticTabButton()
            .contains(this.STATISTIC_TAB_NAME.GENERAL)
            .should('be.visible');
    }

    /**
     * Validate 'Repayment' Tab should be displayed
     */
    validateRepaymentTabShouldBeDisplayed() {
        this.statisticTabButton()
            .contains(this.STATISTIC_TAB_NAME.REPAYMENT)
            .should('be.visible');
    }

    /**
     * Validate 'Disbursement' Tab should be displayed
     */
    validateDisbursementTabShouldBeDisplayed() {
        this.statisticTabButton()
            .contains(this.STATISTIC_TAB_NAME.DISBURSEMENT)
            .should('be.visible');
    }

    /**
     * Click on 'General' tab
     */
    clickGeneralTab() {
        allureReporter.startStep(`Click on 'General' tab`);
        this.statisticTabButton()
            .contains(this.STATISTIC_TAB_NAME.GENERAL)
            .click();
        allureReporter.endStep();
    }

    /**
     * Click on 'Repayment' tab
     */
    clickRepaymentTab() {
        allureReporter.startStep(`Click on 'Repayment' tab`);
        this.statisticTabButton()
            .contains(this.STATISTIC_TAB_NAME.REPAYMENT)
            .click();
        allureReporter.endStep();
    }

    /**
     * Click on 'Disbursement' tab
     */
    clickDisbursementTab() {
        allureReporter.startStep(`Click on 'Disbursement' tab`);
        this.statisticTabButton()
            .contains(this.STATISTIC_TAB_NAME.DISBURSEMENT)
            .click();
        allureReporter.endStep();
    }

}

export default StatisticPage;