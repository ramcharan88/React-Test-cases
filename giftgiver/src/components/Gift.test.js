import React from 'react';
import { shallow} from 'enzyme';
import Gift from './Gift';


describe('Gift', () =>{

    const mockRemove = jest.fn();
    const id = 1;
    const props = {gift: {id}, removegift:mockRemove}
    const gift = shallow(<Gift {...props} />);
    

    it('render properly', () =>{
        expect(gift).toMatchSnapshot();
    });

    it('initalizes a person and present in `state`', () => {
        expect(gift.state()).toEqual({person:'', present:''})
    });

    describe('when typing into the person input', ()=>{
        const person = 'unlce'
       beforeEach(() => {
          gift.find('.input-person').simulate('change', {target: {value :person}})
       })

       it('updates the person in `state`', () => {
           expect(gift.state().person).toEqual(person);
       })
    })

    describe('when typing into the present input', ()=>{
        const present = 'golf clubs';

        beforeEach(() => {
            gift.find('.input-present').simulate('change', {target: {value : present}})

        });

        it('update the present in `state`', () => {
           expect(gift.state().present).toEqual(present);
        })
    });

    describe('when clicking the `Remove Gift` button', () => {
        beforeEach(() => {
            gift.find('.btn-remove').simulate('click');
        });

        it('calls the removegift callback', () => {
          expect(mockRemove).toHaveBeenCalledWith(id); 
        })
    })
});

