import { toLocalDate, toLocalDateTime, dateDistance } from "./dateUtils";

describe("test date utils", () => {
  it("UTC prisma date can be converted into month/date/year", () => {
    const testDate = toLocalDate("2020-05-09T15:25:16.678Z");
    expect(testDate).toEqual("05/09/2020");
  });

  it("UTC prisma date can be converted into local time month/date/year hh:mm:ss", () => {
    const testDate = toLocalDateTime("2020-05-09T15:25:16.678Z");
    expect(testDate).toEqual("05/09/2020 11:25:16");
  });

  it("ISO date can also be converted into local time month/date/year hh:mm:ss", () => {
    const testDate = toLocalDateTime("Mon Nov 24 2014 01:30:34 GMT-0800 (PST)");
    expect(testDate).toEqual("11/24/2014 04:30:34");
  });
});
