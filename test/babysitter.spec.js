describe("babysitter", function() {
    it("should return true given valid start times", function() {
        expect(calculateStart(babysitter)).toEqual(true);
    });
    it("should return true given valid end times", function() {
        expect(calculateEnd(babysitter)).toEqual(true);
    });
    it("should return true given valid bed times", function() {
        expect(calculateBed(babysitter)).toEqual(true);
    });
    describe("hours", function() {
        it("should return numerical hours given valid start and bed time", function() {
            expect(startBedCalculation(babysitter)).toEqual(jasmine.any(Number));
        });
        it("should return numerical hours given valid bed time", function() {
            expect(bedtimeMidnightCalculation(babysitter)).toEqual(jasmine.any(Number));
        });
        it("should return 1 hour given bed time of 10 and start time of 11", function() {
            expect(bedtimeMidnightCalculation(babysitter)).toEqual(1);
        });
        it("should return 3 hours given 3am end time", function() {
            expect(midnightToEndCalculation(babysitter)).toEqual(3);
        });
    });
    describe("pay", function () {
      it("should return pay given hours", function () {
        expect(payBabysitter(babysitter)).toEqual(56);
      });
    });
});
