describe("<App />", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("Renders without crashing", () => {
    cy.get("h1").contains("React To Do");
  });

  it("Renders without crashing", () => {
    cy.get("h1").contains("React To Don't");
  });
});
