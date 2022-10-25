import { setupUITest, homePage, statisticPage, allureReporter } from '../TestController';

describe('Validate UI Test Scenario', () => {

    beforeEach(() => {
        setupUITest();
    })

    it('Validate UI Test Scenario', () => {
        allureReporter.parentStep(`Open 'Statistic' Page`);
        homePage.clickStatisticNavigationItem();

        allureReporter.parentStep(`Validate 'Statistic' should be launched successfully`);
        statisticPage.validateStatisticDataShouldBeDisplayed();
        statisticPage.validateGeneralTabShouldBeDisplayed();
        statisticPage.validateRepaymentTabShouldBeDisplayed();
        statisticPage.validateDisbursementTabShouldBeDisplayed();

        allureReporter.parentStep(`Naviagte to 'General' tab`);
        statisticPage.clickGeneralTab();

        allureReporter.parentStep(`Get 'Total Approved' value`);
        statisticPage.generalTab.clickTotalApprovedButton();
        statisticPage.generalTab.mouseOverChart();
        statisticPage.generalTab.clickOnLastChartPoint();
        statisticPage.generalTab.getChartTooltipValue().as('totalApproved');

        allureReporter.parentStep(`Get 'Total Amount Disbursed' value`);
        statisticPage.generalTab.clickOnAmountDisbursedButton();
        statisticPage.generalTab.mouseOverChart();
        statisticPage.generalTab.clickOnLastChartPoint();
        statisticPage.generalTab.getChartTooltipValue().as('amountDisbursed');

        allureReporter.parentStep(`Get 'Default Rate' value`);
        statisticPage.generalTab.clickOnAmountDisbursedButton();
        statisticPage.generalTab.mouseOverChart();
        statisticPage.generalTab.clickOnLastChartPoint();
        statisticPage.generalTab.getChartTooltipValue().as('defaultRate');

        allureReporter.parentStep(`Print out data in Statistic - General tab`);
        cy.get('@totalApproved').then(totalApproved => {
            allureReporter.startStep(`Total Approved: ${totalApproved}`);
            allureReporter.endStep();
        });

        cy.get('@amountDisbursed').then(amountDisbursed => {
            allureReporter.startStep(`Amount Disbursed: ${amountDisbursed}`);
            allureReporter.endStep();
        });

        cy.get('@defaultRate').then(defaultRate => {
            allureReporter.startStep(`Default Rate: ${defaultRate}`);
            allureReporter.endStep();
        });

        allureReporter.parentStep(`Naviagte to 'Repayment' tab`);
        statisticPage.clickRepaymentTab();

        allureReporter.parentStep(`Get 'Total Repayment' amount`);
        statisticPage.repaymentTab.mouseOverChart();
        statisticPage.repaymentTab.clickTotalColumn();
        statisticPage.repaymentTab.getChartTooltipValue().as('totalRepayment');

        allureReporter.parentStep(`Get 'Total Principal' amount`);
        statisticPage.repaymentTab.clickPrincipalColumn();
        statisticPage.repaymentTab.getChartTooltipValue().as('totalPrincipal');

        allureReporter.parentStep(`Get 'Interest' amount`);
        statisticPage.repaymentTab.clickInterestColumn();
        statisticPage.repaymentTab.getChartTooltipValue().as('totalInterest');

        allureReporter.parentStep(`Print out data in Statistic - Repayment tab`);
        cy.get('@totalRepayment').then(totalRepayment => {
            allureReporter.startStep(`Total Repayment: ${totalRepayment}`);
            allureReporter.endStep();
        })

        cy.get('@totalPrincipal').then(totalPrincipal => {
            allureReporter.startStep(`Total Principal: ${totalPrincipal}`);
            allureReporter.endStep();
        })

        cy.get('@totalInterest').then(totalInterest => {
            allureReporter.startStep(`Total Interest: ${totalInterest}`);
            allureReporter.endStep();
        })

        allureReporter.parentStep(`Naviagte to 'Repayment' tab`);
        statisticPage.clickDisbursementTab();

        allureReporter.parentStep(`Store all industry names with according percentage`);
        statisticPage.disbursementTab.getAllIndustryPercentage().as('industryPercentages');

        allureReporter.parentStep(`Print out Industry with Percentage`);
        cy.get('@industryPercentages').then(industryPercentages => {
            industryPercentages.forEach((percentage, industryName) => {
                allureReporter.startStep(`${industryName}: ${percentage}`);
                allureReporter.endStep();
            })
        })
    })
})