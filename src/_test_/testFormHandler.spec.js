import { handleSubmit, getApiKey } from '../client/js/formHandler'
describe("Testing the forHandler functionality", () => {
    test("Testing the getApiKey() function", () => {
        return getApiKey().then(data => {
          expect(JSON.stringify(data)).toBe(JSON.stringify({application_key: '29c9bda876692c2236ef9b4e578fe0d3'}));
        });
      });
});