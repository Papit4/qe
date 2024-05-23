import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Navegar a la página principal de PeruRail
  await page.goto('https://www.perurail.com/');




  // Esperar un poco para asegurarse de que todo el contenido y las cookies se carguen
});


test.skip('Validar contenidos del equipaje Hand Luggage', async ({page}) =>{
    await page.getByRole('link', { name: 'SEE LUGGAGE POLICIES' }).click();
    const contenido = await page.locator('#hand-luggage-tab').innerText();

    // Definir el texto esperado y limpiarlo
    const textoEsperado = `
      You may carry one hand luggage that meets the following features:
      Type: Bag or backpack
  Quantity: 1 per person
    Weight: Maximum 08kg / 17.64lb
    Maximum size: 62 in / 157 cm (height + length + width)
    `.replace(/\s+/g, ' ').trim();
    
    // Limpiar el contenido recibido
    const contenidoLimpio = contenido.replace(/\s+/g, ' ').trim();
    
    const a= "You may carry one hand luggage that meets the following features: Type: Bag or backpackQuantity: 1 per personWeight: Maximum 08kg / 17.64lbMaximum size: 62 in / 157 cm (height + length + width)"
    console.log(contenidoLimpio);
    // Realizar la aserción
    expect(contenidoLimpio).toContain(a);

});

test.skip('Validar contenidos del equipaje Hold lugagge', async ({page}) =>{
  await page.getByRole('link', { name: 'SEE LUGGAGE POLICIES' }).click();
  await page.getByRole('tab', { name: 'Hold Luggage' }).click();

  const contenido = await page.locator('#hold-luggage-tab').innerText();

  // Definir el texto esperado y limpiarlo
  const textoEsperado = `
    You may carry one hand luggage that meets the following features:
    Type: Bag or backpack
Quantity: 1 per person
  Weight: Maximum 08kg / 17.64lb
  Maximum size: 62 in / 157 cm (height + length + width)
  `.replace(/\s+/g, ' ').trim();
  
  // Limpiar el contenido recibido
  const contenidoLimpio = contenido.replace(/\s+/g, ' ').trim();
  
  const a= "Our train services have a luggage coach, which allows you to take the following: Type: Carry-on or suitcase Quantity: Up to 2 per person Weight: A total of 23 kg / 50.6 lb Maximum size: Your choice within the weight limit indicated"
  console.log(contenidoLimpio);
  // Realizar la aserción
  expect(contenidoLimpio).toContain(a);

});




test('Compra Normal', async ({ page }) => {
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.elementor-button').first().click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: '-' }).first().click();
  await page1.getByRole('button', {name: 'SEARCH'}).click()
  await page1.waitForTimeout(5000)
  await page1.locator('#servicio_ida').getByRole('cell', { name: 'PeruRail Expedition 33 ' }).click();
  await page1.getByRole('cell', { name: 'PeruRail Vistadome Observatory 603 ' }).click();
  await page1.getByRole('cell', { name: 'Belmond Hiram Bingham 12 W ' }).click();
  await page1.getByRole('cell', { name: 'PeruRail Vistadome 84 ' }).click();
  await page1.getByRole('button', { name: 'CONTINUE ' }).click();
  await page1.locator('#item_NombrePax_1').click();
  await page1.locator('#item_NombrePax_1').fill('ivan');
  await page1.locator('#item_NombrePax_1').press('Tab');
  await page1.locator('#item_ApellidoPax_1').fill('castro');
  await page1.locator('#item_ApellidoPax_1').press('Tab');
  await page1.getByLabel('Select').first().click();
  await page1.locator('input[type="search"]').click();
  await page1.locator('input[type="search"]').fill('usa');
  await page1.getByRole('treeitem', { name: 'UNITED STATES OF A.| USA' }).click();
  await page1.getByLabel('Identification document').click();
  await page1.getByRole('treeitem', { name: 'Passport' }).click();
  await page1.locator('#item_NroDocumentoPax_1').click();
  await page1.locator('#item_NroDocumentoPax_1').fill('1234567789');
  await page1.locator('#item_NacimientoPax_1').click();
  await page1.getByRole('cell', { name: '«' }).click();
  await page1.getByText('2001').click();
  await page1.getByText('Jun').click();
  await page1.getByRole('cell', { name: '21' }).click();
  await page1.getByPlaceholder('345 678').click();
  await page1.getByPlaceholder('345 678').fill('51902901382');
  await page1.getByPlaceholder('345 678').press('Tab');
  await page1.locator('#item_EmailPax_1').fill('prueba@gmail.com');
  await page1.locator('#item_EmailPax_1').press('Alt+@');
  await page1.locator('#item_EmailPax_Confirm_1').click();
  await page1.locator('#item_EmailPax_Confirm_1').fill('prueba@gmail.com');
  await page1.locator('#DatosComunicacion_1 > div:nth-child(4) > .form-group > .mt-checkbox > span').click();
  await page1.getByRole('button', { name: 'CONTINUE ' }).click(); 
  //await page.locator('div').filter({ hasText: '2 SUMMARY OF YOUR PURCHASE' }).nth(3).click();
});


test('Compra Normal sin pais', async ({ page }) => {
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.elementor-button').first().click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: '-' }).first().click();
  await page1.getByRole('button', {name: 'SEARCH'}).click()
  await page1.waitForTimeout(5000)
  await page1.locator('#servicio_ida').getByRole('cell', { name: 'PeruRail Expedition 33 ' }).click();
  await page1.getByRole('cell', { name: 'PeruRail Vistadome Observatory 603 ' }).click();
  await page1.getByRole('cell', { name: 'Belmond Hiram Bingham 12 W ' }).click();
  await page1.getByRole('cell', { name: 'PeruRail Vistadome 84 ' }).click();
  await page1.getByRole('button', { name: 'CONTINUE ' }).click();
  await page1.locator('#item_NombrePax_1').click();
  await page1.locator('#item_NombrePax_1').fill('ivan');
  await page1.locator('#item_NombrePax_1').press('Tab');
  await page1.locator('#item_ApellidoPax_1').fill('castro');
  await page1.locator('#item_ApellidoPax_1').press('Tab');
  await page1.getByLabel('Select').nth(1).click();
  await page1.getByRole('treeitem', { name: 'Passport' }).click();
  await page1.locator('#item_NroDocumentoPax_1').click();
  await page1.locator('#item_NroDocumentoPax_1').fill('1234567789');
  await page1.locator('#item_NacimientoPax_1').click();
  await page1.getByRole('cell', { name: '«' }).click();
  await page1.getByText('2001').click();
  await page1.getByText('Jun').click();
  await page1.getByRole('cell', { name: '21' }).click();
  await page1.getByPlaceholder('345 678').click();
  await page1.getByPlaceholder('345 678').fill('51902901382');
  await page1.getByPlaceholder('345 678').press('Tab');
  await page1.locator('#item_EmailPax_1').fill('prueba@gmail.com');
  await page1.locator('#item_EmailPax_1').press('Alt+@');
  await page1.locator('#item_EmailPax_Confirm_1').click();
  await page1.locator('#item_EmailPax_Confirm_1').fill('prueba@gmail.com');
  await page1.locator('#DatosComunicacion_1 > div:nth-child(4) > .form-group > .mt-checkbox > span').click();
  await page1.getByRole('button', { name: 'CONTINUE ' }).click(); 
  const errorLocator = await page1.locator('#item_NacionalidadPax_1-error');
  await expect(errorLocator).toBeVisible();

});

test('Compra Normal sin nombre y apellido', async ({ page }) => {
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.elementor-button').first().click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: '-' }).first().click();
  await page1.getByRole('button', {name: 'SEARCH'}).click()
  await page1.locator('#servicio_ida').getByRole('cell', { name: 'PeruRail Expedition 33 ' }).click();
  await page1.getByRole('cell', { name: 'PeruRail Vistadome Observatory 603 ' }).click();
  await page1.getByRole('cell', { name: 'Belmond Hiram Bingham 12 W ' }).click();
  await page1.getByRole('cell', { name: 'PeruRail Vistadome 84 ' }).click();
  await page1.getByRole('button', { name: 'CONTINUE ' }).click();
  await page1.locator('#item_NombrePax_1').click();
  await page1.getByLabel('Select').first().click();
  await page1.locator('input[type="search"]').click();
  await page1.locator('input[type="search"]').fill('usa');
  await page1.getByRole('treeitem', { name: 'UNITED STATES OF A.| USA' }).click();
  await page1.getByLabel('Identification document').click();
  await page1.getByRole('treeitem', { name: 'Passport' }).click();
  await page1.locator('#item_NroDocumentoPax_1').click();
  await page1.locator('#item_NroDocumentoPax_1').fill('1234567789');
  await page1.locator('#item_NacimientoPax_1').click();
  await page1.getByRole('cell', { name: '«' }).click();
  await page1.getByText('2001').click();
  await page1.getByText('Jun').click();
  await page1.getByRole('cell', { name: '21' }).click();
  await page1.getByPlaceholder('345 678').click();
  await page1.getByPlaceholder('345 678').fill('51902901382');
  await page1.getByPlaceholder('345 678').press('Tab');
  await page1.locator('#item_EmailPax_1').fill('prueba@gmail.com');
  await page1.locator('#item_EmailPax_1').press('Alt+@');
  await page1.locator('#item_EmailPax_Confirm_1').click();
  await page1.locator('#item_EmailPax_Confirm_1').fill('prueba@gmail.com');
  await page1.locator('#DatosComunicacion_1 > div:nth-child(4) > .form-group > .mt-checkbox > span').click();
  await page1.getByRole('button', { name: 'CONTINUE ' }).click(); 
  const errorLocator = await page1.locator('#item_NombrePax_1-error');
  await expect(errorLocator).toBeVisible();

});

test('Compra Normal sin num doc', async ({ page }) => {
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.elementor-button').first().click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: '-' }).first().click();
  await page1.getByRole('button', {name: 'SEARCH'}).click()
  await page1.locator('#servicio_ida').getByRole('cell', { name: 'PeruRail Expedition 33 ' }).click();
  await page1.getByRole('cell', { name: 'PeruRail Vistadome Observatory 603 ' }).click();
  await page1.getByRole('cell', { name: 'Belmond Hiram Bingham 12 W ' }).click();
  await page1.getByRole('cell', { name: 'PeruRail Vistadome 84 ' }).click();
  await page1.getByRole('button', { name: 'CONTINUE ' }).click();
  await page1.locator('#item_NombrePax_1').click();
  await page1.locator('#item_NombrePax_1').fill('ivan');
  await page1.locator('#item_NombrePax_1').press('Tab');
  await page1.locator('#item_ApellidoPax_1').fill('castro');
  await page1.locator('#item_ApellidoPax_1').press('Tab');
  await page1.getByLabel('Select').first().click();
  await page1.locator('input[type="search"]').click();
  await page1.locator('input[type="search"]').fill('usa');
  await page1.getByRole('treeitem', { name: 'UNITED STATES OF A.| USA' }).click();
  await page1.locator('#item_NacimientoPax_1').click();
  await page1.getByRole('cell', { name: '«' }).click();
  await page1.getByText('2001').click();
  await page1.getByText('Jun').click();
  await page1.getByRole('cell', { name: '21' }).click();
  await page1.getByPlaceholder('345 678').click();
  await page1.getByPlaceholder('345 678').fill('51902901382');
  await page1.getByPlaceholder('345 678').press('Tab');
  await page1.locator('#item_EmailPax_1').fill('prueba@gmail.com');
  await page1.locator('#item_EmailPax_1').press('Alt+@');
  await page1.locator('#item_EmailPax_Confirm_1').click();
  await page1.locator('#item_EmailPax_Confirm_1').fill('prueba@gmail.com');
  await page1.locator('#DatosComunicacion_1 > div:nth-child(4) > .form-group > .mt-checkbox > span').click();
  await page1.getByRole('button', { name: 'CONTINUE ' }).click(); 
  const errorLocator = await page1.locator('#item_NroDocumentoPax_1-error');
  await expect(errorLocator).toBeVisible();

});


test('Compra por busqueda', async ({page}) =>{

  await page.getByLabel('FromCity of').selectOption('6022');
  await page.getByLabel('ToArequipaMachuPicchuPuno').selectOption('6026');
  await page.locator('#countParentsChildren').click();
  await page.locator('#btnRemoveAdult').click();
  await page.getByRole('link', { name: 'X', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'SEARCH' }).click();
  const page1 = await page1Promise;
  // await page1.getByRole('button', { name: '-' }).first().click();
  // await page1.getByRole('button', {name: 'SEARCH'}).click()
  await page1.locator('#servicio_ida').getByRole('cell', { name: 'PeruRail Expedition 33 ' }).click();
  await page1.getByRole('cell', { name: 'PeruRail Vistadome Observatory 603 ' }).click();
  await page1.getByRole('cell', { name: 'Belmond Hiram Bingham 12 W ' }).click();
  await page1.getByRole('cell', { name: 'PeruRail Vistadome 84 ' }).click();
  await page1.getByRole('button', { name: 'CONTINUE ' }).click();
  await page1.locator('#item_NombrePax_1').click();
  await page1.locator('#item_NombrePax_1').fill('ivan');
  await page1.locator('#item_NombrePax_1').press('Tab');
  await page1.locator('#item_ApellidoPax_1').fill('castro');
  await page1.locator('#item_ApellidoPax_1').press('Tab');
  await page1.getByLabel('Select').first().click();
  await page1.locator('input[type="search"]').click();
  await page1.locator('input[type="search"]').fill('usa');
  await page1.getByRole('treeitem', { name: 'UNITED STATES OF A.| USA' }).click();
  await page1.getByLabel('Identification document').click();
  await page1.getByRole('treeitem', { name: 'Passport' }).click();
  await page1.locator('#item_NroDocumentoPax_1').click();
  await page1.locator('#item_NroDocumentoPax_1').fill('1234567789');
  await page1.locator('#item_NacimientoPax_1').click();
  await page1.getByRole('cell', { name: '«' }).click();
  await page1.getByText('2001').click();
  await page1.getByText('Jun').click();
  await page1.getByRole('cell', { name: '21' }).click();
  await page1.getByPlaceholder('345 678').click();
  await page1.getByPlaceholder('345 678').fill('51902901382');
  await page1.getByPlaceholder('345 678').press('Tab');
  await page1.locator('#item_EmailPax_1').fill('prueba@gmail.com');
  await page1.locator('#item_EmailPax_1').press('Alt+@');
  await page1.locator('#item_EmailPax_Confirm_1').click();
  await page1.locator('#item_EmailPax_Confirm_1').fill('prueba@gmail.com');
  await page1.locator('#DatosComunicacion_1 > div:nth-child(4) > .form-group > .mt-checkbox > span').click();
  await page1.getByRole('button', { name: 'CONTINUE ' }).click(); 
  //await page.locator('div').filter({ hasText: '2 SUMMARY OF YOUR PURCHASE' }).nth(3).click();

})