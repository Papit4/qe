import {Page, expect} from "@playwright/test";


export class Form {

    readonly page: Page

    constructor(page: Page){
        this.page= page
    }

async CompletingForm(nombre: string, apellido: string, nrodoc: string,pais: string,
        tipodoc: string, cell: string, correo: string, correo2: string , gender:string){
        await this.page.locator('#item_NombrePax_1').fill(nombre);
        await this.page.locator('#item_ApellidoPax_1').fill(apellido);
        await this.page.getByLabel('Select').first().click();
        await this.page.locator('input[type="search"]').fill(pais);
        await this.page.locator('input[type="search"]').press('Enter');
        await this.page.getByLabel('Identification document').click();
        await this.page.locator('input[type="search"]').click();
        await this.page.locator('input[type="search"]').fill(tipodoc);
        await this.page.locator('input[type="search"]').press('Enter');
        await this.page.locator('#item_NroDocumentoPax_1').fill(nrodoc);
        await this.page.locator('#item_NacimientoPax_1').click();
        await this.page.getByRole('cell', { name: '«' }).click();
        await this.page.getByText('2001').click();
        await this.page.getByText('Jun').click();
        await this.page.getByRole('cell', { name: '21' }).click();
        await this.page.getByPlaceholder('345 678').fill(cell);
        await this.page.locator('#item_EmailPax_1').fill(correo);
        await this.page.locator('#item_EmailPax_Confirm_1').fill(correo2);
        // await this.page.locator('label').filter({ hasText: gender }).first().click();
        
        await this.page.getByRole('button', { name: 'CONTINUE ' }).click(); 
        // await this.page.locator('label').filter({ hasText: 'Male' }).first().click();

    }

    async verifyErrorMessage(tipoError: string) {
        let errorLocator;

        switch(tipoError) {
            case 'nombre':
                errorLocator = this.page.locator('#item_NombrePax_1-error');
                break;
            case 'apellido':
                errorLocator = this.page.locator('#item_ApellidoPax_1-error');
                break;
            case 'nrodoc':
                errorLocator = this.page.locator('#item_NroDocumentoPax_1-error');
                break;
            case 'nacimiento':
                errorLocator = this.page.locator('#item_NacimientoPax_1-error');
                break;
            case 'correo':
                errorLocator = this.page.locator('#item_EmailPax_1-error');
                break;
            case 'correoConfirm':
                errorLocator = this.page.locator('#item_EmailPax_Confirm_1-error');
                break;
            default:
                throw new Error(`Tipo de error desconocido: ${tipoError}`);
        }

        await expect(errorLocator).toBeVisible();
    }
}