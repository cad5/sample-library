/**
 * @class Sample
 * @description This class is just a sample of a library this could be a functiono object or whatever the developer wants
 */
class Sample {
    /**
     *Creates an instance of Sample.
     * @memberof Sample
     * @param {Array} [sampleArray=[]] Sets array or defaults to empty array
     * @param {number} [sampleNumber=0] sets number or defaults to zero
     * @param {object} [sampleObject={}] sets object or defaults to empty object
     * @param {string} [sampleText=""] sets text or defaults to empty string
     */
    constructor(
        sampleArray = [],
        sampleNumber = 0,
        sampleObject = {},
        sampleText = ""
    ) {
        this.sampleArray = sampleArray;
        this.sampleNumber = sampleNumber;
        this.sampleObject = sampleObject;
        this.sampleText = sampleText;
    }

    /**
     * @memberof Sample
     * @param {Array} [arrayValue=[]] Sets array or defaults to empty array
     */
    setArray(arrayValue = []) {
        this.sampleArray = arrayValue;
    }


    /**
     * @memberof Sample
     * @param {number} [numberValue=0] Sets number or defaults to zero
     */
    setNumber(numberValue = 0) {
        this.sampleNumber = numberValue;
    }

    /**
     * @memberof Sample
     * @param {object} [objectValue={}] Sets object or defaults to empty object
     */
    setObject(objectValue = {}) {
        this.sampleObject = objectValue;
    }


    /**
     * @memberof Sample
     * @param {string} [textValue=""] Sets text value or defaults to empty string
     */
    setText(textValue = "") {
        this.sampleText = textValue;
    }

    /**
     * @memberof Sample
     * @param {array} [arrayValue=[]] sets array or defaults to empty array
     * @param {number} [numberValue=0] sets number or defaults to zero
     * @param {onject} [objectValue={}] sets object or defaults to empty object
     * @param {string} [textValue=""] sets string or defaults to empty string
     */
    setSample(arrayValue = [], numberValue = 0, objectValue = {}, textValue = "") {
        this.sampleArray = arrayValue;
        this.sampleNumber = numberValue;
        this.sampleObject = objectValue;
        this.sampleText = textValue;
    }

    /**
     * @memberof Sample
     * @returns {Array} returns array stored
     */
    getArray() {
        return this.sampleArray;
    }

    /**
     * @memberof Sample
     * @returns {number} return number stored
     */
    getNumber() {
        return this.sampleNumber;
    }

    /**
     * @memberof Sample
     * @returns {object} return object stored
     */
    getObject() {
        return this.sampleObject;
    }

    /**
     * @memberof Sample
     * @returns {string} return object stored
     */
    getText() {
        return this.sampleText;
    }
}

module.exports = Sample;