
/**
 * This class is used to wrap up common method of `cy.allure()`
 */
class AllureReporter {
    /**
     * Wrapped cy.allure().startStep() method
     * @param {string} stepName Step name
     * @returns 
     */
    startStep(stepName) {
        return cy.allure().startStep(stepName);
    }

    /**
     * Wrapped cy.allure().endStep() method
     * @param {string} stepName Step name
     * @returns 
     */
    endStep() {
        return cy.allure().endStep();
    }

    /**
     * Wrapped cy.allure().step() method
     * @param {string} stepName Step name
     * @param {boolean} isParent if this is a parent step or not. Defaut value is false
     * @returns 
     */
    step(stepName, isParent = false) {
        return cy.allure().step(stepName, isParent);
    }

    /**
     * Wrapped cy.allure().step() with isParent parameter is true
     * @param {string} stepName Step name
     * @returns 
     */
    parentStep(stepName){
        return this.step(stepName, true);
    }
}

export default AllureReporter;