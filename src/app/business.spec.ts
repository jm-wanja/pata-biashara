import { Business } from './business';

describe('Business model', () => {
    it('should create the Business class', () => {
        expect(new Business()).toBeTruthy();
    });

    it('should store the business data in an object', () => {
        let business = new Business();
        business = {
            id: 20,
            title: 'And Sons',
            type: 'Hardware',
            email: 'andsons@gmail.com'
        };
        expect(business.id).toBe(20);
        expect(business.title).toBe('And Sons');
        expect(business.type).toBe('Hardware');
        expect(business.email).toBe('andsons@gmail.com');
    });
});
