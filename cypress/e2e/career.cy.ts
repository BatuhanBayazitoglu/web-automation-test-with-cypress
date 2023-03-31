import { BASE_URL,CAREER_PAGE_URL,QUALITY_ASSURANCE_PAGE_URL } from "../support/constants";
import MainPage from "../support/pageObject/MainPage.js";
import CareerPage from "../support/pageObject/CareerPage.js";
import QualityAssurancePage from "../support/pageObject/QualityAssurancePage.js";
import DepartmentPage from "../support/pageObject/DepartmentPage.js";
import LeverApplicationFormPage from "../support/pageObject/LeverApplicationFormPage.js";

describe("Apply role", () => {
  it("Apply QA role which is available for Istanbul,Turkey", () => {
    //check Insider home page is opened
    cy.visit(BASE_URL);
    cy.url().should('equal', BASE_URL);
    cy.contains(MainPage.mainSlogan).should('be.visible');
    // Navigate to career page
    cy.get(MainPage.navBar).contains(MainPage.moreOption).click();
    cy.get(MainPage.dropdownMenu).find(MainPage.careersOption).click();
    cy.url().should('equal', CAREER_PAGE_URL);
    //Check our locations is opened
    cy.get(CareerPage.ourLocationsSection).should('be.visible');
    cy.contains(CareerPage.ourLocationTitle).should('be.visible');
    //Check our callings(teams) is opened
    cy.get(CareerPage.findOurCallingSection).should('be.visible');
    cy.contains(CareerPage.findOurCallingTitle).should('be.visible');
    //Check life at insider is opened
    cy.get(CareerPage.pageSection).contains(CareerPage.lifeAtInsiderSectionTitle).should('be.visible');
    cy.get(CareerPage.pageSection).contains(CareerPage.lifeAtInsiderSectionDescription).should('be.visible');
    //Navigate to see all QA jobs
    cy.get(CareerPage.findOurCallingSection).find(MainPage.btnClass).contains(CareerPage.seeAllTeamsText).click({force:true});
    cy.get(CareerPage.qualityAssuranceOption).first().click({force:true});
    cy.url().should('equal', QUALITY_ASSURANCE_PAGE_URL);
    cy.get(QualityAssurancePage.seeAllQAJobsButton).click({force:true});
    //Select role and location
    cy.get(DepartmentPage.comboBox).eq(1).find('span').contains(DepartmentPage.role).should('be.exist');
    cy.get(DepartmentPage.comboBox).first().click();
    cy.get(DepartmentPage.comboBoxList).should('be.visible');
    cy.get(DepartmentPage.comboBoxList).find('li').contains('Istanbul, Turkey').click();
    //Check each avilable role is opened for QA role and Istanbul
     cy.get(DepartmentPage.positionListItem)
      .each(element => {
        cy.contains('Quality Assurance');
        cy.contains('Istanbul, Turkey');
        cy.get(DepartmentPage.applyNowButton).should('have.attr', 'target', '_blank');
      });
    cy.get(DepartmentPage.positionListItem).first().find(DepartmentPage.applyNowButton).invoke('removeAttr', 'target').click({force:true});
    //Check Lever Application Form is opened
    cy.url().should('contain', LeverApplicationFormPage.applicationUrl);
    cy.get(LeverApplicationFormPage.applyForThisJobButton).should('be.visible');
  })
});
