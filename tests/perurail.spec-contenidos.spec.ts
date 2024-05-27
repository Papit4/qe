import { test, expect } from '@playwright/test';

import {NavigationPage} from '../PageObjects/NavigationPage'
import {Form} from '../PageObjects/Form'

test.beforeEach(async ({ page }) => {
  // Navegar a la página principal de PeruRail
  await page.goto('https://www.perurail.com/');




  // Esperar un poco para asegurarse de que todo el contenido y las cookies se carguen
});


test('Validar contenidos del equipaje Hand Luggage', async ({page}) =>{
    await page.getByRole('link', { name: 'SEE LUGGAGE POLICIES' }).click();
    const contenido = await page.locator('#hand-luggage-tab').innerText();

    // Definir el texto esperado y limpiarlo
  
    
  // Limpiar el contenido recibido
    const contenidoLimpio = contenido.replace(/\s+/g, ' ').trim();
    
    const a= "You may carry one hand luggage that meets the following features: Type: Bag or backpackQuantity: 1 per personWeight: Maximum 08kg / 17.64lbMaximum size: 62 in / 157 cm (height + length + width)"
    console.log(contenidoLimpio);
    // Realizar la aserción
    expect(contenidoLimpio).toContain(a);

});

test('Validar contenidos del equipaje Hold lugagge', async ({page}) =>{
  await page.getByRole('link', { name: 'SEE LUGGAGE POLICIES' }).click();
  await page.getByRole('tab', { name: 'Hold Luggage' }).click();

  const contenido = await page.locator('#hold-luggage-tab').innerText();

 
  // Limpiar el contenido recibido
  const contenidoLimpio = contenido.replace(/\s+/g, ' ').trim();
  
  const a= "Our train services have a luggage coach, which allows you to take the following: Type: Carry-on or suitcase Quantity: Up to 2 per person Weight: A total of 23 kg / 50.6 lb Maximum size: Your choice within the weight limit indicated"
  console.log(contenidoLimpio);
  // Realizar la aserción
  expect(contenidoLimpio).toContain(a);

});


test('Validar contenidos del equipaje payment methods', async ({page}) =>{
  await page.getByRole('link', { name: 'SEE LOCATIONS' }).click();

  const contenido = await page.locator('[data-id="5af7f4e5"]').innerText();

  // Definir el texto esperado y limpiarlo

  // Limpiar el contenido recibido
  const contenidoLimpio = contenido.replace(/\s+/g, ' ').trim();
  
  const a= "Website: You can purchase online with credit or debit card using Visa, MasterCard, Diners Club and American Express. Also bank transfers via Safetypay, Cuotéalo BCP and Paypal payments are accepted. Stores & Ticket Offices: Train tickets can be purchased with Visa, Mastercard, Diners Club, and American Express credit and/or debit cards, as well as with cash* up to USD 500 or S/ 2,000. *Cash payment is not accepted only at Lima sales points (Larcomar Shopping Center and Jorge Chávez International Airport). ATM: For your convenience ATM machines are located at all our major train stations. Traveller’s checks are not accepted. Note: You can purchase securely with credit or debit cards using Visa, MasterCard, Diners and American Express. Also, bank transfers via Safetypay and Paypal payments. You may contact our call center +511 -6254848 for assistance or by mail to reservas@perurail.com."
  console.log(contenidoLimpio);
  // Realizar la aserción
  expect(contenidoLimpio).toContain(a);

});

test('Validar contenidos del interest health', async ({page}) =>{
  await page.getByRole('link', { name: 'I WANT MORE DETAILS' }).click();

  const contenido = await page.locator('#health-tab').innerText();

  // Definir el texto esperado y limpiarlo

  // Limpiar el contenido recibido
  const contenidoLimpio = contenido.replace(/\s+/g, ' ').trim();
  
  const a= "Health recommendationsCusco, Puno, and Arequipa are cities that lie above some 3000 masl (9800 ft) above sea level. It is possible that you may feel dizzy or have other mild physical complaints, which are usually related to altitude sickness or soroche. To prevent feeling ill, we recommend:Rest and take things slowly during the first days of your journeyBegin your visit with a city tour to get accustomed to the altitudeDrink coca tea or take altitude sickness tablets, both are excellent remediesRemain well hydratedEat light meals since digestion is slower at high altitudes"
  console.log(contenidoLimpio);
  // Realizar la aserción
  expect(contenidoLimpio).toContain(a);

});

test('Validar contenidos del interest transportation', async ({page}) =>{
  await page.getByRole('link', { name: 'I WANT MORE DETAILS' }).click();

  await page.getByRole('tab', { name: 'Transportation' }).click();

  const contenido = await page.locator('#transportation-tab').innerText();

  // Definir el texto esperado y limpiarlo

  // Limpiar el contenido recibido
  const contenidoLimpio = contenido.replace(/\s+/g, ' ').trim();
  
  const a= "Getting around the city In Cusco, there is an abundant offer of taxis available at any time of the day. Taking the Plaza de Armas (Main Square) as your starting point, the cost of a ride can vary between S/ 3 and S/10, the latter to get to the Velasco Astete International Airport. For more information on transportation in other cities, we recommend you consult reference prices at the Iperú offices before negotiating the fare with taxi drivers. CUSCO IPERÚ Cusco Plaza de Armas Address: Portal Harinas 177 (Traveler Point of the BCP) – Plaza de Armas Phone: (084) 596159 / 979980236 Email: iperucusco@promperu.gob.pe IPERÚ Machu Picchu Address: Av. Pachacútec block 1 s/n, Of. 4 (DDC Building) Phone: (084) 211104 / 980328761 Email: iperumachupicchu@promperu.gob.pe PUNO IPERÚ Puno Plaza de Armas. Address: Esquina de Jr. Deustua con Jr. Lima – Plaza de Armas Phone: (051) 365088 / 951973682 Email: iperupuno@promperu.gob.pe IPERÚ Puno Airport Address: Inca Manco Capac Airport – Juliaca (arrivals hall) Phone: (051) 639549 / 979981247 Email: iperupunoapto@promperu.gob.pe AREQUIPA IPERÚ Arequipa Plaza de Armas Address: Portal de la Municipalidad 110 – Plaza de Armas Phone: (054) 223265 Email: iperuarequipa@promperu.gob.pe IPERÚ Arequipa International Airport Address: Alfredo Rodríguez Ballón International Airport Telephone: (054) 299191 Email: iperuarequipaapto@promperu.gob.pe"
  console.log(contenidoLimpio);
  // Realizar la aserción
  expect(contenidoLimpio).toContain(a);

});

test('Validar contenidos del interest safety', async ({page}) =>{
  await page.getByRole('link', { name: 'I WANT MORE DETAILS' }).click();

  await page.getByRole('tab', { name: 'Safety' }).click();

  const contenido = await page.locator('#safety-tab').innerText();

  // Definir el texto esperado y limpiarlo

  // Limpiar el contenido recibido
  const contenidoLimpio = contenido.replace(/\s+/g, ' ').trim();
  
  const a= "We are concerned for your safety At PeruRail we consider the security of our passengers to be the most important issue in our operations. We ask you to obey the law and not risk your life with reckless actions near the railway line. Thinking of your comfort, the following tips may also help during your visit: Always take care of your personal belongings To move around, use taxis with visible license plates and that clearly identify the service company Do not open emergency windows under normal circumstances Do not lean out of the windows Do not cross between coaches Smoking on board is s forbidden Blocking doors and corridors is forbidden"
  console.log(contenidoLimpio);
  // Realizar la aserción
  expect(contenidoLimpio).toContain(a);

});

test('Validar contenidos del interest currency', async ({page}) =>{
  await page.getByRole('link', { name: 'I WANT MORE DETAILS' }).click();

  await page.getByRole('tab', { name: 'Currency' }).click();

  const contenido = await page.locator('#currency-tab').innerText();

  // Definir el texto esperado y limpiarlo

  // Limpiar el contenido recibido
  const contenidoLimpio = contenido.replace(/\s+/g, ' ').trim();
  
  const a = "We are concerned for your safety Peru’s currency is the Sol (S/). Banks and money Exchange offices are open Monday to Friday from 9 am to 6 pm and on Saturdays until noon. There are ATM machines in the main cities in the country and most are connected to Visa, Mastercard, American Express and Diners Club. You may withdraw money in Soles and in US Dollars. Some establishments also accept US Dollars and Euros as payment. Bills that are worn or in bad condition are not accepted."
  console.log(contenidoLimpio);
  // Realizar la aserción
  expect(contenidoLimpio).toContain(a);

});

test('Validar contenidos del interest plug-ins', async ({page}) =>{
  await page.getByRole('link', { name: 'I WANT MORE DETAILS' }).click();

  await page.getByRole('tab', { name: 'Plug-in points' }).click();

  const contenido = await page.locator('#plug-in-points-tab').innerText();

  // Definir el texto esperado y limpiarlo

  // Limpiar el contenido recibido
  const contenidoLimpio = contenido.replace(/\s+/g, ' ').trim();
  
  const a =  "Type of power outlet Voltage in Peru is 220v. You will need an adaptor if the voltage in your country is 110v. The most common outlets are Types A, B and C."

  console.log(contenidoLimpio);
  // Realizar la aserción
  expect(contenidoLimpio).toContain(a);

});
