const Sample = require('../index');

describe("Sample Class", () => {
    describe('Constructor', () => {
        test('Should construct class with defualt values', () => {
            const mockSample = new Sample();
            expect(mockSample.getArray()).toEqual([]);
            expect(mockSample.getNumber()).toBe(0);
            expect(mockSample.getObject()).toEqual({})
            expect(mockSample.getText()).toBe("");
        });

        test('Should initialize with assigned values', () => {
            const mockSample = new Sample(['door', 'chair', 'banana'], 100, { "some": "object" }, "Hello World!");
            expect(mockSample.getArray()).toEqual(['door', 'chair', 'banana']);
            expect(mockSample.getNumber()).toBe(100);
            expect(mockSample.getObject()).toEqual({ "some": "object" });
            expect(mockSample.getText()).toBe("Hello World!");
        });
    });

    describe('Setters and Getters', () => {
        let mockSample;
        beforeEach(() => {
            mockSample = new Sample();
        });

        afterEach(() => {
            mockSample = null;
        });

        test('setArray & getArray', () => {
            mockSample.setArray(['hello', 'world', '!']);
            expect(mockSample.getArray()).toEqual(['hello', 'world', '!']);

            mockSample.setArray();
            expect(mockSample.getArray()).toEqual([]);
        });

        test('setNumber & getNumber', () => {
            mockSample.setNumber(12);
            expect(mockSample.getNumber()).toBe(12);

            mockSample.setNumber();
            expect(mockSample.getNumber()).toBe(0);
        });

        test('setObject & getObject', () => {
            mockSample.setObject({ 'some': 'object' });
            expect(mockSample.getObject()).toEqual({ 'some': 'object' });

            mockSample.setObject();
            expect(mockSample.getObject()).toEqual({});
        });

        test('setText & getText', () => {
            mockSample.setText('Hello World!');
            expect(mockSample.getText()).toBe('Hello World!');

            mockSample.setText();
            expect(mockSample.getText()).toBe('');
        });

        test('setSample', () => {
            mockSample.setSample(['door', 'chair', 'banana'], 100, { "some": "object" }, "Hello World!");
            expect(mockSample.getArray()).toEqual(['door', 'chair', 'banana']);
            expect(mockSample.getNumber()).toBe(100);
            expect(mockSample.getObject()).toEqual({ "some": "object" });
            expect(mockSample.getText()).toBe("Hello World!");

            mockSample.setSample();
            expect(mockSample.getArray()).toEqual([]);
            expect(mockSample.getNumber()).toBe(0);
            expect(mockSample.getObject()).toEqual({});
            expect(mockSample.getText()).toBe("");

        });
    });
})