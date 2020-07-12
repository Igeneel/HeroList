import mocha from "mocha";
import assert from "assert";
import {capitalize} from "../strings.js";

const {describe, it} = mocha;

describe("capitalize() test", function () {
    it("changes first letter to uppercase", function () {
        // given
        const input = "alistar";

        // when
        const result = capitalize(input);

        // then
        assert.equal(result, "Alistar");
    });

    it("changes remaining letters to lowercase", function () {
        // given
        const input = "AlIsTaR";

        // when
        const result = capitalize(input);

        // then
        assert.equal(result, "Alistar");
    });

    it("ignores empty string", function () {
        // when
        const result = capitalize("");

        // then
        assert.equal(result, "");
    });
});
