import { fileUpload } from "../../helpers/fileUpload";

describe('Pruebas en fileUpload', () => {

    test('Debe de cargar un archivo y retornar un url', async() => {

       const resp = await fetch('https://www.onlineprinters.es/blog/wp-content/uploads/2019/08/image-to-pdf.jpg');

       const blob = await resp.blob();

       const  file = new File([blob], 'foto.jpg');
       const url = await fileUpload( file );

       expect( typeof url ).toBe('string');
    })
    
    test('Debe de retorn un error', async() => {
 
        const  file = new File([], 'foto.jpg');
        const url = await fileUpload( file );
 
        expect(  url ).toBe(null);
       
     })


})
