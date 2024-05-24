import { test, expect } from '@playwright/test';

import {NavigationPage} from '../PageObjects/NavigationPage'
import {Form} from '../PageObjects/Form'

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

test('Compra normal con pageobject', async ({page})=>{
  const navigate = new NavigationPage(page);
  const newPage = await navigate.SearchTravel();
  
  const form = new Form(newPage);
  await form.CompletingForm("ivan", "castro", "123456", 
  "usa", "Passport", "912345678", "prueba@gmail.com", "prueba@gmail.com", "female");

})

test('compra nomral sin nombre', async({page})=>{
  const navigate = new NavigationPage(page);
  const newPage= await navigate.SearchTravel()
  const form = new Form(newPage)

  await form.CompletingForm("", "castro", "123456", 
  "usa", "Passport", "912345678", "prueba@gmail.com", "prueba@gmail.com", "female");

  await form.verifyErrorMessage("nombre");

})

test('compra nomral sin apellido', async({page})=>{
  const navigate = new NavigationPage(page);
  const newPage= await navigate.SearchTravel()
  const form = new Form(newPage)

  await form.CompletingForm("ivan", "", "123456", 
  "usa", "Passport", "912345678", "prueba@gmail.com", "prueba@gmail.com", "female");

  await form.verifyErrorMessage("apellido");

})

test('compra nomral sin numero de documento', async({page})=>{
  const navigate = new NavigationPage(page);
  const newPage= await navigate.SearchTravel()
  const form = new Form(newPage)

  await form.CompletingForm("ivan", "castro", "", 
  "usa", "Passport", "912345678", "prueba@gmail.com", "prueba@gmail.com", "female");

  await form.verifyErrorMessage("nrodoc");

})

test('compra nomral sin correo', async({page})=>{
  const navigate = new NavigationPage(page);
  const newPage= await navigate.SearchTravel()
  const form = new Form(newPage)

  await form.CompletingForm("ivan", "castro", "123456789", 
  "usa", "Passport", "912345678", "", "prueba@gmail.com", "female");

  await form.verifyErrorMessage("correo");

})

test('compra nomral sin correo de confirmacion', async({page})=>{
  const navigate = new NavigationPage(page);
  const newPage= await navigate.SearchTravel()
  const form = new Form(newPage)

  await form.CompletingForm("ivan", "castro", "123456789", 
  "usa", "Passport", "912345678", "", "prueba@gmail.com", "female");

  await form.verifyErrorMessage("correoConfirm");

})


test('Compra por busqueda', async ({page}) =>{
  const navigate = new NavigationPage(page);
  const newPage= await navigate.CompraporBusqueda()
  const form = new Form(newPage)

  await form.CompletingForm("ivan", "castro", "123456789", 
  "usa", "Passport", "912345678", "prueba@gmail.com", "prueba@gmail.com", "female");
  

})