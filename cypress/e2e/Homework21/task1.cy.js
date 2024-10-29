describe("Auth", () => {
    let sid;
    let carId;

    before(() => {
        const userCreds = {
            email: "pasichnyk.nas23+678@gmail.com",
            password: "12345Rr!",
            remember: true,
        };
        cy.request(
            "POST",
            `${Cypress.env("BASE_URL")}api/auth/signin`,
            userCreds,
        ).then((response) => {
            const headers = response.headers;
            const cookie = headers["set-cookie"][1];
            const cookieArray = cookie.split("\n");
            for (const cookie of cookieArray) {
                if (cookie.trim().startsWith("sid=")) {
                    sid = cookie.trim().split("=")[1].split(";")[0];
                    break;
                }
            }
        });
    });

    it('Verify user"s name', () => {
        cy.request({
            method: "GET",
            url: `${Cypress.env("BASE_URL")}api/users/profile`,
            headers: {
                Cookie: `sid=${sid}`,
            },
        }).then((response) => {
            cy.log(JSON.stringify(response.body.data));
            expect(response.status).to.eq(200);
            expect(response.body.data.name).to.eq("AnaTest");
        });
    });

    it("Verify cars brands", () => {
        cy.request({
            method: "GET",
            url: `${Cypress.env("BASE_URL")}api/cars/brands`,
            headers: {
                Cookie: `sid=${sid}`,
            },
        }).then((response) => {
            cy.log(JSON.stringify(response.body.data));
            expect(response.status).to.eq(200);
            expect(response.body.data[2].title).to.eq("Ford");
        });
    });

    it("Create a new car", () => {
        const newCar = {
            carBrandId: 1,
            carModelId: 1,
            mileage: 5000,
        };

        cy.request({
            method: "POST",
            url: `${Cypress.env("BASE_URL")}api/cars`,
            headers: {
                Cookie: `sid=${sid}`,
            },
            body: newCar,
        }).then((response) => {
            cy.log(JSON.stringify(response.body.data));
            expect(response.body.data.mileage).to.eq(newCar.mileage);
            carId = response.body.data.id;
        });
    });

    it("Update mileage on a car", () => {
        const updatedCar = {
            carBrandId: 1,
            carModelId: 2,
            mileage: 7500,
        };

        cy.request({
            method: "PUT",
            url: `${Cypress.env("BASE_URL")}api/cars/${carId}`,
            headers: {
                Cookie: `sid=${sid}`,
            },
            body: updatedCar,
        }).then((response) => {
            cy.log(JSON.stringify(response.body.data));
            expect(response.body.data.mileage).to.eq(updatedCar.mileage);
        });
    });
    it("Verify car can be deleted", () => {

        cy.request({
            method: "DELETE",
            url: `${Cypress.env("BASE_URL")}api/cars/${carId}`,
            headers: {
                Cookie: `sid=${sid}`,
            },
        }).then((response)=>{
            cy.log(JSON.stringify(response.body.data));
            expect(response.body.status).to.eq("ok");
        });
    });
});
