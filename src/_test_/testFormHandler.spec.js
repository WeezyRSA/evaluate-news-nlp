import { postArticle } from '../client/js/formHandler'
describe("Testing the formHandler functionality", () => {
    test("Testing the postArticle() function", () => {
        return postArticle('http://localhost:8081/meanapi', {url: 'https://ewn.co.za/2021/01/12/wc-still-in-the-peak-of-covid-19-provincial-health-dept'}).then(data => {
          expect(data.confidence).toBe('100');
        });
      });
});