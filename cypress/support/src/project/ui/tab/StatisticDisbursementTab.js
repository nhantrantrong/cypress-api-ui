import StatisticTab from './StatisticTab';
import { allureReporter } from '../../../../../e2e/TestController';

/**
 * Page Object class of Disbursement tabs in Statistic Page
 */
class StatisticDisbursementTab extends StatisticTab {

    chartTooltipLabelCSS = `.highcharts-tooltip text tspan`;

    /**
     * Get all of Industry Names from Chart with corresponding percentage
     * Sort the list as ascending
     * @returns 
     */
    getAllIndustryPercentage() {
        allureReporter.step(`Get all of Industry Names from Chart with corresponding percentage and Sort the list as ascending`);
        const industryPercentages = new Map();
        return this.chart()
            .eq(0)
            .find(this.chartPointCSS)
            .each($chartPointEle => {
                cy.wrap($chartPointEle).click({ force: true });

                this.chart()
                    .eq(0)
                    .find(this.chartTooltipLabelCSS)
                    .eq(0)
                    .invoke('text')
                    .as('industryName');

                this.chart()
                    .eq(0)
                    .find(this.chartTooltipLabelCSS)
                    .eq(3)
                    .invoke('text')
                    .as('percentage');

                cy.get('@industryName').then(industryName => {
                    cy.get('@percentage').then(percentage => {
                        industryPercentages.set(industryName, percentage);
                    });
                })
            }).then(() => {
                // Sort the list with Increasing Order
                const sorted = new Map([...industryPercentages.entries()].sort((a, b) => a[1] - b[1]));
                return sorted;
            });
    }

}

export default StatisticDisbursementTab