import App from '../../src/App';
import { mount } from 'cypress/react18'
import 'cypress-react-selector'


describe('component tests', () => {
  beforeEach(() => {
    // cy.visit('http://localhost:3000/myApp');
    mount(<App />);
    cy.waitForReact(1000, '#root');
// 1000 is the timeout in milliseconds, you can provide as per AUT
  });
  // it('has what you would expect from default create react app', () => {
  //   mount(<App />);
  // })
  it('App has a single <Comp> Component', () => {

    cy.react('TestComponent').should('have.length', 1 )
  })
})
