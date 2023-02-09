beforeEach(() => {
  cy.visit("/");
});

it("should find a button", () => {
  cy.get("button").should("exist");
});

it("should search movies", () => {
  cy.get("input").type("Scream").should("have.value", "Scream");
  cy.get("button").click();

  cy.get("#movie-container").find(".movie").should("have.length", 10);
  cy.get(".movie:first").find("h3").should("have.text", "Scream");
  cy.get(".movie:first").find("img").should("be.visible");
});
