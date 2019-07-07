import {TechnoResolver} from "../../src/Query/schema/model/TechnoType";

describe('TechnoType', function () {
    it('should techno resolver get all technos', async function () {
        const result: Array<any> = await  TechnoResolver(null, {});
        expect(result.length).toBeGreaterThan(1);
    });

    it('should techno resolver one techno', async function () {
        const result: Array<any> = await TechnoResolver(null, {id: 1});
        expect(result.length).toBe(1);
    });
});