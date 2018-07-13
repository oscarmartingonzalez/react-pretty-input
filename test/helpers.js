
import chai, { expect } from 'chai';
const asserttype = require('chai-asserttype');
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

chai.use(asserttype);
configure({ adapter: new Adapter() });

global.RUNENV = 'TDD';
global.expect = expect;
global.mount = mount;
global.render = render;
global.shallow = shallow;
global.sinon = sinon;
