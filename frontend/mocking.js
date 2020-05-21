// function Issue(title, description, type, status, priority) {
//   this.title = title;
//   this.description = description;
//   this.type = type;
//   this.status = status;
//   this.priority = priority;
// }

// Issue.prototype.getStatus = function () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(this.status), 1);
//   });
// };

// describe("Issue", () => {
//   it("should return its status", async () => {
//     let issue = new Issue("abc", "description", "backlog", "done", "high");
//     // try to mock the getStatus to get the result right away
//     issue.getStatus = jest.fn().mockResolvedValue("InProgress");
//     const currentStatus = await issue.getStatus();
//     expect(currentStatus).toBe("InProgress");
//   });
// });
