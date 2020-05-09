import React from "react";
import { useRouteMatch } from "react-router-dom";
import { withIssueCreate, withToastCreate } from "shared/HOC";
import { flowRight } from "lodash";

import { Formik } from "formik";
import * as Yup from "yup";

import UserAvatar from "shared/components/Avatar";
import { Button } from "shared/components/Button";
import IssueTypeIcon from "shared/components/IssueTypeIcon";
import IssuePriorityIcon from "shared/components/IssuePriorityIcon";
import {
  FormikSelect,
  FormikInput,
  FormikCKEditor,
} from "shared/components/FormikPrimitiveComponent";

import { IssueType, IssueStatus, IssuePriority } from "shared/constants/issues";

import {
  Heading,
  SelectItemWrapper,
  SelectItemLabel,
  ButtonWrapper,
} from "./styles";

const CreateIssue = ({
  closeModal,
  users,
  createIssueAPI,
  creatingIssue,
  creatingIssueError,
  createToast,
}) => {
  const match = useRouteMatch();
  const userOptions = [{ id: null, name: "Unassigned" }, ...users];

  return (
    <Formik
      initialValues={{
        type: IssueType.TASK,
        title: "",
        description: "",
        assignee: userOptions[0],
        status: IssueStatus.BACKLOG, // default for newly created issue
        priority: IssuePriority.MEDIUM,
        project: match.params.projectId,
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().required(" Title is required!"),
      })}
      onSubmit={async (values, { setErrors }) => {
        let res = await createIssueAPI({
          variables: {
            title: values.title,
            description: values.description,
            type: values.type,
            status: values.status,
            priority: values.priority,
            project: values.project,
            assignee: values.assignee.id,
          },
        }).catch((error) => setErrors(error));

        if (res)
          createToast({
            variables: {
              type: "success",
              message: `Create issue success!`,
            },
          });

        closeModal();
      }}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div className="form-container">
            <Heading>Create Issue</Heading>
            <FormikSelect
              label="Issue Type"
              title={formik.values.type}
              items={Object.values(IssueType)}
              renderMenuOption={renderType}
              onChange={(item) => formik.setFieldValue("type", item)}
            />

            <hr />

            <FormikInput
              label="Title"
              placeholder="Summarise the issue"
              type="text"
              name="title"
              onChange={formik.handleChange}
              focus={true}
            />

            <FormikCKEditor
              label="Description"
              name="description"
              data={formik.values.description}
              onChange={(e, editor) =>
                formik.setFieldValue("description", editor.getData())
              }
            />

            <FormikSelect
              label="Assignee"
              title={formik.values.assignee}
              items={userOptions}
              renderMenuOption={renderAssignee}
              onChange={(user) => {
                formik.setFieldValue("assignee", user);
              }}
            />

            <FormikSelect
              label="Priority"
              title={formik.values.priority}
              items={Object.values(IssuePriority)}
              renderMenuOption={renderPriority}
              onChange={(item) => formik.setFieldValue("priority", item)}
            />

            <ButtonWrapper>
              <Button
                type="submit"
                variant="primary"
                onClick={() => {}}
                isWorking={creatingIssue}
              >
                Submit
              </Button>
              <Button variant="secondary" onClick={closeModal} className="ml-2">
                Cancel
              </Button>
            </ButtonWrapper>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default flowRight(withIssueCreate, withToastCreate)(CreateIssue);

const renderPriority = (priority) => {
  return (
    <SelectItemWrapper>
      <IssuePriorityIcon priority={priority} />
      <SelectItemLabel>{priority}</SelectItemLabel>
    </SelectItemWrapper>
  );
};

const renderType = (type) => {
  return (
    <SelectItemWrapper>
      <IssueTypeIcon type={type} />
      <SelectItemLabel>{type}</SelectItemLabel>
    </SelectItemWrapper>
  );
};

const renderAssignee = (user) => {
  return (
    <SelectItemWrapper>
      <div>
        {user.name !== "Unassigned" ? (
          <UserAvatar
            user={user}
            size={25}
            src={user.avatar}
            className="mr-2"
          />
        ) : null}
      </div>
      <SelectItemLabel>{user.name}</SelectItemLabel>
    </SelectItemWrapper>
  );
};
