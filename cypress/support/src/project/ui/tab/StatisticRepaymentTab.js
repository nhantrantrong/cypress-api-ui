import StatisticTab from './StatisticTab';
import { allureReporter } from '../../../../../e2e/TestController';

/**
 * Page Object class of Repayment tabs in Statistic Page
 */
class StatisticRepaymentTab extends StatisticTab {

    /**
     * Click on 'Total' chart column
     */
    clickTotalColumn() {
        allureReporter.startStep(`Click on 'Total' chart column`);
        this.chart()
            .eq(0)
            .find(this.chartPointCSS)
            .eq(0)
            .click();
        allureReporter.endStep();
    }

    /**
     * Click on 'Principal' chart column
     */
    clickPrincipalColumn() {
        allureReporter.startStep(`Click on 'Principal' chart column`);
        this.chart()
            .eq(0)
            .find(this.chartPointCSS)
            .eq(1)
            .click();
        allureReporter.endStep();
    }

    /**
     * Click on 'Interest' chart column
     */
    clickInterestColumn() {
        allureReporter.startStep(`Click on 'Interest' chart column`);
        this.chart()
            .eq(0)
            .find(this.chartPointCSS)
            .eq(2)
            .click();
        allureReporter.endStep();
    }

}

export default StatisticRepaymentTab