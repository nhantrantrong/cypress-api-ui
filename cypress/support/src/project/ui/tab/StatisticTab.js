import { allureReporter } from '../../../../../e2e/TestController';
/**
 * Page Object abstract class of tabs in Statistic Page
 */
class StatisticTab {

    chart = () => { return cy.get(`.highcharts-container`); }
    chartPointCSS = `.highcharts-point`;
    chartTooltipLabelCSS = `.highcharts-tooltip text tspan[style = "font-weight:bold;"]`;

    /**
     * Mouse over on Chart to show up Chart tooltip
     */
    mouseOverChart() {
        allureReporter.startStep(`Mouse over on Chart`);
        this.chart()
            .eq(0)
            .click();
        allureReporter.endStep();
    }

    /**
     * Get text value in chart tooltip
     * @returns 
     */
    getChartTooltipValue() {
        allureReporter.step(`Get text value in Chart Tooltip`);
        return this.chart()
            .eq(0)
            .find(this.chartTooltipLabelCSS)
            .invoke('text');
    }


}

export default StatisticTab