import dateFormat from "dateformat";

export const DATE_TIME_FORMAT = {
    FORMAT_1: 'yyyy-mm-dd',
    FORMAT_2: `yyyy-mm-dd'T'hh:mm:s.sss'Z'`
}

/**
 * This class is used to define DateTime handling methods
 */
class DateTimeUtils {

    /**
     * Get current date time value with corresponding format
     * @param {DATE_TIME_FORMAT} format the expected format of returned
     * @returns current date time string in formatted
     */
    getCurrentDate(format = DATE_TIME_FORMAT.FORMAT_1) {
        const now = new Date();
        return dateFormat(now, format);
    }

    getCurrentUTCDateTime(format = DATE_TIME_FORMAT.FORMAT_1) {
        const now = new Date();
        return dateFormat(now, format, true);
    }
}

export default DateTimeUtils;