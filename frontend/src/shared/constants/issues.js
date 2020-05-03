export const IssueType = {
  TASK: "Task",
  BUG: "Bug",
  STORY: "Story"
};

export const IssueStatus = {
  BACKLOG: "Backlog",
  SELECTED: "Selected",
  INPROGRESS: "Inprogress",
  DONE: "Done"
};

export const IssuePriority = {
  HIGHEST: "Highest",
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
  LOWEST: "Lowest"
};

export const IssueTypeDescription = {
  [IssueType.TASK]: "Task",
  [IssueType.BUG]: "Bug",
  [IssueType.STORY]: "Story"
};

export const IssueStatusDescription = {
  [IssueStatus.BACKLOG]: "Backlog",
  [IssueStatus.SELECTED]: "Selected for development",
  [IssueStatus.INPROGRESS]: "In progress",
  [IssueStatus.DONE]: "Done"
};

export const IssuePriorityDescription = {
  [IssuePriority.HIGHEST]: "Highest",
  [IssuePriority.HIGH]: "High",
  [IssuePriority.MEDIUM]: "Medium",
  [IssuePriority.LOW]: "Low",
  [IssuePriority.LOWEST]: "Lowest"
};
