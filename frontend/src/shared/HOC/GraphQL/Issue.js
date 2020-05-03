import gql from "graphql-tag";

export const SINGLE_ISSUE_QUERY = gql`
  query SINGLE_ISSUE_QUERY($id: ID!) {
    issue(id: $id) {
      id
      title
      description
      type
      status
      priority
      assignee {
        id
        name
        avatar
      }
      reporter {
        id
        name
        avatar
      }
      project {
        id
        name
      }
      estimate
      timeSpent
      timeRemaining
      listPosition
      createdAt
      updatedAt
      comments {
        id
        text
        owner {
          name
          avatar
        }
        issue {
          id
        }
        createdAt
        updatedAt
      }
    }
  }
`;

export const UPDATE_ISSUE_MUTATION = gql`
  mutation UPDATE_ISSUE_MUTATION(
    $id: ID!
    $title: String!
    $description: String!
    $type: IssueType!
    $status: IssueStatus!
    $priority: IssuePriority!
    $assignee: ID
    $estimate: Int
    $timeSpent: Int
    $listPosition: Float
    $actionType: String
  ) {
    updateIssue(
      id: $id
      title: $title
      description: $description
      type: $type
      status: $status
      priority: $priority
      assignee: $assignee
      estimate: $estimate
      timeSpent: $timeSpent
      listPosition: $listPosition
      actionType: $actionType
    ) {
      id
      title
      description
      type
      status
      priority
      assignee {
        id
        name
        avatar
      }
      reporter {
        id
        name
        avatar
      }
      project {
        id
        name
      }
      estimate
      timeSpent
      timeRemaining
      listPosition
      createdAt
      updatedAt
      comments {
        id
        text
        owner {
          name
        }
        issue {
          id
        }
        createdAt
        updatedAt
      }
    }
  }
`;

export const PROJECT_ISSUES_QUERY = gql`
  query PROJECT_ISSUES_QUERY($projectId: ID!, $filter: IssueWhereInput) {
    issues(projectId: $projectId, filter: $filter) {
      id
      title
      description
      type
      status
      priority
      assignee {
        id
        name
        avatar
      }
      reporter {
        id
        name
        avatar
      }
      project {
        id
        name
      }
      estimate
      timeSpent
      timeRemaining
      listPosition
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_ISSUE_MUTATION = gql`
  mutation CREATE_ISSUE_MUTATION(
    $type: IssueType!
    $title: String!
    $description: String!
    $status: IssueStatus!
    $priority: IssuePriority!
    $project: ID!
  ) {
    createIssue(
      type: $type
      title: $title
      description: $description
      status: $status
      priority: $priority
      project: $project
    ) {
      id
      title
      description
      type
      status
      priority
      assignee {
        id
        name
        avatar
      }
      reporter {
        id
        name
        avatar
      }
      project {
        id
        name
      }
      estimate
      timeSpent
      timeRemaining
      listPosition
      createdAt
      updatedAt
    }
  }
`;

export const LOG_ISSUE_QUERY = gql`
  query LOG_ISSUE_QUERY($issueId: ID!) {
    logsOnIssue(issueId: $issueId) {
      id
      logType
      logDate
      user {
        id
        name
        avatar
      }
      prevAssignee {
        id
        name
        avatar
      }
      newAssignee {
        id
        name
        avatar
      }
      previousValue
      newValue
    }
  }
`;
