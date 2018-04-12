import twttr from "twitter-text";
import ObjectAssign from "object-assign";

const join = (array, sep) => {
    const notEmpty = (string) => {
        return string.length > 0;
    };
    return array.filter(notEmpty).join(sep);
};