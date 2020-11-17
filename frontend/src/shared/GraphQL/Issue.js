import gql from "graphql-tag";
import { COMMENT_FRAGMENT } from "./Comment";
import { FILE_FRAGMENT } from "./File";

const ISSUE_FRAGMENT = gql`
  fragment issueFragment on Issue {
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
    attachments {
      ...fileFragment
    }
    dueDate
  }
  ${FILE_FRAGMENT}
`;

export const SINGLE_ISSUE_QUERY = gql`
  query SINGLE_ISSUE_QUERY($id: ID!) {
    issue(id: $id) {
      ...issueFragment
      comments {
        ...commentFragment
      }
    }
  }

  ${ISSUE_FRAGMENT}
  ${COMMENT_FRAGMENT}
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
      ...issueFragment
      comments {
        ...commentFragment
      }
    }
  }
  ${ISSUE_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

export const PROJECT_ISSUES_QUERY = gql`
  query PROJECT_ISSUES_QUERY($projectId: ID!, $filter: IssueWhereInput) {
    issues(projectId: $projectId, filter: $filter) {
      ...issueFragment
      comments {
        ...commentFragment
      }
    }
  }
  ${ISSUE_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

export const CREATE_ISSUE_MUTATION = gql`
  mutation CREATE_ISSUE_MUTATION(
    $title: String!
    $description: String!
    $type: IssueType!
    $status: IssueStatus!
    $priority: IssuePriority!
    $project: ID!
    $assignee: ID
  ) {
    createIssue(
      title: $title
      description: $description
      type: $type
      status: $status
      priority: $priority
      project: $project
      assignee: $assignee
    ) {
      ...issueFragment
      comments {
        ...commentFragment
      }
    }
  }
  ${ISSUE_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

export const LOG_ISSUE_QUERY = gql`
  query LOG_ISSUE_QUERY($issueId: ID!) {
    logsOnIssue(issueId: $issueId) {
      id
      type
      created
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
