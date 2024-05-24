import {Page} from "@playwright/test";


export class NavigationPage {

    readonly page: Page

    constructor(page: Page){
        this.page= page
    }

    async SearchTravel(){
        const [newPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.page.locator('.elementor-button').first().click()
        ]);
        await newPage.waitForSelector('body'); 
        // await newPage.waitForLoadState('domcontentloaded');

        await newPage.getByRole('button', { name: '-' }).first().click();
        await newPage.getByRole('button', { name: 'SEARCH' }).click();
        // Localizar la tabla de servicios de ida
        const tabla_ida = newPage.locator('#Table_servicio_ida');

        // Localizar el tbody dentro de la tabla
        const tbody = tabla_ida.locator('tbody');

        // Hacer clic en la primera celda de la primera fila del tbody
        const primeraCelda = tbody.locator('tr.fila_retorno').first().locator('td').first();
        await primeraCelda.click();

        // Localizar la tabla de servicios de retorno

        const tabla_vuelta= newPage.locator('#Table_servicio_retorno');

        const tobdyvuelta= tabla_vuelta.locator('tbody')

        const PrimeraCeldaVuelta  = tobdyvuelta.locator('tr.fila_retorno').first().locator('td').first()

        await PrimeraCeldaVuelta.click()


        await newPage.getByRole('button', { name: 'CONTINUE ' }).click();

        return newPage; // Return the new page instance to be used in other methods
    }

    async CompraporBusqueda()
    {
        await this.page.getByLabel('FromCity of').selectOption('6022');
        await this.page.getByLabel('ToArequipaMachuPicchuPuno').selectOption('6026');
        await this.page.locator('#countParentsChildren').click();
        await this.page.locator('#btnRemoveAdult').click();
        await this.page.getByRole('link', { name: 'X', exact: true }).click();
        //await this.page.getByRole('button', { name: 'SEARCH' }).click();

        const [newPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.page.locator('.elementor-button').first().click()
        ]);
        await newPage.waitForSelector('body'); 
        // await newPage.waitForLoadState('domcontentloaded');

        await newPage.getByRole('button', { name: '-' }).first().click();
        await newPage.getByRole('button', { name: 'SEARCH' }).click();
        // Localizar la tabla de servicios de ida
        const tabla_ida = newPage.locator('#Table_servicio_ida');

        // Localizar el tbody dentro de la tabla
        const tbody = tabla_ida.locator('tbody');

        // Hacer clic en la primera celda de la primera fila del tbody
        const primeraCelda = tbody.locator('tr.fila_retorno').first().locator('td').first();
        await primeraCelda.click();

        // Localizar la tabla de servicios de retorno

        const tabla_vuelta= newPage.locator('#Table_servicio_retorno');

        const tobdyvuelta= tabla_vuelta.locator('tbody')

        const PrimeraCeldaVuelta  = tobdyvuelta.locator('tr.fila_retorno').first().locator('td').first()

        await PrimeraCeldaVuelta.click()


        await newPage.getByRole('button', { name: 'CONTINUE ' }).click();

        return newPage; // Return the new page instance to be used in other methods
    }
}