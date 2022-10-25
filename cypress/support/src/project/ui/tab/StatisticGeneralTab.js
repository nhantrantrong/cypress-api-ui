import StatisticTab from './StatisticTab';
import { allureReporter } from '../../../../../e2e/TestController';

/**
 * Page Object class of General tabs in Statistic Page
 */
class StatisticGeneralTab extends StatisticTab {

    totalApprovedButton = () => { return cy.get('#toggle-approved'); }
    amountDisbursedButton = () => { return cy.get('#toggle-disbursed'); }
    defaultRateButton = () => { return cy.get('#toggle-default'); }


    /**
     * Click on 'Total Approved' button
     */
    clickTotalApprovedButton() {
        allureReporter.startStep(`Click on 'Total Approved' button`);
        this.totalApprovedButton()
            .click({ force: true });
        allureReporter.endStep();
    }

    /**
     * Click on 'Amount Disbursed' button
     */
    clickOnAmountDisbursedButton() {
        allureReporter.startStep(`Click on 'Amount Disbursed' button`);
        this.amountDisbursedButton()
            .click({ force: true });
        allureReporter.endStep();
    }

    /**
     * Click on 'Default Rate' button
     */
    clickOnDefaultRateButton() {
        allureReporter.startStep(`Click on 'Default Rate' button`);
        this.defaultRateButton()
            .click({ force: true });
        allureReporter.endStep();
    }

    /**
     * Click on the last point of Chart
     */
    clickOnLastChartPoint() {
        allureReporter.startStep(`Click on last point of Chart`);
        this.chart()
            .eq(0)
            .find(this.chartPointCSS)
            .last()
            .click();
        allureReporter.endStep();
    }

}

export default StatisticGeneralTab